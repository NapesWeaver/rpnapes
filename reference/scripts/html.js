function editHTMLCanvas() {
    var html = document.getElementById('html-board').value;

    document.getElementById('html-canvas').contentWindow.document.open();
    document.getElementById('html-canvas').contentWindow.document.write(html);
    document.getElementById('html-canvas').contentWindow.document.close();
}

window.onload = function() {
    document.getElementById('html-board').onchange = editHTMLCanvas;
}