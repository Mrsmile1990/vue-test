import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import axios from 'axios'
import routes from './router.config'

import store from './store'

Vue.use(VueRouter);

const router = new VueRouter({
  scrollBehavior:() => ({
    y:0
  }),
  routes
});

//请求
axios.interceptors.request.use(function(config){
  store.dispatch('showLoading')
  return config;
}, function (error) {
  return Promise.reject(error);
});

//相应
axios.interceptors.response.use(function(response){
  store.dispatch('hideLoading')
  return response;
},function(error){
  return Promise.reject(error);
});

Vue.prototype.$http = axios

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
