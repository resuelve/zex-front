<style lang="sass" scoped>
.searchCoworker
  position: relative
  input
    width: 100%
    border: none
    border-bottom: 1px solid var(--titanium)
    font-size: 14px
    padding: 0 4px
    background-color: transparent
    color: var(--lighter-gray-bg)
    &::-webkit-input-placeholder
      color: rgba(var(--lighter-gray-bg), .5)
    &:not(:placeholder-shown)
      + .optionBox
        display: inherit
  .optionBox
    display: none
    position: absolute
    width: 100%
    background: var(--blueberry) linear-gradient(135deg, rgba(#ffffff, 0.2) 0%, rgba(#ffffff, 0) 100%)
    box-shadow: 5px 5px 10px -5px var(--pinot-noir)
    margin-top: 5px
    font-weight: 400
    text-transform: none
  li
    cursor: pointer
    display: flex
    align-items: center
    padding: 0 5px
    &:hover
      background-color: var(--titanium)
      color: var(--pinot-noir)
    img
      margin-right: 6px
</style>

<script>
import users from 'mocks/users.json'
import userPicture from '~/shared/userPicture.vue'
export default {
  data: () => ({
    searchValue: '',
  }),
  methods: {
    selectOption (user) {
      this.$emit('coworkerSelected', user)
      this.searchValue = ''
    },
    clean () {
      setTimeout(() => {
        this.searchValue = ''
      }, 100)
    }
  },
  computed: {
    users () {
      if(this.searchValue.length < 3) return
      const sV = this.searchValue.toLowerCase()
      return users.filter(u => {
        return u.email.toLowerCase().indexOf(sV) !== -1 ||
          u.name.toLowerCase().indexOf(sV) !== -1 ||
          u.nickname.toLowerCase().indexOf(sV) !== -1
      })
    }
  },
  components: {
    userPicture
  }
}
</script>

<template lang="pug">
  .searchCoworker
    input(
      v-model="searchValue"
      placeholder="Buscar colaborador"
      @blur="clean"
    )
    ul.optionBox
      li(
        v-for="user in users"
        @click="selectOption(user)"
      )
        userPicture.small(:src="user.avatar")
        |{{user.nickname}}
</template>
