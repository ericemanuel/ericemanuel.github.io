import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import home from '../views/home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/portfolio/one',
    name: 'one',
    component: () => import('../views/one.vue'),
  },
  {
    path: '/portfolio/soul',
    name: 'soul',
    component: () => import('../views/soul.vue'),
  },
  {
    path: '/portfolio/sesc',
    name: 'sesc',
    component: () => import('../views/sesc.vue'),
  },
  {
    path: '/portfolio/gamechanger',
    name: 'gamechanger',
    component: () => import('../views/gamechanger.vue'),
  },
  {
    path: '/portfolio/montehermom',
    name: 'montehermom',
    component: () => import('../views/montehermom.vue'),
  },
  {
    path: '/portfolio/sescgo',
    name: 'sescgo',
    component: () => import('../views/sescgo.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router;
