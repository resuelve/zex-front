<style lang="sass" scoped>
  @import '~/shared/_colors.sass'
  .textField
    position: relative
  span
    display: block
    color: $light-gray
    font-size: .9rem
    margin-top: 15px
    text-transform: uppercase
  input
    width: 100%
    border: 1px solid $light-gray
    color: $devil-gray
    border-radius: 6px
    margin: 0
    padding: 8px
    margin: 5px 0
    font-size: 1.5rem
    &:focus
      border: 1px solid $accent
  .icon
    position: absolute
    right: 10px
    top: 38px
    width: 20px
    line-height: 20px
    height: 20px
    color: $dark-gray
    text-align: center
    cursor: pointer
    user-select: none
</style>

<template lang="pug">
  .textField
    label
      span {{label}}: 
      input(
        @input="$emit('input', $event.target.value)"
        :type="displayPassword"
        @blur="validateField"
      )
      message(v-if="showError").error Este campo es requerido
    .icon(
      v-if="isPassword"
      @click="showPassword = !showPassword"
    )
      i(v-if="!showPassword").icon-eye
      i(v-if="showPassword").icon-eye-blocked
</template>

<script>
import message from '~/shared/message.vue'
export default {
  data: () => ({
    isPassword: false,
    showPassword: false,
    showError: false
  }),
  beforeMount () {
    this.isPassword = this.type === 'password'
  },
  computed: {
    displayPassword () {
      if (!this.isPassword) return 'text'
      if (this.showPassword) return 'text'
      return 'password'
    }
  },
  methods: {
    validateField () {
      this.showError = this.value.trim() === '' && this.required
    }
  },
  components: {
    message
  },
  props: {
    label: {},
    value: {},
    type: {
      default: 'text'
    },
    required: {
      default: true
    }
  }
}
</script>
