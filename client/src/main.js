// import moment from 'moment';
import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

/*
//Try #1 to convert date
Vue.filter('formatDate', (value) => {
  if (value) {
    return moment(String(value)).format('MMMM Do YYYY, h:mm a');
  }
}); */

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
