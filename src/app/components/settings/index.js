import settings from '~/settings/settings.vue'
import userSettings from '~/settings/userSettings.vue'
import { requireAuth } from 'Utils/auth'

export const routes = [
  {
    path: '/settings',
    beforeEnter: requireAuth,
    component: settings,
    meta: {
      title: 'Zex: Dashboard'
    },
    children: [
      {
        path: '',
        redirect: 'userSettings'
      },
      {
        path: 'userSettings',
        component: userSettings
      }
    ],
  }
]
