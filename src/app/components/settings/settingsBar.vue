<style lang="sass" scoped>
.settingsBar
  width: 220px
  background: transparent linear-gradient(135deg, rgba(#ffffff, 0.1) 0%, rgba(#ffffff, 0.05) 100%)
  box-shadow: 5px 5px 10px -5px var(--pinot-noir)
  padding: 10px 20px
  color: var(--white)
  display: flex
  flex-direction: column
.title
  font-size: 30px
  font-weight: 700
  margin-bottom: 30px
  color: var(--titanium)
</style>
<template lang="pug">
  .settingsBar
    .title: router-link(to="/") Zex
</template>
