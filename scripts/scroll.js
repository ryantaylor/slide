$(document).ready(function() {

	var element = $('#green');
	var backdrop = $('#window-scroll');
	var width = backdrop.width();
	
	var positionX, relativeY, opacity;
	var THRESHOLD = 440;
	var BASE_Y = 475;
	var MIDDLE = width;
	var ANIM_CYCLE = 2000;
	
	$(window).scroll(function(e) {
		relativeY = window.pageYOffset - THRESHOLD;
		
		if (relativeY >= 0) {
			relativeY = relativeY % ANIM_CYCLE;
			backdrop.animate({top: (window.pageYOffset + 25)}, 0);
			
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
			backdrop.animate({top: BASE_Y}, 0);
			element.animate({left: '0', opacity: '1'}, 0);
		}
	});
});