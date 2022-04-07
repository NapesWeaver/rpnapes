var template = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>    
      <title>Document</title>
      <style>
        
      </style>        
    </head>     
    <body>
      
      
      
      <script>
        
      </script>
    </body>
  </html>`;

function loadTemplate() {
  document.getElementById('html-input').value = template;
  displayOutput();
}

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
  });

window.onload = function() {
    document.getElementById('btn-new').onclick = loadTemplate;
    // document.getElementById('btn-save').onclick = displayOutput;
    document.getElementById('btn-refresh').onclick = displayOutput;
}