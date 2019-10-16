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
  height: calc(100vh - 300px)
  overflow: auto
</style>
<template lang="pug">
  .sideBar
    .sideBarTitle Zex
    ul.sideBarNav
      li
        .section
          .icon: i.icon-tickets
          |Tickets
        ul
          li: itemSelector(items="+99") Abiertos
          li: itemSelector Cerrados
      li.middle
        .section
          .icon: i.icon-tags
          |Asignados a
        ul.autoTags
          li: itemSelector(items="99") Sin asignar
          li: itemSelector() Mi
          li: itemSelector(items="1") Roberto
          li: itemSelector(items="1") Poncho
          li: itemSelector(items="1") Berex
          li: itemSelector(items="1") Kor
          li: itemSelector() Vanex
      //- li
        .section
          .icon: i.icon-cog
          |Ajustes
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
