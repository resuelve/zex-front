import login from './login.vue'
import dashboard from './dashboard.vue'
import { requireAuth, logout, isLoggedIn } from 'Utils/auth'

export const routes = [
  {
    path: '/login',
    component: login,
    beforeEnter: (_to, _from, next) => {
      if (isLoggedIn()) {
        next({
          path: '/'
        })
      }
      return next()
    },
    meta: {
      title: 'Zex: Login'
    }
  },
  {
    path: '/logout',
    beforeEnter: () => {
      logout()
      window.location.href = '/'
    }
  },
  {
    path: '/dashboard',
    beforeEnter: requireAuth,
    component: dashboard,
    meta: {
      title: 'Zex: Dashboard'
    }
  }
]
