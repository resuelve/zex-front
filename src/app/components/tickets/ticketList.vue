<style lang="sass" scoped>
.tickets
  display: flex
  .content
    flex-grow: 1
    padding: 20px 40px
    max-width: calc(100vw - 220px)
</style>

<template lang="pug">
.tickets
  sidebar
  .content
    appHeader
    .ticketsBox
      ticket
      ticket
      ticket
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
