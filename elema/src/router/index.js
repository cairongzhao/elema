import Vue from 'vue'
//vue-router 是vue的插件
//单页面应用：SPA
//路由：单页面应用的页面控制
//监听地址栏哈希值的变化，去切换组件
import Router from 'vue-router'
//让插件作用于Vue

import Home from '../pages/home/Home.vue'
import Address from '../pages/home/Address.vue'
import Search from '../pages/home/Search.vue'
import SellerDetail from '../pages/home/SellerDetail.vue'
import Discover from '../pages/discover/Discover.vue'
import Me from '../pages/me/Me.vue'
import Order from '../pages/order/Order.vue'
import Sellerlisttab from '../components/common/sellerlist-tab.vue'
Vue.use(Router)
//引入vue需要切换的vue组件
export default new Router({
	//路由配置表
  routes: [
  //一个对象，就是一个页面配置
   		{
   			path:'/home',
   			component:Home,
   			children: 
   			[
    		{
    			path: 'address',
    			component: Address
    		},
    		{
    			path: 'search',
    			component: Search
    		},
    		{
    			path: 'seller-detail',
    			component: SellerDetail
    		},
    		{
    			path: 'tab',
    			component: Sellerlisttab
    		}
    	]
   		},
   		{
   			path:'/discover',
   			component:Discover
   		},
   		{
   			path:'/me',
   			component:Me
   		},
   		{
   			path:'/order',
   			component:Order
   		},
    //重定向
    {
    	path: '*',
    	redirect: '/home'
    }
  ]
})
