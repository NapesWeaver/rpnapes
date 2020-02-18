window.onload = function () {
	
	var slideShowNodes = document.getElementsByClassName("slideShow");
	
	for (var s = 0; s < slideShowNodes.length; s++) {
		
		// Preload Images
		var listNode = slideShowNodes[s].nextElementSibling;
		var links = listNode.getElementsByTagName("a");
		
		for(var a = 0; a < links.length; a++) {
			var link = links[a];
			var preloadImage = new Image();
			preloadImage.src = link.href;
		}
		slideShowNodes[s].onclick = slideShow;
	}
}
function slideShow() {
	var imageNode = this;
    var listNode = this.nextElementSibling;
    var links = listNode.getElementsByTagName("a");
    var index = 0;
    
    for (var a = 0; a < links.length; a++) {
		//if (imageNode.getAttribute("src") == links[a].getAttribute("href")) {
		if(imageNode.src === links[a].href) {
			index = a + 1;
		}	
	}
	if (index == links.length) {
		index = 0;
	}	
	//imageNode.previousElementSibling.innerHTML = links[index].getAttribute("title");
	imageNode.previousElementSibling.firstChild.nodeValue = links[index].getAttribute("title");
	imageNode.setAttribute("src", links[index].getAttribute("href"));
}
