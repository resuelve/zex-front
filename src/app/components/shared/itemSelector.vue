<style lang="sass" scoped>
@import '~/shared/_colors.sass'
label
  display: flex
  align-items: center
  justify-content: space-between
  cursor: pointer
  &:hover
    color: $accent
    .tag
      background-color: $accent
.label
  flex-grow: 1
.selector
  margin-right: 5px
</style>
<template lang="pug">
  label
    selector
    span.label: slot
    tag {{items}}
</template>
<script>
import tag from '~/shared/tag.vue'
import selector from '~/shared/selector.vue'
export default {
  components: {
    tag,
    selector
  },
  props: {
    items: {
      default: ''
    }
  }
}
</script>
