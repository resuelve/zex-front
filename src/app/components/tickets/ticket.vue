<style lang="sass" scoped>
.ticket
  background: transparent linear-gradient(135deg, rgba(#ffffff, 0.1) 0%, rgba(#ffffff, 0.05) 100%)
  box-shadow: 5px 5px 10px -5px var(--pinot-noir)
  border-radius: 6px
  justify-content: space-between
  padding: 15px 20px
  color: var(--white)
  margin-bottom: 15px
  width: 100%
  transition: 500ms all
  &:hover
    width: calc(100% + 40px)
    margin-left: -20px
  &, .title, .author, .comments, .menu
    display: flex
    align-items: center
  .author
    min-width: 180px
    max-width: 180px
    padding: 0 10px
    .name
      padding: 0 10px
      width: 100%
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
  .middle
    max-width: calc(100% - 360px)
    flex-grow: 1
  .tags
    display: flex
    padding-top: 5px
    align-items: center
    .tag
      margin-right: 4px
  .title
    .comments
      min-width: 20px
      height: 20px
      justify-content: center
      background-color: var(--insulting-gray)
      border: 1px solid var(--lighter-gray-bg)
      color: var(--pinot-noir)
      font-size: 10px
      margin-right: 10px
      border-radius: 2px
      position: relative
      &:after, &:before
        position: absolute
        content: ''
        border: 5px solid transparent
        border-left: 5px solid var(--lighter-gray-bg)
        left: 19px
      &:after
        left: 18px
        border-left: 5px solid var(--insulting-gray)
    .name
      font-weight: 700
      color: var(--white)
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
    color: var(--lighter-gray-bg)
</style>
<template lang="pug">
.ticket
  //- selector
  .author
    userPicture.big(:src="userData.avatar")
    .name {{userData.nickname}}
  .middle
    .title
      .comments +9
      .name: router-link(to="/tickets/abc-123")
        |Hipster ipsum asimet ultraform organic coffe herbal tea
    .tags
      tag Vanex
      tag Berex
      tag Kor
      userPicture.small(:src="userData.avatar")
  .timeStamp 09:41 AM
  .menu
    .icon: i.icon-dots
</template>
<script>
import selector from '~/shared/selector.vue'
import userPicture from '~/shared/userPicture.vue'
import tag from '~/shared/tag.vue'
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
    selector,
    tag,
    userPicture
  }
}
</script>
