<template>
<div id="home">
	<div class="main">
		<div class="wrap">
			<home-header :address="address" :weather="weatherData"  ></home-header>
			<home-banner :homeBanner="homeBanner"></home-banner>
			<seller-list :homeList="homeList" :listsupport="listsupport"></seller-list>
			
		</div>
	</div>
	<transition enter-active-class="slideInRight animated"
				leave-active-class="slideOutRight animated">
				<router-view ></router-view>
	</transition>
	
</div>

</template>

<script>
	import {mapState} from 'vuex'
	import homeService from '../../services/homeService.js'
    import HomeHeader from '../../components/home/HomeHeader.vue'
	import HomeBanner from '../../components/home/HomeBanner.vue'
	import HomeList from '../../components/common/SellerList.vue'
	
export default {
	data(){
		
		return {
			address: '',
			weatherData: {},
			
			homeBanner:[],
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
		'home-header': HomeHeader,
		'home-banner': HomeBanner,
		'seller-list': HomeList
	},
	
	methods: {
		requestData(){
			
			var lg = this.longitude;
			var lt = this.latitude;
			//请求地址
		homeService.getAddressData(lg, lt)
		.then((address)=>{
				this.address = address;
				
		})
		//请求天气
		homeService.getWeatherData(lg, lt)
		.then((res)=>{
			this.weatherData = res;
		})
		
		//请求轮播数据
		homeService.getHomeBannerData(lg, lt)
		.then((res)=>{
			this.homeBanner = res;
		})
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
		this.requestData();
		
		//监听地址改变的事件
//		this.$eventHandle.$on('get-address', (val)=>{
//			console.log('home接收到了新地址'+val);
//			this.address = val;
//		})
		
		//监听经纬度变化
		this.$watch('longitude', this.requestData);
		this.$watch('latitude', this.requestData);
	},
	mounted(){
		//创建滚动视图
		this.contentScroll = new IScroll("#home .main", {
			probeType: 3,
			tap:true,
			click:true 
		});
		//监听滚动事件
//		this.contentScroll.on('scrollStart', function(){
//			console.log('正在滚动...');
//			this.refresh();
//		})
		
	},
	updated(){
		this.contentScroll.refresh();
	}
}

</script>

<style>
body,html{
	width:100%;
	height:100%
}
#home{
	
	font-size: 24px;
	width:100%;
	height: 100%;
	position: relative;
	
	background: #ccc;
	
}
#home .main {
	position: absolute;
	width:100%;
	top: 0;
	left: 0;
	bottom: 49px;
	overflow: hidden;
}
#home header{
	width: 100%;
	height: 100px;
	background: lavenderblush;
}


</style>