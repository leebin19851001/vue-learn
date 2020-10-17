import VueRouter from 'vue-router';
import Vue from 'vue';

import Home from './views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/student',
    component: () => import('./views/Student'),
  },
  {
    path: '/learn',
    component: () => import('./views/Learn'),
  },
  {
    path: '/about',
    component: () => import('./views/About'),
  },
  {
    path: '/activity',
    component: () => import('./views/Activity'),
  }
]

export default new VueRouter({
  routes,
})