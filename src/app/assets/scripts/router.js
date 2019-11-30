import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes as mainRoutes } from '~/main'
import { routes as settingsRoutes } from '~/settings'
import notFound from '~/main/notFound.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/dashboard'},
  { path: '/tickets', redirect: '/dashboard' },
  { path: '*', component: notFound }
]
const insertRoute = rts => {
  rts.forEach(route => {
    routes.unshift(route)
  })
}

insertRoute([].concat(
  mainRoutes,
  settingsRoutes
))

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) document.title = to.meta.title
  next()
})

export default router
