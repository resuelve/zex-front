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
import { isLoggedIn, decode } from 'Utils/auth'
export default {
  router,
  components: {
    toasts
  },
  beforeMount () {
    const userData = decode(isLoggedIn())
    if (userData) {
      this.$store.commit('setUser', userData)
    }
  }
}
</script>
