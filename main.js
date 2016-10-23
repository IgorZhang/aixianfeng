// 主模块，负责配置模块，写路由的启动
require.config({
	baseUrl: "./js/libs",
	paths: {
		'backbone': 'backbone',
		'css': 'css',
		'jquery': 'jquery',
		'text': 'text',
		'underscore': 'underscore',
		'swiper': '../home/swiper',
		'lazyload': 'lazyload/jquery.lazyload',
        'jssdk' : 'http://res.wx.qq.com/open/js/jweixin-1.0.0'
	}
	
});
require(['jquery'], function ($) {
	$('.tabBar .tabBar-item .img-wrap').click(function () {
		$('.tabBar .tabBar-item .img-wrap').removeClass("selected");
		$(this).addClass("selected");
	});
	
	require(['lazyload']);	// 在JQ引入成功后引入lazyload模块
});
// 使用模块，首先设置路由功能
require(['backbone'], function (Backbone) {
	
	// 给backbone的Router拓展构造函数
	// 针对我们的锚点，绑定函数
	var Router = Backbone.Router.extend({
	
		routes: {
			"": "home1",
		    'home': 'home1',
		    'market': 'market',
		    'xxyd': 'xxyd',
		    'buycar': 'buycar',
		    'mine': 'mine',
		    'crazykill': 'crazykill'
		},
        loading: function () {
			// 引入loading.JS模块，并执行方法
			require(['../home/loading'], function (load) {
				load.render();
			})

		},
		home1: function () {
			// 引入home.js模块，并执行方法
			
			require(['../home/home'], function (home) {
                
                console.log(home);
				home.render();
				home.ajaxMenuData();
				home.ajaxHotData();
                home.wxsao();
			});
            
            
		},
		market: function () {
			// 引入market.js模块，并执行方法
			
			require(['../market/market'], function (market) {
				market.render();
				market.ajaxData('热销榜');
				market.bindEvent();
			});
		},
		xxyd: function () {
			// 引入xxyd.js模块，并执行方法
			
			require(['../xxyd/xxyd'], function (xxyd) {
				xxyd.render();
				xxyd.ajaxData();
			});
		},
		buycar: function () {
			// 引入buycar.js模块，并执行方法
			
			require(['../buycar/buycar'], function (buycar) {
				buycar.render();
			});
		},
		mine: function () {
			// 引入mine.js模块，并执行方法
		
			require(['../mine/mine'], function (mine) {
				mine.render();
			});
		},
		crazykill: function () {
			
			// 引入crazykill.js模块，并执行方法
			require(['../home/crazykill'], function (crazy) {
				crazy.render();
				crazy.ajaxData();
			});
		}
	});
	
	// 创建router对象
	var router = new Router();
	//开启路由
	Backbone.history.start();
});





