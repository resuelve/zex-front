<style lang="sass" scoped>
@import '~/shared/_colors.sass'
.login-button
  border-radius: 6px
  text-align: center
  cursor: default
  padding: 5px 10px
  user-select: none
  font-size: 0.8em
  &.small
    font-size: 0.6em
  &.big
    font-size: 1em
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
