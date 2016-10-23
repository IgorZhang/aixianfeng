define(['text!../../html/home/loading.html', 'css!../../css/home/loading'], function (html) {


	console.log(html)

	var render = function () {
		$('.container').html(html);
	}

	return {
		render : render
	}
})