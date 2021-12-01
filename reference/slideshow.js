window.onload = function () {
	
  var slideShowNodes = document.getElementsByClassName('slideShow');
	
  for (var i = 0; i < slideShowNodes.length; i++) {		
    // Preload Images
    var listNode = slideShowNodes[i].nextElementSibling;
    var links = listNode.getElementsByTagName('a');
		
    for(var a = 0; a < links.length; a++) {
      var link = links[a];
      var preloadImage = new Image();
      preloadImage.src = link.href;
    }
    slideShowNodes[i].onclick = slideShow;
  }
}

function slideShow() {
  var imageNode = this;
  var listNode = this.nextElementSibling;
  var links = listNode.getElementsByTagName('a');
  var index = 0;
    
  for (var a = 0; a < links.length; a++) {

    if(imageNode.src === links[a].href) index = a + 1;	
  }
  if (index === links.length) index = 0;

  imageNode.previousElementSibling.firstChild.nodeValue = links[index].getAttribute('title');
  imageNode.setAttribute('src', links[index].getAttribute('href'));
}
