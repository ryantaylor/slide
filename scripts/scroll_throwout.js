/* An experiment that was ultimately thrown out in favour of the
   current implementation. Left here for completeness' sake. */

$(document).ready(function() {

	var element = $('#green');
	var backdrop = $('#window-scroll');
	var height = backdrop.outerHeight();
	var width = backdrop.width();
	var borderLeft = width / 2;
	var borderRight = width * 1.5;
	
	
	var positionX, positionY, relativeY, alpha;
	var THRESHOLD = 375;
	var BASE_Y = 505;
	var MIDDLE = width;
	
	var maxScroll = $(document).height() - $(window).height();
	var availableScroll = maxScroll = THRESHOLD;
	
	$(document).scroll(function(e) {
		relativeY = window.scrollY - THRESHOLD;
		if (relativeY >= 0) {
			if (relativeY <= 500) {
				positionX = MIDDLE - relativeY / (500 / borderLeft);
				positionY = BASE_Y + relativeY;
				alpha = 0.5 + 0.5 * relativeY / 500;
				element.animate({top: positionY,
								 left: positionX,
								 background: 'rgba(0,255,0,' + alpha + ')'}, 0);
			}
			
			else if (relativeY > 500 && relativeY <= 1500) {
				positionX = borderLeft + (relativeY - 500) / (500 / borderLeft);
				positionY = BASE_Y + relativeY;
				alpha = 0.5 + 0.5 * relativeY / 500;
				element.animate({top: positionY,
								 left: positionX,
								 background: 'rgba(0,255,0,' + alpha + ')'}, 0);
			}
		}
		else {
			element.animate({top: BASE_Y,
							 left: '50%',
							 background: 'rgba(0,255,0,0.5)'}, 0);
		}
	});
});