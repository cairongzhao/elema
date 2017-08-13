<template>
	<div class="discover">
		<div class="top">
			<div v-for="item in dismainfirst">
			<dl>
				<dt  :style="'color:'+item.title_color">{{item.title}}</dt>
				<dd>{{item.subtitle}}</dd>
			</dl>
			<img :src="item.main_pic_hash | imgFilter"/>
			</div>
		</div>
		<div class="dineAndDash" v-for="item in dismaindine">
			<img :src="item.sub_pic_hash | imgFilter"/>
		</div>
		
	</div>
</template>

<script>
export default 
{
	props: {
		dismain:Array,
	},
	data(){
		return{
			dismainfirst:[],
			dismaindine:[]
		}
	}, 
	mounted(){
		this.$watch("dismain",function(){
			this.dismainfirst=this.dismain[0]
			this.dismaindine=this.dismain[1]
		})
	}
	
}

</script>

<style>
	.discover{
		width:100%;
		height:100%;
		background:#f5f5f5
	}
	.discover .top {
		width:100%;
		height:175px;
		margin-bottom: 10px;
		background:#fff
	}
	.discover>.top>div {
		width:50%;
		height:87px;
		float: left;
		position: relative;
		border-bottom: 1px solid #f5f5f5;
	}
	.discover>.top>div dl{
		margin: 14px;
		padding-top:10px ;
		float: left;
	}
	.discover>.top>div dl dt{
		font-size: 16px;
		line-height: 26px;
	}
	.discover>.top>div dl dd{
		font-size: 12px;
		line-height: 22px;
	}
	.discover>.top>div img{
		width:45px;
		height:45px;
		position:absolute;
		right: 10px;
		top:24px ;
	}
	.discover>.top>div:nth-of-type(1){
		width:49%;
		height:175px;
		border-right: 1px solid #f5f5f5;
	} 
	.discover>.top>div:nth-of-type(1) img{
		width:70px;
		height:70px;
		left: 20px;
		top: 80px;
		
	}
	.dineAndDash{
		width:100%;
		height:85px;
		margin-top:10px ;
		margin-bottom:10px ;
	}
	.dineAndDash img{
		width:100%;
		height:85px
	}
	
</style>