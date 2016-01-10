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

