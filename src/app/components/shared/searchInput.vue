<style lang="sass" scoped>
@import '~/shared/_colors.sass'
.searchInput
  display: flex
  align-items: center
  background-color: $white
  padding: 0
  color: $light-gray
  height: 30px
  border-radius: 30px
  overflow: hidden
  box-shadow: 0px 0px 5px 0px darken($titanium, 4%)
  position: relative
  &:hover
    input
      width: 200px
      padding: 0 0 0 10px
.icon
  width: 30px
  height: 30px
  line-height: 30px
  text-align: center
  border-radius: 50%
input
  width: 0
  border: none
  font-size: 18px
  padding: 0
  outline: none
  background-color: transparent
  color: $light-gray
  transition: width 150ms linear
  &::-webkit-input-placeholder
    color: rgba($light-gray, .5)
  &:not(:placeholder-shown), &:focus
    width: 200px
    padding: 0 0 0 10px
  &:not(:placeholder-shown)
    + .icon
      background-color: $accent
      color: $white
      cursor: pointer
      &:hover
        background-color: darken($accent, 5%)
        color: $white
</style>
<template lang="pug">
  .searchInput
    input(placeholder="Buscar")
    .icon: i.icon-search
</template>
