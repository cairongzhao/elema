<template>
	<div class="tab">
		<div class="tab1">
			<div class="tab-w">
				<div class="tab-title">美食</div>
				<seller-list :homeList="homeList" :listsupport="listsupport"></seller-list>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import homeService from '../../services/homeService.js'
	import HomeList from './SellerList.vue'
	export default {
		data(){
		
		return {
			homeList:[],
			listsupport:{}
		}
	},
	computed: {
		...mapState([
			'longitude',
			'latitude'
		])
	},
	components: {
		
		'seller-list': HomeList
	},
	methods: {
		requesttab(){
			
			var lg = this.longitude;
			var lt = this.latitude;
		//请求商家列表数据
		homeService.getHomeListData(lg, lt)
		.then((res)=>{
			
			
			this.homeList = res
//			this.listsupport=res[0].supports[0]
		})
		}
	},
	created(){
		//初始化页面数据，发送各种请求
		this.requesttab();
	},
	mounted(){
		//创建滚动视图
		this.contentScroll = new IScroll(".tab1", {
			probeType: 3,
			tap:true,
			click:true 
		})
	},
	updated(){
		this.contentScroll.refresh();
	}
	}
</script>

<style>
	.tab{
		width:100%;
		height:100%;
		background:#fff;
		position: relative;
	}
	.tab1{
		position: absolute;
		width:100%;
		top: 0;
		left: 0;
		bottom: 0;
		overflow: hidden;
	}
	.tab-title{
		background:#fff;
		text-align: center;
	}
</style>