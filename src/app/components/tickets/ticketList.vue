<style lang="sass" scoped>
@import '~/shared/_colors.sass'
.tickets
  display: flex
  .content
    flex-grow: 1
    padding: 20px 40px
    max-width: calc(100vw - 300px)
  .ticketsBox
    box-shadow: 0px 0px 5px 0px darken($titanium, 4%)
    border-radius: 3px
    overflow: hidden
</style>

<template lang="pug">
.tickets
  sidebar
  .content
    appHeader
    .ticketsBox
      ticket
</template>

<script>
import sidebar from '~/tickets/sidebar.vue'
import appHeader from '~/main/header.vue'
import ticket from '~/tickets/ticket.vue'
export default {
  data: () => ({}),
  components: {
    sidebar,
    ticket,
    appHeader
  }
}
</script>
