import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    alias: '/food',
    name: 'foods',
    component: () => import('../components/FoodList.vue'),
  },
  {
    path: '/food/:id',
    name: 'food-details',
    component: () => import('../components/Food.vue'),
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../components/AddFood.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
