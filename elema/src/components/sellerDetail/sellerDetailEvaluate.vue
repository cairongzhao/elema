<template>
	<div class="evaluate-main">
		<div class="evaluate-header">
			<div class="ev-left">
				<h5>{{sellerheader.rating}}</h5>
				<dl>
					<dt>综合评价</dt>
					<dd>高于周边商家29%</dd>
				</dl>
				
			</div>
			<div class="ev-right">
				<p>服务态度</p>
				<p>菜品评价</p>
				<p>送达时间
					<span>
						{{sellerheader.order_lead_time}}分钟				
					</span>
				</p>
			</div>
		</div>
		<div class="evaluate-main2">
			<div class="evaluate-main2-w">
				<div class="main-top">
					<div v-for="item in evaluate" @click="evaclick(item.name)">
						{{item.name}}
					</div>
				</div>
				<div class="main-bottom">
					<div v-for="item in evaluatemain">
						<p>{{item.username}}<span>{{item.rated_at}}</span></p>
						<div>
							<img :src="item1.image_hash | imgFilter" v-for="item1 in item.item_ratings"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	
	</div>
</template>

<script>
	import {mapState}  from 'vuex'
	import homeService from '../../services/homeService.js'
export default{
	data(){
		return{
			name:"全部",
			evaluate:[],
			evaluatemain:[]
		}
	},
	computed: {
		...mapState([
				'longitude',
				'latitude',
				'id'
			])
		},
	props: {
		sellereva:Array,
		sellerheader:Object
	},
	methods:{
		requestseller(){
				
				homeService.shopevaluate(this.id)
				.then((res)=>{
//					console.log(res)
					this.evaluate=res
//					console.log(this.sellerleft)
				})
		},
		requestseller2(){
			homeService.shopevaluatemain(this.id,this.name)
				.then((res)=>{
					console.log(res)
					this.evaluatemain=res
//					console.log(this.sellerleft)
				})
		},
		evaclick(val){
		
			this.name=val
			console.log(this.name)
			this.requestseller2()
		}
	},
	created(){
		this.requestseller()
		this.requestseller2()
	
	},
	
	
	mounted(){
			this.evaluateScroll = new IScroll(".evaluate-main2", {
			probeType: 3,
			tap:true,
			click:true 
			});
		
	},
	updated(){
		this.evaluateScroll.refresh();
	}
}
</script>

<style>
	.evaluate-main{
		width:100%;
		position: relative;
		background: #eeeeee;
		height:400px
	}
	.evaluate-header{
		width:100%;
		padding: 18px 0;
		display: flex;
		margin-bottom: 10px;
		background: #fff;
	}
	.evaluate-header .ev-left{
		height:65px;
		width:110px;
		border-right:1px solid #ccc;
		padding-right: 20px;
	}
	.evaluate-header .ev-right{
		height:65px;
		width:170px;
		padding-left:30px;
	}
	.evaluate-header .ev-left h5{
		font-size: 26px;
		text-align: center;
		color: #ff6600;
		line-height: 35px;
	}
	.evaluate-header .ev-left dl dt{
		font-size: 16px;
		text-align: center;
		line-height:25px;
	}
	.evaluate-header .ev-left dl dd{
		font-size: 12px;
		text-align: center;
	}
	.evaluate-header .ev-right p{
		font-size: 16px;
		line-height:25px;
		color: #666;
	}	
	.evaluate-header .ev-right p span{
		font-size: 14px;
		line-height:25px;
		color: #666;
		padding-left: 20px;
	}
	.evaluate-main2{
		position:absolute;
		width:100%;
		top:102px;
		left: 0;
		bottom: 0;
		overflow: hidden;
		
	}
	.main-top{
		display: flex;
		flex-wrap: wrap;
		background: #fff;
	}
	.main-top>div{
		margin: 5px;
		font-size: 20px;
		border: 1px solid #666;
		border-radius:5px ;
		text-align: center;
		color: #666;
	}
	
	.main-bottom{
		width:100%;
		background: #fff;
	}
	.main-bottom>div{
		width:100%
	}
	
	.main-bottom>div p{
		padding:10px;
		width:100%;
		font-size: 16px;
		color: #666;
	}
	.main-bottom>div p span{
		float: right;
		margin-right: 10px;
	}
	.main-bottom>div>div{
		display: flex;
		padding: 20px;
	}	
	.main-bottom>div>div img{
		margin: 10px;
		width:75;
		height:75px
	}
</style>