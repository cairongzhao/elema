<template>
<div id="me" class="page">
	<div class="my-header">
		<p><span><</span>我的</p>
		<div>
			<div class="myheader-left">
				<img src="../../../img/images/2017-08-09_203036_03.gif"/>
			</div>
			<div class="myheader-right">
				<h3>登录/注册</h3>
				<p>登陆后享受更多特权</p>
			</div>
			<div class="Tg">></div>
		</div>
	</div>
	<div class="center">
		<div>
			<dl>
				<dt class="iconfont" style="background: #ff846b;">&#xe63b;</dt>
				<dd>优惠</dd>
			</dl>
		</div>
		<div>
			<dl>
				<dt class="iconfont" style="background: #6ac20b;">&#xe618;</dt>
				<dd>积分</dd>
			</dl>
		</div>
	</div>
	<div class="my-bottom">
		<ul>
			<li>
				<router-link to="/order">
				<i class="iconfont">&#xe691;</i>我的订单
				</router-link>
			</li>
			<li>
				<i class="iconfont">&#xe613;</i>积分商城
			</li>
			<li>
				<i class="iconfont">&#xe601;</i>饿了吗会员卡
			</li>
			<li>
				<i class="iconfont">&#xe63e;</i>服务中心
			</li>
			<li>
				<i class="iconfont">&#xe64f;</i>下载饿了吗APP
			</li>
		</ul>
	</div>
	<!--<div class="login"  v-if="false">
		账号<input @blur="" type="text" v-model="account"><br />
		密码<input @blur="" type="text" v-model="password"><br />
		
		<buttom @click="logina">登录</buttom>
		<buttom>取消</buttom>
	</div>-->

</div>
</template>

<script>
export default {
	data(){
		return{
		account:"",
		password:"",
		flag1:false,
		flag2:false
		}
	},
	methods: {
		 Account(){
		 	var value = this.value;
					var reg = /^[a-zA-Z_]\w{7,}$/;
					if (reg.test(value)){
						
						flag1 = true;
					}
					else {
						
						flag1 = false;
					}
		 },
		 Password(){
		 	var value = this.value;
						var reg = /^.{6,20}$/;
					if (reg.test(value)){
						flag2= true;
					}
					else {
						flag2 = false;
					}
		 },
		 logina(){
		 	if(flag1==true&&flag2==true){
		 		console.log(1)
		 		this.$router.back();
		 	}
		 }
	}
}
</script>

<style>
#me{
	
}
.my-header{
	background:#0089ff;
	width:100%;
	height:120px;
	
}
.my-header .myheader-left{
	float:left;
	width:75px;
}
.my-header .myheader-left img{
	margin: 10px;
}
.my-header .myheader-right{
	padding-top: 10px;
	float:left;
	color: #fff;
}
.Tg{
	position: absolute;
	right: 10px;
	top: 60px;
	color: #fff;
}
.my-header>p{
	font-size: 18px;
	line-height: 40px;
	text-align: center;
	color: #fff;
}
.my-header p span{
	float: left;
	margin-left: 20px;
	font-size: 20px;
}
.center{
	width:65px;
	width:100%;
	display: flex;
	
}
.center>div{
	flex: 1;
	height:65px
}
.center>div dl{
	height:65px;
	height:100%;
	width:100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.center>div dl dt{
	text-align: center;
	color: #fff;
	margin:0 auto;
	font-size: 14px;
	background: #ff846b;
	border-radius: 50%;
	line-height:20px;
	width:20px;
	height:20px;
	margin-bottom: 10px;
}
.center>div dl dd{
	text-align: center;
	font-size: 16px;
	color: #666;
}
.my-bottom{
	width:100%
}
.my-bottom ul{
	padding: 20px;
}
.my-bottom ul li{
	margin-top: 10px;
	height:50px;
	font-size: 20px;
}
.my-bottom ul li i{
	font-size: 25px;
}
.login{
	width:100%;
	height: 100%;
	position: absolute;
	top: 0;
	background: #fff;
}
</style>