<template>
<div class="home-banner">
<div class="swiper-container " >
	<div class="swiper-wrapper">
		<div class="swiper-slide" v-for="item1 in pageData">
			
			<dl  v-for="item2 in item1">
				<router-link to="/home/tab">
				<dt>
					<img :src="item2.imgPath | imgFilter" />
				</dt>
				<dd>{{item2.name}}</dd>
				</router-link>
			</dl>
			
		</div>
       
      
	</div>
	 <div class="swiper-pagination"></div>
</div>	
</div>
</template>

<script>
	export default {
	
	props: {
		homeBanner:Array
	},
	computed: {
		
		pageData(){
			
			//对请求过来的轮播数据进行处理
			var bannerData = Array.from(this.homeBanner);
			var arr = [];
			while(bannerData.length > 0){
				arr.push(bannerData.splice(0, 8));
			}
			return arr;
		}
	},
	mounted(){
		//创建swiper
		var bannerSwiper = new Swiper('.swiper-container', {
			
			pagination: '.swiper-pagination'
		});
		
		this.$watch('pageData', function(){
			bannerSwiper.update();
		})
		
	}
}

</script>

<style>
	.home-banner{
		background:#fff;
		height:170px;
		width:100%;
	}
	.swiper-container{
		width: 100%;
		height:100%;
	}
	.swiper-wrapper {
		width:100%;
		height: 100%;
	}
	.swiper-wrapper .swiper-slide{
		width:100% ;
		height:100%;
	}
	.swiper-wrapper>div>dl{
		display: inline-block;
		margin-top: 10px;
		width: 25%;
		height: 56px;
	}
	.swiper-wrapper>div>dl img{
		width: 50%;
		margin: 0 auto;
	}
	.swiper-wrapper>div>dl dd{
		display: block;
		height: 16px;
		text-align: center;
		color: #666;
		font-size: 12px;
		line-height: 16px;
	}
	.swiper-pagination{
		
	}
</style>
