// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
//过滤器
import './filter'
//路由
import router from './router'
//状态管理
import store from './store'
//请求
import axios from 'axios'
Vue.prototype.$http = axios;


Vue.config.productionTip = false
//处理非父子组件的通信
var Event = new Vue();
Vue.prototype.$eventHandle = Event;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
