var paths = document.querySelectorAll('.mask');

function makepaths() {
	var delay = 0;
	for (var i = paths.length - 1; i >= 0; i--) {
		var length = paths[i].getTotalLength();
		// Clear any previous transition
		paths[i].style.transition = paths[i].style.WebkitTransition =
  'none';
		// Set up the starting positions
		paths[i].style.stroke = "white"
		paths[i].style.strokeWidth = 70;
		paths[i].style.strokeDasharray = length + ' ' + length;
		paths[i].style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		paths[i].getBoundingClientRect();
		// Define our transition
		paths[i].style.clipPath = "url(#clipped)";
		paths[i].style.transition = paths[i].style.WebkitTransition =
		  'stroke-dashoffset .15s linear';
		// Go!
		var theDelay = delay + "s";
		paths[i].style.WebkitTransitionDelay = theDelay;
		delay += .2;
		paths[i].style.strokeDashoffset = '0';
		console.log(theDelay);
	};
}

makepaths();