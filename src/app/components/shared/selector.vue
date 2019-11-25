<style lang="sass" scoped>
.selector
  font-size: 16px
  label
    display: flex
    align-items: center
    height: 30px
  &.selected
    color: var(--accent)
input
  display: none
</style>
<template lang="pug">
.selector(:class="classSelected")
  label
    input(
      type="checkbox"
      v-bind:checked="value"
      @change="$emit('input', $event.target.checked)"
    )
    i.icon-checkbox-unchecked(v-if="!value")
    i.icon-checkbox-checked(v-if="value")
</template>
<script>
export default {
  computed: {
    classSelected () {
      return this.value ? 'selected' : ''
    }
  },
  props: {
    value: {
      default: false
    }
  }
}
</script>
