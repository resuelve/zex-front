import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: null,
    toasts: [],
    insideTicket: false,
    isEditing: false
  },
  mutations: {
    setFlags (s, flags) {
      Object.keys(flags).forEach(flag => {
        s[flag] = flags[flag]
      })
    },
    setUser (s, input) {
      s.userData = input
    },
    addToast (s, toast) {
      s.toasts.push(toast)
    },
    delToast (s, key) {
      s.toasts = s.toasts.filter(m => m.key !== key)
    }
  }
})
