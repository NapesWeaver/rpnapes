function displayOutput() {
    var html = document.getElementById('html-input').value;

    document.getElementById('html-output').contentWindow.document.open();
    document.getElementById('html-output').contentWindow.document.write(html);
    document.getElementById('html-output').contentWindow.document.close();
}

document.getElementById('html-input').addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      e.preventDefault();
      var start = this.selectionStart;
      var end = this.selectionEnd;  
      // set textarea value to: text before caret + tab + text after caret
      this.value = this.value.substring(0, start) + "\t" + this.value.substring(end);  
      // put caret at right position again
      this.selectionStart = this.selectionEnd = start + 1;
    }
    if (e.key === 'Enter') displayOutput();
  });

window.onload = function() {
    document.getElementById('html-input').onchange = displayOutput;
    document.getElementById('html-input').onmouseleave = displayOutput;
    document.getElementById('html-input').onclick = displayOutput;
}