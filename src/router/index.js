//异步加载,后续再修改
//const Hello = r => require(['views/hello'], r);
//const NotFound = r => require(['views/notfound'], r);
import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '../views/Login'
import Home from '../views/Home'
import Hello from '../views/hello'
import NotFound from '../views/notfound'

Vue.use(VueRouter);

// 页面路由
const routes = [
  {
    path:'',
    redirect:'/login'
  },
  {
    path:'/home',
    name:'home',
    component:Home,
    children:[
      {
        path:'hello',
        component:Hello
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '*',
    name: 'notfound',
    component: NotFound
  }
];

// 创建一个路由对象用于管理页面的路由
const router = new VueRouter({
  mode: 'history',
  routes: routes
});

export default router;
