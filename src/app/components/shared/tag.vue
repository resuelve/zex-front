<style lang="sass" scoped>
@import '~/shared/_colors.sass'
.tag
  background-color: $lighter-gray-bg
  text-align: center
  font-size: 12px
  display: flex
  align-items: center
  justify-content: center
  color: $white
  border-radius: 12px
  padding: 0 5px
  width: 35px
</style>

<template lang="pug">
.tag: slot
</template>
