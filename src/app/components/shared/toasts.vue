<style lang="sass" scoped>
.toasts
  position: fixed
  top: 10px
  right: 10px
</style>
<template lang="pug">
.toasts
  toast.primary
  toast.success
  toast.warning
  toast.error
</template>
<script>
import toast from '~/shared/toast.vue'
export default {
  components: {
    toast
  }
}
</script>
