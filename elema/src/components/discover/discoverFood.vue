<template>
	<div class="hotfood">
		<div class="activity-header">
			<span class="line-left"></span>
			<span class="activity-icon iconfont">&#xe67f;</span>
			热推美食
			<span class="line-right"></span><br />
			<span>你的口味，我都懂的</span>
		</div>
		
		<div class="activity-body">
			<div class="discover-food" v-for="item in hotfood">
				<img :src="item.image_hash | imgFilter"/>
				<div>
					<p class="food-name">
						{{item.name}}
					</p>
					<p class="food-info">
						<i style="font-style:normal;color:#ff5339">￥{{item.price}}</i>
						<span style="text-decoration: line-through;" v-if="!(item.original_price==item.price)">{{item.original_price}}</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default 
{
	props: {
		
		hotfood:Array
	}
	
	
}
</script>

<style>
	.hotfood{
		width:100%;
		background:#fff
	}
	.hotfood .activity-header{
		text-align: center;
		font-size: 18px;
		font-weight: 900;
	}
	.hotfood .activity-header .activity-icon{
		font-size: 28px;
		color:#ff5339
	}
	.hotfood .activity-header span{
		font-size: 12px;
		font-weight: 100;
	}
	.hotfood .activity-body{
		height:200px;
		width:100%;
		display: flex;
	}
	.hotfood  .activity-body .discover-food{
		flex: 1;
		margin-top: 20px;
		margin-bottom:20px
	}
	.hotfood  .activity-body .discover-food>span{
		text-align: center;
		display: block;
		width:60px;
		height: 20px;
		font-size: 14px;
		line-height: 20px;
		background: #413d3c;
		color: #fff;
	}
	.hotfood .activity-body .discover-food img{
		margin-left: 8px;
		width:110px;
		height:110px;
	}
	.hotfood  .activity-body .discover-food>div p{
		text-align: center;
		line-height: 16px;
	}
	.hotfood  .activity-body .discover-food .food-name{
		font-size: 12px;
		
	}
	.hotfood  .activity-body .discover-food .food-name{
		font-size: 14px;
		
	}
	.hotfood  .activity-body .discover-food .food-info{
		font-size: 14px;
	}
	.hotfood  .activity-body .discover-food .food-info span{
		font-size: 8px;
		
	}
</style>