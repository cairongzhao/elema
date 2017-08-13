<template>
<div class="sellermain">
	<div>
		<div class="activity_body" v-if="isshow">
			<div class="activity_title">
				<h1>{{sellerheader.name}}</h1>
			</div>
			<div class="favorable_body">
				<div class="favorable_title">优惠信息</div>
				<ul>
					<li v-for="item in sellerheader.activities">
						<span :style="'background:#'+item.icon_color">{{item.icon_name}}</span>
						{{item.description}}
					</li>
				</ul>
			</div>
			<div class="notice">
				<div class="notice_title">商家公告</div>
				<p>{{sellerheader.promotion_info}}</p>
			</div>
			<div class="cancel" @click="activityisshow">X</div>
		</div>
		<div class="sellerheader">
			<div @click="backAction" class="back"><</div>
			
			<div class="shleft">
				<img :src="sellerheader.image_path | imgFilter" />
			</div>
			<div class="shright">
				<h1>{{sellerheader.name}}</h1>
				<p>商家配送/{{sellerheader.order_lead_time}}分钟送达/配送费{{sellerheader.float_delivery_fee}}</p>
				<p></p>
			</div>
			<div class="selleractivity" @click="activityisshow">
				{{activities1}}
			</div>
		</div>
		
		
		<div class="sellerbottom">
			<div class="sellerbottom_title">
				<ul>
					<li @click="cut(0)">商品</li>
					<li @click="cut(1)">评价</li>
					<li @click="cut(2)">店铺</li>
				</ul>
			</div>
			<div class="sellerleft">
				<div class="sellerleft-w">
					<div class="sellerleft-list" v-for="(item,index) in sellerleft">
						<img :src="item.icon_url | imgFilter" v-if="index==0">
						<a href="">{{item.name}}</a>
					</div>
				</div>
			</div>
			<div class="sellerright">
				<div class="sellerright-w">
					<div class="sellerright-list" v-for="(item,index) in sellerleft">
						<p >{{item.name}}</p>
						<ul>
							<li v-for="itemlist in item.foods">
								<img :src="itemlist.image_path | imgFilter" />
								<div class="itemlistright">
									<h3>{{itemlist.name}} <span></span></h3>
									<span>月售{{itemlist.month_sales}}份，好评率{{itemlist.satisfy_rate}}%</span>
									<p class="new">
										
										<span class="old" style="color:#ff6600">￥{{itemlist.specfoods[0].price}}</span>
									</p>
									<div class="Add_goods">+</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="sellerDetailEvaluate" v-if="isshow1==1">
				<seller-Evaluate :sellereva="sellereva" :sellerheader="sellerheader"></seller-Evaluate>
			</div>
			<div class="sellerDetailShop" v-if="isshow1==2" >
				<seller-shop :sellerheader="sellerheader"></seller-shop>
			</div>
	</div>
	
	</div>
</div>
	
</template>

<script>
	import {mapState}  from 'vuex'
	import homeService from '../../services/homeService.js'
	import sellerEvaluate from '../../components/sellerDetail/sellerDetailEvaluate.vue'
	import sellerDetailShop from '../../components/sellerDetail/sellerDetailShop.vue'
	
	export default {
		data(){
			return{
				sellerheader:{},
				sellerleft:[],
				sellereva:[],
				isshow:false,
				activities1:"",
				isshow1:0
			}
		},
		components: {
			'seller-Evaluate':sellerEvaluate,
			'seller-shop':sellerDetailShop
		},
		computed: {
		...mapState([
				'longitude',
				'latitude',
				'id'
			])
		},
		methods:{
			cut(num){
				this.isshow1=num
				console.log(this.isshow1)
			},
			backAction(){
			this.$router.back();
			
			},
			requestData2(){
				var lg = this.longitude;
				var lt = this.latitude;
				homeService.shopData1(this.id)
				.then((res)=>{
					this.sellerleft=res
					
//					console.log(this.sellerleft)
				}),
				homeService.shopData2(this.id,lg,lt)
				.then((res)=>{
					this.sellerheader=res
					this.activities1=res.activities[0].description
//					console.log(this.sellerheader)
				}),
				homeService.shopData3(this.id)
				.then((res)=>{
					this.sellereva=res
//					console.log(this.sellereva)
				})
			},
			activityisshow(){
				this.isshow=!this.isshow
			}
			
		},
		mounted(){
			this.requestData2();
			this.contentScroll1 = new IScroll(".sellerleft", {
			probeType: 3,
			tap:true,
			click:true 
			});
			this.contentScroll2 = new IScroll(".sellerright", {
				probeType: 3,
				tap:true,
				click:true 
			});
			
		},
		updated(){
		this.contentScroll1.refresh();
		this.contentScroll2.refresh();
		}
		
	}
</script>

<style>
	.sellermain{
		position: absolute;
		width:100%;
		height:100%;
		top: 0;
		left: 0;
		background: #fff;
		
	}
	.sellermain>div{
		position: relative;
		width:100%;
		height:100%;
		
	}
	/*详情页上半部分*/
	.sellerheader{
		height:142px;
		width:100%;
		background: #b1a8b6;
		overflow: hidden;
		color: #fff;
		position: relative;
		
	}
	.sellermain .sellerheader .back{
		width: 100%;
		font-size: 30px;
		margin: 10px;
		color: #fff;
		font-weight: 900;
	}
	.shleft{
		width:100px;
		float: left;
		
	}
	.shleft img{
		width:66px;
		height:66px;
		margin-left:20px
	}
	.shright{
		float: left;
		width:250px
	}
	.shright h1{
		font-size: 20px;
	}
	.shright p{
		font-size:12px;
		line-height:25px
	}
	.selleractivity{
		font-size: 12px;
		position: absolute;
		left: 100px;
		bottom: 10px;
		width:250px;
		
	}
	
/*详情页下半部分*/
	.sellerbottom{
			
		}
	.sellerDetailEvaluate{
		position: absolute;
		top: 182px;
		left:0;
		bottom: 44px;
		width:100%;
		background: #fff;
	}
	.sellerDetailShop{
		position: absolute;
		top: 182px;
		left:0;
		bottom: 44px;
		width:100%;
		background: #fff;
	}
	
	.sellerbottom_title{
		width:100%;
		height:40px; 
		position: relative;
	}
	.sellerbottom_title ul{
		width:100%;
		height:100%;
		display: flex;
	}
	.sellerbottom_title ul li{
		flex:1;
		text-align: center;
		line-height: 40px;
	}
	.sellerleft{
		position: absolute;
		top: 182px;
		bottom: 44px;
		left: 0;
		overflow: hidden;
		width:30%
	}
	.sellerleft-w{
		width:100%
	}
	.sellerleft-list{
		height:50px;
		width:75px;
		font-size: 14px;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 5px;
		overflow: auto;
	}
	.sellerleft-list  a{
		color: #666;
	}
	.sellerleft-list img{
		height:14px;
		width:14px
	}
	.sellerright{
		width:70%;
		position: absolute;
		top: 182px;
		bottom: 49px;
		left: 85px;
		overflow: hidden;
	}
	.sellerright-w{
		width:100%
	}
	.sellerright .sellerright-list p{
		height:19px;
		width:100%;
		font-size: 19px;
		line-height: 30px;
		margin-top:10px ;
		margin-bottom:20px ;
	}
	.sellerright .sellerright-list ul li{
		font-size:12px ;
		position: relative;
		display: flex;
	/*	justify-content: space-between;*/
	}
	.sellerright .sellerright-list ul li img{
		width:50px;
		height:50px;
		
	}
	.sellerright  .Add_goods{
		position: absolute;
		right: 20px;
		background:#3190e8;
		border-radius: 50%;
		width:20px;
		height:20px;
		font-size:18px;
		line-height: 20px;
		text-align: center;
		color: #fff;
		font-weight: 900;
		top: 10px;
	}
	/*店铺活动展开页面*/
	.activity_body{
		position: absolute;
		height:100%;
		width:100%;
		background:#000 ;
		opacity: 0.8;
		z-index: 1000000;
		color: #fff;
		font-size: 12px;
	}
	.activity_body .activity_title{
		text-align: center;
		margin:80px 0
	}
	.activity_body .favorable_body{
		margin:100px 50px;
		margin-bottom: 50px;
	}
	.activity_body .favorable_body .favorable_title{
		width: 80px;
		text-align: center;
		border: 1px solid #fff;
		border-radius:5px ;
		font-size: 16px;
		margin:10px auto ;
	}
	.activity_body .favorable_body ul li{
		margin-top: 10px;
	}
	.activity_body .notice{
		margin:30px 50px
	}
	.activity_body .notice .notice_title {
		width: 80px;
		text-align: center;
		border: 1px solid #fff;
		border-radius:5px ;
		font-size: 16px;
		margin:10px auto ;
	}
	.cancel{
		width:35px;
		height:35px;
		border-radius: 50%;
		border:1px solid #fff;
		text-align: center;
		line-height: 35px;
		font-size: 30px;
		position: absolute;
		bottom: 50px;
		left: 50%;
		margin-left: -20px;
	}
</style>