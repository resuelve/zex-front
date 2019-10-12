<style lang="sass" scoped>
@import '~/shared/_colors.sass'
.sideBar
  width: 300px
  background-color: $white
  box-shadow: 0px 0px 5px 5px darken($titanium, 1%)
  padding: 20px 40px
</style>
<template lang="pug">
  .sideBar
    .sideBarTitle Zex
    .sectionTitle Tickets
    ul
      li Míos
      li Sin asignar
      li Cerrados
    .sectionTitle Etiquetas
    ul
      li Kor
      li Vanex
      li Berex
</template>
