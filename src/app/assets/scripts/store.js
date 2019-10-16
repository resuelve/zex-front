import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: null,
    toasts: []
  },
  mutations: {
    setUser (s, input) {
      s.userData = input
    },
    addToast (s, toast) {
      s.toasts.push(toast)
    },
    delToast(s, key) {
      s.toasts = s.toasts.filter(m => m.key != key)
    }
  }
})
