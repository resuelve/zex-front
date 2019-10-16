import './config'
import Vue from 'vue'
import store from './store'
import app from '~/app.vue'

document.addEventListener('DOMContentLoaded', event => {
  return new Vue({
    el: '#mainApp',
    store,
    components: {
      app
    }
  })
})
