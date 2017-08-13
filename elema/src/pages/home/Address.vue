<template>
<div class="page subpage addressall">
	<div class="address-header">
		<p>
			<span @click="backAction"><</span>选择地址
		</p>
	</div>
	<div class="address-search" >
		<input type="text" v-model="keyword"/>
	</div>
	<ul>
		<li v-for="item in searchAddress" @click="addressSelected(item)">
			<p class="address-name">{{item.name}}</p>
			<p class="address-sort">{{item.address}}</p>
		</li>
	</ul>
</div>
</template>

<script>
	import homeService from '../../services/homeService.js'
	import {mapState} from 'vuex'
	export default {
	
	data(){
		return{
			keyword:"",
			searchAddress:[]
		}
	},
	computed: {
		...mapState([
			'longitude',
			'latitude'
		])
	},
	methods: {
		backAction(){
			this.$router.back();
		},
		addressSelected(info){
			console.log(info)
			//触发空实例的自定事件
			this.$eventHandle.$emit('get-address', info.name);
			//修改全局状态
			this.$store.dispatch('changeLocation', {
				lg: info.longitude,
				lt: info.latitude
			});
			this.$router.back();
		}
	},
	mounted(){
		//请求热搜词
		this.$watch("keyword",function(){
			clearTimeout(timer);
			var timer = setTimeout(()=>{
				var lg = this.longitude;
				var lt = this.latitude;
				homeService.searchAddressData(this.keyword,lg, lt)
				.then((res)=>{
				console.log(res)
				this.searchAddress=res
			})
		}, 500);
		})
	},
	created(){}
	}
</script>

<style>
.page{ 
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height:100%;
	background: #fff;
}
.address-header{
	width:100%;height: 44px;
	background: #009fff;
	color: #fff;
	text-align: center;
	line-height: 44px;
}
.address-header span{
	float: left;
	margin-left: 10px;
}
.address-search{
	width:100%;height: 50px;
	background: #009fff;
	color: #fff;
	text-align: center;
	
}

.address-search input{
	width:88%;
	height:70%;
	border: 0;
	border-radius: 20px;
	padding-left: 10px;
}
.address-name{
	font-size: 20px;
	color: #000;
	font-weight: 900;
}
.address-sort{
	font-size: 18px;
	color: #ababab;
}
.addressall ul li{
	padding: 10px;
}
</style>