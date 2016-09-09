$(document).ready(function() {

	var first = $('.carousel li').first();
	var last = $('.carousel li').last();
	var liWidth = first.width();

  carousel = $('.carousel ul');
  carousel.prepend(last.clone()).append(first.clone());
  carousel.width(liWidth * $('.carousel li').length);
  carousel.css({left: -liWidth});

  $('.prev').on('click', function() {
    carousel.animate({left: '+=' + liWidth}, 500, function(){
      if(Math.abs(carousel.position().left) < 2) {
        carousel.css({left: -liWidth * (carousel.children().length - 2)});
      }
    });
  });

  $('.next').on('click', function() {
    carousel.animate({left: '-=' + liWidth}, 500, function(){
      if(Math.abs(carousel.position().left + liWidth * (carousel.children().length - 1)) < 2) {
        carousel.css({left: -liWidth});
      }
    });
  });

});