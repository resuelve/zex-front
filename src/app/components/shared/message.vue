<style lang="sass" scoped>
@import '~/shared/_colors.sass'
.message
  --color: #{$accent-variant}
  --variant: #{$accent}
  background-color: var(--color)
  border: 1px solid var(--variant)
  color: var(--variant)
  padding: 4px 6px
  margin: 6px 0
  border-radius: 3px
  &.error
    --color: #{$error-variant}
    --variant: #{$error}
  &.success
    --color: #{$success-variant}
    --variant: #{$success}
  &.warning
    --color: #{$warning-variant}
    --variant: #{$warning}
</style>
<template lang="pug">
  .message
    slot
</template>
