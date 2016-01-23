var paths = document.querySelectorAll('.mask');

function makepaths() {
	var delay = 0;
	for (var i = paths.length - 1; i >= 0; i--) {
		var length = paths[i].getTotalLength();
		// Clear any previous transition
		paths[i].style.transition = paths[i].style.WebkitTransition =
  'none';
		// Set up the starting positions
		paths[i].style.stroke = "black"
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



/*
var maskpaths[i] = {
	name: "maskName",
	order: 0,
	strokewidth:2,
	fill: "",
	stroke: "",
	d: 0,

	strokwWidth: function(){
		return "stroke-width:" + this.strokewidth
	},
		

	length: function(){
		return this.getTotalLength;
	},

	
	strokeDasharray: function(){
		return "stroke-dasharray:" + this[length];
	},

	strokeDashoffset: function(){
		return "stroke-dashoffset:" + this[length]
	}

}

var paths[i]s = [];
for (var i = paths[i].length - 1; i >= 0; i--) {
	console.log(paths[i][i]);
	var newpaths[i] = Object.create(maskpaths[i]);
	newpaths[i].name = paths[i][i].id;
	newpaths[i].order = i;
	newpaths[i].fill = paths[i][i].fill;
	newpaths[i].stroke = paths[i][i].stroke;
	newpaths[i].d = paths[i][i].d;
	paths[i]s.push(newpaths[i]);
	console.log(newpaths[i]);
};


// ["Y tail"]
// ["O + Y"]
// ["M"]
// ["A horiz+ N"]
// ["A right vert"]
// ["A left vert"]
// ["Y end"]
// ["R body"]
// ["R vertical"]
*/