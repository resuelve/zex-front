<style lang="sass" scoped>
.notFound
  display: flex
  justify-content: center
  align-items: center
.message
  text-align: center
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
