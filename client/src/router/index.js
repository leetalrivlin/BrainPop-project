import Vue from 'vue';
import VueRouter from 'vue-router';
import ActivityBox from '../components/ActivityBox.vue';
import ZoomView from '../views/ZoomView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'activity-box',
    component: ActivityBox,
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
