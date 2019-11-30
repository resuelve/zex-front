<style lang="sass" scoped>
.appHeader
  display: flex
  justify-content: space-between
  align-items: center
  padding: 6px
  margin-bottom: 30px
  color: var(--white)
.sectionTitle
  flex-grow: 1
  font-size: 20px
  font-weight: 700
  display: flex
  align-items: center
.edit
  display: flex
  justify-content: space-between
  align-items: center
.action
  margin: 0 10px
  cursor: pointer
  i
    margin-right: 5px
</style>
<template lang="pug">
  .appHeader
    .sectionTitle
      btn(v-if="!insideTicket" text='Nuevo Ticket' @click="$router.push('/tickets/new')").primary
    .edit(v-if="insideTicket")
      template(v-if="isEditing")
        .action(@click="saveTicket")
          i.icon-pencil
          span Guardar
        .action(@click="startEditing(false)")
          i.icon-pencil
          span Cancelar
      template(v-else)
        .action(@click="startEditing(true)")
          i.icon-pencil
          span Editar
    searchInput(v-if="!insideTicket")
    userMenu
</template>
<script>
import userMenu from '~/main/userMenu.vue'
import searchInput from '~/shared/searchInput.vue'
import btn from '~/shared/btn.vue'
export default {
  components: {
    userMenu,
    searchInput,
    btn
  },
  methods: {
    startEditing (flag) {
      this.$store.commit('setFlags', { isEditing: flag })
    },
    saveTicket () {
      this.$store.commit('setFlags', { isEditing: false, saveTicket: true })
    }
  },
  computed: {
    insideTicket () {
      return this.$store.state.insideTicket
    },
    isEditing () {
      return this.$store.state.isEditing
    }
  }
}
</script>
