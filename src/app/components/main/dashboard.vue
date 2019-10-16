<style lang="sass" scoped>
@import '~/shared/_colors.sass'
.dashboard
  display: flex
  background-color: $titanium
.content
  flex-grow: 1
  padding: 20px 40px
</style>
<template lang="pug">
  .dashboard
    sidebar
    .content
      appheader
      ticketList
</template>
<script>
import sidebar from '~/main/sidebar.vue'
import appheader from '~/main/header.vue'
import ticketList from '~/main/ticketList.vue'
export default {
  components: {
    sidebar,
    appheader,
    ticketList
  }
}
</script>
