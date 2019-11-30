<style lang="sass" scoped>
.appSettings
  display: flex
.settingsSection
  flex-grow: 1
  padding: 20px 40px
  max-width: calc(100vw - 220px)
</style>
<template lang="pug">
  .appSettings
    settingsBar
    .settingsSection
      router-view
</template>
<script>
import settingsBar from '~/settings/settingsBar.vue'
export default {
  components: {
    settingsBar
  }
}
</script>
