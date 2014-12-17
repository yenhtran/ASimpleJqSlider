$(document).ready(function(){

	var fadeSpeed = 500; 				// fade speed
	var autoSwitch = true; 			// auto slider options
	var autoSwitchSpeed = 4000	// auto slider speed

	// Add initial active class
	$('.slide').first().addClass('active');

	// Hide all slides
	$('.slide').hide();

	// Show first slide
	$('.active').show();

	// Show Next slide on click
	$('#next').on('click', nextSlide)

	// Show Prev slide on click
	$('#prev').on('click', prevSlide);

	// Auto Slider Handler
	if(autoSwitch == true) {
		setInterval( nextSlide, autoSwitchSpeed); 
	}

	// Switch to next slide
	function nextSlide() {
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(fadeSpeed);
		$('.active').fadeIn(fadeSpeed);
	}

	// Switch to prev slide
	function prevSlide() {
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')){
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(fadeSpeed);
		$('.active').fadeIn(fadeSpeed);
	}
})