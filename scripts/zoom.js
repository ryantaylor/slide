$(document).ready(function() {

	var count = 0;

	$('#left').click(function() {
		$('#red').addClass('animate1');
		$('#blue').addClass('animate2');
		$('#red').css({opacity: '0'});
		$('#blue').css({opacity: '1', left: '50%'});
		count ++;
	});
	
});