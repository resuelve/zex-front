<style lang="sass" scoped>
.message
  --color: var(--accent-variant)
  --variant: var(--accent)
  background-color: var(--color)
  border: 1px solid var(--variant)
  color: var(--variant)
  padding: 4px 6px
  margin: 6px 0
  border-radius: 3px
  &.error
    --color: var(--error-variant)
    --variant: var(--error)
  &.success
    --color: var(--success-variant)
    --variant: var(--success)
  &.warning
    --color: var(--warning-variant)
    --variant: var(--warning)
</style>
<template lang="pug">
  .message
    slot
</template>
