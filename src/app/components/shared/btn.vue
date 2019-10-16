<style lang="sass" scoped>
@import '~/shared/_colors.sass'
.login-button
  border-radius: 2px
  text-align: center
  cursor: default
  margin: 20px 0 10px 0
  font-size: 1.3rem
  height: 2.7rem
  line-height: 2.7rem
  user-select: none
  +colors
</style>

<template lang="pug">
  .login-button(@click="$emit('click')") {{text}}
</template>

<script>
export default {
  props: ['text']
}
</script>
