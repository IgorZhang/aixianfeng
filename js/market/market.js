define(['text!../../html/market/market.html', 'css!../../css/market/market.css'], function (html) {
	
	var ajaxData = function (category) {
		$.get("http://www.vrserver.applinzi.com/aixianfeng/apicategory.php", {
			category : category
		}, function (data) {
			var data = JSON.parse(data);
			console.log(data);
			$('.goods-list ul').html("");
			$.each(data.data, function (key, value) {
				$('<li class="goods-items">'
					+	'<div class="img-wrap">'
					+		'<img src="" data-original="'+value.img+'"/>'
					+	'</div>'
					+	'<div class="goods-info">'
					+		'<p class="goods-name">'+value.name+'</p>'
					+		'<div class="goods-lable">'
					+			'<span class="maizeng">'+value.pm_desc+'</span>'
					+		'</div>'
					+		'<p class="goods-spec">'+value.specifics+'</p>'
					+		'<p class="goods-price">'
					+			'<span class="now-price">￥'+value.price+'</span>'
					+			'<span class="old-price">￥'+value.market_price+'</span>'
					+		'</p>'
					+		'<section class="buy-btn">+</section>'
					+	'</div>'
					+'</li>').appendTo($('.goods-list ul'));
			});
			
			$('img').lazyload({
				effect: 'fadeIn',
				container: $('.right-main')
			})
			
		});
	}
	
	var bindEvent = function () {
		$('.left-nav-ul li').click(function () {
			console.log($(this).text())
			ajaxData($(this).html());
			$('.left-nav-ul li').removeClass('selected');
			$(this).addClass('selected');
		});
	}
	
	var render = function () {
		$('.container').html(html);
		var mainHeight = document.body.offsetHeight-$('.tabBar').height()-$('.market header').height();
		$('div.market main').height(mainHeight);
	}
	
	// 获取内容，将内容显示到页面container中
	// 将功能封装函数
	return {
		render: render,
		ajaxData: ajaxData,
		bindEvent: bindEvent
	}
	
});
