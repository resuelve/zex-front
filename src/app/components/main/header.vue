<style lang="sass" scoped>
@import '~/shared/_colors.sass'
.appHeader
  display: flex
  justify-content: space-between
  align-items: center
  padding: 6px
.sectionTitle
  flex-grow: 1
  font-size: 20px
  font-weight: 700
  display: flex
  align-items: center
.selected
  font-weight: 400
  font-size: 12px
  color: $accent
</style>
<template lang="pug">
  .appHeader
    .sectionTitle
      //- |Míos &nbsp;
      //- .selected (3) seleccionados
    .searchInput
    //- searchInput
    usermenu
</template>
<script>
import usermenu from '~/main/usermenu.vue'
import searchInput from '~/shared/searchInput.vue'
export default {
  components: {
    usermenu,
    searchInput
  }
}
</script>
