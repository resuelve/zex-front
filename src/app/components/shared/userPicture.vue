<style lang="sass" scoped>
img
  min-width: 30px
  min-height: 30px
  max-width: 30px
  max-height: 30px
  border-radius: 50%
  object-fit: cover
  &.small
    min-width: 15px
    min-height: 15px
    max-width: 15px
    max-height: 15px
  &.big
    min-width: 45px
    min-height: 45px
    max-width: 45px
    max-height: 45px
</style>
<template lang="pug">
  img(
    v-if="src"
    :src="src"
  )
</template>
<script>
export default {
  props: {
    src: {
      default: false
    }
  }
}
</script>
