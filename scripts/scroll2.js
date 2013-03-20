$(document).ready(function() {

	var element = $('#green');
	var backdrop = $('#window-scroll');
	var width = backdrop.width();
	
	
	var positionX, positionY, relativeY, opacity;
	var THRESHOLD = 440;
	var BASE_Y = 25;
	var MIDDLE = width;
	var ANIM_CYCLE = 2000;
	
	var maxScroll = $(document).height() - $(window).height();
	var availableScroll = maxScroll = THRESHOLD;
	
	$(document).scroll(function(e) {
		relativeY = window.scrollY - THRESHOLD;
		if (relativeY >= 0) {
			relativeY = relativeY % ANIM_CYCLE;
			backdrop.animate({top: (window.scrollY + 25)}, 0);
			
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
		else {
			backdrop.animate({top: '475'}, 0);
			element.animate({left: '0', opacity: '1'}, 0);
		}
	});
});