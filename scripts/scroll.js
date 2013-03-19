$(document).ready(function() {

	var element = $('#green');
	var backdrop = $('#window-scroll');
	var height = backdrop.outerHeight();

	$(document).scroll(function(e) {
		element.css('top', 505 + window.scrollY);
	});
});