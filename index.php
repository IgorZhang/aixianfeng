<?php
require_once "jssdk.php";
error_reporting(E_ERROR);
$jssdk = new JSSDK("wx5d2ba47e8c883456", "0debdb2fddbf2d607e1ab583db304b21");
$signPackage = $jssdk->GetSignPackage();
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js" charset="utf-8"></script>
        <script type="text/javascript" >
            
            wx.config({
                debug: true,
                appId: '<?php echo $signPackage["appId"];?>',
                timestamp:'<?php echo $signPackage["timestamp"];?>',
                nonceStr: '<?php echo $signPackage["nonceStr"];?>',
                signature: '<?php echo $signPackage["signature"];?>',
                jsApiList: [
                  // 所有要调用的 API 都要加到这个列表中
                 
                  'scanQRCode',
                  'getLocation'
                ]
        
            });
            wx.ready(function () {
                // 在这里调用 API
                alert("验证成功");
               	wx.getLocation({
                    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                    success: function (res) {
                        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                        var speed = res.speed; // 速度，以米/每秒计
                        var accuracy = res.accuracy; // 位置精度
                        alert(res);
                    }
                });
               
               
            });
            function saoyisao() {
                
                 alert("点击了扫一扫");
                 wx.scanQRCode({
                     needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                     scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                     success: function (res) {
                         var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                     }
                 });
                    
               }    
            
            wx.error(function(res){
                // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                alert(res);
            });
            
        </script>
        
        
		<style type="text/css">
			
			*{
				padding: 0;
				margin: 0;
			}
			html,body{
				height: 100%;
				font-size: 100px;
				background-color: #EFEFEF;
				font-family: 黑体;
			}
			a{
				text-decoration: none;
				color: black;
			}
			ul,li{
				list-style: none;
			}	
						
			footer{
				height: .6rem;
				position: fixed;
				bottom: 0;
				left: 0;
				background-color: rgba(250,250,250,.9);
				width: 100%;
			}
			footer .tabBar{
				display: flex;
				width: 100%;
			}
			.tabBar .tabBar-item{
				flex-grow: 1;
				padding: .05rem 0;
			}
			.tabBar .tabBar-item p{
				font-size: .13rem;
				text-align: center;
				line-height: .18rem;
				color: #666;
			}
			.tabBar .tabBar-item .img-wrap{
				height: .35rem;
				width: .35rem;
				margin: 0 auto;
				overflow: hidden;
				text-align: center;
				background: url(imgs/home/sprite_tab_icons.png);
				background-size: 1.55rem;
				background-position-y: 0;
			}
			.tabBar .tabBar-item .img-wrap.selected{
				background-position-y: -.32rem;
			}
			/*
			.tabBar .tabBar-item .img-wrap img{
				vertical-align: top;
				width: .3rem;
			}*/
			.tabBar .tabBar-item .tab-bg-2{
				background-position-x: -.30rem;
			}
			.tabBar .tabBar-item .tab-bg-3{
				background-position-x: -.60rem;
			}
			.tabBar .tabBar-item .tab-bg-4{
				background-position-x: -.90rem;
			}
			.tabBar .tabBar-item .tab-bg-5{
				background-position-x: -1.2rem;
			}
			
			
		</style>
	</head>
	<body>
		
		<div class="container"></div>
		
		
		
		<footer>
			<div class="tabBar">
				<div class="tabBar-item">
						<a href="#home">
						<div class="img-wrap tab-bg-1 selected">
						</div>
						<p>首页</p>
					</a>
				</div>
				<div class="tabBar-item">
					<a href="#market">
						<div class="img-wrap tab-bg-2">
						</div>
						<p>闪送超市</p>
					</a>
				</div>
				<div class="tabBar-item">
					<a href="#xxyd">
						<div class="img-wrap tab-bg-3">
						</div>
						<p>新鲜预定</p>
					</a>
				</div>
				<div class="tabBar-item">
					<a href="#buycar">
						<div class="img-wrap tab-bg-4">
						</div>
						<p>购物车</p>
					</a>
				</div>
				<div class="tabBar-item">
					<a href="#mine">
							<div class="img-wrap tab-bg-5">
						</div>
						<p>我的</p>
					</a>
				</div>
			</div>
		</footer>
		
	</body>
	<script src="js/libs/requirejs.js" type="text/javascript" charset="utf-8" data-main="main"></script>
    
    
   
    
</html>