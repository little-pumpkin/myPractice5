window.onload = function() {

	setInterval(getTimes, 1000);

	getTimes();

	function getTimes() {

		var date = new Date();
		var hour = date.getHours().toString().replace(/^(\d)$/, '0$1');
		var min = date.getMinutes().toString().replace(/^(\d)$/, '0$1');
		var sec = date.getSeconds().toString().replace(/^(\d)$/, '0$1');

		$('.hour')[0].innerHTML = hour;
		$('.min')[0].innerHTML = min;
		$('.sec')[0].innerHTML = sec;

	}

}