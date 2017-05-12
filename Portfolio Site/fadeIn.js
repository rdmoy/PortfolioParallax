var fadeIn = function(element){

	return function(){
		var delay = .5;
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

		   	delay+=.6;
		   	console.log("faded")
	   }
	}
}