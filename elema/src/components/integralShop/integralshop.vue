<template>
<div class="home-banner">
	<!--<div class="swiper-container " >
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="item1 in pageData">
				
			</div>
	    </div>
		 <div class="swiper-pagination"></div>
	</div>	-->
	{{divider}}
</div>
</template>

<script>
	import {mapState} from 'vuex'
	import homeService from '../../services/homeService.js'
	export default {
		methods: {
			data(){
				return{
					divider:""
				}
			},
		integral(){
			homeService.integrals()
			.then((res)=>{
			this.divider = res;
		})
		}
		}
	}
</script>

<style>
</style>