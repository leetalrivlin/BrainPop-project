import Vue from 'vue';
import VueRouter from 'vue-router';
import ActivityBox from '../views/ActivityBox.vue';
import ZoomView from '../views/ZoomView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'activity-box',
    component: ActivityBox,
    children: [
      {
        path: ':zoomView',
      },
    ],
  },
  {
    path: '/ZoomView',
    name: 'zoom-view',
    component: ZoomView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
