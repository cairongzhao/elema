<template>
<div class="home-header">
	<router-link to="/home/address">
		<div class="adres">
			<i class="iconfont">&#xe604;{{address}}</i>
		</div>
	</router-link>
	<div class="weather">
		<div>
			<p>{{weather.temperature}}°</p>
			<p>{{weather.description}}</p>
		</div>	
		<img :src="weather.image_hash | imgFilter"/>
	</div>
	<router-link to="/home/search">
		<div class="search" @click="aa" ></div>
	</router-link>
	<div class="hot-words">
		<span v-for="word in hotWords" @click="toSearchDetail(word)">{{word}}</span>
	</div>
</div>
	
	
</template>

<script>
export default {
	
	props: {
		address: String, 
		weather: Object,
		hotWords: Array
	},
	methods: {
		aa(){
//			console.log({{weather.image_hash | imgFilter}})
		}
	}
}

</script>

<style>
.home-header{
	height:123px;
	width:100%;
	background: #00a2fd;
	padding-top:30px ;
	position:relative;
	color: #fff;
	
}
.adres{
	
	width:53%;
	height:35px;
	position: absolute;
	left: 0;
	
}
.adres i{
	display: inline-block;
	height: 35px;
	line-height: 35px;
	padding: 0;
	margin: 0;
	list-style: none;
	font-size: 20px;
	overflow: auto;
	color: #fff;
}

.weather{
	width:25%;
	height:35px;
	position: absolute;
	right: 0;
	
}
.weather div{
	width:50%;
	height: 35px;
	position: absolute;
	right: 45%;
	top: 0;
}
.weather div p{
	text-align: right;
	font-size: 12px;
}
.weather img{
	height:35px;
	position: absolute;
	top: 0;
	right: 0;
}
.search{
	position: absolute;
	top: 80px;
	left: 5%;
	width:90%;
	height:40px;
	border-radius: 20px;
	border: 0;
	background:#fff
}
.home-header .hot-words{
	width: 90%;
	height: 12px;
	line-height: 12px;
	font-size: 12px;
	white-space: nowrap;
	overflow-x: auto;
	position: absolute;
	bottom: 15px;
	left: 10px;
}
.home-header .hot-words span{
	margin: 6px;
}
</style>