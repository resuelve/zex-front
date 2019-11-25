<style lang="sass" scoped>
label
  display: flex
  align-items: center
  justify-content: space-between
  cursor: pointer
  padding: 0 10px
  &:hover
    color: var(--pinot-noir)
    background: transparent linear-gradient(135deg, rgba(#ffffff, 0.5) 0%, rgba(#ffffff, 0.05) 100%)
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
