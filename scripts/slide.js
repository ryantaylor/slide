$(document).ready(function() {

	var $count = 0;

	$('#left').click(function() {
		if ($count == 0) {
			var elRed = $('#red');
				elBlue = $('#blue');

			$(elRed).remove();
			$(elBlue).remove();
			$('#window-slide').append('<div id="red"></div>')
			$('#window-slide').append('<div id="blue"></div>')
		
			$('#red').addClass('redslideoutleft');
			$('#blue').addClass('blueslideinleft');
			$('#red').css({opacity: '0'});
			$('#blue').css({opacity: '1', left: '50%'});
			$count ++;
		}
		
		else if ($count == 1) {
			var elRed = $('#red');
				elBlue = $('#blue');

			$(elRed).remove();
			$(elBlue).remove();
			$('#window-slide').append('<div id="red"></div>')
			$('#window-slide').append('<div id="blue"></div>')
			
			$('#red').addClass('redslideinleft');
			$('#blue').addClass('blueslideoutleft');
			$('#red').css({opacity: '1', left: '50%'});
			$('#blue').css({opacity: '0'});
			$count --;
		}
	});
	
	$('#right').click(function() {
		if ($count == 0) {
			var elRed = $('#red');
				elBlue = $('#blue');

			$(elRed).remove();
			$(elBlue).remove();
			$('#window-slide').append('<div id="red"></div>')
			$('#window-slide').append('<div id="blue"></div>')
		
			$('#red').addClass('redslideoutright');
			$('#blue').addClass('blueslideinright');
			$('#red').css({opacity: '0'});
			$('#blue').css({opacity: '1', left: '50%'});
			$count ++;
		}
		
		else if ($count == 1) {
			var elRed = $('#red');
				elBlue = $('#blue');

			$(elRed).remove();
			$(elBlue).remove();
			$('#window-slide').append('<div id="red"></div>')
			$('#window-slide').append('<div id="blue"></div>')
			
			$('#red').addClass('redslideinright');
			$('#blue').addClass('blueslideoutright');
			$('#red').css({opacity: '1', left: '50%'});
			$('#blue').css({opacity: '0'});
			$count --;
		}
	});
});