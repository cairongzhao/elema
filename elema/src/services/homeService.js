//专门为home处理请求
import API from '../url-api'
import axios from 'axios'

//请求地址
function getAddressData(lg, lt){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.addressApi}?longitude=${lg}&latitude=${lt}`)
		//请求成功
		.then((response)=>{
		    resolve(response.data.name);
		})
		//请求失败
		.catch(function (error) {
		    console.log(error);
		});
	})
}

//请求天气
function getWeatherData(lg, lt){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.weatherApi}?longitude=${lg}&latitude=${lt}`)
		.then((response)=>{
		    resolve(response.data);
//		    resolve({
//		    	temperature: response.data.temperature,
//		    	imgPath: response.data.image_hash,
//		    	description: response.data.description
//		    });
		})
		.catch(function (error) {
		    console.log(error);
		});
	})
}

//请求热搜词
function getHotWordsData(lg, lt){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.hotWordsApi}?longitude=${lg}&latitude=${lt}`)
		.then((response)=>{
			var newArr = response.data.map((item)=>{
				return item.word;
			})
			resolve(newArr);
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}
//轮播图
function getHomeBannerData(lg, lt){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.categoryApi}&longitude=${lg}&latitude=${lt}`)
		.then((response)=>{
			var newArr = response.data[0].entries.map((item)=>{
				var newItem = {};
				newItem.name = item.name;
				newItem.id = item.id;
				newItem.imgPath = item.image_hash;
				newItem.flag = item.business_flag;
				return newItem;
			})
			resolve(newArr);
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}

//请求商家列表
function getHomeListData(lg, lt){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.homeListApi}&longitude=${lg}&latitude=${lt}`)
		.then((response)=>{
			
			var newArr = response.data
			resolve(newArr);
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}
//搜索地址请求
function searchAddressData(keyword,lg, lt){
	console.log(keyword)
	return new Promise((resolve, reject)=>{
//		axios.get(API.addressSearchApi+'&keyword='+keyword)
		axios.get(`${API.addressSearchApi}&longitude=${lg}&latitude=${lt}&keyword=${keyword}`)
		.then((response)=>{
			
			resolve(response.data);
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}
//店铺详情数据请求
function shopData1(id){
	
	return new Promise((resolve, reject)=>{
//		axios.get(API.addressSearchApi+'&keyword='+keyword)
		axios.get(`${API.homeshopApi1}?restaurant_id=${id}`)
		.then((response)=>{
			
			resolve(response.data);
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}
function shopData2(id,lg,lt){
	
	return new Promise((resolve, reject)=>{
//		axios.get(API.addressSearchApi+'&keyword='+keyword)
		axios.get(`${API.homeshopApi2}${id}?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&longitude=${lg}&latitude=${lt}`)
		.then((response)=>{
			
			resolve(response.data);
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}
function shopData3(id){
	
	return new Promise((resolve, reject)=>{
//		axios.get(API.homeshopApi3)
		axios.get(`${API.homeshopApi3}${id}/ratings?has_content=true&offset=0&limit=10`)
		.then((response)=>{
//			console.log(response)
			resolve(response.data);
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}
//店铺评价
function shopevaluate(id){
	
	return new Promise((resolve, reject)=>{
//		axios.get(API.homeshopApi3)
		axios.get(`${API.shopevaluateApi}${id}/ratings/tags`)
		.then((response)=>{
//			console.log(response)
			resolve(response.data);
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}
function shopevaluatemain(id,name){
	
	return new Promise((resolve, reject)=>{
//		axios.get(API.homeshopApi3)
		axios.get(`${API.shopevaMainApi}${id}/ratings?has_content=true&offset=0&limit=10${name}`)
		.then((response)=>{
//			console.log(response)
			resolve(response.data);
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}

export default {
	getAddressData,
	getWeatherData,
	getHotWordsData,
	getHomeBannerData,
	getHomeListData,
	searchAddressData,
	shopData1,
	shopData2,
	shopData3,
	shopevaluate,
	shopevaluatemain
}



