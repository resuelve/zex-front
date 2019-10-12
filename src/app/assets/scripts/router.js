import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes as mainRoutes } from '~/main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', redirect: '/dashboard'
  }
]
const insertRoute = rts => {
  rts.forEach(route => {
    routes.unshift(route)
  })
}

insertRoute(mainRoutes)

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) document.title = to.meta.title
  next()
})

export default router
