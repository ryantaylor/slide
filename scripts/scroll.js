$(document).ready(function() {

	var element = $('#green');
	var backdrop = $('#window-scroll');
	var height = backdrop.outerHeight();
	var THRESHOLD = 375;

	$(document).scroll(function(e) {
		if (window.scrollY >= THRESHOLD) {
			element.css('top', 505 + window.scrollY - THRESHOLD);
		}
	});
});