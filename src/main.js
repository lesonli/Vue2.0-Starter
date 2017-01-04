/**
 * Created by lesonli on 2016/11/15.
 */
import 'babel-polyfill';
import Vue from 'vue';
import App from './App';

import { sync } from 'vuex-router-sync'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
//import './assets/style.css'

import store from './store';
import router from './router';
//本地存储
import VueLocalStorage from 'vue-localstorage'

Vue.use(ElementUI)
Vue.use(VueLocalStorage)

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store,router)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
