
//home 页面数据
const imgHost = 'http://fuss10.elemecdn.com/';
//地址栏信息
const addressApi = '/bgs/poi/reverse_geo_coding';
//搜索地址
const addressSearchApi = '/bgs/poi/search_poi_nearby?offset=0&limit=10';
//天气信息
const weatherApi = '/bgs/weather/current';
//热搜词
const hotWordsApi = '/shopping/v3/hot_search_words';
//轮播类别数据
const categoryApi = '/shopping/v2/entries?templates[]=main_template';
//店铺
const homeListApi = '/shopping/restaurants?offset=0&limit=20&extras[]=activities&terminal=h5';
//店铺详情页面
const homeshopApi1 ='/shopping/v2/menu';
const homeshopApi2 ='/shopping/restaurant/'
const homeshopApi3 ='/ugc/v2/restaurants/'
//店铺评价
const shopevaluateApi='/ugc/v2/restaurants/';
//评价详情
const shopevaMainApi='ugc/v2/restaurants/'






//discover 页面数据
const discoverMainApi = '/member/v1/discover?platform=1&block_index=0';
//发现页面 限时好礼数据
const discovergiftsApi='/member/gifts/suggest';
//发现页面  
const discoverfoodApi='/hotfood/v1/guess/likes?offset=0&limit=3&request_id=3f212c21-0275-4127-a06b-2b0a2d461398&tag_id=-1&columns=1'



export default {
	imgHost,
	addressApi,
	weatherApi,
	hotWordsApi,
	categoryApi,
	homeListApi,
	discoverMainApi,
	discovergiftsApi,
	discoverfoodApi,
	addressSearchApi,
	homeshopApi1, 
	homeshopApi2,
	homeshopApi3 ,
	shopevaluateApi,
	shopevaMainApi,
	
}



//export default {
//	addressApi: host+addressApi
//}


