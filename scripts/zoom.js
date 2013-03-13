$(document).ready(function() {
	var mouseX = 0, mouseY = 0;
	$(document).mousemove(function(e){
	   mouseX = e.pageX;
	   mouseY = e.pageY;
	});

	// cache the selector
	var follower = $("#follower");
	var xp = 0, yp = 0;
	var loop = setInterval(function(){
		// change 12 to alter damping higher is slower
		xp += (mouseX - 62 - xp) / 5;
		yp += (mouseY - 62 - yp) / 5;
		follower.css({left:xp, top:yp});
		
	}, 30);
});