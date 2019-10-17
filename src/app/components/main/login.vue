<style lang="sass" scoped>
@import '~/shared/_colors.sass'
.login
  background: $dark-gray url(/media/login-bg.jpg) no-repeat center
  background-size: cover
  display: flex
  justify-content: center
  align-items: center
  .floatingLogin
    border-radius: 2px
    width: 300px
    background-color: $dark-gray
    padding: 30px 0
    box-shadow: 0px 0px 5px 0px $dark-gray
  .loginBtn
    display: flex
    justify-content: center
  .title
    margin: 0
    padding: 0
    color: $white
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
    h1.title Bienvenido a Zex
    template(v-if="display==='login'")
      .subtitle Te estábamos esperando
    .loginBtn: #login
</template>

<script>
import { login as userLogin } from 'Utils/auth'
export default {
  data: () => ({
    display: 'login',
    coolDown: 0
  }),
  mounted () {
    console.log(LOGIN_URL, 'LOGIN_URL')
    ResuelveLogin({
      element: '#login',
      area: 'engineering',
      width: 230,
      height: 42,
      columns: 1,
      domain: LOGIN_URL,
      buttons: ['google'],
      returnUrl: '',
    }, (error, token) => {
      if(this.coolDown > 0) return
      if(!error && !token) return
      if(error === 'Successfully authenticated.') return
      this.coolDown = 100
      setTimeout(() => { this.coolDown = 0 }, 100)
      if (token) {
        const userData = userLogin(token, true)
        this.$store.commit('setUser', userData)
        this.$router.push('/dashboard')
        this.$store.commit('addToast', {
          type: 'success',
          title: 'Bienvenido a Zex',
          text: 'ya era hora',
          key: Math.round(Math.random() * 1000)
        })
        return
      }
      this.$store.commit('addToast', {
        type: 'error',
        title: 'Error de autenticación',
        text: error,
        key: Math.round(Math.random() * 1000)
      })
    })
  }
}
</script>
