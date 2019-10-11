<style lang="sass" scoped>
.app
  display: grid
  height: 100vh
</style>
<template lang="pug">
  .app
    toasts
    router-view
</template>

<script>
import router from 'Utils/router'
import toasts from '~/shared/toasts.vue'
export default {
  router,
  components: {
    toasts
  }
}
</script>
