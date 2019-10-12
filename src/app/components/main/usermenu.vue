<style lang="sass" scoped>
@import '~/shared/_colors.sass'
.userMenu
  padding: 0 6px
  position: relative
  &:hover
    .dropMenu
      display: block
.userMenu, li a
  display: flex
  align-items: center
.avatar
  width: 30px
  height: 30px
  border-radius: 50%
  object-fit: cover
.dropMenu
  display: none
  position: absolute
  top: 100%
  right: 0
  width: 200px
  background-color: $white
  list-style: none
  padding: 0
  margin: 0
  border-radius: 4px
  overflow: hidden
  box-shadow: 0px 5px 5px 1px darken($titanium, 4%)
  li a, li .item
    font-size: 18px
    line-height: 18px
    padding: 6px
    color: $devil-gray
    text-decoration: none
  li a
    &:hover
      background-color: $devil-gray
      color: $white
</style>
<template lang="pug">
  .userMenu
    img.avatar(:src="userData.avatar")
    ul.dropMenu
      li
        .item {{userData.nickname}}
      li
        router-link(to="/logout")
          i.icon-exit
          |Salir
    //- |{{userData}}
</template>
<script>
export default {
  computed: {
    userData () {
      return this.$store.state.userData.meta
    }
  }
}
</script>
