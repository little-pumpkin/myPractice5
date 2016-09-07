window.onload = function() {

	function getTimes() {

		var date = new Date();
		// ^(\d)$是0-9的任意一个数字，^表示以...开头，\d表示0-9的数字，$表示以...结尾
		var hour = date.getHours().toString().replace(/^(\d)$/, '0$1');
		var min = date.getMinutes().toString().replace(/^(\d)$/, '0$1');
		var sec = date.getSeconds().toString().replace(/^(\d)$/, '0$1');

		$('.hour')[0].innerHTML = hour;
		$('.min')[0].innerHTML = min;
		$('.sec')[0].innerHTML = sec;

	}

	setInterval(getTimes, 1000);


	// 倒计时
	function getTimes2() {
		var endtime = new Date('2017/10/1 00:00:00');
		var nowtime = new Date();
		var t = endtime.getTime() - nowtime.getTime();

		$('.c-day')[0].innerHTML = Math.floor(t/1000/60/60/24);
		$('.c-hour')[0].innerHTML = Math.floor(t/1000/60/60%24);
		$('.c-min')[0].innerHTML = Math.floor(t/1000/60%60);
		$('.c-sec')[0].innerHTML = Math.floor(t/1000%60);
	};

	setInterval(getTimes2, 1000);

};














