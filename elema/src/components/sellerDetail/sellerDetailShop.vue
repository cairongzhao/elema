<template>
	<div class="shop-activity">
		<h1>活动与属性</h1>
		<ul>
			<li v-for="item in sellerheader.activities">
						<span :style="'background:#'+item.icon_color+';color:#fff'">{{item.icon_name}}</span>
						{{item.description}}
					</li>
		</ul>
		
		<h1>商家公告</h1>
		<p>{{sellerheader.promotion_info}}</p>
		
	</div>
	
</template>

<script>
	import {mapState}  from 'vuex'
	import homeService from '../../services/homeService.js'
	export default{
		props:{
			sellerheader:Object
		}
	}
</script>

<style>
	.shop-activity{
		width:100%;
		height:100%;
		padding: 20px;
		
	}
	.shop-activity h1{
		font-size: 20px;
		
	}
	.shop-activity ul li{
		font-size: 14px;
		line-height: 30px;
	}
	.shop-activity p{
		font-size: 14px;
	}
</style>