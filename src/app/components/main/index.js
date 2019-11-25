import login from './login.vue'
import dashboard from './dashboard.vue'
import { requireAuth, logout, isLoggedIn } from 'Utils/auth'
import ticketList from '~/tickets/ticketList.vue'
import ticketView from '~/tickets/ticketView.vue'

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
    children: [
      {
        path: '',
        component: ticketList
      },
      {
        path: '/tickets/:ticketid',
        component: ticketView
      }
    ],
    beforeEnter: requireAuth,
    component: dashboard,
    meta: {
      title: 'Zex: Dashboard'
    }
  }
]
