$(document).ready(function() {

	$('.about__toggle').click(function(event){

		event.preventDefault();

		console.log('Click!');

		$('.about-content__box').hide();

		var href = $(this).attr('href');

		$(href).fadeIn();

	});


	var windowHeight = $(window).height();

	console.log(windowHeight);


		// следим за кнопкой (скроллом), показываем/скрываем 
	$(window).scroll(function(){

		console.log( $(this).scrollTop() );


		if ( $(this).scrollTop() > windowHeight) {

			$('#scrollToTop').fadeIn();
		} else {

			$('#scrollToTop').fadeOut();
		}

	});

	// При клике на кнопку, делаем проекрутку на верх страницы

	$('#scrollToTop').click(function(event){

		event.preventDefault();

		$('html').animate({scrollTop: 0}, 800)
	})



});