/**
 * Created by lesonli on 2016/11/15.
 */
import 'babel-polyfill';
//require('es6-promise').polyfill();
import Vue from 'vue';
import App from './App';
import { sync } from 'vuex-router-sync';

import {
   // row,
    //col,
    Button
  /*  checkbox,
    checkboxGroup,
    Progress,
    Pagination,
    Dialog,
    Form,
    FormItem,
    Input,
    Carousel,
    CarouselItem,
    Badge,
    Tabs,
    TabPane,
    Table,
    TableColumn,
    Collapse,
    CollapseItem,
    Tooltip*/
} from 'element-ui';
//import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-default/index.css';

import store from './store';
import router from './router';
//import {MyEditor} from './config/editor';
//本地存储
import VueLocalStorage from 'vue-localstorage';

//Vue.use(row)
//Vue.use(col)
Vue.use(Button)
/*Vue.use(checkbox)
Vue.use(checkboxGroup)
Vue.use(Progress)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Badge)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Tooltip)
Vue.use(VueLocalStorage);*/

// Vue.use(ElementUI);

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router);

router.beforeEach((to, from, next) => {
    // TDAPP.onEvent("页面统计",to.meta.page_name);
  next()
});


Vue.filter('formatdate',function(v) {
    var date = new Date(v);
    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
