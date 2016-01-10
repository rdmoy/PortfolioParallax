

function initialize() {
	var intro = document.getElementById("intro");
	var elements = intro.getElementsByClassName("introContent");
	var navBar = document.getElementById("navBar");
	fadeIn(elements, .5, .6)();
	
}

function fadeIn(element, initDelay, otherDelay){

	return function(){
		var delay = initDelay;
		for (var i=0; i< element.length; i++){
			element[i].style.opacity="0";
			/* call our keyframe named fadeIn, use animattion ease-in and repeat it only 1 time */
			element[i].style.webkitAnimation="fadeIn ease 1"; 
		    element[i].style.mozAnimation="fadeIn ease 1";
		   	element[i].style.animation="fadeIn ease 1";

		   	/* this makes sure that after animation is done we remain at the last keyframe value (opacity: 1)*/
		    element[i].style.webkitAnimationFillMode="forwards"; 
		    element[i].style.mozAnimationFillMode="forwards";
		   	element[i].style.animationFillMode="forwards";

		    element[i].style.webkitAnimationDuration="1s";
		    element[i].style.mozAnimationDuration="1s";
		   	element[i].animationDuration="1s";

		   	var theDelay = delay + "s"
		   	element[i].style.webkitAnimationDelay=theDelay;
		    element[i].style.mozAnimationDelay=theDelay;
		   	element[i].animationDelay=theDelay;

		   	delay+=otherDelay;
	   }
	}
}


function drawMask() {
	var delay = 1.5;
	var paths = document.querySelectorAll('.mask');
	for (var i = paths.length - 1; i >= 0; i--) {
		var length = paths[i].getTotalLength();

		// Clear any previous transition
		paths[i].style.transition = 'none';
  		paths[i].style.WebkitTransition ='none';

		// Set up the starting positions
		paths[i].style.stroke = "white"
		paths[i].style.strokeWidth = 70;
		paths[i].style.strokeDasharray = length + ' ' + length;
		paths[i].style.strokeDashoffset = length;

		// Trigger a layout so styles are calculated & the browser picks up the starting position before animating
		paths[i].getBoundingClientRect();
		
		// Define our transition
		paths[i].style.clipPath = "url(#clipped)";

		paths[i].style.transition = 'stroke-dashoffset .25s linear';
		paths[i].style.WebkitTransition = 'stroke-dashoffset .25s linear';

		var theDelay = delay + "s";
		paths[i].style.WebkitTransitionDelay = theDelay;

		delay += .27;
		paths[i].style.strokeDashoffset = '0';
	};
}

