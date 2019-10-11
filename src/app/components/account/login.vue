<style lang="sass" scoped>
@import '~/shared/_colors.sass'
.login
  background: $dark-gray url(https://tctechcrunch2011.files.wordpress.com/2017/11/gettyimages-174926429.jpg) no-repeat center
  background-size: cover
  display: flex
  justify-content: center
  align-items: center
  .floatingLogin
    border-radius: 2px
    width: 550px
    background-color: $white
    padding: 50px
    box-shadow: 0px 0px 5px 0px $dark-gray
  .loginBtn
    display: flex
    justify-content: center
  .title
    margin: 0
    padding: 0
    color: $devil-gray
    font-weight: 400
  .subtitle, .title
    text-align: center
  .subtitle
    font-size: 1.2rem
    margin: 10px 0
    display: block
    color: $light-gray
</style>

<template lang="pug">
.login
  .floatingLogin
    h1.title Bienvenido
    template(v-if="display==='login'")
      .subtitle Te estábamos esperando
    .loginBtn: #login
</template>

<script>
import { login as userLogin, signup as userSignup } from 'Utils/auth'
import btn from '~/shared/btn.vue'
import textField from '~/shared/textField.vue'
export default {
  data: () => ({
    display: 'login',
  }),
  methods: {
    login () {
      userLogin({email: this.email, password: this.password}, true)
      this.$router.push('/dashboard')
    }
  },
  mounted () {
    ResuelveLogin({
      element: '#login',
      area: 'engineering',
      width: 230,
      height: 42,
      columns: 1,
      domain: 'https://login.sandbox.resuelve.io/',
      buttons: ['google'],
      returnUrl: '',
    }, (error, token) => {
      console.log({error, token})
    })
  }
}
</script>
