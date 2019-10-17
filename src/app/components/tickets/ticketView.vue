<style lang="sass" scoped>
@import '~/shared/_colors.sass'
.ticket
  display: flex
  .content
    flex-grow: 1
    padding: 20px 40px
    max-width: calc(100vw - 300px)
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
