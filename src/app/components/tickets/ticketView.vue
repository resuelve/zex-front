<style lang="sass" scoped>
.ticket
  display: flex
  .content
    flex-grow: 1
    padding: 20px 40px
    max-width: calc(100vw - 220px)
</style>

<template lang="pug">
.ticket
  sidebar
  .content
    appHeader
    |hola
</template>

<script>
import sidebar from '~/tickets/ticketBar.vue'
import appHeader from '~/main/header.vue'
export default {
  data: () => ({}),
  components: {
    sidebar,
    appHeader
  }
}
</script>
