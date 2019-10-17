<style lang="sass" scoped>
@import '~/shared/_colors.sass'
.ticket
  background-color: $white
  justify-content: space-between
  padding: 15px 20px
  &:not(:last-child)
    border-bottom: 1px solid $lighter-gray-bg
  &, .title, .assigned, .comments, .menu
    display: flex
    align-items: center
  .title
    flex-grow: 1
  .assigned
    min-width: 180px
    max-width: 180px
    padding: 0 10px
    .avatar
      width: 30px
      height: 30px
      border-radius: 50%
      object-fit: cover
    .name
      padding: 0 10px
      width: 100%
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
  .title
    max-width: calc(100% - 360px)
    .comments
      min-width: 20px
      height: 20px
      justify-content: center
      background-color: $insulting-gray
      border: 1px solid $lighter-gray-bg
      font-size: 10px
      margin-right: 10px
      border-radius: 2px
      position: relative
      &:after, &:before
        position: absolute
        content: ''
        border: 5px solid transparent
        border-left: 5px solid $lighter-gray-bg
        left: 19px
      &:after
        left: 18px
        border-left: 5px solid $insulting-gray
    .name
      font-weight: 700
      color: $devil-gray
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
  .timeStamp
    font-size: 12px
    min-width: 100px
    text-align: right
  .menu
    min-width: 50px
    height: 30px
    justify-content: flex-end
    color: $lighter-gray-bg
</style>
<template lang="pug">
.ticket
  selector
  .assigned
    img.avatar(:src="userData.avatar")
    .name {{userData.nickname}}
  .title
    .comments +9
    .name: router-link(to="/tickets/abc-123")
      |Hipster ipsum asimet ultraform organic coffe herbal tea
  .timeStamp 09:41 AM
  .menu
    .icon: i.icon-dots
</template>
<script>
import selector from '~/shared/selector.vue'
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
    selector
  }
}
</script>
