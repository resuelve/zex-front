<style lang="sass" scoped>
@import '~/shared/_colors.sass'
.sideBar
  width: 300px
  background-color: $white
  box-shadow: 0px 0px 5px 5px darken($titanium, 1%)
  padding: 20px 40px
  color: $lighter-gray
  display: flex
  flex-direction: column
.sideBarTitle
  font-size: 30px
  font-weight: 700
  margin-bottom: 30px
  color: $accent
.icon
  width: 40px
  font-size: 20px
  height: 100%
  display: flex
  align-items: center
li
  text-transform: uppercase
  font-size: 13px
.section
  font-weight: 700
  font-size: 16px
  height: 30px
  display: flex
  align-items: center
  cursor: pointer
.sideBar > ul li ul
  margin-bottom: 10px
  li
    height: 30px
    padding: 5px 0 5px 40px
.sideBarNav
  display: flex
  flex-direction: column
  justify-content: space-between
  flex-grow: 1
.middle
  flex-grow: 1
.autoTags
  height: calc(100vh - 151px)
  overflow: auto
.coworker
  display: flex
  justify-content: space-between
  align-items: center
  font-size: 16px
  i
    color: $error
  .name
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    text-transform: none
    max-width: calc(100% - 25px)
</style>
<template lang="pug">
  .sideBar
    .sideBarTitle
      router-link(to="/") Zex
    ul.sideBarNav
      li.middle
        .section
          .icon: i.icon-tags
          |Asignado a
        ul.autoTags
          li
            .coworker
              .name Yo merito perinolas ruleo mas que tu
              i.icon-trash
</template>
<script>
import itemSelector from '~/shared/itemSelector.vue'
export default {
  data: () => ({
    algo: true
  }),
  components: {
    itemSelector
  }
}
</script>
