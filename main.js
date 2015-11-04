//Scroll

var scrollHeight = document.body.scrollHeight; //height of page
var winHeight = document.body.clientHeight; //height of window
var body = document.querySelector("body"); //distance body scrolled

//Sections

var backgrounds = document.getElementsByClassName("background");
var sections = document.getElementsByClassName("section");
//Set Background Visibility


function scroll(event){
	var scrollDist = body.scrollTop; //Distance body scrolled
	for (i=0;i<sections.length;i++){
		var sectionTopOffset = sections[i].offsetTop; //
		var currentPos = scrollDist - sectionTopOffset;
		sections[i].dataset.top = currentPos;
		sections[i].dataset.width = sections[i].clientWidth
		bgVisibility(sections[i]);
		bgScroll(sections[i]);
		bgTranslate(sections[i]);
	}
	event.preventDefault();
}

function bgScroll(section){
	var bgImg = section.querySelector("img"); //section background image
	var sectionTop = section.dataset.top;
	var bgOffset = -200; //position relative to top of section
	var percent = ((sectionTop/winHeight)); 
	bgImg.style.top = (percent * bgOffset)+ "px";
	
}

function bgTranslate(section){
	var bgImg = section.querySelector("img");
	var paraWindow = section.querySelector(".parallaxWindow");
	var bgImgHeight = bgImg.dataset.height;
	bgImg.dataset.height = bgImg.clientHeight //400px target

	bgImg.dataset.width = section.dataset.width;

	var offsetX = bgImg.dataset.offsetX;

	if (paraWindow.clientWidth >= 800){
		bgImg.dataset.shrink = true;
		bgImg.style.height = null;
		bgImg.style.width = 100+"%";
		bgImg.style.transform = "translate(" + 0 + "px)";
	
	}
	else{
		bgImg.dataset.shrink = false;
		bgImg.style.height = 500+"px";
		bgImg.style.width = null;

		var x = (paraWindow.clientWidth - 800)/2;
		bgImg.style.transform = "translate(" + x + "px)";
		offsetX = x;
	}

}

function bgVisibility(section){
	var backgroundDiv = section.querySelector(".background");
	if (section.dataset.top>0) backgroundDiv.dataset.visibility = "visible";
	if (section.dataset.top<0) backgroundDiv.dataset.visibility = "hidden";
}
	
document.onscroll = scroll;
body.onresize = scroll;





