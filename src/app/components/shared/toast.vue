<style lang="sass" scoped>
@import '~/shared/_colors.sass'
.toast
  width: 300px
  background-color: #ccc
  border-radius: 3px
  display: flex
  padding: 4px
  margin-bottom: 10px
  box-shadow: 0px 0px 5px 0px $dark-gray
  flex-wrap: wrap
  +colors
  @each $type in primary success warning error
    &.#{$type} .icon i.#{$type}
      display: block
.icon
  font-size: 30px
  min-height: 50px
  min-width: 50px
  text-align: center
  display: flex
  justify-content: center
  align-items: center
  i
    display: none
.bar
  flex: 0 0 100%
  .fill
    height: 5px
    background-color: rgba($white, .5)
    transition: width 100ms linear
.title
  font-weight: 700
</style>

<script>
export default {
  data: () => ({
    timeout: 5000,
    timer: null
  }),
  methods: {
    trySelfDestruct () {
      if (this.timeout <= 0) {
        this.$destroy()
        this.$el.parentNode.removeChild(this.$el)
        return
      }
      this.timer = setTimeout(() => {
        this.timeout -= 100
        this.trySelfDestruct()
      }, 100)
    },
    mouseEnter () {
      clearTimeout(this.timer)
    },
    mouseLeave () {
      this.trySelfDestruct()
    }
  },
  computed: {
    filling () {
      return this.timeout * 100 / 5000
    }
  },
  mounted () {
    this.trySelfDestruct()
  }
}
</script>

<template lang="pug">
.toast(@mouseenter="mouseEnter" @mouseleave="mouseLeave")
  .icon
    for type in ['primary', 'success', 'warning', 'error']
      i(class=`${type} icon-face-${type}`)
  .desc
    .title Title
    .text Descripción del item en el toast
  .bar: .fill(:style="'width:' + filling + '%'")
</template>
