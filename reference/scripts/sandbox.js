function displayOutput() {
    var html = document.getElementById('html-input').value;

    document.getElementById('html-output').contentWindow.document.open();
    document.getElementById('html-output').contentWindow.document.write(html);
    document.getElementById('html-output').contentWindow.document.close();
}

window.onload = function() {
    document.getElementById('html-input').onchange = displayOutput;
}