<template>
  <div id="app">
   		  <router-view ></router-view>
   		  <div class="footer-nav">
   		  		<router-link class="footer-list" v-for="item in footernav" :to="item.path">
   		  			<dl>
   		  				<dt class="iconfont" :class="item.icon"></dt>
   		  				<dd>{{item.title}}</dd>
   		  			</dl>
   		  			
   		  		</router-link>
   		  </div>
  </div>
</template>

<script>
export default {
  data(){
  	return{
  		footernav:[
  			{title: '外卖', path: '/home', icon:'icon-eleme'},
  			{title: '发现', path: '/discover', icon:'icon-discover'},
  			{title: '订单', path: '/order', icon:'icon-order'},
  			{title: '我的', path: '/me', icon:'icon-me'},
  		]
  	}
  }
}
</script>

<style>
	
		#app{
			width:100%;
			height:100%;
			
		}
		.footer-nav{
			position: absolute;
			background: #fff;
			width:100%;
			left: 0;
			bottom: 0;
			height: 49px;
			font-size: 12px;
			display: flex;
			justify-content: center;
			
		}
		.footer-nav .footer-list{
			flex: 1;
		}
		.footer-nav .footer-list dl{
			width:100%;
			height:100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
			.footer-nav .footer-list dl dt{
				margin-bottom:5px
			}
			.router-link-active .iconfont{
				color: lightblue;
			}
</style>
