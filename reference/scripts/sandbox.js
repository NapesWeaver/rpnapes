var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var isFirefox = /firefox/i.test(navigator.userAgent);
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

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

function saveCookie(cookieName, cookie) {
  var d = new Date();
  d.setTime(d.getTime() + (1 * 365 * 24 * 60 * 60 * 1000));
  var expires = '; expires=' + d.toUTCString();
  document.cookie =  cookieName + '=' + cookie + expires + ';path=/';
}
  
function getCookie(cookieName) {
  var name = cookieName + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var cookieItem = ca[i];

    while (cookieItem.charAt(0) === ' ') {
      cookieItem = cookieItem.slice(1);
    }
    if (cookieItem.indexOf(name) === 0) {
      return cookieItem.slice(name.length, cookieItem.length);
    }
  }
  return '';
}

function getInput() {
  try {
    if (getCookie('SANDBOX') !== '') {
      document.getElementById('html-input').value = getCookie('SANDBOX');
      displayOutput();
    }
  } catch (err) {
    console.log('error', err);
  }
}

function loadTemplate() {
  document.getElementById('html-input').value = template;
  displayOutput();
}

function saveInput() {
  var cookie = encodeURIComponent(document.getElementById('html-input').value);
  saveCookie('SANDBOX', cookie);
}

function displayOutput() {
  var html = document.getElementById('html-input').value;
  
  document.getElementById('html-output').contentWindow.document.open();
  document.getElementById('html-output').contentWindow.document.write(html);
  document.getElementById('html-output').contentWindow.document.close();
  saveInput();
}

document.getElementById('html-input').addEventListener('keydown', function(e) {
  
  if (e.key === 'Tab') {
    e.preventDefault();

    for (var i = 0; i < 2; i++) {
      var start = this.selectionStart;
      var end = this.selectionEnd;    
      this.value = this.value.slice(0, start) + ' ' + this.value.slice(end);  
      this.selectionStart = this.selectionEnd = start + 1;
    }
  }
});

window.onload = function() {
  document.getElementById('btn-new').onclick = loadTemplate;
  document.getElementById('btn-refresh').onclick = displayOutput;
  getInput();
}