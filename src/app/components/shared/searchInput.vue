<style lang="sass" scoped>
.searchInput
  display: flex
  align-items: center
  background: var(--blueberry) linear-gradient(135deg, rgba(#ffffff, 0.1) 0%, rgba(#ffffff, 0.05) 100%)
  padding: 0
  color: var(--white)
  height: 30px
  border: none
  border-radius: 30px
  overflow: hidden
  box-shadow: 5px 5px 10px -5px var(--pinot-noir)
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
input
  width: 0
  border: none
  font-size: 18px
  padding: 0
  background-color: transparent
  color: var(--white)
  transition: width 150ms linear
  &::-webkit-input-placeholder
    color: var(--light-gray)
  &:not(:placeholder-shown), &:focus
    width: 200px
    padding: 0 0 0 10px
  &:not(:placeholder-shown)
    + .icon
      background-color: var(--blueberry)
      color: var(--white)
      cursor: pointer
      &:hover
        background-color: var(--pinot-noir)
        color: var(--white)
</style>
<template lang="pug">
  .searchInput
    input(placeholder="Buscar")
    .icon: i.icon-search
</template>
