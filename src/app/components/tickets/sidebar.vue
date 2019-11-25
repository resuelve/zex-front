<style lang="sass" scoped>
.sideBar
  width: 220px
  background: transparent linear-gradient(135deg, rgba(#ffffff, 0.1) 0%, rgba(#ffffff, 0.05) 100%)
  box-shadow: 5px 5px 10px -5px var(--pinot-noir)
  padding: 10px 20px
  color: var(--white)
  display: flex
  flex-direction: column
.sideBarTitle
  font-size: 30px
  font-weight: 700
  margin-bottom: 30px
  color: var(--titanium)
.icon
  width: 40px
  font-size: 20px
  height: 100%
  display: flex
  align-items: center
li
  text-transform: uppercase
  font-size: 12px
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
    padding: 5px 0
.sideBarNav
  display: flex
  flex-direction: column
  justify-content: space-between
  flex-grow: 1
.middle
  flex-grow: 1
.autoTags
  height: calc(100vh - 231px)
  overflow: auto
</style>
<template lang="pug">
  .sideBar
    .sideBarTitle
      router-link(to="/") Zex
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
