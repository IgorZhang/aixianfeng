define(['text!../../html/home/crazykill.html', 'css!../../css/home/crazykill.css'], function (html) {
	
	var ajaxData = function () {
		
		$.get("http://www.vrserver.applinzi.com/aixianfeng/apimiaosha.php", function (data) {
	
			var data = JSON.parse(data);
			console.log(data);
			$.each(data.product, function(key, value) {
				$('<li><div class="img-wrap">'
					+		'<img src="" data-original="'+ value.img +'" alt="" />'
					+	'</div>'
					+	'<div class="goods-info">'
					+	'	<p class="goods-name">' +value.name +'</p>'
					+		'<p class="goods-spec">'+ value.specifics +'</p>'
					+		'<p class="goods-price">'
					+			'<span class="now-price">￥<b>'+value.price+'</b></span>'
					+			'<span class="old-price">/原价：'+ value.market_price + '元</span>'
					+		'</p>'
					+		'<div class="buy-btn">'+ value.btnText +'</div>'
					+	'</div>'
					+'</li>').appendTo('.crazykill .goods-list');
			});
			
			$('img').lazyload({
				effect: 'fadeIn'
			})
			btnStyle();
		});
	}
	
	
	var render = function () {
		$('.container').html(html);
		$('body>footer').hide();
	}
	
	return {
		render: render,
		ajaxData: ajaxData
	}
})



function btnStyle () {
	console.log(11)
	$.each($('.goods-list li .buy-btn'), function(index, value) {
		console.log($(value).text())
		if($(value).text() == "已抢光"){
			$(value).css('background-color', '#AAAAAA')
		} else if($(value).text() == "即将开抢") {
			$(value).css('background-color', '#FFD600')
		}
	});
	
}