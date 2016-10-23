define(["text!../../html/buycar/buycar.html", "css!../../css/buycar/buycar"], function (html) {
	// 获取内容，将内容添加到container中
	// 将功能封装成函数
	return {
		render: function () {
			$('.container').html(html);
		}
	}
});