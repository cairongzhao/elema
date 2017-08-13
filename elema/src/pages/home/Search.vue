<template>
<div class="page subpage">
	<div class="search-header">
		<p>
			<span @click="backAction"><</span><input type="text" v-model="keyword1"/>
		</p>
	</div>
	<div class="hot">
		<h1>热门搜索</h1>
		<p>
			<span v-for="item in hotWords">{{item}}</span>
		</p>
		
	</div>
	
</div>
</template>

<script>
	import {mapState} from 'vuex'
	import homeService from '../../services/homeService.js'
export default {
	
	data(){
		return{
			hotWords:[],
			keyword1:""
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
		}
	},
	mounted(){
		//请求热搜词
		var lg = this.longitude;
		var lt = this.latitude;
		homeService.getHotWordsData(lg, lt)
		.then((res)=>{
			
			this.hotWords = res;
			console.log(this.hotWords)
		})
		
	
	},
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
.search-header{
	width:100%;
	height: 44px;
	background: #fff;
	color: #999999;
	text-align: center;
	line-height: 44px;
}
.search-header span{
	float: left;
	margin-left: 10px;
}
.search-header input{
	width:80%;
	height:30px;
	
	border: 0;
	border-radius: 20px;
	background: #f8f8f8;
}
.hot{}
.hot h1{
	margin-top: 20px;
	font-size: 20px;
	line-height: 40px;
	color: #717171;
}
.hot span{
	padding: 5px;
	font-size: 14px;
	background: #f7f7f7;
	margin-left:10px;
	color: #717171;
	line-height: 40px;
}
</style>