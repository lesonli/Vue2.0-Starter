import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home'
//异步加载
//const Home = h => require.ensure([], _ => h(require('../views/Home')), "home");
Vue.use(VueRouter);

// 页面路由
const routes = [{
    path: '/',
    name: 'home',
    meta: { page_name:"首页" },
    component: Home
},{ 
    path: '*', 
    redirect: '/' 
}];

// 创建一个路由对象用于管理页面的路由
const router = new VueRouter({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }
  }
});

export default router;
