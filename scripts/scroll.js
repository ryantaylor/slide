/* This script controls jQuery animation on window scroll. */

$(document).ready(function() {

	// Get and store the elements we will be animating.
	var element = $('#green');
	var backdrop = $('#window-scroll');
	var width = backdrop.width();
	
	// Some variables and constants used to perform calculations.
	var positionX, relativeY, opacity;
	var THRESHOLD = 440;
	var BASE_Y = 438;
	
	// Length of animation cycle, measured in number of pixels scrolled.
	var ANIM_CYCLE = 2000;
	
	$(window).scroll(function(e) {
	
		// Checks how far we've scrolled so far. We don't want any
		// animation happening until we are properly positioned.
		relativeY = window.pageYOffset - THRESHOLD;
		
		// When we enter this if condition, we know we can start animating.
		if (relativeY >= 0) {
			relativeY = relativeY % ANIM_CYCLE;
			backdrop.animate({top: (window.pageYOffset + 25)}, 0);
			
			// These conditionals control the state of the animation depending
			// on what stage in the animation we are current in.
			if (relativeY <= 500) {
				positionX = -relativeY / (500 / (width / 2));
				opacity = 1 - relativeY / 500;
				element.animate({left: positionX, opacity: opacity}, 0);
			}
			
			else if (relativeY > 500 && relativeY <= 1000) {
				positionX = -(width / 2) + (relativeY - 500) / (500 / (width / 2));
				opacity = 1 + (relativeY - 1000) / 500;
				element.animate({left: positionX, opacity: opacity}, 0);
			}
			
			else if (relativeY > 1000 && relativeY <= 1500) {
				positionX = -(width / 2) + (relativeY - 500) / (500 / (width / 2));
				opacity = 1 - (relativeY - 1000) / 500;
				element.animate({left: positionX, opacity: opacity}, 0);
			}
			
			else if (relativeY > 1500 && relativeY < 2000) {
				positionX = (width / 2) - (relativeY - 1500) / (500 / (width / 2));
				opacity = 1 + (relativeY - 2000) / 500;
				element.animate({left: positionX, opacity: opacity}, 0);
			}
		}
		
		// If we scroll up too quickly, we want the <div> element to be
		// reset properly.
		else {
			backdrop.animate({top: BASE_Y}, 0);
			element.animate({left: '0', opacity: '1'}, 0);
		}
	});
});