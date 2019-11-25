<style lang="sass" scoped>
img
  width: 30px
  height: 30px
  border-radius: 50%
  object-fit: cover
  &.small
    width: 15px
    height: 15px
  &.big
    width: 45px
    height: 45px
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
