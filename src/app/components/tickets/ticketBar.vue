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
  font-size: 13px
.section
  font-weight: 700
  font-size: 16px
  height: 30px
  display: flex
  align-items: center
.sideBar > ul li ul
  margin-bottom: 10px
  li
    height: 30px
.searcher
  padding-left: 40px
.sideBarNav
  display: flex
  flex-direction: column
  justify-content: space-between
  flex-grow: 1
.middle
  flex-grow: 1
.autoTags
  height: calc(100vh - 191px)
  overflow: auto
.coworker
  display: flex
  justify-content: space-between
  align-items: center
  font-size: 16px
  padding: 5px 10px
  &:hover
    background: transparent linear-gradient(135deg, rgba(#000, 0.05) 0%, rgba(#000, 0.5) 100%)
    i
      display: inherit
  i
    display: none
    color: var(--error-alt)
    cursor: pointer
  .user
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    text-transform: none
    max-width: calc(100% - 25px)
    display: flex
    justify-content: space-between
    align-items: center
    img
      margin-right: 6px
</style>
<template lang="pug">
  .sideBar
    .sideBarTitle
      router-link(to="/") Zex
    ul.sideBarNav
      li.middle
        .section
          .icon: i.icon-plus
          |Asignar a
        .section.searcher: searchCoworker(@coworkerSelected="addCoworker")
        .section
          .icon: i.icon-tags
          |Asignado a
        ul.autoTags
          li
            .coworker(v-for="asignee in asignees")
              .user
                userPicture.small(:src="asignee.avatar")
                .name {{asignee.nickname}}
              i.icon-trash(@click="removeAsignee(asignee.email)")
</template>
<script>
import itemSelector from '~/shared/itemSelector.vue'
import searchCoworker from '~/shared/searchCoworker.vue'
import userPicture from '~/shared/userPicture.vue'
export default {
  data: () => ({
    algo: true,
    asignees: []
  }),
  methods: {
    removeAsignee (email) {
      this.asignees = this.asignees.filter(asignee => {
        return asignee.email !== email
      })
    },
    addCoworker (coworker) {
      this.asignees.push(coworker)
    }
  },
  components: {
    itemSelector,
    searchCoworker,
    userPicture
  }
}
</script>
