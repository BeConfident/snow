import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: "/",
        name: "content",
        component: () => import("@/views/index/content.vue")
      },
      {
        path: "/detail",
        name: "detail",
        component: () => import("@/views/index/detail.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
