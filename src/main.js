// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueLazy from 'vue-lazyload'
import router from './router';
require('swiper/dist/css/swiper.css');
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
Vue.use(VueLazy)
/* eslint-disable no-new */
new Vue({
  el:'#app',
  router,
  template: '<App/>',
  components: { App }
});
