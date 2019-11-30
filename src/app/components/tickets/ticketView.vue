<style lang="sass" scoped>
.ticket
  display: flex
  height: 100%
.content
  flex-grow: 1
  padding: 20px 40px
  max-width: calc(100vw - 220px)
.ticketTitle
  font-size: 30px
  font-weight: 700
  margin-bottom: 30px
  color: var(--titanium)
input
  font-family: inherit
  font-size: inherit
  font-weight: inherit
  color: inherit
  padding: inherit
  width: 100%
  background: transparent linear-gradient(135deg, rgba(#fff, 0.1) 0%, rgba(#fff, 0.05) 100%)
  box-shadow: 5px 5px 10px -5px var(--pinot-noir)
  border: none
.ticketData
  position: relative
  .mask
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: transparent
    z-index: 2
.editing
  .mask
    display: none
.output
  color: var(--white)
</style>
<style lang="sass">
.cm-s-cobalt.CodeMirror
  opacity: 0
.editing
  .cm-s-cobalt.CodeMirror
    opacity: 1
    background: transparent linear-gradient(135deg, rgba(#fff, 0.1) 0%, rgba(#fff, 0.05) 100%)
    box-shadow: 5px 5px 10px -5px var(--pinot-noir)
</style>

<template lang="pug">
.ticket
  sidebar
  .content
    appHeader()
    .ticketSection(:class="editing ? 'editing' : ''")
      .ticketTitle
        template(v-if="editing")
          input(v-model="ticket.title")
        template(v-else)
          |{{ticket.title}}
      .ticketData
        textarea(ref="ticketData" v-model="ticket.description")
        .mask: .output(v-html="outputTicketData")
</template>

<script>
import sidebar from '~/tickets/ticketBar.vue'
import appHeader from '~/main/header.vue'
import { getTicket, saveTicket } from 'Utils/api/ticket.js'
export default {
  data: () => ({
    ticket: {},
    outputTicketData: ''
  }),
  components: {
    sidebar,
    appHeader
  },
  methods: {
    async loadTicketData () {
      this.ticket = await getTicket(this.ticketUID)
      if (this.editor) this.editor.setValue(this.ticket.description)
      this.outputTicketData = marked(this.ticket.description)
    },
    async saveTicket() {
      await saveTicket(this.ticket)
      this.loadTicketData()
    }
  },
  computed: {
    editing () {
      const { saveTicket, isEditing } = this.$store.state
      if (saveTicket && !isEditing) {
        this.saveTicket()
        this.$store.commit('setFlags', { saveTicket: false })
      } else if (!saveTicket && !isEditing) {
        this.loadTicketData()
      }
      return isEditing
    },
  },
  beforeMount () {
    this.$store.commit('setFlags', { insideTicket: true, isEditing: false })
    this.ticketUID = this.$route.params.ticketid
    this.loadTicketData()
  },
  mounted () {
    this.editor = CodeMirror.fromTextArea(this.$refs.ticketData, {
      mode: {
        name: "gfm",
        tokenTypeOverrides: {
          emoji: "emoji"
        }
      },
      lineNumbers: false,
      theme: "cobalt",
      extraKeys: {"Enter": "newlineAndIndentContinueMarkdownList"}
    })
    this.editor.on('change', (editor) => {
      this.ticket.description = this.editor.getValue()
    })
  }
}
</script>
