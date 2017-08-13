<template>
	<div class="gifts">
		<div class="activity-header">
			<span class="line-left"></span>
			<span class="activity-icon iconfont">&#xe68a;</span>
			限时好礼
			<span class="line-right"></span><br />
			<span>小积分换豪礼</span>
		</div>
		<div class="activity-body">
			<div class="discover-food" v-for="item in gifts">
				<span>{{item.corner_marker}}</span>
				<img :src="item.image_hash | imgFilter"/>
				<div>
					<p class="food-name">
						{{item.title}}
					</p>
					<p class="food-info">
						<i style="font-style:normal;color:#ff5339">{{item.points_required}}积分</i>
						<span style="text-decoration: line-through;">{{item.original_price|original}}</span>
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
		
		gifts:Array
	}
	
	
}
</script>

<style>
	.gifts{
		width:100%;
		background:#fff
	}
	.gifts .activity-header{
		text-align: center;
		font-size: 18px;
		font-weight: 900;
	}
	.gifts .activity-header .activity-icon{
		font-size: 28px;
		color:#ff5339
	}
	.gifts .activity-header span{
		font-size: 12px;
		font-weight: 100;
	}
	.gifts .activity-body{
		height:200px;
		width:100%;
		display: flex;
	}
	.gifts .activity-body .discover-food{
		flex: 1;
		margin-top: 20px;
		margin-bottom:20px
	}
	.gifts .activity-body .discover-food>span{
		text-align: center;
		display: block;
		width:60px;
		height: 20px;
		font-size: 14px;
		line-height: 20px;
		background: #413d3c;
		color: #fff;
	}
	.gifts .activity-body .discover-food img{
		width:100%;
		height:70%;
	}
	.gifts .activity-body .discover-food>div p{
		text-align: center;
		line-height: 16px;
	}
	.gifts .activity-body .discover-food .food-name{
		font-size: 12px;
		
	}
	.gifts .activity-body .discover-food .food-name{
		font-size: 14px;
		
	}
	.gifts .activity-body .discover-food .food-info{
		font-size: 14px;
	}
	.gifts .activity-body .discover-food .food-info span{
		font-size: 8px;
		
	}
</style>