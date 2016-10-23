define(['text!../../html/mine/mine.html', 'css!../../css/mine/mine'], function (html) {
	// 获取内容，将内容添加到container中
	// 将功能封装为函数
	return {
		render: function () {
			$('.container').html(html);		}
	};
});