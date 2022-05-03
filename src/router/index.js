import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/home.vue'),
  },
  {
    path: '/search/:tag',
    name: 'searchResults',
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "search-results" */ '../views/search-results/search-results.vue'),
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
