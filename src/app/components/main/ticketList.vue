<style lang="sass" scoped>
@import '~/shared/_colors.sass'
.ticketList
  margin-top: 30px
  border-radius: 3px
  overflow: hidden
  box-shadow: 0px 0px 5px 0px darken($titanium, 4%)
  max-width: calc(100vw - 380px)
</style>
<template lang="pug">
.ticketList
  ticket
</template>
<script>
import ticket from '~/main/ticket.vue'
export default {
  data: () => ({
    selected: false
  }),
  computed: {
    userData () {
      return this.$store.state.userData.meta
    }
  },
  components: {
    ticket
  }
}
</script>
