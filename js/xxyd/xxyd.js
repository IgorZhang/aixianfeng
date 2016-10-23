define(['text!../../html/xxyd/xxyd.html', 'css!../../css/xxyd/xxyd'], function (html) {
	
	var ajaxData = function (tabNum) {
		
		$.get("http://www.vrserver.applinzi.com/aixianfeng/apiyuding.php", function (data) {
			var data = JSON.parse(data);
			console.log(data);
			$.each(data.product, function(key,value) {
				
				$('<li><div class="img-wrap">'
					+		'<img src="" alt="" data-original="'+value.img+'"/>'
					+	'</div>'
					+	'<div class="goods-info">'
					+		'<p class="goods-price">'
					+			'<span class="now-price">￥<b>'+value.price+'</b></span>'
					+			'<span class="old-price">￥<span>'+value.market_price+'</span></span>'
					+		'</p>'
					+	'</div>'
					+	'<section class="buy-btn"></section>'
					+'</li>').appendTo($('.goods-wrap-list'));
				
			});
			
			$('img').lazyload({
				effect: 'fadeIn'
			})
			
		});
	}
	
	
	// 获取内容，将内容显示到container中
	// 将功能封装到函数中
	return {
		render: function () {
			$('.container').html(html);
		},
		ajaxData: ajaxData
	}
})
