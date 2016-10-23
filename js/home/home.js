define(['text!../../html/home/home.html', 'css!../../css/home/home.css', 'css!../../css/home/swiper', 'swiper'], function(html) {
	
	var ajaxMenuData = function () {
		$.get("http://www.vrserver.applinzi.com/aixianfeng/apihome.php", function (data) {
			var data = JSON.parse(data);
			console.log(data);
			addData(data);
			$('img').lazyload({
				effect: 'fadeIn'
			})
		});
		
		function addData (data) {
			
			$.each(data.data, function(key,value) {
				if(key == 'menu') {
					$.each(value, function(key,value) {
						var item = value.activity;
						$('<li>'
								+'<a href="#crazykill">'
								+	'<div><img src="'+ item.img +'" alt="" ></div>'
								+	'<p>' +item.name+ '</p>'
								+'</a>'
							+'</li>').appendTo($('.shortcut-nav'));
					});
				} else if(key == 'slide'){
					$.each(value, function(key,value) {
						var item = value.activity;
						$('<div class="swiper-slide">'
					        +	'<img src="'+ item.img +'" alt="'+item.name+'" tittle="'+item.name+'">'
					        +'</div>').appendTo($('.swiper-wrapper'));
					});
				}
			});
			
			
			
		}
		
	}
    
	
        
	var ajaxHotData = function () {
		
		$.get("http://www.vrserver.applinzi.com/aixianfeng/apihomehot.php", function (data) {
			var data = JSON.parse(data);
			console.log(data)
			addData(data);
			$('img').lazyload({
				effect: 'fadeIn'
			})
		})
		function addData (data) {
			
			$.each(data.data, function(key, value) {
				$('<section class="hot-item">'
					+	'<div class="img-wrap">'
					+		'<img src="" data-original="'+value.img+'" alt="">'
					+	'</div>'
					+	'<div class="goods-info">'
					+		'<p class="goods-name">'+value.name+'</p>'
					+		'<div class="goods-lable">'
					+			'<span>'+value.pm_desc+'</span>'
					+		'</div>'
					+		'<p class="goods-spec">'+value.specifics+'</p>'
					+		'<p class="goods-price">'
					+			'<span class="now-price">￥<span>'+value.price+'</span></span>'
					+			'<span class="old-price">￥<span>'+value.market_price+'</span></span>'
					+		'</p>'
					+		'<section class="buy-btn">+</section>'
					+	'</div>'
					+'</section>').appendTo($('.moreHot .content'));
			});
			
			
		}
	}
    
    var wxsao = function () {
    
    	document.querySelector('.saoyisao').onclick = function () {
        	saoyisao();
        }
    
    }
	
    

	
	// 获取内容，将内容显示到container中
	// 将功能封装为函数
	return {
		render: function () {
			$('.container').html(html);
			$('body>footer').show();
		},
		ajaxMenuData: ajaxMenuData,
		ajaxHotData : ajaxHotData,
        wxsao: wxsao
	}
	
});

$(document).ready(function () {
	setTimeout(function () {
		var mySlides = new Swiper(".swiper-container", {
		loop: true,
		autoplay: 3000,
		// 分页器
		pagination: '.swiper-pagination'
		} )
	},2000)
	
});



