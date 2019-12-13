import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'WelfareTab',
    meta: {
      title: '福利大放选择套餐'
    },
    component: () => import('./views/WelfareTab.vue')
  },
  {
    path: '/welfare',
    name: 'Welfare',
    meta: {
      title: '福利大放送用户提交'
    },
    component: () => import('./views/Welfare.vue')
  },
]

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '')
})

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title
  if (title) {
    document.title = title
  }
  next()
})

export default router
