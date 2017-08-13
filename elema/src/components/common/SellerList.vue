<template>
<div class="List">
	<h1>推荐商家</h1>
	<ul>
		
		<li v-for="item in list" @click="changeshopid(item)" >
			<router-link class="listli" to="/home/seller-detail" ></router-link>
			<div class="list-left" >
				<img  :src="item.image_path | imgFilter"/>
			<!--tips配送费 rating评分-->
			</div>
			<div class="list-right">
				<div class="introduce">
					<p class="shopping-name">{{item.name}} <span v-for=" item1 in item.supports">{{item1.icon_name}}</span></p>
					
					<div class="shopping-adress">
						<span>{{item.rating}}月售{{item.recent_order_num}}单</span><br />
						
						<span>{{item.piecewise_agent_fee.description}}</span>
						
						<div >
							<span class="distance">{{item.distance}}m/</span><span class="time">{{item.order_lead_time}}分钟</span>
						</div>
						
					</div>
					
				</div><br />
				<div class="Favbnt" @click="show(item)" >{{item.activities.length}}个活动</div>
				<div class="favorable">
					
					<p v-for="itemFav in item.newArr"  >
						<span :style="'background:#'+itemFav.icon_color">{{itemFav.icon_name}}</span>
						{{itemFav.tips}}
					</p>
					
				</div>
			</div>
			
		</li>
		
	</ul>
	
</div>
	
</template>

<script>
	import {mapState} from 'vuex'
	export default {
	data(){
		return{
			Favindex:2,
			list: [],
		
		}
	},
	props: {
		homeList:Array
	},
	computed: {
		...mapState([
			'longitude',
			'latitude',
			'id',
			'orderList'
		])
	},
	methods:{
		arrFilter(val){
			if(val.length > 2){
				var newArr = [val[0], val[1]];
				return newArr;
			}else{
				return val;
			}
		},
		show(item){
			
			console.log(item.newArr);
			if(item.newArr.length==2){
				item.newArr = item.activities;
			}else{
				item.newArr = this.arrFilter(item.activities);
			}
		},
		changeshopid(item){
		
			this.$store.dispatch('changeLocation', {
				lg: this.longitude,
				lt: this.latitude,
				id:item.id
			});
		}

	},
	created(){
		
	},
	mounted(){
		this.$watch("homeList",function () {
			var arr=[]
			for(var i = 0; i < this.homeList.length; i++){
				var item = {}
				item.image_path=this.homeList[i].image_path
				item.name = this.homeList[i].name
				item.supports = this.homeList[i].supports
				item.rating = this.homeList[i].rating
				item.recent_order_num = this.homeList[i].recent_order_num
				item.piecewise_agent_fee = this.homeList[i].piecewise_agent_fee
				item.order_lead_time = this.homeList[i].order_lead_time
				item.activities = this.homeList[i].activities
				item.id = this.homeList[i].id
				arr.push(item);
			}
//				 console.log(this.homeList)
				arr = arr.map((item)=>{
				item.newArr = this.arrFilter(item.activities);
				return item;
           		})
				this.list=arr
		
			
		})
			
	}
	}
</script>
	
<style>
	.List{
		width:100%;
		background: #fff;
	}
	.List h1{
		font-size: 24px;
		line-height: 50px;
	}
	#home .List ul{
		width:100%;
		background: #fff;
	}
	
	.List ul li{
		width:100%;
		color: #000;
		background: #fff;
		margin-top: 10px;
		display: flex;
		position: relative;
	}
	.listli{
		display: block;
		position:absolute;
		width:100%;
		height:100%
	}
	.List ul li .list-left{
		width:30%;
		background: #fff;
		
	}
	.List ul li img{
		margin: 10%;
		width:70%;
		height: 50px;
		
	}
	.List ul li .list-right{
		width:70%;
		float: right;
		width:70%;
		background: #fff;
	}
	.List ul li .introduce{
		
		width:100%;
	}
	.List ul li .shopping-name{
		
		display: inline-block;
		width:100%;
		font-size: 18px;
		position: relative;
	}
	.List ul li .shopping-name span{
		font-size: 12px;
		position: absolute;
		top:0;
		right: 0;
		color: #ccc;
		margin-right:5px ;
	}
	.List ul li .shopping-adress{
		font-size: 12px;
		color: #666;
	}
	.List ul li .shopping-adress div{
		float: right;
		display: inline-block;
		width:100px;
	}
	.List ul li .shopping-adress .time{
		color:lightskyblue
	}
	.favorable p{
		font-size: 12px;
		margin-top: 5px;
		color: #ccc;
	}
	.Favbnt{
		float: right;
		
		font-size: 10px;
		color: #ccc;
	}
</style>