//Scroll

var scrollHeight = document.body.scrollHeight; //height of page
var winHeight = document.body.clientHeight; //height of window
var body = document.querySelector("body"); //distance body scrolled

//Sections

var backgrounds = document.getElementsByClassName("background");
var bgShade = document.getElementById("introBGshade");
var sections = document.querySelectorAll("div.section");

function scroll(event){
	event.preventDefault();
	parallax();
	bgVisibility();
	nav();

}

function nav(){
	
	var currentPage="";
	var scrollDist = body.scrollTop;
	
	for (var i = 0; i <= sections.length-1; i++) {
		console.log(scrollDist)
		if (scrollDist >= sections[i].offsetTop && scrollDist <= sections[i+1].offsetTop){
			sections[i].dataset.active = "true";
			// document.location.hash = "#" + sections[i].id;
		}
		else {sections[i].dataset.active = "false"}


	};
	


	return;
}

window.addEventListener("hashchange", function(event){
	event.preventDefault();
})

function parallax(){
	var scrollDist = body.scrollTop; //Distance body scrolled
	for (i=0;i<backgrounds.length;i++){
		var sectionTopOffset = backgrounds[i].offsetTop;
		var currentPos = scrollDist - sectionTopOffset;

		backgrounds[i].dataset.top = currentPos;
		backgrounds[i].dataset.width = backgrounds[i].clientWidth;

		bgScroll(backgrounds[i]);
		bgTranslate(backgrounds[i]);
	}
}

function bgScroll(section){
	var bgImg = section.querySelector("img"); //section background image
	var sectionTop = section.dataset.top;
	bgImg.style.top = -150-(.2*(-sectionTop))+ "px";
}

function bgTranslate(section){
	var bgImg = section.querySelector("img");

	var bgImgHeight = bgImg.dataset.height;

	bgImg.dataset.height = bgImg.clientHeight;

	bgImg.dataset.width = section.dataset.width;

	var offsetX = bgImg.dataset.offsetX;

	if (bgImg.clientWidth >= 800){
		bgImg.dataset.shrink = true;
		bgImg.style.height = null;
		bgImg.style.width = 100+"%";
		bgImg.style.background
		bgImg.style.transform = "translate(" + 0 + "px)";
	}

	else{

		bgImg.dataset.shrink = false;
		bgImg.style.height = 450+"px";
		bgImg.style.width = null;

		var x = (bgImg.clientWidth - 800)*.5;
		bgImg.style.transform = "translate(" + x + "px)";
		offsetX = x;
	}

}

function bgVisibility(){
	var scrollDist = body.scrollTop;
	var introCont = document.getElementById("introContent");
	var topBar = document.getElementById("topBar");
	var contents = document.getElementsByClassName("content");
	
	for (var i = 0 ; i <=contents.length-1; i++) {
		if (scrollDist >=  contents[i].offsetTop/2){
				fadeIn(contents[i])();
		}
	}


	if (scrollDist !== 0) {
		bgShade.style.visibility = 'visible';
		topBar.style.visibility = 'visible';
	}
	else{bgShade.style.visibility = 'hidden';
		topBar.style.visibility = 'hidden'}

	if (bgShade.style.visibility === "visible"){
		bgShade.style.opacity = -.2+(scrollDist/winHeight);
		topBar.style.opacity = -.5+(.9/(winHeight/scrollDist));
		introCont.style.opacity = 1 - 2*(scrollDist/winHeight)
	}
}
	
document.onscroll = scroll;
body.onresize = scroll;





