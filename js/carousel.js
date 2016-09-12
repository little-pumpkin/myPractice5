$(document).ready(function() {

	var first = $('.carousel li').first();
	var last = $('.carousel li').last();
	var liWidth = first.width()+20;

  var carousel = $('.carousel ul');
  carousel
  	.prepend( last.clone())
  	.append( $('.carousel li').eq(1).clone())

  	.prepend( $('.carousel li').eq(6).clone())
  	.append( $('.carousel li').eq(3).clone())

  	.prepend( $('.carousel li').eq(6).clone())
  	.append( $('.carousel li').eq(5).clone());

  	// console.log(liWidth);

  carousel.width(liWidth * $('.carousel li').length);
  carousel.css({left: -liWidth*3});

  $('.prev').on('click', function() {
    carousel.animate({left: '+=' + liWidth}, 500, function(){
    	// position()函数用于返回当前匹配元素相对于其被定位的祖辈元素的偏移，
    	// 也就是相对于被定位的祖辈元素的坐标。该函数只对可见元素有效。
      if(Math.abs(carousel.position().left) < 4) {
        carousel.css({left: -liWidth * (carousel.children().length - 6)});
      }
    });
  });

  $('.next').on('click', function() {
    carousel.animate({left: '-=' + liWidth}, 500, function(){
      if(Math.abs(carousel.position().left + liWidth * (carousel.children().length -3)) < 4) {
        carousel.css({left: -liWidth*3});
      }
    });
  });

  $('.carousel li').on('click', function(evt) {
  	$('.big-pic img')[0].src= evt.target.src; 
  });

});







