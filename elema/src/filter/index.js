import Vue from 'vue'
import API from '../url-api'

Vue.filter('imgFilter', function(val){
	if(val == null){
//		val === null || val === undefined
		return '';
	}
	var pex = val.endsWith('png')? '.png': '.jpeg';
	return API.imgHost + val + pex;
})


Vue.filter('original', function(val){
	if(val == 0){
//		val === null || val === undefined
		return '';
	}
	
	return "￥"+val
})