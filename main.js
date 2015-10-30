//Scroll

var scrollHeight = document.body.scrollHeight; //height of page
var winHeight = document.body.clientHeight; //height of window

//Sections

var backgrounds = document.getElementsByClassName("background");
var sections = document.getElementsByClassName("section");
//Set Background Visibility


function scroll(event){
	var body = document.querySelector("body");
	var scrollDist = body.scrollTop; //Distance body scrolled
	for (i=0;i<sections.length;i++){
		var topOffset = sections[i].offsetTop
		var currentPos = topOffset - scrollDist;
		sections[i].dataset.top = currentPos;
		bgVisibility(sections[i]);
		bgScroll(sections[i]);
	}
}

function bgScroll(section){
	var background = section.querySelector("img");
	var percentage = ((parseInt(section.dataset.top)*2/winHeight) * 25);
	console.log(percentage);
	if (section.style.visibility = "visible") background.style.top = percentage + "%";
}

function bgVisibility(section){
	var backgroundDiv = section.querySelector("div");
	if (section.dataset.top<0) backgroundDiv.style.visibility = "visible";
	if (section.dataset.top>0) backgroundDiv.style.visibility = "hidden";

	}
	
document.onscroll = scroll;





