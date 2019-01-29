$(document).ready(function() {

	$('.about__toggle').click(function(event){

		event.preventDefault();

		console.log('Click!');

		$('.about-content__box').hide();

		var href = $(this).attr('href');

		$(href).fadeIn();
	});
});