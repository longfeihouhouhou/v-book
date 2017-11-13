import Vue from 'vue'
import Router from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VueLazyload from 'vue-lazyload'
Vue.use(VueAwesomeSwiper);
Vue.use(VueLazyload);
Vue.use(Router);

export default new Router({
  routes: [
    {path:'/home',component:()=>import('../components/Home.vue')},
    {path:'/list',component:()=>import('../components/List.vue')},
    {path:'/add',component:()=>import('../components/Add.vue')},
    {path:'/detail',component:()=>import('../components/Detail.vue')},
    {path:'/',component:()=>import('../components/Home.vue')},
  ]
})
