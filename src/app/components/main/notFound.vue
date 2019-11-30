<style lang="sass" scoped>
.notFound
  display: flex
  justify-content: center
  align-items: center
  color: var(--white)
.message
  text-align: center
a
  text-decoration: underline
</style>
<template lang="pug">
  .notFound
    .message
      h1 Por aquí no se despacha
      p
        |¿Cómo llegaste aquí?
        br
        router-link(to="/") Regresa al inicio
</template>
