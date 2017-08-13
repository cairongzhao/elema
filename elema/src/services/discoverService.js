import API from '../url-api'
import axios from 'axios'

//请求积分商场等数据
function getMainData(lg, lt){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.discoverMainApi}&longitude=${lg}&latitude=${lt}`)
		
		//请求成功
		.then((response)=>{
			
		    resolve(response.data); 
		})
		//请求失败
		.catch(function (error) {
		    console.log(error);
		});
	})
}
//请求限时好礼数据
function getgiftsData(lg, lt){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.discovergiftsApi}?longitude=${lg}&latitude=${lt}`)
		//请求成功
		.then((response)=>{
			
		    resolve(response.data); 
		})
		//请求失败
		.catch(function (error) {
		    console.log(error);
		});
	})
}
//请求美食热推数据
function getfoodData(lg, lt){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.discoverfoodApi}&longitude=${lg}&latitude=${lt}`)
		//请求成功
		.then((response)=>{
			
		    resolve(response.data); 
		})
		//请求失败
		.catch(function (error) {
		    console.log(error);
		});
	})
}



export default {
	getMainData,
	getgiftsData,
	getfoodData,
	}