import Vue from 'vue';
import VueRouter from 'vue-router';
import Activities from '../views/Activities.vue';
// import ZoomView from '../views/ZoomView.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/activities',
  },
  {
    path: '/activities',
    component: Activities,
    children: [
      {
        path: ':zoom',
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
