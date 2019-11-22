import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/pages/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'root',
    component: Login
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('@/pages/ChatDashboard.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
