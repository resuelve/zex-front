<style lang="sass" scoped>
.userMenu
  padding: 0 6px
  position: relative
  &:hover
    .dropMenu
      display: block
.userMenu, li a
  display: flex
  align-items: center
.dropMenu
  display: none
  position: absolute
  top: 100%
  right: 0
  width: 200px
  background: var(--blueberry) linear-gradient(135deg, rgba(#000, 0.05) 0%, rgba(#000, 0.5) 100%)
  list-style: none
  padding: 0
  margin: 0
  border-radius: 6px
  overflow: hidden
  box-shadow: 5px 5px 10px -5px var(--pinot-noir)
  z-index: 1000
  li a, li .item
    font-size: 18px
    line-height: 18px
    padding: 6px
    color: var(--white)
    text-decoration: none
  li a
    &:hover
      background-color: var(--pinot-noir)
    i
      margin-right: 10px

</style>
<template lang="pug">
  .userMenu
    userPicture(:src="userData.avatar")
    ul.dropMenu
      li
        .item {{userData.nickname}}
      li
        router-link(to="/settings")
          i.icon-cog
          |Opciones
      li
        router-link(to="/logout")
          i.icon-exit
          |Salir
</template>
<script>
import userPicture from '~/shared/userPicture.vue'
export default {
  computed: {
    userData () {
      return this.$store.state.userData.meta
    }
  },
  components: {
    userPicture
  }
}
</script>
