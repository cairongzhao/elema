<template>

<div id="discover">
	
	<div class="discover-w">
		<div>
			<discover-header></discover-header>
			<discover-main :dismain="dismain" ></discover-main>
			<discover-food :hotfood="hotfood"></discover-food>
			<discover-gifts :gifts="gifts"></discover-gifts>
			
				
			
		</div>
	</div>
</div>
</template>

<script>
	import {mapState} from 'vuex'
	import discoverService from '../../services/discoverService.js'
	import discoverHeader from '../../components/discover/discoverHeader.vue'
	import discoverMain from '../../components/discover/discoverMain.vue'
	import discoverGifts from '../../components/discover/discoverGifts.vue'
	import discoverFood from '../../components/discover/discoverFood.vue'
	
export default {
	data(){
		return {
			dismain:[],
			gifts:[],
			hotfood:[],
			
			lg: this.$store.state.longitude,
			lt: this.$store.state.latitude
		
	
		}
	},
	computed: {
		...mapState([
			'longitude',
			'latitude'
		])
	},
	components: {
			'discover-header': discoverHeader,
			'discover-main': discoverMain,
			'discover-gifts': discoverGifts,
			'discover-food':discoverFood
			
	},
	methods: {
		requestData1(){
		
		this.lg = this.longitude;
		this.lt = this.latitude;
			//接收发现数据
		discoverService.getMainData(this.lg,this.lt)
		.then((res)=>{
				var arr=[]
				 for(var key in res){
				 	arr.push(res[key])
				 }
					
				this.dismain=arr
		}),
		//接收限时好礼数据
		discoverService.getgiftsData(this.lg,this.lt)
		.then((res)=>{
				this.gifts=res
				
		})
		//接收热推美食数据
		discoverService.getfoodData(this.lg,this.lt)
		.then((res)=>{
			console.log(res)
				this.hotfood=res[0].foods
				console.log(this.hotfood)
		})
		}
	},
	
	created(){
		this.requestData1();
		//监听经纬度变化
		this.$watch('longitude', this.requestData);
		this.$watch('latitude', this.requestData);
		
	},
		mounted(){
		//创建滚动视图
		this.contentScroll = new IScroll("#discover .discover-w", {
			probeType: 3
		});
		//监听滚动事件
		this.contentScroll.on('scrollStart', function(){
			
			this.refresh();
		})
		
	}
}
</script>

<style>
#discover{
	font-size: 24px;
	width:100%;
	height: 100%;
	position: relative;
	
	background: #ccc;
	
}
.discover-w{
	position: absolute;
	width:100%;
	top: 0;
	left: 0;
	bottom: 49px;
	overflow: hidden;
}
.discover-w>div{
	width:100%;
	
}
.integralshop{
	position: absolute;
	background: #fff;
	width:100%;
	height:100%;
	z-index: 99999;
}
</style>