window.onload = function() {

	var i = 0;
	var j = false;

	for ( i = 0; i < $('.btn').length; i++) {

		$('.btn')[i].onclick = function() {
			switch(this.innerHTML) {
				case 'C':
					$('.result')[0].value = 0;
					$('.formula')[0].value = '';
					break;
				case '%':
					count('%');
					break;
				case '÷':
					count('/');
					break;
				case '×':
					count('*');
					break;
				case '+':
					count('+');
					break;
				case '-':
					count('-');
					break;
				case '=':
					j || ($('.formula')[0].value += $('.result')[0].value);
					$('.result')[0].value = eval($('.formula')[0].value.replace(/\%\/\*\-\+/,''));
					$('.result')[0].value = $('.result')[0].value.substr(0,10).replace("NaN",0);
					j = true;
					break;
				case '.':
					if($('.result')[0].value.search(/[\.\%\/\*\-\+]/) != -1)
					break;
				default:
					j && ($('.result')[0].value = 0, $('.formula')[0].value = '', j = false);
					$('.result')[0].value.length < 10 
						&& ($('.result')[0].value = ($('.result')[0].value + this.innerHTML)
						.replace(/^[0\%\/\*\-\+](\d)/, '$1'));
			}
		}
	}

	function count(a) {

		if(j) {
			$('.formula')[0].value = $('.result')[0].value + a;
			$('.result')[0].value = a;
			j = false;
		} else {
			/[\%\/\*\-\+]$/.test($('.result')[0].value) 
				|| ($('.formula')[0].value += $('.result')[0].value);
			$('.result')[0].value = a;
			/[\%\/\*\-\+]$/.test($('.formula')[0].value) 
				|| ($('.formula')[0].value += $('.result')[0].value);
			$('.formula')[0].value = $('.formula')[0].value.slice(-1) != a 
				? $('.formula')[0].value.replace(/.$/,a) : $('.formula')[0].value
		}
	}
	
};