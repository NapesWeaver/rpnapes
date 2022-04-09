var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var isFirefox = /firefox/i.test(navigator.userAgent);
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var input = [];
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

  function updateDisplayInput() {
    document.getElementById('lst-input').value = '';
  
    for (var i in input) {
      document.getElementById('lst-input').value += decodeSpecialChar(input[i]);
      document.getElementById('lst-input').value += '\n';
    }
    document.getElementById('lst-input').value = document.getElementById('lst-input').value.trim();
    document.getElementById('lst-input').value += '\n';
  
    if (input.length === 1 && input[0] === '') {
      document.getElementById('lst-input').value = '';
    }
  }

function nestArrayByBrowser(srcArray) {
  var newArray = '';

  if ((/*@cc_on!@*/false || !!document.documentMode) || isChrome || isSafari) {
    for (var chrome in srcArray) {
      newArray += '_';
      newArray += srcArray[chrome];
    }
  } else {// Firefox
    for (var firefox in srcArray) {
      newArray += '\t';
      newArray += srcArray[firefox];
    }
  }
  return newArray;
}

function splitArrayByBrowser(tmpArray) {

  if ((/*@cc_on!@*/false || !!document.documentMode) || isChrome || isSafari) {
    tmpArray = tmpArray.split('_');
  } else {// Firefox
    tmpArray = tmpArray.split('\t');
  }
  return tmpArray;
}

function encodeSpecialChar(tmpString) {
  
  tmpString = tmpString.replace(/%/g, '&#37');
  tmpString = tmpString.replace(/,/g, '&#44');
  tmpString = tmpString.replace(/;/g, '&#59');
  tmpString = tmpString.replace(/=/g, '&#61');
  tmpString = tmpString.replace(/_/g, '&#95');
  tmpString = tmpString.replace(/°/g, '&deg');
  tmpString = tmpString.replace(/Ω/g, '&#937');
  tmpString = tmpString.replace(/♥/g, '&#9829');

  return tmpString;
}

function decodeSpecialChar(tmpString) {

  tmpString = tmpString.replace(/&#37/g, '%');
  tmpString = tmpString.replace(/&#44/g, ',');
  tmpString = tmpString.replace(/&#59/g, ';');
  tmpString = tmpString.replace(/&#61/g, '=');
  tmpString = tmpString.replace(/&#95/g, '_');
  tmpString = tmpString.replace(/&deg/g, '°');
  tmpString = tmpString.replace(/&#937/g, 'Ω');
  tmpString = tmpString.replace(/&#9829/g, '♥');

  return tmpString;
}

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

function loadInput() {
  try {
    if (getCookie('SANDBOX') !== '') {
      input = splitArrayByBrowser(getCookie('SANDBOX'));
      updateDisplayInput();
      displayOutput();
    }
  } catch (err) {
    console.error(err);
  }
}

function loadTemplate() {
  document.getElementById('lst-input').value = template;
  displayOutput();
}

function saveInput() {
  input = encodeSpecialChar(document.getElementById('lst-input').value.trim()).split('\n');
  saveCookie('SANDBOX', nestArrayByBrowser(input));
}

function displayOutput() {
  var html = document.getElementById('lst-input').value;
  
  document.getElementById('lst-output').contentWindow.document.open();
  document.getElementById('lst-output').contentWindow.document.write(html);
  document.getElementById('lst-output').contentWindow.document.close();
  saveInput();
}

document.getElementById('lst-input').addEventListener('keydown', function(e) {
  
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
  loadInput();
}