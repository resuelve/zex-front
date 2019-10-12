<style lang="sass" scoped>
.toasts
  position: fixed
  z-index: 1000000
  top: 10px
  right: 10px
  .add
    position: absolute
    top: 0
    left: -40px
    background-color: #fff
  .slide-fade-enter-active 
    transition: all .3s ease
  .slide-fade-leave-active 
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
  .slide-fade-enter, .slide-fade-leave-to
    transform: translateX(10px)
    opacity: 0
</style>
<template lang="pug">
.toasts
  transition-group(name="slide-fade")
    toast(
      v-for="(message, key) in messages"
      :class="message.type"
      :title="message.title"
      :key="message.key"
      :itemkey="message.key"
      @destroy="destroy"
    ) {{message.text}}
</template>
<script>
import toast from '~/shared/toast.vue'
export default {
  methods: {
    destroy (key) {
      this.$store.commit('delToast', key)
    }
  },
  computed: {
    messages () {
      return this.$store.state.toasts
    }
  },
  components: {
    toast
  }
}
</script>
