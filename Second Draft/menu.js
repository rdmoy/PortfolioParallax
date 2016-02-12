var listItems = document.getElementById("navBar");

var defaultIcon = "";

listItems.addEventListener("mouseover",function(event){
	if (event.target.nodeName == "LI"){
		var name = event.target.dataset.name;
		defaultIcon = event.target.textContent;
		event.target.textContent=name;
		event.preventDefault();
	}
}) 

listItems.addEventListener("mouseout", function(event){
	if (event.target.nodeName == "LI"){
		event.target.textContent=defaultIcon;
		event.preventDefault();
	}
})

listItems.onclick = function(event){
	location.href = "#" + event.target.dataset.name;

}


function toggleResume(){
	var iframe = document.getElementById("iframe");
	if (iframe.style.visibility === 'visible'){
		iframe.style.visibility = 'hidden';
	}
	else{
		iframe.style.visibility = 'visible';
	}	
}

