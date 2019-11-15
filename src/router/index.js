import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */'../views/home.vue')
      },
      {
        path: '/detail',
        name: 'detail',
        component: () => import(/* webpackChunkName: "detail" */ '../views/detail.vue')
      },
      {
        path: '/pay',
        name: 'pay',
        component: () => import(/* webpackChunkName: "pay" */ '../views/pay.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
