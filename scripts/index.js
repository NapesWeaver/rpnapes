var $ = function(id) {
  return document.getElementById(id);
};

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var isFirefox = /firefox/i.test(navigator.userAgent);
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var isMobile = false;

if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.slice(0, 4))) { 
  isMobile = true;
}
var isPhone = false;
if (/mobile/i.test(navigator.userAgent) && !/ipad|tablet/i.test(navigator.userAgent)) {
  isPhone = true;
}
if (isPhone) navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

new ResizeObserver(unFloat).observe($('lst-stack'));
new ResizeObserver(worldBordersSet).observe($('txt-input'));
new ResizeObserver(unFloat).observe($('lst-notes'));

if (!isPhone) window.onresize = resizeTextAreas;

var Infinityi = NaN;
var Infinityj = NaN;
var i = '√-1';
var j = '√-1';
var Φ = 1.618033988749895;
var ℮ = Math.exp(1);
var π = Math.PI;
var ɢ = 6.674e-11;
var ⅽ = 299792458;

var stack = [];
var backups = [];
var restores = [];
// var cashed = '';

var stackSize = 0;
var stackFocus = false;
var shifted = false;
var altHeld = false;
var ctrlHeld = false;
var shiftHeld = false;

var fixDecimal = -1;
var sciDecimal = -1;
var engDecimal = -1;
var radix = 10;

var tStamp = '10:26:00';
var testing = false;

function NumberObject(soul, realPart, imaginary, units) {
  this.soul = soul;
  this.realPart = realPart;
  this.imaginary = imaginary;
  this.units = units;
}
NumberObject.prototype.setSoul = function(s) {
  this.soul = s;
};
NumberObject.prototype.getSoul = function() {
  return this.soul;
};
NumberObject.prototype.setRealPart = function(r) {
  this.realPart = r;
};
NumberObject.prototype.getRealPart = function() {
  return this.realPart;
};
NumberObject.prototype.setImaginary = function(i) {
  this.imaginary = i;
};
NumberObject.prototype.getImaginary = function() {
  return this.imaginary;
};
NumberObject.prototype.setUnits = function(u) {
  this.units = u;
};
NumberObject.prototype.getUnits = function() {
  return this.units;
};
NumberObject.prototype.toString = function() {
  return this.soul + ', ' + this.realPart + ', ' + this.imaginary + ', ' + this.units;
};

String.prototype.insertAt = function(index, input) {
  return this.slice(0, index) + input + this.slice(index);
}
String.prototype.removeAt = function(startPos, endPos) {
  return this.slice(0, startPos) + this.slice(endPos);
}

/**
 * Array.prototype.indexOf()
 * Added to the ECMA-262 standard in the 5th edition may not work in all browsers.
 * You can work around this by utilizing the following code at the beginning of your scripts.
 * This will allow you to use indexOf() when there is still no native support.
 * This algorithm matches the one specified in ECMA-262, 5th edition, assuming TypeError and Math.abs() have their original values.
 * This version tries to optimize by only checking for "in" when looking for undefined and
 * skipping the definitely fruitless NaN search. Other parts are merely cosmetic conciseness.
*/
if (!Array.prototype.indexOf)
  Array.prototype.indexOf = (function(Object, max, min) {
    'use strict'
    return function indexOf(member, fromIndex) {
      if (this === null || this === undefined)
        throw TypeError('Array.prototype.indexOf called on null or undefined')

      var that = Object(this), Len = that.length >>> 0, i = min(fromIndex | 0, Len)
      if (i < 0) i = max(0, Len + i)
      else if (i >= Len) return -1

      if (member === void 0) {// undefined
        for (; i !== Len; ++i) if (that[i] === void 0 && i in that) return i
      } else if (member !== member) {// NaN
        return -1// Since NaN !== NaN, it will never be found. Fast-path it.
      } else// All else
        for (; i !== Len; ++i) if (that[i] === member) return i 

      return -1// If the value was not found, then return -1
    }
  })(Object, Math.max, Math.min);

math.import({
  Infinityi: NaN,
  Infinityj: NaN,
  mathRoot: function (root, num) {
    var objX = getX(root);
    var objY = getX(num);
    var x = buildComplexNumber(objX);
    var y = buildComplexNumber(objY);
    var signRoot = Math.sign(x);
    var signNum = Math.sign(y);
    var result = {};
    var results = [{}];

    if (signRoot === 1) {
      results = math.nthRoots(y, x);
    } else {
      if (signNum === 1) {
        results[0] = math.pow(y, 1/x);
      } else {
        results[0] = -1 * math.pow(-y, 1/x);
      } 
    }  
    result = results[0];
    
    for (var i = 1; i < results.length; i++) {

      if (signNum === -1 && results[i].im === 0) result = results[i];    
    }
    if (result.im === 0) {
      return result.re;
    } else {
      return result;
    }
  },
  mathSin: function(input) {
    var objX = getX(input);
    var x = buildComplexNumber(objX);
    var degrees;

    try {
      if (x.im === undefined) {
        degrees = $('btn-angle').value === 'deg' ? x : x * 180 / Math.PI;
      } else {
        degrees = $('btn-angle').value === 'deg' ? x.re : x.re * 180 / Math.PI;
      }
      if ((x.im === undefined || x.im === 0) && (degrees === 0 || degrees % 360 === 0 || degrees === 180 || (degrees - 180) % 360 === 0)) return 0;  
    
      if ($('btn-angle').value === 'deg') {
        if (x.im === undefined) {
          x = x * Math.PI / 180;
        } else {
          x.re = x.re * Math.PI / 180;
          x.im = x.im * Math.PI / 180;
        }
      }
      x = math.sin(x);
    } catch {
      x = NaN;
    }
    return x;
  },
  mathCos: function(input) {
    var objX = getX(input);
    var x = buildComplexNumber(objX);
    var degrees;
  
    try {
      if (x.im === undefined) {
        degrees = $('btn-angle').value === 'deg' ? x : x * 180 / Math.PI;
      } else {
        degrees = $('btn-angle').value === 'deg' ? x.re : x.re * 180 / Math.PI;
      }
      if ((x.im === undefined || x.im === 0) && (degrees === 270 || (degrees - 270) % 360 === 0 || degrees === 90 || (degrees - 90) % 360 === 0)) return 0;
    
      if ($('btn-angle').value === 'deg') {
        if (x.im === undefined) {
          x = x * Math.PI / 180;
        } else {
          x.re = x.re * Math.PI / 180;
          x.im = x.im * Math.PI / 180;
        }
      }
      x = math.cos(x);
    } catch {
      x = NaN;
    }
    return x;
  },
  mathTan: function(input) {
    var objX = getX(input);
    var x = buildComplexNumber(objX);
    var degrees;
  
    try {
      if (x.im === undefined) {
        degrees = $('btn-angle').value === 'deg' ? x : x * 180 / Math.PI;
      } else {
        degrees = $('btn-angle').value === 'deg' ? x.re : x.re * 180 / Math.PI;
      }
      
      if ((x.im === undefined || x.im === 0) && (degrees === 0 || degrees % 360 === 0 || degrees === 180 || (degrees - 180) % 360 === 0)) {
        return 0;
      } else if ((x.im === undefined || x.im === 0) && (degrees === 315 || (degrees - 315) % 360 === 0 || degrees === 135 || (degrees - 135) % 360 === 0)) {
        return -1;
      } else if((x.im === undefined || x.im === 0) && (degrees === 270 || (degrees - 270) % 360 === 0)) {
        return -Infinity;
      } else if ((x.im === undefined || x.im === 0) && (degrees === 90 || (degrees - 90) % 360 === 0)) {
        return Infinity;
      } else if ((x.im === undefined || x.im === 0) && (degrees === 225 || (degrees - 225) % 360 === 0 || degrees === 45 || (degrees - 45) % 360 === 0)) {
        return 1;
      }
      if ($('btn-angle').value === 'deg') {
        if (x.im === undefined) {
          x = x * Math.PI / 180;
        } else {
          x.re = x.re * Math.PI / 180;
          x.im = x.im * Math.PI / 180;
        }
      }
      x = math.tan(x);
    } catch {
      x = NaN;
    }
    return x;
  },
  mathASin: function(input) {
    var objX = getX(input);
    var x = buildComplexNumber(objX);

    try {
      x = math.asin(x);
    
      if ($('btn-angle').value === 'deg') {
        if (x.im === undefined) {
          x = (x * 180) / Math.PI;
        } else {
          x.re = (x.re * 180) / Math.PI;
          x.im = (x.im * 180) / Math.PI;
        }
      }
    } catch {
      x = NaN;
    }
    return x;
  },
  mathACos: function(input) {
    var objX = getX(input);
    var x = buildComplexNumber(objX);
  
    try {
      x = math.acos(x);
    
      if ($('btn-angle').value === 'deg') {
        if (x.im === undefined) {
          x = (x * 180) / Math.PI;
        } else {
          x.re = (x.re * 180) / Math.PI;
          x.im = (x.im * 180) / Math.PI;
        }
      }
    } catch {
      x = NaN;
    }
    return x;
  },
  mathATan: function(input) {
    var objX = getX(input);
    var x = buildComplexNumber(objX);
  
    try {
      x = math.atan(x);
    
      if (input === 'Infinity') x = π / 2;
      if (input === '-Infinity') x = -π / 2;
    
      if ($('btn-angle').value === 'deg') {
        if (x.im === undefined) {
          x = (x * 180) / Math.PI;
        } else {
          x.re = (x.re * 180) / Math.PI;
          x.im = (x.im * 180) / Math.PI;
        }
      }
    } catch {
      x = NaN;
    }  
    return x; 
  },
  root: function(y, x) {
    if (x === undefined) x = 2;
    return mathRoot(x, y);
  },
  roots: function(y, x) {
    if (x === undefined) x = 2;
    return mathRoots(x, y);
  }
});

function unFloat() {
  var wrapWidth = $('wrap').clientWidth;
  var winSize = getSize();  
  var lstWidth = $('rpnapes').classList.contains('hidden') ? $('lst-notes').clientWidth : $('lst-stack').clientWidth;
  var margin = 30;
  
  if (lstWidth > wrapWidth) {
    $('wrap').style.marginLeft = ((winSize[0]  - lstWidth) / winSize[0]) * 50 + '%';
  } else {
    $('wrap').style.marginLeft = 'auto';
  }
  if (winSize[0] < lstWidth + margin) {
    $('rpnapes').classList.contains('hidden') ? $('lst-notes').style.width = winSize[0] - margin + 'px' : $('lst-stack').style.width = winSize[0] - margin + 'px';
  }
  if ($('notes').classList.contains('hidden')) worldBordersSet();

  $('txt-input').style.width = $('lst-stack').offsetWidth - 18 + 'px';
}

function resizeTextAreas() {
  resizeTextarea($('lst-stack'));
  resizeTextarea($('lst-notes'));
  if ($('lst-notes').offsetHeight === 0) $('lst-notes').classList.add('resizable');
  if ($('lst-stack').offsetHeight === 0) $('lst-stack').classList.add('resizable');
}

function resizeTextarea(textarea) {
  var winSize = getSize();     
  var textareaHeight = textarea.offsetHeight;
  var bodyHeight = document.getElementsByTagName('body')[0].offsetHeight;
  
  if (textareaHeight > 0) {
    textarea.style.height = (winSize[1] + textareaHeight - bodyHeight) + 'px';    
    textarea.classList.remove('resizable');
  }
  unFloat();
}

function resizeInput() {
  var winSize = getSize();   
  var bodyHeight = document.getElementsByTagName('body')[0].offsetHeight;
  var inputHeight = $('txt-input').scrollHeight;
  var entryPadHeight = $('entry-pad').offsetHeight;
  
  $('txt-input').style.height = '0';

  if (inputHeight < winSize[1] - entryPadHeight - 90) {
    $('txt-input').style.height = $('txt-input').scrollHeight + 'px';  
  } else {
    $('txt-input').style.height = winSize[1] - entryPadHeight - 110 + 'px';
    resizeTextarea($('lst-stack'));
  }
  if (isMobile) bodyHeight = winSize[1];  
  if (bodyHeight >= winSize[1]) resizeTextarea($('lst-stack'));
  $('lst-stack').scrollTop = $('lst-stack').scrollHeight;
}

function toggleForm() {
  
  if($('menu-form').textContent === 'Vector') {
    $('menu-form').innerHTML = 'Polar';
    $('indicate-polar').classList.add('hidden');
    if (shifted) $('btn-ee').value = 'j';
  } else {
    $('menu-form').innerHTML = 'Vector';
    $('indicate-polar').classList.remove('hidden');
    if (shifted) $('btn-ee').value = '∠';
  }
  var inputArr = $('txt-input').value.trim().split('\n');
  
  for (var i = 0; i < inputArr.length; i++) {
    inputArr[i] = objToString(getX(inputArr[i]));
  }
  displayResults(inputArr, '');
}

function toggleDarkMode() {  
  var body = document.getElementsByTagName('body');
  var smBtns = document.getElementsByClassName('btn-small');
  var medBtns = document.getElementsByClassName('btn-med');
  var bgBtns = document.getElementsByClassName('btn-big');
  var others = document.getElementsByClassName('btn-other');
  var options = document.getElementsByTagName('option');
  
  if ($('menu-darkmode').textContent === 'Light') {
    $('menu-darkmode').innerHTML = 'Dark';
    $('wrap').classList.remove('dark-mode');
    $('wrap').style.borderStyle = 'outset';
    $('tricorderskin').classList.remove('dark-mode');
    $('widget').classList.remove('dark-mode');
    $('viewport').classList.remove('dark-mode');
    body[0].style.backgroundColor = '#C4C6B1';
    for (var e = 0; e < smBtns.length; e++) smBtns[e].classList.remove('dark-button');
    for (e = 0; e < medBtns.length; e++) medBtns[e].classList.remove('dark-button');
    for (e = 0; e < bgBtns.length; e++) bgBtns[e].classList.remove('dark-button');
    for (e = 0; e < others.length; e++) others[e].classList.remove('dark-button');
    for (e = 0; e < options.length; e++) options[e].classList.remove('dark-menu');
  } else {
    $('menu-darkmode').innerHTML = 'Light';       
    $('wrap').classList.add('dark-mode');   
    $('wrap').style.borderStyle = 'inset';
    $('tricorderskin').classList.add('dark-mode');
    $('widget').classList.add('dark-mode');
    $('viewport').classList.add('dark-mode');
    body[0].style.backgroundColor = '#3B394E';
    for (e = 0; e < smBtns.length; e++) smBtns[e].classList.add('dark-button');
    for (e = 0; e < medBtns.length; e++) medBtns[e].classList.add('dark-button');
    for (e = 0; e < bgBtns.length; e++) bgBtns[e].classList.add('dark-button');
    for (e = 0; e < others.length; e++) others[e].classList.add('dark-button');
    for (e = 0; e < options.length; e++) options[e].classList.add('dark-menu');
  }
}

function toggleHaptic() {
  if ($('menu-haptic-li').classList.contains('strikethrough')) {
    $('menu-haptic-li').classList.remove('strikethrough');
  } else {
    $('menu-haptic-li').className += ' strikethrough';
  }
  $('txt-input').focus();
}

function hapticResponse() {
  if (isMobile) {
    haptic();
    $('txt-input').readOnly = true;
  }
}

function haptic() {
  if (!$('menu-haptic-li').classList.contains('strikethrough')) navigator.vibrate([1]);
}

function toggleKeyboard() {
  if ($('menu-keyboard-li').classList.contains('strikethrough')) {
    $('menu-keyboard-li').classList.remove('strikethrough');
  } else {
    $('menu-keyboard-li').classList.add('strikethrough');
  }
  $('txt-input').focus();
}

function mobileKeyboardAllow() {
  if(!$('menu-keyboard-li').classList.contains('strikethrough')) {
    if ($('txt-input').readOnly === true) {
      moveCursorToEnd($('txt-input'));
      $('txt-input').readOnly = false;
    }
  }
}

function toggleSound() {
  if ($('menu-sound-li').classList.contains('strikethrough')) {
    $('menu-sound-li').classList.remove('strikethrough');
    muteAudio(false);
  } else {
    $('menu-sound-li').classList.add('strikethrough');
    muteAudio(true);
  }
  clearInterval(flashInterval);
}

function runNotes() {

  try {
    $('indicate-execution').classList.remove('hidden');
      setTimeout(function() {
        calculate($('lst-notes').value);
        if (!$('indicate-execution').classList.contains('hidden')) $('indicate-execution').classList.add('hidden');
      }, 20);
  } catch {
    if (!$('indicate-execution').classList.contains('hidden')) $('indicate-execution').classList.add('hidden');
  }
  i = '√-1';
  j = '√-1';
}

function menuNotes() {
  if (shifted) {
    backupUndo();    
    runNotes();
  } else {
    btnXoff();
  }
}

//////// Buttons /////////////////////////////////////////////////////////////////////

function rpnapesOn() {
  $('notes').classList.remove('visible');
  $('notes').classList.add('hidden');
  $('wrap').classList.remove('tricorder-background');
  $('widget').classList.remove('visible');
  $('widget').classList.add('hidden');
  $('viewport').classList.remove('visible');
  $('viewport').classList.add('hidden');
  $('tricorder').classList.remove('visible');
  $('tricorder').classList.add('hidden');
  if (power()) playAudio($('keypress3'));
  if (!$('menu-sound-li').classList.contains('strikethrough')) muteAudio(false);
  $('rpnapes').classList.remove('hidden');
  $('rpnapes').classList.add('visible');
  if ($('lst-stack').classList.contains('resizable')) {
    $('lst-stack').classList.remove('resizable');
    resizeTextarea($('lst-stack'));
  }
  $('txt-input').focus();
}

function notesOn() {
  $('rpnapes').classList.remove('visible');
  $('rpnapes').classList.add('hidden');
  monOff();
  $('wrap').classList.remove('tricorder-background');
  $('widget').classList.remove('visible');
  $('widget').classList.add('hidden');
  $('viewport').classList.remove('visible');
  $('viewport').classList.add('hidden');
  $('tricorder').classList.remove('visible');
  $('tricorder').classList.add('hidden');
  if (power()) playAudio($('keypress3'));
  $('notes').classList.remove('hidden');
  $('notes').classList.add('visible');
  if ($('lst-notes').classList.contains('resizable')) {
    $('lst-notes').classList.remove('resizable');
    resizeTextarea($('lst-notes'));
  }
  if (!isPhone) $('lst-notes').focus();
}

function showTricorder() {  
  $('rpnapes').classList.remove('visible');
  $('rpnapes').classList.add('hidden');
  monOff();
  $('notes').classList.remove('visible');
  $('notes').classList.add('hidden');
  if (power()) playAudio($('tricorder-alert'));
  $('wrap').classList.add('tricorder-background');
  $('tricorder').classList.remove('hidden');
  $('tricorder').classList.add('visible');
  $('viewport').classList.remove('hidden');
  $('viewport').classList.add('visible');
}

function btnXoff() {

  
  if ($('rpnapes').classList.contains('hidden')) {
    // Notes is visible - turn on RPNapes
    rpnapesOn();
  } else if ($('notes').classList.contains('hidden') && $('tricorder').classList.contains('hidden')) {
    // RPNapes is visible - turn on Notes
    notesOn();
  }
  if (isMobile) {
    resizeTextAreas();
    if (isFirefox) $('lst-stack').scrollTop = $('lst-stack').scrollHeight;
  }
}

function copy() {
  if (!stackFocus && !isTextSelected($('txt-input'))) $('txt-input').select();

  if (!stackFocus) {
    navigator.clipboard.writeText(getSelectedText('txt-input'));
    $('txt-input').focus();
  } else {
    navigator.clipboard.writeText(getSelectedText('lst-stack'));
    $('lst-stack').focus();
  }
}
  
function btnPaste() {
  backupUndo();
  // Firefox only supports reading clipboard in browser extensions
  // using the "clipboardRead" extension permission :(
  if (stackFocus) {
    insertAtCursor($('txt-input'), getSelectedText('lst-stack'));
  } else {
    if (navigator.clipboard.readText) {
      var copiedText = navigator.clipboard.readText();
      copiedText.then(copiedText => {
        insertAtCursor($('txt-input'), copiedText);
      });
    } else {
      rpnAlert('Not supported by browser.');
    }
  }
  setTimeout(resizeInput, 180);
  setTimeout(function() {
    $('txt-input').scrollTop = $('txt-input').scrollHeight;
  }, 186);
  $('txt-input').focus();
}

function btnCopy() {
  if (shifted) {
    btnPaste();
  } else {
    copy();
  }  
}

function getX(input) {
  var x = input === undefined ? $('txt-input').value.trim() : input.toString();
  var soulX = x;
  var firstValueX = extractFirstValue(soulX);
  var tmpComplex = extractLateral(soulX, firstValueX);
  var imaginaryX = tmpComplex[1];
  var unitsX = extractUnits(soulX);

  firstValueX = tmpComplex[0];
  unitsX = encodeSpecialChar(unitsX);

  if (radix === 10 || (!isANumber(firstValueX) && !isANumber(imaginaryX))) {
    soulX = encodeSpecialChar(soulX);
  } else {
    var sign = imaginaryX > 0 ?  '+' : '';
    var real = isNaN(firstValueX) ? '' : firstValueX + ' ';
    var imaginary = isNaN(imaginaryX) ? '' : imaginaryX + 'j';
    soulX = real + sign + imaginary + ' ' + unitsX;
  }
    
  return new NumberObject(soulX, firstValueX, imaginaryX, unitsX);
}

function objToString(obj) {
  var theString = '';
  var isNumber = isANumber(obj.getRealPart());
  var isImaginary = isANumber(obj.getImaginary());

  if (!isNumber && !isImaginary) {    
    theString += decodeSpecialChar(obj.getSoul());
  } else {      
    if ($('menu-form').textContent === 'Polar') {      
      // Rectangular
      if (isNumber && obj.getRealPart() !== 0 && obj.getRealPart() !== '0') theString += formatNumber(obj.getRealPart().toString());

      if (isImaginary && obj.getImaginary() !== '0') {
        var space = '';
        var sign = '';
  
        if (isNumber && obj.getRealPart() !== 0 && obj.getRealPart() !== '0') {
          space = ' ';
          sign = ' + ';
        }
        if (obj.getImaginary().charAt(0) === '-') {
          theString += space + '-' + space + formatNumber(obj.getImaginary().toString().slice(1)) + 'j';
        } else {
          theString += sign + formatNumber(obj.getImaginary().toString()) + 'j';
        }        
      }
    } else {
      // Polar           
      var argument = calculate(obj.getRealPart()) ? calculate(obj.getRealPart()) : 0;
      var imaginary = calculate(obj.getImaginary()) ? calculate(obj.getImaginary()) : 0;
      var complex = math.complex(argument, imaginary);
      var radius = complex.abs() ? complex.abs() : Math.abs(complex.re);
      argument = $('btn-angle').value === 'deg' ? complex.arg() * 180 / Math.PI : complex.arg();

      if (/[.][9]{13,}[0-9]*[0-9]$/.test(radius) || /[.][0]{13,}[0]*[1]$/.test(radius)) radius = Math.round(radius);  
      if (/[.][9]{13,}[0-9]*[0-9]$/.test(argument) || /[.][0]{13,}[0]*[1]$/.test(argument)) argument = Math.round(argument);  
      
      theString += formatNumber(radius);
      if (argument !== 0) theString += '∠' + formatNumber(argument);          
    }
    if (theString === '') theString = '0';
    if (obj.getUnits() !== 'null' && theString !== '0') theString += ' ' + obj.getUnits();
  }
  theString = theString.replace(/(?<!\w)ohm(?!\w)/g, 'Ω');
  return theString;
}

function objToVector(obj) {
  var theString = '';
  var isNumber = isANumber(obj.getRealPart());
  var isImaginary = isANumber(obj.getImaginary());

  if (!isNumber && !isImaginary) {    
    theString += decodeSpecialChar(obj.getSoul());
  } else {         
    
    if (isNumber && obj.getRealPart() !== 0 && obj.getRealPart() !== '0') theString += formatNumber(obj.getRealPart().toString());

    if (isImaginary && obj.getImaginary() !== '0') {
      var space = '';
      var sign = '';

      if (isNumber && obj.getRealPart() !== 0 && obj.getRealPart() !== '0') {
        space = ' ';
        sign = ' + ';
      }
      if (obj.getImaginary().charAt(0) === '-') {
        theString += space + '-' + space + formatNumber(obj.getImaginary().toString().slice(1)) + 'j';
      } else {
        theString += sign + formatNumber(obj.getImaginary().toString()) + 'j';
      }        
    }    
    if (theString === '') theString = '0';
    if (obj.getUnits() !== 'null' && theString !== '0') theString += ' ' + obj.getUnits();
  }
  return theString;
}

function btnXy() {
  if (shifted) {
    abFunction();
  } else {
    xyFunction();
  }  
}

function abFunction() {
  if (stack.length > 1) {
    backupUndo();
    var yA = stack.pop();
    var yB = stack.pop();
    stack.push(yA);
    stack.push(yB);
    updateDisplay();
  }
  $('txt-input').focus();
}

function swapX(objX) {
  if (objX === undefined) objX = new NumberObject('', 'NaN', 'NaN','null');
  $('txt-input').value = objToString(objX);  
  updateDisplay()
}

function xyFunction() {  
  var objY = getX();
  var objX;
  
  if (stackFocus) {
    var index = getIndex('lst-stack') - stackSize;
    if (index > -1) {
      backupUndo();
      objX = stack[index];
      stack[index] = objY;
      swapX(objX);
    }
  } else {
    backupUndo();
    objX = stack.pop();
    enterInput();
    swapX(objX);
  }
  setTimeout(resizeInput, 180);
}

function calculate(expression) {
  var parsed = parseEvaluation(expression);

  parsed = decodeSpecialChar(parsed);
  parsed = parsed.replace(/,/g, '');
  parsed = parsed.replace(/\$/g, '');
  
  parsed = parsed.replace(/(?<!\w)Ω(?!\w)/g, 'ohm');
  console.log('parsed', parsed);

  try {
    var result = eval(parsed);
    
    if (result === undefined || (isNaN(result) && (typeof result).toLowerCase() === 'number') || /√-1|ii/g.test(result)) throw new Error;    
    return result;

  } catch(e) {

    if (/^ReferenceError: (?![ⅽ℮ɢΦπ])/.test(e.toString())) return e.toString();
    try {
      parsed = parsed.replace(/sin\(/g, 'mathSin(');
      parsed = parsed.replace(/cos\(/g, 'mathCos(');
      parsed = parsed.replace(/tan\(/g, 'mathTan(');
      parsed = parsed.replace(/asin\(/g, 'mathASin(');
      parsed = parsed.replace(/acos\(/g, 'mathACos(');
      parsed = parsed.replace(/atan\(/g, 'mathATan(');
      parsed = parsed.replace(/ln\(/g, 'log(');
      parsed = parsed.replace(/mathP/g, 'p');
      parsed = parsed.replace(/ⅽ/g, '299792458');
      parsed = parsed.replace(/℮/g, '2.718281828459045');
      parsed = parsed.replace(/ɢ/g, '6.674e-11');
      parsed = parsed.replace(/j/g, 'i');
      parsed = parsed.replace(/Φ/g, '1.618033988749895');
      parsed = parsed.replace(/π/g, '3.141592653589793');
      return math.evaluate(parsed);      
    } catch (e) {

      if (isMobile) return;
      return e.toString();
    }    
  }
}

function runProgram() {
  btnShift();
  btnLoad();
  $('txt-input').select();
}

function softEnter() {
  backupUndo();
  // cashed = '';
  
  var input = $('txt-input').value.trim();
  if (stack.length > 0 || (input !== '' && input !== 'NaN')) stack.push(getX(input));
  
  updateDisplay();
  parseCommand();
}

function enterButton() {
  if (shifted) {
    btnEval();
  } else {
    btnEnter();
  }
}

function btnEnter() {
  backupUndo();
  // cashed = '';

  if (stackFocus) {
    insertAtCursor($('txt-input'), getSelectedText('lst-stack'));
    resizeInput();
  } else {
    var input = $('txt-input').value.split('\n');
    
    for (var i = 0; i < input.length; i++) {
      if (stack.length > 0 || (input !== '' && input !== 'NaN')) stack.push(getX(input[i].trim()));
    }
  }
  updateDisplay();
  if (isMobile) setTimeout(resizeInput, 180);
  parseCommand();  
}

function stripUnits(tmpString) {
  return tmpString.replace(/(?![eE][-+]?[0-9]+)(?![ij]\b)(?:[1][\/])?([Ω♥a-zA-Z](?<!Infinity))+([-*\/\^Ω♥a-zA-Z.0-9](?<!Infinity))*$/, '');  
}

function btnEval() {
  backupUndo();
  var objX;
  // cashed = '';
  
  if (stackFocus) insertAtCursor($('txt-input'), getSelectedText('lst-stack'));
  objX = getX();
  var units = objX.getUnits() !== 'null' ? ' ' + objX.getUnits() : '';
  
  if (objX.getSoul().match(/^run$/)) {
    btnLoad();
    return;
  }
  // Contains [*!^√()] && Not part of a program
  if ((/[*!^√()]/.test($('txt-input').value) || /1\//g.test(getX($('txt-input').value).units)) && !/[=;,<>?:'"`~@#$%&×{}[\]|\\_]/g.test($('txt-input').value)) {
    displayResult(calculate(stripUnits($('txt-input').value)), units);
  } else {
    displayResult(calculate($('txt-input').value), ''); 
  }
  $('txt-input').select();  
}

function enterInput() {
  var objX = getX();
  stack.push(objX);
  $('txt-input').value = $('txt-input').value.trim();  
}

function outputTestResult(result, newUnits) { 
  var objX;
  if (result !== undefined) {

    if (typeof result === 'number' || typeof result === 'string') {
      objX = getX(result);
    } else {    
      if (result.re !== undefined && !isNaN(result.re)) objX = getComplex(result);
    }
    if (objX) result = objToString(objX);
    
    if (result !== '0') result += newUnits;

    return result;
  }
}

function runTest() {
  try {
    if (stack.length > 0 && stack.length % 2 === 0) {
      var expression = decodeSpecialChar(stack[stack.length - 2].getSoul());
      var result = calculate(stripUnits(expression));
      var units = getX(expression).getUnits() !== 'null' ? ' ' + getX(expression).getUnits() : '';
      var valueY = outputTestResult(result, units);
      var valueX = decodeSpecialChar(stack[stack.length - 1].getSoul());
      var color = valueY === valueX ? 'green' : 'red';

      console.log(`${valueY} %c${valueY === valueX}`, `font-weight: bold; color: ${color};`);
    }
  } catch(e) {
    console.log(`%c${stack[stack.length - 2].soul, e.toString()}`, 'font-weight: bold; color: red;');
  }
}

function deleteButton() {
  if (shifted) {
    btnBackspace();
  } else {
    btnDelete();
  }    
}

function deleteInput() {
  if (stack.toString() !== '') backupUndo();

  $('txt-input').value = $('txt-input').value;
    
  if (stackFocus) {
    stack.splice(getIndex('lst-stack') - stackSize, 1);
    updateDisplay();
  } else if ($('txt-input').value !== '' && $('txt-input').selectionStart === $('txt-input').value.length) {
    $('txt-input').selectionStart = 0;
    $('txt-input').focus();
  } else if ($('txt-input').value === '') {
    stack.pop();
    updateDisplay();
  } else {
    deleteText($('txt-input'), true);
  }
}

function btnDelete() {  
  deleteInput();
  setTimeout(resizeInput, 180);
}

function deleteText(txtField, forward) {
  var startPos = txtField.selectionStart;
  var endPos = txtField.selectionEnd;

  if (shifted && endPos === 0) {
    endPos = $('txt-input').value.length;
    startPos = endPos;
  }
  if (forward && txtField.selectionStart === txtField.selectionEnd) endPos++;
  if (!forward && txtField.selectionStart === txtField.selectionEnd) startPos--;
  
  txtField.value = txtField.value.slice(0, startPos) + txtField.value.slice(endPos, txtField.value.length);
  
  txtField.selectionStart = startPos;
  txtField.selectionEnd = startPos;
  $('txt-input').focus();
}

function btnBackspace() {
  if (stack.toString() !== '') backupUndo();

  if (stackFocus) {
    stack.splice(getIndex('lst-stack') - stackSize, 1);  
    updateDisplay();  
  } else if ($('txt-input').value === '') {
    stack.pop();
    updateDisplay();
  } else {
    deleteText($('txt-input'), false);
  }
  setTimeout(resizeInput, 180);
}

function btnUndo() {
  if (shifted) {
    redoFunction();
  } else {
    undoFunction();
  }  
}

function colorUndoButton() {
  if (($('btn-undo').value === 'UND' && backups.length > 3) || ($('btn-undo').value === 'REDO' && restores.length > 0)) {
    $('btn-undo').style.color = '#25FC5A';
  } else {
    $('btn-undo').style.color = '#D4D0C8';
  }        
  colorUndoRedoMenu();
}

function colorUndoRedoMenu() {
  if (backups.length > 3) {
    $('menu-undo').style.color = '#088B00';
  } else {
    $('menu-undo').style.color = '#D4D0C8';
  }
  if (restores.length > 0) {
    $('menu-redo').style.color = '#088B00';
  } else {
    $('menu-redo').style.color = '#D4D0C8';
  }
}

function undoBase(input, aRadix) {
  var inputArr = input.split('\n');
  var outputArr = [];

  for (var i = 0; i < inputArr.length; i++) {
    inputArr[i] = getX(inputArr[i]);
  }
  radix = 10;
  
  for (var i = 0; i < inputArr.length; i++) {
    outputArr[i] = objToString(inputArr[i]);
  }  
  radix = aRadix;
  return outputArr.toString().replace(',', '\n');
}

function redoBase(input, aRadix) {
  var inputArr = input.split('\n');
  var outputArr = [];
  
  for (var i = 0; i < inputArr.length; i++) {
    inputArr[i] = getX(inputArr[i]);
  }
  radix = aRadix;
  
  for (var i = 0; i < inputArr.length; i++) {
    outputArr[i] = objToString(inputArr[i]);
  }    
  radix = 10;
  return outputArr.toString().replace(',', '\n');
}

function formatInputStr(input) {
  var outputArr = input.split('\n');
  
  for (var i = 0; i < outputArr.length; i++) {
    outputArr[i] = objToString(getX(outputArr[i]));
  }
  return outputArr.join('\n');
}

function stringToStackObj(tmpArray) {
  var objY = getX(tmpArray);
  stack.push(objY);
}

function undoFunction() {

  if (backups.length > 3) {   
    var shortStack = [];    
    var currentRadix = radix;
    var input = radix === 10 ? $('txt-input').value.trim() : undoBase($('txt-input').value, currentRadix);

    radix = 10;
    
    for (var i = 0; i < stack.length; i++) shortStack.push(stack[i].getSoul());

    restores.push(nestArrayByBrowser(shortStack));
    restores.push(input);
    currentRadix === 10 ? $('txt-input').value = formatInputStr(backups.pop()) : $('txt-input').value = redoBase(backups.pop(), currentRadix);

    var backupArray = backups.pop();
    stack.length = 0;
    backupArray = splitArrayByBrowser(backupArray);

    var i = 1;
    while (i < backupArray.length) {
      stringToStackObj(backupArray[i]);
      i++;
    }
    radix = currentRadix;
    updateDisplay();
    resizeInput();
  }
  colorUndoButton();
}

function redoFunction() {

  if (restores.length > 0) {
    var shortStack = [];    
    var currentRadix = radix;
    var input = radix === 10 ? $('txt-input').value.trim() : undoBase($('txt-input').value, currentRadix);

    radix = 10;

    for (var i = 0; i < stack.length; i++) shortStack.push(stack[i].getSoul());

    backups.push(nestArrayByBrowser(shortStack));
    backups.push(input);
    currentRadix === 10 ? $('txt-input').value = formatInputStr(restores.pop()) : $('txt-input').value = redoBase(restores.pop(), currentRadix);

    var restoredArray = restores.pop();
    stack.length = 0;
    restoredArray = splitArrayByBrowser(restoredArray);
    
    var i = 1;
    while (i < restoredArray.length) {
      stringToStackObj(restoredArray[i]);
      i++;
    }
    radix = currentRadix;
    updateDisplay();
    resizeInput();
  }
  colorUndoButton();
}

function backupUndo() {
  var shortStack = [];
  var currentRadix = radix;
  var input = radix === 10 ? $('txt-input').value.trim() : undoBase($('txt-input').value, radix);

  radix = 10;

  for (var i = 0; i < stack.length; i++) shortStack.push(stack[i].getSoul());
  
  if (backups.length < 3 || backups[backups.length - 2] !== nestArrayByBrowser(shortStack) || backups[backups.length - 1] !== input && (stack.length > 0 || (input !== '' && input !== 'NaN'))) {      
    backups.push(nestArrayByBrowser(shortStack));
    backups.push(input);
    restores.length = 0;
    colorUndoButton();  
  }
  radix = currentRadix;
}

function toggleChar(input, index, regex, char) {
  
  if (regex.test(input.charAt(index - 1))) {
    $('txt-input').value = input.removeAt(index - 1, index);        
  } else if (regex.test(input.charAt(index))) {
    $('txt-input').value = input.removeAt(index, index + 1);   
    index ++;
  } else {
    insertAtCursor($('txt-input'), char);
    index = index + 2;
  }
  $('txt-input').selectionStart = index - 1;
  $('txt-input').selectionEnd = index - 1;   
}

function buttonInsert(regex, char) {
  var input = $('txt-input').value;
  var index = $('txt-input').selectionStart;  

  if (!regex.test(input.charAt(index))) {
    
    if (regex.test(input.charAt(index - 1))) {
      toggleChar(input, index - 1, regex, char);
    } else {
      insertAtCursor($('txt-input'), char);
    }    
  } else if (isTextSelected($('txt-input'))) {
    insertAtCursor($('txt-input'), char);
  }
  resizeInput();
  $('txt-input').focus();
}

function btnEe() {
  var input = $('txt-input').value;
  var index = $('txt-input').selectionStart;

  if (shifted) {
    if ($('menu-form').textContent === 'Polar') {      
      // (Cursor is next to valid char && input doesn't contain illegal char) || cursor is at 'j' || cursor is next to 'j'
      if ((/[ⅽ℮ɢΦπ0-9y)]/.test(input.charAt(index - 1)) && !/[;,<>?:'"`~@#$%&×{}[\]|\\_]/g.test(input)) || input.charAt(index) === 'j' || input.charAt(index - 1) === 'j') {
        toggleChar(input, index, /[j]/, 'j');        
      }              
    } else {      
      // (There is no '∠' && cursor is next to valid char && input doesn't contain illegal char) || cursor is at '∠' || cursor is next to '∠'
      if ((input.split('∠').length - 1 === 0 && /[ⅽ℮ɢΦπ0-9y]/.test(input.charAt(index - 1)) && !/[;,<>?:'"`~!@#$%√^&×(){}[\]|\\_]/g.test(input)) || input.charAt(index) === '∠' || input.charAt(index - 1) === '∠') {
      toggleChar(input, index, /[∠]/, '∠');
      }
    }
  } else {
    // (Cursor is next to valid char && not at [.] && input doesn't contain illegal char && [Ee] is not already part of the number) || cursor is at [Ee] || cursor is next to [Ee]
    if ((/[0-9Ee](?![.])/.test(input.charAt(index - 1)) && !/[.]/.test(input.charAt(index)) && !/[;,<>?:'"`~@#$%&×{}[\]|\\_]/g.test(input) && !/[0-9.]+[Ee]+[0-9.]+$/.test(input)) || /[Ee]/.test(input.charAt(index)) || /[Ee]/.test(input.charAt(index - 1))) {      
      toggleChar(input, index, /[Ee]/, 'e');
    }
  }
  resizeInput();
  $('txt-input').focus();
}

function searchDuckDuckGo() {
  var query = stackFocus ? getSelectedText('lst-stack') : $('txt-input').value.trim().replace('&', '%26');
  var domainString = 'https://duckduckgo.com/?q=';

  if (query) {    
    domainString += query;
    window.open(domainString, '_blank');    
  } else {
    window.open('https://duckduckgo.com/');
  }
}

function searchGoogle() {
  var query = stackFocus ? getSelectedText('lst-stack') : $('txt-input').value.trim().replace('&', '%26');
  var domainString = 'https://www.google.com/search?q=';
  
  if (query) {
    if (/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(:([0-9]|[1-9][0-9]{1,3}|[1-3][0-9]{4}|4[0-8][0-9]{3}|490[0-9]{2}|491[0-4][0-9]|4915[01]))?$/.test(query)
    || /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/.test(query)
    || /.+\.(au|biz|blog|ca|com|de|edu|gov|in|io|mil|net|org|ru|stream|uk|us)\/?.*$/.test(query)
    || /^http[s]?:\/\//.test(query)) {

      if (!/^http[s]?:\/\//.test(query)) query = 'http://' + query;
      
      window.open(query);
    } else {
      domainString += query;
      window.open(domainString, '_blank');
    }    
  } else {
    window.open('https://www.google.com/');
  }
}

function searchWikipedia() {
  var query = stackFocus ? getSelectedText('lst-stack') : $('txt-input').value.trim().replace('&', '%26');
  var domainString = 'https://en.wikipedia.org/w/index.php?search=';

  if (query) {    
    domainString += query;
    window.open(domainString, '_blank');    
  } else {
    window.open('https://en.wikipedia.org/');
  }
}

function searchYouTube() {
  var query = stackFocus ? getSelectedText('lst-stack') : $('txt-input').value.trim().replace('&', '%26');
  var domainString = 'https://www.youtube.com/results?search_query=';

  if (query) {    
    domainString += query;
    window.open(domainString, '_blank');    
  } else {
    window.open('https://www.youtube.com/');
  }
}

function btnGo() {  
  if (shifted) {
    searchYouTube();
  } else {
    searchGoogle();
  }
  resizeInput();
  $('txt-input').select();
}

function btnShift() {
  if (shifted) {
    // Shifting to false...
    shifted = false;
    $('indicate-shift').classList.add('hidden');
    $('menu-open').innerHTML = 'Open';
    $('open').setAttribute('title', 'Open a file');
    $('menu-load').innerHTML = 'Load';
    $('menu-load').setAttribute('title', 'Load stack');
    $('menu-sine').innerHTML = 'sin';
    $('menu-cosine').innerHTML = 'cos';
    $('menu-tangent').innerHTML = 'tan'
    $('menu-notes').innerHTML = 'Notes'
    $('menu-notes').setAttribute('title', 'Switch to Notes');
    $('btn-copy').value = 'COPY';
    $('btn-copy').style.color = '#000000';
    $('btn-xy').value = 'x < > y';
    $('btn-enter').classList.remove('btn-big-font');
    $('btn-enter').value = 'ENTER';
    $('btn-delete').innerHTML = 'DEL';
    $('btn-inverse').value = '1 / x';
    $('btn-log').innerHTML = 'log<sub>x</sub>y';
    $('btn-root').innerHTML = 'y&nbsp;<sup>x</sup>';
    $('btn-undo').value = 'UND';
    $('btn-ee').classList.add('btn-small-font');
    $('btn-ee').value = 'EE';
    $('btn-pi').innerHTML = '&#120587;';
    $('btn-modulus').style.color = '#000000';
    $('btn-modulus').style.borderColor = '#D4D0C8';
    $('btn-modulus').value = '%';
    $('btn-sign').style.color = '#000000';
    $('btn-sign').style.borderColor = '#D4D0C8';
    $('btn-sign').innerHTML = '±';
    $('btn-go').classList.remove('you-tube');
    $('btn-go').classList.add('google');
    $('btn-go').innerHTML = '<span class="color-blue">G</span><span class="color-red">o</span>';
    $('btn-shift').className = 'btn-med btn-shift';
    $('btn-divide').style.color = '#000000';
    $('btn-divide').style.borderColor = '#D4D0C8';
    $('btn-divide').value = '÷';
    $('btn-multiply').style.color = '#000000';
    $('btn-multiply').style.borderColor = '#D4D0C8';
    $('btn-multiply').innerHTML = 'x';
    $('btn-sine').innerHTML = 'sin';
    $('btn-subtract').style.color = '#000000';
    $('btn-subtract').style.borderColor = '#D4D0C8';
    $('btn-cosine').innerHTML = 'cos';
    $('btn-load').value = 'LOA';
    $('btn-space').value = '';
    $('btn-add').style.color = '#000000';
    $('btn-add').style.borderColor = '#D4D0C8';
    $('btn-tangent').innerHTML = 'tan';
    $('btn-load-notes').value = 'LOAD';
  }
  else {
    // Shifting to true...
    shifted = true;
    $('indicate-shift').classList.remove('hidden');
    $('menu-open').innerHTML = 'RunFile';
    $('open').setAttribute('title', 'Run JS file');
    $('menu-load').innerHTML = 'Run';
    $('menu-load').setAttribute('title', 'Run stack');
    $('menu-sine').innerHTML = '<span class="btn-small-font">sin<sup>-1</sup></span>';
    $('menu-cosine').innerHTML = '<span class="btn-small-font">cos<sup>-1</sup></span>';
    $('menu-tangent').innerHTML = '<span class="btn-small-font">tan<sup>-1</sup></span>';
    $('menu-notes').innerHTML = 'Run Notes'
    $('menu-notes').setAttribute('title', 'Run Notes');
    $('btn-copy').value = 'PASTE';
    if (isFirefox) $('btn-copy').style.color = '#808080';
    $('btn-xy').value = 'a < > b';
    $('btn-enter').classList.add('btn-big-font');
    $('btn-enter').value = '=';
    $('btn-delete').innerHTML = '<span class="btn-backspace">⌫</span>';
    $('btn-inverse').value = 'x !';
    $('btn-log').innerHTML = 'log<sub>e</sub>';    
    $('btn-root').innerHTML = '<sup>x</sup>&nbsp;&#8730;¯y';    
    $('btn-undo').value = 'REDO';
    $('btn-ee').classList.remove('btn-small-font');
    $('btn-ee').value = $('menu-form').textContent === 'Polar' ? 'j' : '∠';
    $('btn-pi').innerHTML = '(  )';
    $('btn-modulus').style.color = '#0000A0';
    $('btn-modulus').style.borderTopColor = '#D8D8FF';
    $('btn-modulus').style.borderRightColor = '#9393FF';
    $('btn-modulus').style.borderBottomColor = '#9393FF';
    $('btn-modulus').style.borderLeftColor = '#D8D8FF';
    $('btn-modulus').value = '√¯';
    $('btn-sign').style.color = '#0000A0';
    $('btn-sign').style.borderTopColor = '#D8D8FF';
    $('btn-sign').style.borderRightColor = '#9393FF';
    $('btn-sign').style.borderBottomColor = '#9393FF';
    $('btn-sign').style.borderLeftColor = '#D8D8FF';
    $('btn-sign').innerHTML = '<sub class="symbol-big">^</sub>';
    $('btn-go').classList.remove('google');
    $('btn-go').classList.add('you-tube');
    $('btn-go').innerHTML = '&#9654';
    $('btn-shift').className = 'btn-med btn-shifted';
    $('btn-divide').style.color = '#0000A0';
    $('btn-divide').style.borderTopColor = '#D8D8FF';
    $('btn-divide').style.borderRightColor = '#9393FF';
    $('btn-divide').style.borderBottomColor = '#9393FF';
    $('btn-divide').style.borderLeftColor = '#D8D8FF';
    $('btn-divide').value = '/';
    $('btn-multiply').style.color = '#0000A0';
    $('btn-multiply').style.borderTopColor = '#D8D8FF';
    $('btn-multiply').style.borderRightColor = '#9393FF';
    $('btn-multiply').style.borderBottomColor = '#9393FF';
    $('btn-multiply').style.borderLeftColor = '#D8D8FF';
    $('btn-multiply').innerHTML = '<sub class="symbol-big">*</sub>';
    $('btn-sine').innerHTML = '<span class="btn-small-font">sin<sup>-1</sup></span>'
    $('btn-subtract').style.color = '#0000A0';
    $('btn-subtract').style.borderTopColor = '#D8D8FF';
    $('btn-subtract').style.borderRightColor = '#9393FF';
    $('btn-subtract').style.borderBottomColor = '#9393FF';
    $('btn-subtract').style.borderLeftColor = '#D8D8FF';
    $('btn-cosine').innerHTML = '<span class="btn-small-font">cos<sup>-1</sup></span>';
    $('btn-load').value = 'RUN';
    $('btn-space').value = '=';
    $('btn-add').style.color = '#0000A0';
    $('btn-add').style.borderTopColor = '#D8D8FF';
    $('btn-add').style.borderRightColor = '#9393FF';
    $('btn-add').style.borderBottomColor = '#9393FF';
    $('btn-add').style.borderLeftColor = '#D8D8FF';
    $('btn-tangent').innerHTML = '<span class="btn-small-font">tan<sup>-1</sup></span>';   
    $('btn-load-notes').value = 'RUN';
 
  }
  colorUndoButton();
  
  if (stackFocus) {
    $('lst-stack').focus();
  } else {
    $('txt-input').focus();
  }
  if (isMobile) resizeInput();
}

function btnClear() {
  if (stack.toString() !== '') backupUndo();
  monOff();
  $('txt-input').value = '';
  $('lst-stack').value = '';
  stack.length = 0;
  colorSaveButton();
  resizeInput();
  $('txt-input').focus();
}

function btnSave() {
  var shortStack = [];

  updateDisplay();  
  
  for (var i = 0; i < stack.length; i++) shortStack.push(stack[i].getSoul());

  saveCookie('STACK', nestArrayByBrowser(shortStack));
  saveCookie('MATHMON', nestArrayByBrowser(theObjects));

  updateDisplay();
  $('btn-save').style.color = '#D4D0C8';
  $('txt-input').focus();

  if (isMobile) resizeInput();
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

function saveFile(fileName, pretty) {
  var myBlob;
  var blobContent = '';

  fileName = fileName.trim() === '' ? 'untitled' : decodeSpecialChar(fileName.toString());

  if (stack.length > 0 || notes.length > 1) {
    blobContent += '===== ' + fileName.toString() + ' =====\n\n';
    
    for (var sta in stack) {
      if (pretty) {
        blobContent += objToString(stack[sta]);
      } else {
        blobContent += decodeSpecialChar(stack[sta].toString());
      }      
      blobContent += '\n'; 
    }
    if (fileName !== 'untitled' || !pretty) blobContent += '\n';

    blobContent += '===== Notes ======\n';
    for (var note in notes) {
      blobContent += decodeSpecialChar(notes[note]);
      blobContent += '\n';
    }
    myBlob = new Blob([blobContent], { type: 'text/plain;charset=utf-8' });
    fileName += '.txt';
    saveAs(myBlob, fileName);// filesaver.js
  } else {
    rpnAlert('Error: There is no data to save.');
  }
}

function btnLoad() {  
  var index = 0;

  try { 
    index = getCookie('STACK').indexOf('=') + 1;
    $('btn-save').style.color = '#D4D0C8';        

    if (getCookie('STACK').slice(index) !== '') {

      if (shifted) {
        $('indicate-execution').classList.remove('hidden');
        setTimeout(function() {
          loadProgram(getCookie('STACK').slice(index));
        }, 20);        
      } else {
        loadStack(getCookie('STACK').slice(index));
      }
    } else {
      backupUndo();
    } 
  } catch (err) { 
    rpnAlert('Load STACK error.');
    if (shifted) { 
      if (!$('indicate-execution').classList.contains('hidden')) $('indicate-execution').classList.add('hidden');
    }
   }
  try {
    index = getCookie('MATHMON').indexOf('=') + 1;
    loadMathMon(getCookie('MATHMON').slice(index));
  } catch(err) { rpnAlert('Load MATHMON error.'); }
  updateDisplay();
  i = '√-1';
  j = '√-1';
  if (isMobile) resizeInput();
}

function loadProgram(tmpStack) {
  var shortStack = [];    
  for (var i = 0; i < stack.length; i++) shortStack.push(stack[i].getSoul());

  var prevStack = nestArrayByBrowser(shortStack);
  if (prevStack !== tmpStack || shifted) backupUndo();
  stack = [];

  if ((/*@cc_on!@*/false || !!document.documentMode) || isChrome || isSafari) {
    // Remove underscore from beginning of string
    tmpStack = tmpStack.slice(1);
  }
  tmpStack = splitArrayByBrowser(tmpStack);
    
  while (tmpStack.length > 0) {
    var tmpString = tmpStack.shift();

    stringToStackObj(tmpString);  
    $('txt-input').value = calculate(decodeSpecialChar(tmpString));
    if (testing) runTest();
  }
  if (!$('indicate-execution').classList.contains('hidden')) $('indicate-execution').classList.add('hidden');
  i = '√-1';
  j = '√-1';
}

function loadStack(tmpStack) {
  var currentRadix = radix;
  radix = 10;

  var shortStack = [];
  for (var i = 0; i < stack.length; i++) shortStack.push(stack[i].getSoul());

  var prevStack = nestArrayByBrowser(shortStack);
  if (prevStack !== tmpStack || shifted) backupUndo();
  stack = [];

  if ((/*@cc_on!@*/false || !!document.documentMode) || isChrome || isSafari) {
    // Remove underscore from beginning of string
    tmpStack = tmpStack.slice(1);
  }
  tmpStack = splitArrayByBrowser(tmpStack);
    
  while (tmpStack.length > 0) {
    var tmpString = tmpStack.shift();
    stringToStackObj(tmpString);
  }
  radix = currentRadix;
}

function splitArrayByBrowser(tmpArray) {

  if ((/*@cc_on!@*/false || !!document.documentMode) || isChrome || isSafari) {
    tmpArray = tmpArray.split('_');
  } else {// Firefox
    tmpArray = tmpArray.split('\t');
  }
  return tmpArray;
}

function btnOff() {
  monOff();
  tricorderOff();  
  // Works for Chrome and Firefox-desktop if set as a home page ;)
  if (!(isMobile && isFirefox)) {    
    window.open('','_self').close();
    window.open(location, '_self').close();
    window.close();
    window.open('', '_self', '');
    window.close();
    window.top.close();
  }
  
  rpnAlert('Scripts may only close windows they opened.');
  window.location.href = 'https://www.google.com';
}

//////// Algebraic Buttons ///////////////////////////////////////////////////////////

function inverse() {
  backupUndo();
  var objX;
  var result;
  var newUnits;

  if (stackFocus) {    
    objX = stack[getIndex('lst-stack') - stackSize];
    $('txt-input').value = decodeSpecialChar(objX.getSoul());
    backupUndo();// <--Needed for UI consistency
  } else {
    objX = getX();
  }
  var input = $('txt-input');
  newUnits = inverseUnits(objX.getUnits());

  //  Input is cashed && Input is not equal to backup
  // if (input.value === cashed && input.value !== decodeSpecialChar(backups[backups.length - 3])) {
  if (false) {
    var currentRadix = radix;
    radix = 10;

    result = redoBase(decodeSpecialChar(backups[backups.length - 3]), currentRadix);
    radix = currentRadix;

    displayResult(result, '');
  } else {
    // Is input is a number?
    if (isANumber(objX.getRealPart()) || isANumber(objX.getImaginary())) {

      if (objX.getImaginary() === '0') {
        
        if (objX.getRealPart() === 'NaN') objX.setRealPart('0');
        objX.setImaginary('NaN');
      }
      var x = isANumber(objX.getImaginary()) ? buildComplexNumber(objX) : calculate(objX.getRealPart(objX));

      displayResult(math.inv(x), newUnits);
    } else {
      result = calculate(stripUnits(input.value));
      
      if ((result !== undefined && result !== true && result !== false) && (!isNaN(result) || !isNaN(result.im))) {
        displayResult(math.inv(result), newUnits);

      } else {
        // Input is text that begins with [-+]?1/     
        if(/^[-+]?1\//.test(input.value)) {

          if (input.value.charAt(0) === '-') {
            input.value = input.value.slice(3);

            if (input.value.charAt(0) === '-') {
              input.value = input.value.slice(1);
            } else {

              if (input.value.charAt(0) === '+') input.value = input.value.slice(1);
              input.value = '-' + input.value;
            }
          } else {

            if (input.value.charAt(0) === '+') input.value = input.value.slice(1);
            input.value = input.value.slice(2);
            
            if (input.value.charAt(0) === '+') input.value = input.value.slice(1);
          }
        } else {
          // Input is blank
          if (input.value.trim() === '') {
            input.value = '0';
            backupUndo();
            input.value = 1 / 0;
          } else {
            // Input is text that begins with [-+]?
            if (input.value.trim().charAt(0) === '-' && input.value.trim().length > 1) {
              input.value = input.value.slice(1);
              input.value = '-1/' + input.value.toString();
            } else {

              if (input.value.charAt(0) === '+') input.value = input.value.slice(1);
              input.value = '1/' + input.value.toString();
            }
          }
        }
      }      
    }
  }
  // cashed = input.value;
  resizeInput();
  input.select();
}

function btnInverse() {
  if (shifted) {
    btnFactorial();    
  } else {
    inverse();
  }
}

function intFactorial(num) {  
  if (num <= 1) {
    return 1;
  } else {
    try {
      var result = num * factorial(num - 1);
    } catch (e) {
      return 'Infinity';
    }
    return result;
  }
}

function gamma(n) {  // Accurate to about 15 decimal places
  // Some magic constants
  var g = 7, // g represents the precision desired, p is the values of p[i] to plug into Lanczos' formula
    p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
  if(n < 0.5) {
    return Math.PI / Math.sin(n * Math.PI) / gamma(1 - n);
  }
  else {
    n--;
    var x = p[0];
    for(var i = 1; i < g + 2; i++) {
      x += p[i] / (n + i);
    }
    var t = n + g + 0.5;
    return Math.sqrt(2 * Math.PI) * Math.pow(t, (n + 0.5)) * Math.exp(-t) * x;
  }
}

function factorial(num) {  
  var result;
  
  try {
    if (num === Infinity) num = 999;
    if (num === -Infinity) num = -999;

    if (num % 1 === 0) {
      result = intFactorial(num);
    } else {
      result = gamma(num + 1);
    }
  } catch {
    result = NaN;
  }
  return result;
}

function btnFactorial() {
  backupUndo();
  var objX;
  stackFocus ? objX = stack[getIndex('lst-stack') - stackSize] : objX = getX();
  var units = objX.getUnits() !== 'null' ? ' ' + objX.getUnits() : '';
  var x = isNaN(objX.getRealPart()) && isNaN(objX.getImaginary()) ? calculate(stripUnits(objX.getSoul())) : parseFloat(objX.getRealPart());

  displayResult(factorial(x), units);  
}

function mathLn(num) {
  var objX = getX(num);
  var x = buildComplexNumber(objX);

  return math.log(x, ℮);
}

function naturalLog() {
  backupUndo();
  var objX;
  stackFocus ? objX = stack[getIndex('lst-stack') - stackSize] : objX = getX();
  var x = objX.getSoul();
  var result;

  try {
    result = mathLn(x);
  } catch {
    result = NaN;
  }
  displayResult(result, '');
}

function mathLog(base, num) {
  if (base === undefined) base = 10;
  
  var objX = getX(base);
  var objY = getX(num);
  var result = {};
  var x = buildComplexNumber(objX);
  var y = buildComplexNumber(objY);

  result = math.log(y, x);

  if (/[.][9]{11,}[0-9]*[0-9]$/.test(result)) result = Math.round(result); 
  return result;
}

function baseLog() {
  backupUndo();
  var objX;
  var objY;
  var x;
  var y;
  var result;

  if (stackFocus) {
    objY = stack[getIndex('lst-stack') - stackSize];
  } else {
    if (stack.length - 1 < 0 || stack[stack.length - 1].getSoul() === '') {
      enterInput();
      $('txt-input').value = Number(10).toString(radix);
    }
    objY = stack.pop();
  }  
  objX = getX();

  y = buildComplexNumber(objY);
  x = buildComplexNumber(objX);

  try {
    result = math.log(y, x);    
  } catch {
    result = NaN;
  }

  if (/[.][9]{11,}[0-9]*[0-9]$/.test(result)) result = Math.round(result);
  displayResult(result, '');
}

function btnLog() {
  if (shifted) {
    naturalLog();
  } else {
    baseLog();
  }
  resizeInput();
}

function mathPow(num, pow) {
  var objX = getX(pow);
  var objY = getX(num);
  
  var x = buildComplexNumber(objX);
  var y = buildComplexNumber(objY);

  return math.pow(y, x);
}

function exponential() {
  backupUndo();
  var objX;
  var objY;
  var x;
  var y;
  var result;
  var newUnits = '';
  
  if (stackFocus) {
    objY = stack[getIndex('lst-stack') - stackSize];
  } else {
    if (stack.length - 1 < 0 || stack[stack.length - 1].getSoul() === '') {
      enterInput();
      $('txt-input').value = '2';
    }
    objY = stack.pop();
  }  
  objX = getX();

  y = buildComplexNumber(objY); 
  x = buildComplexNumber(objX);

  try {
    result = math.pow(y, x);
    newUnits = multiplyUnits(objX.getUnits(), objY.getUnits(), x); 
  } catch {
    result = NaN;
  }  
  displayResult(result, newUnits);
}

function mathRoots(root, num) {
  var objX = getX(root);
  var objY = getX(num);
  var x = buildComplexNumber(objX);
  var y = buildComplexNumber(objY);
  var results = math.nthRoots(y, x);
  var resultsArr = results.toString().split(',');

  resultsArr[0] = /(?<!\d)i$/.test(resultsArr[i]) ? resultsArr[0].replace(/i$/, '1j') : resultsArr[0].replace(/i$/, 'j');
  for (var i = 1; i < resultsArr.length; i++) {
    resultsArr[i] = /(?<!\d)i$/.test(resultsArr[i]) ? ' ' + resultsArr[i].replace(/i$/, '1j') : ' ' + resultsArr[i].replace(/i$/, 'j');
  };
  return resultsArr;
}

function mathRoot(root, num) {
  var objX = getX(root);
  var objY = getX(num);
  var x = buildComplexNumber(objX);
  var y = buildComplexNumber(objY);
  var signRoot = Math.sign(x);
  var signNum = Math.sign(y);
  var result = {};
  var results = [{}];

  if (signRoot === 1) {
    results = math.nthRoots(y, x);
  } else {
    if (signNum === 1) {
      results[0] = math.pow(y, 1/x);
     } else {
       results[0] = -1 * math.pow(-y, 1/x);
     } 
  }  
  result = results[0];
  
  for (var i = 1; i < results.length; i++) {

    if (signNum === -1 && results[i].im === 0) result = results[i];    
  }
  if (result.im === 0) {
    return result.re;
  } else {
    return result;
  }
}

function radical() {
  backupUndo();  
  var objX;
  var objY;
  var x;
  var y;
  var results = [];
  var newUnits = '';
  
  if (stackFocus) {
    objY = stack[getIndex('lst-stack') - stackSize];
  } else {
    if (stack.length - 1 < 0 || stack[stack.length - 1].getSoul() === '') {
      enterInput();
      $('txt-input').value = '2';
    }
    objY = stack.pop();
  }
  objX = getX();
  
  y = buildComplexNumber(objY).toString(); 
  x = buildComplexNumber(objX).toString();

  try {
    var signRoot = Math.sign(x);
    var signNum = Math.sign(y)

    if (signRoot === 1) {
      results = math.nthRoots(y, x);
    } else {
      if (signNum === 1) {
        results.push(math.pow(y, 1/x));
       } else {
         results.push(-1 * math.pow(-y, 1/x));
       } 
    }
    newUnits = multiplyUnits(objX.getUnits(), objY.getUnits(), 1/x);   
  } catch {
    results = [NaN];
  }
  displayResults(results, newUnits);
}

function btnRoot() {
  if (shifted) {
    radical();
  } else {
    exponential();
  }
  resizeInput();
}

function btnPi() {
  if (shifted) {
    backupUndo();
    btnParenthesis();
  } else {   
    insertAtCursor($('txt-input'), 'π');
    $('txt-input').focus();
  }
}

function insertAroundSelection(txtField, txtValue) {
  var startPos = txtField.selectionStart;
  var endPos = txtField.selectionEnd;
  txtField.value = txtField.value.slice(0, startPos) + txtValue + txtField.value.slice(endPos, txtField.value.length);
  txtField.selectionEnd = endPos + 1;  
  txtField.selectionStart = txtField.selectionEnd;// Deselect text for IE
}

function btnParenthesis() {
  var startPos = $('txt-input').selectionStart;
  var leftP = $('txt-input').value.split(/[(]/).length - 1;
  var rightP = $('txt-input').value.split(/[)]/).length - 1;

  if (stackFocus) {
    $('txt-input').value = getSelectedText('lst-stack');
    $('txt-input').select();
  }
  if (startPos === $('txt-input').value.length && leftP > rightP) {
    // Auto-complete parenthesis
    $('txt-input').value = $('txt-input').value.trim() + ')';
  } else {
    insertAroundSelection($('txt-input'), '(' + returnSelectedText('txt-input') + ')');
  }
  $('txt-input').focus();
}

function modulus() {
  backupUndo();
  var objX = getX();
  var objY;
  var newUnits = '';
  var x;
  var y;
  
  if (stackFocus) {
    objY = stack[getIndex('lst-stack') - stackSize];
  } else {
    if (stack.length - 1 < 0 || stack[stack.length - 1].getSoul() === '') {
      enterInput();
      $('txt-input').value = '2';
    }
    objY = stack.pop();
  }  
  objX = getX();

  y = buildComplexNumber(objY); 
  x = buildComplexNumber(objX);
  
  try {
    result = math.mod(y, x);
    newUnits = divideUnits(objX.getUnits(), objY.getUnits(), 1);
  } catch {
    result = NaN;
  }
  displayResult(result, newUnits);
}

function btnModulus() {  
  if (shifted) {
    buttonInsert(/[√]/, '√');
  } else {    
    modulus();
  }
  resizeInput(); 
}

function leadingSignChange(textInput) {
  if (textInput.charAt(0) === '-') {
    textInput = '+' + textInput.slice(1);
  } else {
    if (textInput.charAt(0) === '+') textInput = textInput.slice(1);
    textInput = '-' + textInput;
  }
  return textInput.trim();
}

function signChange() {
  backupUndo();  

  var objX;
  var result;
  var units = '';
  var txtInput = $('txt-input');
  var startPos = txtInput.selectionStart;
  var endPos = txtInput.selectionEnd;
  
  if (stackFocus) {
    objX = stack[getIndex('lst-stack') - stackSize];    
  } else {
    objX = getX();
  }  
  if (stackFocus
    || (startPos === 0 && (endPos === txtInput.value.length || endPos === startPos))
    || (startPos === txtInput.value.length && !/[-+^eE∠ ]/.test(txtInput.value.charAt(startPos - 1)))) {
    
    if (isANumber(objX.getRealPart()) || isANumber(objX.getImaginary())) {
      result = math.unaryMinus(buildComplexNumber(objX));    
    } else {
      result = leadingSignChange(objX.getSoul());
    }  
    if (objX.getUnits() !== 'null') units = ' ' + objX.getUnits();

    displayResult(result, units);    
  } else {

    if (/[-+]/.test(txtInput.value.charAt(startPos - 1))) {

      if (/-/.test(txtInput.value.charAt(startPos - 1))) {
        txtInput.value = txtInput.value.removeAt(startPos - 1, startPos);
        if (/ /.test(txtInput.value.charAt(startPos - 2))) {// If space to left, insert explicit '+'
          txtInput.value = txtInput.value.insertAt(startPos - 1, '+');
          startPos ++;
        }
      }
      if (/[+]/.test(txtInput.value.charAt(startPos - 1))) {   
        txtInput.value = txtInput.value.removeAt(startPos - 1, startPos);
        txtInput.value = txtInput.value.insertAt(startPos - 1, '-');
        startPos ++;
      }
      txtInput.selectionStart = startPos - 1;
      txtInput.selectionEnd = startPos - 1;
    } else if (/[eE^√∠/* ]/.test(txtInput.value.charAt(startPos - 1))
      && !/[-+]/.test(txtInput.value.charAt(startPos))
      && !/[-+][ ]*$/.test(txtInput.value)) {
      // Space to left && no [-+] before space
      if (/ /.test(txtInput.value.charAt(startPos - 1))
        && /(?<![-+])[ ]+$/.test(txtInput.value)) {
        txtInput.value = txtInput.value.insertAt(startPos, '-');
        startPos = startPos + 2;
      }
      if (/[eE^√∠/*]/.test(txtInput.value.charAt(startPos - 1))) {
        
        if (/[-]/.test(txtInput.value.charAt(startPos))) {
          txtInput.value = txtInput.value.removeAt(startPos, startPos + 1);
          startPos ++;
        } else if (/[+]/.test(txtInput.value.charAt(startPos))) {    
          txtInput.value = txtInput.value.removeAt(startPos, startPos + 1);
          txtInput.value = txtInput.value.insertAt(startPos, '-');
          startPos = startPos + 2;
        } else if (!/[-]/.test(txtInput.value.charAt(startPos))) {          
          txtInput.value = txtInput.value.insertAt(startPos, '-')
          startPos = startPos + 2;
        }
      }
      txtInput.selectionStart = startPos - 1;
      txtInput.selectionEnd = startPos - 1;
    } else {
      // [0-9a-zA-Z] to left && No evaluation symbol to right
      if (/[0-9a-zA-Z/*]/.test(txtInput.value.charAt(startPos - 1))
        && !/^[ ]*[-+=;,<>?:'"`~!@#$%^*/&×(){}[\]\|\\_ij]+/.test(txtInput.value.slice(startPos))) {
        txtInput.value = txtInput.value.insertAt(startPos, '+');
        startPos ++;
        txtInput.selectionStart = startPos;
        txtInput.selectionEnd = startPos;
      }
    }
    resizeInput();
    txtInput.focus();
  }
}

function btnSign() {  
  if (shifted) {
    if (!/[-+*/√%=]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[\^]/, '^');
  } else {
    signChange();
  }
}

//////// Basic Maths Buttons /////////////////////////////////////////////////////////

function division() {
  backupUndo();
  var objX = getX();
  var objY;
  var result;
  var newUnits = '';

  stackFocus ? objY = stack[getIndex('lst-stack') - stackSize] : objY = stack.pop();
  if (objY === undefined) objY = new NumberObject('', 'NaN', 'NaN','null');

  var y = buildComplexNumber(objY);
  var x = buildComplexNumber(objX);

  try {
    result = math.divide(y, x);
    newUnits = divideUnits(objX.getUnits(), objY.getUnits(), 1);
  } catch {
    result = NaN;
  }
  displayResult(result, newUnits);
}

function btnDivide() {
  if (shifted) {
    if (!/[-+*√^%=]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[/]/, '/');
  } else {
    division();
  }  
}

function multiplication() {
  backupUndo();
  var objX = getX();
  var objY;
  var result;
  var newUnits = '';

  stackFocus ? objY = stack[getIndex('lst-stack') - stackSize] : objY = stack.pop();
  if (objY === undefined) objY = new NumberObject('', 'NaN', 'NaN','null');  

  var y = buildComplexNumber(objY);
  var x = buildComplexNumber(objX);
   
  try {
    result = math.multiply(y, x);
    newUnits = multiplyUnits(objX.getUnits(), objY.getUnits(), 1);
  } catch {
    result = NaN;
  }
  displayResult(result, newUnits);
}

function btnMultiply() {  
  if (shifted) {
    if (!/[-+/√^%=]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[*]/, '*');
  } else {
    multiplication();
  }
}

function subtraction() {
  backupUndo();
  var objX = getX();
  var objY;
  var result;
  var newUnits = '';

  stackFocus ? objY = stack[getIndex('lst-stack') - stackSize] : objY = stack.pop();
  if (objY === undefined) objY = new NumberObject('', 'NaN', 'NaN','null');  

  var y = buildComplexNumber(objY);
  var x = buildComplexNumber(objX);
 
  try {
    result = math.subtract(y, x);
    newUnits = addUnits(objX.getUnits(), objY.getUnits());
  } catch {
    result = NaN;
  }
  displayResult(result, newUnits);
}

function btnSubtract() {  
  if (shifted) {
    buttonInsert(/[-]/, '-');
  } else {
    subtraction();
  }
}

function addition() {
  backupUndo();
  var objX = getX();
  var objY;
  var result;
  var newUnits = '';

  stackFocus ? objY = stack[getIndex('lst-stack') - stackSize] : objY = stack.pop();
  if (objY === undefined) objY = new NumberObject('', 'NaN', 'NaN','null');

  var y = buildComplexNumber(objY);
  var x = buildComplexNumber(objX);
  
  try {
    result = math.add(y, x);
    newUnits = addUnits(objX.getUnits(), objY.getUnits());
  } catch {
    result = NaN;
  }
  displayResult(result, newUnits);
}

function btnAdd() {  
  if (shifted) {
    if (!/[-*/√^%=]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[+]/, '+');
  } else {
    addition();
  }  
}

function buildComplexNumber(obj) {
  if (obj.getSoul().trim() === '') obj.setSoul('0');

  try {
    var a = 0;
    var b = 0;
    
    if (!isANumber(obj.getRealPart()) && !isANumber(obj.getImaginary())) {
      a = calculate(stripUnits(obj.getSoul()));
    } else {
      if (isANumber(obj.getRealPart())) a = calculate(obj.getRealPart());
      if (isANumber(obj.getImaginary())) b = calculate(obj.getImaginary());
    }
    if (b === 0 && radix === 10) return a;
    return math.complex(a, b);    
  } catch {
    return NaN;
  }
}

function getComplex(complexObj) {
  var soulX = complexObj.toString();
  var firstValueX = complexObj.re;
  var imaginaryX = complexObj.im.toString();
  
  return new NumberObject(soulX, firstValueX, imaginaryX, 'null');
}

function parseResult(result) {

  result = result.replace(/(?<![0-9ijy])[ ]/g, '');
  result = result.replace(/(?<![-+0-9ijy])[ ]/g, '');
  result = result.replace('(', '');
  result = result.replace('i)', 'j ');
  return result.replace(/(?<!\w)ohm(?!\w)/g, 'Ω');
}

function displayResult(result, newUnits) { 
  var objX;
  if (result !== undefined) {

    if (typeof result === 'number' || typeof result === 'string') {
      objX = getX(result);
    } else {    
      if (result.re !== undefined && !isNaN(result.re)) objX = getComplex(result);
    }
    if (objX) result = objToString(objX);
    if (result !== '0') result += newUnits;

    $('txt-input').value = parseResult(result);

    updateDisplay();
    resizeInput();
  }
}

function displayResults(results, newUnits) {
  var objX;

  $('txt-input').value = '';
  
  for (var i = 0; i < results.length; i++) {
    
    if (typeof results[i] === 'number' || typeof results[i] === 'string') {
      objX = getX(results[i]);
    } else {    
      if (results[i].re !== undefined && !isNaN(results[i].re)) objX = getComplex(results[i]);
    }
    if (objX) results[i] = objToString(objX);

    $('txt-input').value += parseResult(results[i]);

    if (results[i] !== '0') $('txt-input').value += newUnits;

    if (i < results.length - 1) $('txt-input').value += '\n';
  }
  updateDisplay();
  resizeInput();
}

//////// Trigonometric Buttons ///////////////////////////////////////////////////////

function sin(input) {
  var objX = getX(input);
  var x = buildComplexNumber(objX);
  var degrees;

  try {
    if (x.im === undefined) {
      degrees = $('btn-angle').value === 'deg' ? x : x * 180 / Math.PI;
    } else {
      degrees = $('btn-angle').value === 'deg' ? x.re : x.re * 180 / Math.PI;
    }
    if ((x.im === undefined || x.im === 0) && (degrees === 0 || degrees % 360 === 0 || degrees === 180 || (degrees - 180) % 360 === 0)) return 0;  
  
    if ($('btn-angle').value === 'deg') {
      if (x.im === undefined) {
        x = x * Math.PI / 180;
      } else {
        x.re = x.re * Math.PI / 180;
        x.im = x.im * Math.PI / 180;
      }
    }
    x = math.sin(x);
  } catch {
    x = NaN;
  }
  return x;
}

function cos(input) {
  var objX = getX(input);
  var x = buildComplexNumber(objX);
  var degrees;

  try {
    if (x.im === undefined) {
      degrees = $('btn-angle').value === 'deg' ? x : x * 180 / Math.PI;
    } else {
      degrees = $('btn-angle').value === 'deg' ? x.re : x.re * 180 / Math.PI;
    }
    if ((x.im === undefined || x.im === 0) && (degrees === 270 || (degrees - 270) % 360 === 0 || degrees === 90 || (degrees - 90) % 360 === 0)) return 0;
  
    if ($('btn-angle').value === 'deg') {
      if (x.im === undefined) {
        x = x * Math.PI / 180;
      } else {
        x.re = x.re * Math.PI / 180;
        x.im = x.im * Math.PI / 180;
      }
    }
    x = math.cos(x);
  } catch {
    x = NaN;
  }
  return x;
}

function tan(input) {
  var objX = getX(input);
  var x = buildComplexNumber(objX);
  var degrees;

  try {
    if (x.im === undefined) {
      degrees = $('btn-angle').value === 'deg' ? x : x * 180 / Math.PI;
    } else {
      degrees = $('btn-angle').value === 'deg' ? x.re : x.re * 180 / Math.PI;
    }
    
    if ((x.im === undefined || x.im === 0) && (degrees === 0 || degrees % 360 === 0 || degrees === 180 || (degrees - 180) % 360 === 0)) {
      return 0;
    } else if ((x.im === undefined || x.im === 0) && (degrees === 315 || (degrees - 315) % 360 === 0 || degrees === 135 || (degrees - 135) % 360 === 0)) {
      return -1;
    } else if((x.im === undefined || x.im === 0) && (degrees === 270 || (degrees - 270) % 360 === 0)) {
      return -Infinity;
    } else if ((x.im === undefined || x.im === 0) && (degrees === 90 || (degrees - 90) % 360 === 0)) {
      return Infinity;
    } else if ((x.im === undefined || x.im === 0) && (degrees === 225 || (degrees - 225) % 360 === 0 || degrees === 45 || (degrees - 45) % 360 === 0)) {
      return 1;
    }
    if ($('btn-angle').value === 'deg') {
      if (x.im === undefined) {
        x = x * Math.PI / 180;
      } else {
        x.re = x.re * Math.PI / 180;
        x.im = x.im * Math.PI / 180;
      }
    }
    x = math.tan(x);
  } catch {
    x = NaN;
  }
  return x;    
}

function asin(input) {
  var objX = getX(input);
  var x = buildComplexNumber(objX);

  try {
    x = math.asin(x);
  
    if ($('btn-angle').value === 'deg') {
      if (x.im === undefined) {
        x = (x * 180) / Math.PI;
      } else {
        x.re = (x.re * 180) / Math.PI;
        x.im = (x.im * 180) / Math.PI;
      }
    }
  } catch {
    x = NaN;
  }
  return x; 
}

function acos(input) {
  var objX = getX(input);
  var x = buildComplexNumber(objX);

  try {
    x = math.acos(x);
  
    if ($('btn-angle').value === 'deg') {
      if (x.im === undefined) {
        x = (x * 180) / Math.PI;
      } else {
        x.re = (x.re * 180) / Math.PI;
        x.im = (x.im * 180) / Math.PI;
      }
    }
  } catch {
    x = NaN;
  }
  return x;
}

function atan(input) {
  var objX = getX(input);
  var x = buildComplexNumber(objX);

  try {
    x = math.atan(x);
  
    if (input === 'Infinity') x = π / 2;
    if (input === '-Infinity') x = -π / 2;
  
    if ($('btn-angle').value === 'deg') {
      if (x.im === undefined) {
        x = (x * 180) / Math.PI;
      } else {
        x.re = (x.re * 180) / Math.PI;
        x.im = (x.im * 180) / Math.PI;
      }
    }
  } catch {
    x = NaN;
  }  
  return x; 
}

function toggleAngleMode() {
  var objX = getX();
  stack.push(objX);

  if ($('btn-angle').value === 'deg') {
    $('menu-angle-mode').innerHTML = 'Degree';
    $('btn-angle').value = 'rad';
    $('indicate-radians').classList.remove('hidden');
    $('btn-angle').className = 'btn-small btn-radian radian-border';
    $('btn-sine').className = 'btn-small radian-border';
    $('btn-cosine').className = 'btn-small radian-border';
    $('btn-tangent').className = 'btn-small radian-border';
  } else {
    $('menu-angle-mode').innerHTML = 'Radian';
    $('btn-angle').value = 'deg';
    $('indicate-radians').classList.add('hidden');
    $('btn-angle').className = 'btn-small btn-angle degree-border';
    $('btn-sine').className = 'btn-small degree-border';
    $('btn-cosine').className = 'btn-small degree-border';
    $('btn-tangent').className = 'btn-small degree-border';
  }
  $('txt-input').value = objToString(stack.pop());
  updateDisplay();
  resizeInput();
}

function btnSine() {
  backupUndo();

  if (stackFocus) insertAtCursor($('txt-input'), getSelectedText('lst-stack'));
  var input = $('txt-input').value;

  if (shifted) {
    displayResult(asin(input), '');
  } else {
    displayResult(sin(input), '');
  }
  $('txt-input').select();
}

function btnCosine() {
  backupUndo();

  if (stackFocus) insertAtCursor($('txt-input'), getSelectedText('lst-stack'));
  var input = $('txt-input').value;

  if (shifted) {
    displayResult(acos(input), '');
  } else {
    displayResult(cos(input), '');
  }
  $('txt-input').select()
}

function btnTangent() {
  backupUndo();

  if (stackFocus) insertAtCursor($('txt-input'), getSelectedText('lst-stack'));
  var input = $('txt-input').value;

  if (shifted) {
    displayResult(atan(input), '');
  } else {
    displayResult(tan(input), '');
  }
  $('txt-input').select()
}

//////// Input Buttons ///////////////////////////////////////////////////////////////

function btnDot() {
  insertAtCursor($('txt-input'), '.');
  resizeInput();
  $('txt-input').focus();
}

function btnZero() {
  insertAtCursor($('txt-input'), '0');
  resizeInput();
  $('txt-input').focus();
}

function btnOne() {
  insertAtCursor($('txt-input'), '1');
  resizeInput();
  $('txt-input').focus();
}

function btnTwo() {
  insertAtCursor($('txt-input'), '2');
  resizeInput();
  $('txt-input').focus();
}

function btnThree() {
  insertAtCursor($('txt-input'), '3');
  resizeInput();
  $('txt-input').focus();
}

function btnSpace() {    
  if (shifted) {
    if (!/[√]$/.test($('txt-input').value) && !/===/g.test($('txt-input').value) || isTextSelected($('txt-input'))) insertAtCursor($('txt-input'), '=');
  } else {
    insertAtCursor($('txt-input'), ' ');
  } 
  resizeInput();
  $('txt-input').focus();
}

function btnFour() {
  insertAtCursor($('txt-input'), '4');
  resizeInput();
  $('txt-input').focus();
}

function btnFive() {
  insertAtCursor($('txt-input'), '5');
  resizeInput();
  $('txt-input').focus();
}

function btnSix() {
  insertAtCursor($('txt-input'), '6');
  resizeInput();
  $('txt-input').focus();
}

function btnSeven() {
  insertAtCursor($('txt-input'), '7');
  resizeInput();
  $('txt-input').focus();
}

function btnEight() {
  insertAtCursor($('txt-input'), '8');
  resizeInput();
  $('txt-input').focus();
}

function btnNine() {
  insertAtCursor($('txt-input'), '9');
  resizeInput();
  $('txt-input').focus();
}

//////// More Calcamatrons ///////////////////////////////////////////////////////////

function totalStack() {
  var total = 0;
  for (var s in stack) {
    if (isANumber(stack[s].getRealPart())) total += calculate(stack[s].getRealPart());
  }
  return total;
}

function averageStack() {
  var total = 0;
  var numElements = 0;
  for (var s in stack) {
    if (isANumber(stack[s].getRealPart())) {
      total += calculate(stack[s].getRealPart());
      numElements ++
    }
  }
  return total / numElements;
}

function maxNum() { 
  var max;

  for (var s in stack) {
    if (isANumber(stack[s].getRealPart())) {
      var num = calculate(stack[s].getRealPart());
      if (max)  {
        if (num > max) max = num;
      } else {
        max = num;
      }
    }
  }
  return max;
}

function minNum() { 
  var min;

  for (var s in stack) {
    if (isANumber(stack[s].getRealPart())) {
      var num = calculate(stack[s].getRealPart());
      if (min)  {
        if (num < min) min = num;
      } else {
        min = num;
      }
    }
  }
  return min;
}

function objectSort(sortOrder, sortByUnits) {
  var strings = [];
  var numbers = [];
  var noUnitNums = [];
  var unitNums = [];

  for (var s in stack) {
    if (!isANumber(stack[s].getRealPart()) && !isANumber(stack[s].getImaginary()) && stack[s].getSoul() !== '') strings.push(stack[s]);
    if (!sortByUnits && isANumber(stack[s].getRealPart())) numbers.push(stack[s]);
    if (sortByUnits && isANumber(stack[s].getRealPart()) && stack[s].getUnits() === 'null') noUnitNums.push(stack[s]);
    if (sortByUnits && stack[s].getUnits() !== 'null') unitNums.push(stack[s]);
  }
  var arrLength = numbers.length - 1;
  var swap;
  do {
    swap = false;    
    for (var i = 0; i < arrLength; i++) {
      var s1 = calculate(numbers[i].getRealPart()); 
      var s2 = calculate(numbers[i + 1].getRealPart());
      var greaterOrLess = sortOrder ? s1 > s2 : s1 < s2;
      if (greaterOrLess) {
        var tmpObj = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = tmpObj
        swap = true;
      }
    }
    arrLength --;
  } while (swap);
  arrLength = noUnitNums.length - 1;
  swap;
  do {
    swap = false;    
    for (i = 0; i < arrLength; i++) {
      s1 = calculate(noUnitNums[i].getRealPart()); 
      s2 = calculate(noUnitNums[i + 1].getRealPart());
      greaterOrLess = sortOrder ? s1 > s2 : s1 < s2;
      if (greaterOrLess) {
        tmpObj = noUnitNums[i];
        noUnitNums[i] = noUnitNums[i + 1];
        noUnitNums[i + 1] = tmpObj
        swap = true;
      }
    }
    arrLength --;
  } while (swap);
  arrLength = unitNums.length - 1;
  swap;
  do {
    swap = false;    
    for (i = 0; i < arrLength; i++) {
      s1 = unitNums[i].getUnits(); 
      s2 = unitNums[i + 1].getUnits();
      greaterOrLess = sortOrder ? s1 > s2 : s1 < s2;
      if (greaterOrLess) {
        tmpObj = unitNums[i];
        unitNums[i] = unitNums[i + 1];
        unitNums[i + 1] = tmpObj
        swap = true;
      }
    }
    arrLength --;
  } while (swap);
  sortOrder ? strings.sort() : strings.sort().reverse();
  if (!sortByUnits) sortOrder ? stack = strings.concat(numbers) : stack = numbers.concat(strings);
  if (sortByUnits) sortOrder ? stack = strings.concat(noUnitNums) : stack = noUnitNums.concat(strings);
  if (sortByUnits) sortOrder ? stack = stack.concat(unitNums) : stack = unitNums.concat(stack);
}

function insertTime() {
  insertText(getTime());
}

function getTime() {
  var currentDate = new Date();
  var dateTime = currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();
  return dateTime;
}

function insertDate() {
  var today = new Date();
  var month = today.getMonth() + 1;
  var date = today.getDate();
  var year = today.getFullYear();
  insertText(month + '/' + date + '/' + year);
}

function getSize() {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight || e.clientHeight || g.clientHeight;
  return [x, y];
}

function embed(src) {
  if (src.indexOf('http') !== -1) {
    widgetSrc.unshift(src);// https://www.youtube.com/embed/25QpDHCLOUc
  } else {
    rpnAlert('Enter web address to embed.');
  }
}

function getLocation() { 

  if (navigator.geolocation) {
    //Geolocation.watchPosition(); // Listens for changes in the location and invokes a callback on every movement
    //Geolocation.clearWatch(); // Removes a watchPosition event handler
    navigator.geolocation.getCurrentPosition(function (position) {
      lat = position.coords.latitude;
      lng = position.coords.longitude;
    }, geolocationError);
  } else {
    rpnAlert('Geolocation not supported.');
  }
}

function geolocationError(error) {
  switch (error.code) {
  case error.PERMISSION_DENIED:
    rpnAlert('Request for Geolocation denied.');
    break;
  case error.POSITION_UNAVAILABLE:
    rpnAlert('Location information is unavailable.');
    break;
  case error.TIMEOUT:
    rpnAlert('The request to get user location timed out.');
    break;
  case error.UNKNOWN_ERROR:
    rpnAlert('An unknown error occurred.');
    break;
  }
}

function getIP() {
  var xhr = new XMLHttpRequest();
  // Open: type, url/file, async
  xhr.open('GET', 'https://api.ipify.org?format=json', true);
  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready
  xhr.onreadystatechange = function(){
    // HTTP 200: ok, 403: forbidden, 404: not found
    if (this.readyState === 4 && this.status === 200) {
      var address = JSON.parse(this.responseText);			
      $('txt-input').value = address.ip;
    }
  }
  xhr.send();
}

// Experimental
function getText() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '../rpnapes/tests/text-long.txt', true);
  xhr.onload = function(){
    if (this.status === 200) {
      var input = this.responseText.split('\n');
      for (var i = 0; i < input.length; i++) {
        $('txt-input').value = input[i];
        enterInput();
      }
      updateDisplay();
    }
  }
  xhr.send();
}

function autoDark() {
  var hour = new Date().getHours();
  if (hour <= 6 || hour >= 18) {
    toggleDarkMode();
  }
}

// https://tinloof.com/blog/how-to-build-a-stopwatch-with-html-css-js-react-part-2/
var startTime = 0;
var elapsedTime = 0;
var timerInterval = 0;
var flashInterval = 0;
var alertTimer = 0;

function timeToString(time) {
  var diffInHrs = time / 3600000;
  var hh = Math.floor(diffInHrs);
  var diffInMin = (diffInHrs - hh) * 60;
  var mm = Math.floor(diffInMin);
  var diffInSec = (diffInMin - mm) * 60;
  var ss = Math.floor(diffInSec);
  var diffInMs = (diffInSec - ss) * 100;
  var ms = Math.floor(diffInMs);

  var formattedMM = mm.toString().padStart(2, '0');
  var formattedSS = ss.toString().padStart(2, '0');
  var formattedMS = ms.toString().padStart(2, '0');

  return formattedMM + ':' + formattedSS + ':' + formattedMS;
}

function menuStopwatch() {
  if (elapsedTime === 0) {
    stopwatchStart();
  } else {
    stopwatchReset();
  }
}

function enterLapTime() {
  $('txt-input').value = timeToString(elapsedTime);
  if (isMobile) {
    softEnter();
  } else {
    btnEnter();
    resizeInput();
  }
}

function stopwatchStart(seconds) { 
  if ($('timer').innerHTML == '') {

    var milliseconds = seconds ? seconds * 1000 : 10;
    elapsedTime = 0;
    startTime = Date.now() - elapsedTime;
    
    if (stack[stack.length - 1] !== undefined && stack[stack.length - 1].getSoul() === 'stopwatch') stack.pop();
    inputText('Click timer for lap times.\nQuit stopwatch by clicking Stopwatch menu item or use \'stop\' command.');
    btnEnter();
    $('txt-input').value = '';
    updateDisplay();
    resizeInput();

    if (seconds) {
      alertTimer = setTimeout(function() {
        rpnAlert('Timer completed: ' + (1 + parseInt(elapsedTime / 1000)) + ' s');
        elapsedTime = 0;
        clearInterval(timerInterval);
        $('timer').innerHTML = '';
        if (!$('menu-haptic-li').classList.contains('strikethrough')) navigator.vibrate(300);
        playAudio($('dual-red-alert'));
        flashInterval = setInterval(function() {
          toggleDarkMode();
        }, 1000);
        setTimeout(function() {
          clearInterval(flashInterval);
          $('dual-red-alert').pause();
        }, 12000);
      }, milliseconds);
    }
    timerInterval = setInterval(function() {      
      elapsedTime = Date.now() - startTime;
      $('timer').innerHTML = timeToString(elapsedTime);         
    }, 10);
  }
}

function stopwatchReset() {
  $('txt-input').value = timeToString(elapsedTime);
  elapsedTime = 0;
  clearInterval(timerInterval);
  clearTimeout(alertTimer);
  $('timer').innerHTML = '';
  $('txt-input').select();
}

function menuHelp() {
  backupUndo();
  help('help');
}

function help(command) {
  var commandArray = command.split(' ');
  if (commandArray[1] !== undefined && radix !== 16) {

    switch (commandArray[1]) {    
    case 'about':
      inputText('');
      enterInput();
      inputText($('lst-stack').getAttribute('placeholder'));
      enterInput();
      inputText('https://github.com/NapesWeaver/rpnapes');
      break;
    case 'ave':
      // Falls through
    case 'average':
      inputText('');
      enterInput();
      inputText('ave: Finds the average of stack elements that are not NaN and returns the result. Alias: average');
      break;
    case 'bin':
      // Falls through
    case 'binary':
      inputText('');
      enterInput();
      inputText('binary: Base2/Binary mode. Alias: bin');
      break;
    case 'clear':
      inputText('');
      enterInput();
      inputText('clear: Clears the displays. Alias: cls');
      break;
    case 'constants':
      inputText('');
      enterInput();
      inputText('constants: Displays the values of \'constants\'. Reassignment of \'constants\' is allowed. Opening Constants or Formulas menu resets all \'constants\'.');
      break;
    case 'contact':
      inputText('');
      enterInput();
      inputText('contact: Email me with concerns, complaints & suggestions and general bitching.');
      break;
    case 'darkmode':
      inputText('');
      enterInput();
      inputText('darkmode: Toggle between light and dark themes.');
      break;
    case 'date':
      inputText('');
      enterInput();
      inputText('date: Returns the current date.');
      break;
    case 'decimal':
      inputText('');
      enterInput();
      inputText('decimal: Base10/Decimal mode.');
      break;
    case 'duckgo':
      inputText('');
      enterInput();
      inputText('duckgo [query]: Search DuckDuckGo. If no argument is supplied in-line, last entry on stack is used as query.');
      break;    
    case 'embed':
      inputText('');
      enterInput();
      inputText('embed [URL]: Embed URL into Tricorder iFrame (Tricorder \'button\' 6). If no argument is supplied in-line, last entry on stack is used for URL.');
      break;
    case 'email':
      inputText('');
      enterInput();
      inputText('email: Open default email client.');
      break;
    case 'eng':
      inputText('');
      enterInput();
      inputText('eng [n]: Engineering notation. Precision 1 to 17. If no argument is supplied in-line, last entry on stack is used. Turn engineering notation off with -1.');
      break;
    case 'fix':
      inputText('');
      enterInput();
      inputText('fix [n]: Fix number of decimals shown on the stack (0 to 17). If no argument is supplied in-line, last entry on stack is used. Turn fixed decimals off with -1.');
      break;
    case 'google':
      inputText('');
      enterInput();
      inputText('google [query]: Search Google / open link or IP address. If no argument is supplied in-line, last entry on stack is used as query. Alias: go');
      break;
    case 'hex':
      // Falls through
    case 'hexadecimal':
      inputText('');
      enterInput();
      inputText('hexadecimal: Base16/Hexadecimal mode. Alias: hex');
      break;
    case 'ip':
      inputText('');
      enterInput();
      inputText('ip: Get public IP address from IPify.');
      break;
    case 'haptic':
      inputText('');
      enterInput();
      inputText('haptic: For mobile devices only. Toggles haptic response for the keypad.');
      break;
    case 'keyboard':
      inputText('');
      enterInput();
      inputText('keyboard: For mobile devices only. Toggles the mobile keyboard.');
      break;
    case 'load':
      inputText('');
      enterInput();
      inputText('load: Loads the Stack to the display. Alias: ls');
      break;
    // case 'login':
    //   inputText('');
    //   enterInput();
    //   inputText('Log into the database.');
    //   break;
    // case 'logout':
    //   inputText('');
    //   enterInput();
    //   inputText('Logs out of the database.');
    //   break;
    case 'locus':
      inputText('');
      enterInput();
      inputText('locus: Returns geo-coordinates of device (very roughly). Tricorder must have been opend first.');
      break;
    case 'maths':
      inputText('');
      enterInput();
      inputText('acos(x) asin(x) atan(x) cos(x) sin(x) tan(x) ln(x) log(y,[x]) pow(y,[x]) root(y,[x]) roots(y,[x]). Imaginary and complex numbers may be entered as strings e.g. sin(\'3 + 6j\').');
      break;
    case 'max':
      inputText('');
      enterInput();
      inputText('max: Find the stack element with the maximum value that is not NaN.');
      break;
    case 'min':
      inputText('');
      enterInput();
      inputText('min: Find the stack element with the minimum value that is not NaN.');
      break;;
    case 'notes':
      inputText('');
      enterInput();
      inputText('notes: Switch to Notes interface.');
      break;
    case 'oct':
      // Falls through
    case 'octal':
      inputText('');
      enterInput();
      inputText('octal: Base8/Octal mode. Alias: oct');
      break;
    case 'open':
      inputText('');
      enterInput();
      inputText('open: Open a text file onto the Stack. A bug prohibits loading the same file successively ;(');
      break;
    case 'opennotes':
      inputText('');
      enterInput();
      inputText('opennotes: Open a text file into Notes.');
      break;
    case 'off':
      inputText('');
      enterInput();
      $('txt-input').value = 'off: Close browser tab or redirect to google.com.';
      enterInput();
      $('txt-input').value ='Firefox users may go to about:config dom.allow_scripts_to_close_windows = true.';
      enterInput();
      $('txt-input').value ='Try \'Open in new tab\' first though. Or set as home page.';
      enterInput();
      $('txt-input').value ='Not working as consistently for mobile devices.';
      break;
    case 'paste':
      inputText('');
      enterInput();
      inputText('paste: Firefox only supports reading the clipboard in browser extensions using the "clipboardRead" extension permission :(');
      break;
    case 'polar':
      inputText('');
      enterInput();
      inputText('polar: Switch complex number display to polar coordinates (use \'vector\' for rectangular coordinates).');
      break;
    case 'print':
      inputText('');
      enterInput();
      inputText('print: Open printer dialoge.');
      break;
    case 'run':
      inputText('');
      enterInput();
      inputText('run: Run the contents of the stack as a script.');
      break;
    case 'runnotes':
      inputText('');
      enterInput();
      inputText('runnotes: Run the contents of notes interface.');
      break;
    case 'sandbox':
      inputText('');
      enterInput();
      inputText('sandbox: Open HTML/CSS/JS sandbox.');
      break;
    case 'save':
      inputText('');
      enterInput();
      inputText('save: Saves the stack to a browser cookie.');
      break;
    case 'saveas':
      inputText('');
      enterInput();
      inputText('saveas [filename]: Saves the stack to a text file. If no argument is supplied in-line, last entry on stack is used as the filename.');
      break;
    case 'sci':
      inputText('');
      enterInput();
      inputText('sci [n]: Scientific notation. Precision 0 to 17. If no argument is supplied in-line, last entry on stack is used. Turn scientific notation off with -1.');
      break;
    case 'shortcuts':
      inputText('');
      enterInput();
      inputText('Ctrl + z = Undo');
      enterInput();
      inputText('Ctrl + y = Redo');
      enterInput();
      inputText('Ctrl + s = Save');
      enterInput();
      inputText('Alt + Shift = Shift Keypad');
      enterInput();
      inputText('Esc = Toggle interface button.');
      break;
    case 'sort':
      inputText('');
      enterInput();
      inputText('sort [unit|asc|desc] [asc|desc]: Sort stack. Ascending order by default. Sorting by units is also supported. Example usage: \'sort unit desc\'.');
      break;
    case 'sound':
      inputText('');
      enterInput();
      inputText('sound: Toggle sound.');
      break;
    case 'stopwatch':
      inputText('');
      enterInput();
      inputText('stopwatch: Starts the stopwatch.  Clicking timer enters lap times. Stop the stopwatch with the \'stop\' command. Alternatively, clicking the Stopwatch menu item (Tools -> Programs -> Stopwatch) will start and stop the stopwatch.');
      break;
    case 'stop':
      inputText('');
      enterInput();
      inputText('stop: Stop/cancel the stopwatch/timer. Alternatively, click stopwatch menu item.');
      break;
    case 'time':
      inputText('');
      enterInput();
      inputText('time: Returns the current time.');
      break;
    case 'timer':
      inputText('');
      enterInput();
      inputText('timer [n]: Set a timer, in seconds. If no argument is supplied in-line, the last entry on the stack is used. Turn sound on from the menu (Veiw -> Sound) for alarm. Cancel timer with the \'stop\' command or by clicking the Stopwatch menu item (Tools -> Programs -> Stopwatch).');
      break;
    case 'total':
      inputText('');
      enterInput();
      inputText('total: Totals the stack elements that are not NaN and returns the result.');
      break;
    case 'tostring':
      inputText('');
      enterInput();
      inputText('tostring [filename]: Saves the Stack to a text file showing all fields for each Stack entry. If no argument is supplied in-line, last entry on stack is used as the filename.');
      break;
    case 'tricorder':
      inputText('');
      enterInput();
      inputText('tricorder: Opens the Tricorder interface. Alias: tri');
      break;
    case 'unembed':
      inputText('');
      enterInput();
      inputText('unembed: Removes the last embedded video from Tricorder iFrame.');
      break;    
    case 'vector':
      inputText('');
      enterInput();
      inputText('vector: Switch complex number display to rectangular coordinates. (use \'polar\' for polar coordinates). Alias: rectangular');
      break;
    case 'wiki':
      inputText('');
      enterInput();
      inputText('wiki [query]: Search Wikipedia. If no argument is supplied in-line, last entry on stack is used as query.');
      break;    
    case 'youtube':
      inputText('');
      enterInput();
      inputText('youtube [query]: Search youtube. If no argument is supplied in-line, last entry on stack is used as query. Alias: you');
      break;    
    default:// case NOT a help argument
      enterInput();
      return;
    }
  } else if (radix !== 16) {
    inputText('');
    enterInput();
    inputText('about');
    enterInput();
    inputText('ave');
    enterInput();
    inputText('binary');
    enterInput();
    inputText('clear');
    enterInput();
    inputText('constants');
    enterInput();
    inputText('contact');
    enterInput();
    inputText('darkmode');
    enterInput();
    inputText('date');
    enterInput();
    inputText('decimal');
    enterInput();
    inputText('duckgo');
    enterInput();
    inputText('embed');
    enterInput();
    inputText('email');
    enterInput();
    inputText('eng');
    enterInput();
    inputText('fix');
    enterInput();
    inputText('google');
    enterInput();
    inputText('hexadecimal');
    enterInput();
    inputText('ip');
    enterInput();
    inputText('haptic');
    enterInput();
    inputText('keyboard');
    enterInput();
    inputText('load');
    enterInput();
    inputText('locus');
    enterInput();
    inputText('maths');
    enterInput();
    inputText('max');
    enterInput();
    inputText('min');
    enterInput();
    inputText('notes');
    enterInput();
    inputText('octal');
    enterInput();
    inputText('open');
    enterInput();
    inputText('opennotes');
    enterInput();
    inputText('off');
    enterInput();
    inputText('paste');
    enterInput();
    inputText('polar');
    enterInput();
    inputText('print');
    enterInput();
    inputText('run');
    enterInput();
    inputText('runnotes');
    enterInput();
    inputText('sandbox');
    enterInput();
    inputText('save');
    enterInput();
    inputText('saveas');
    enterInput();
    inputText('sci');
    enterInput();
    inputText('shortcuts');
    enterInput();
    inputText('sort');
    enterInput();
    inputText('sound');
    enterInput();
    inputText('stopwatch');
    enterInput();
    inputText('stop');
    enterInput();
    inputText('time');
    enterInput();
    inputText('timer');
    enterInput();
    inputText('total');
    enterInput();
    inputText('tostring');
    enterInput();
    inputText('unembed');
    enterInput();
    inputText('vector');
    enterInput();
    inputText('wiki');
    enterInput();
    inputText('youtube');
    enterInput();
    inputText('');
    enterInput();
    inputText('For command-specific help, type help followed by command e.g. help youtube.');
  }
  enterInput();
  $('txt-input').value = '';
  updateDisplay();
}

function parseCommand() {
  var command = $('txt-input').value.trim();
  var stackedCommand = stack[stack.length - 2] ? stack[stack.length - 2] : new NumberObject('', NaN, NaN, 'null'); 
  // Commands consist of words and numbers and URLs   
  if (!/[*√=ⅽ℮ɢΦπ\\^]+/.test(command)) {    
    var commandArray = command.split(' ');
    // NOT help with word and no space, NOT help with number, NOT help with word and number, NOT help with word and alphanumeric word
    if (command.match(/(?!help[A-Za-z]+)(?!help ?[0-9])(?!help [A-Za-z ]+[0-9]+)(?!help [A-Za-z]+ +[0-9A-Za-z]+)^help ?[A-Za-z]*/)) {
      stack.pop();      
      help(command);
    }// NOT fix with number and no space, NOT fix with word, NOT fix with number and word, NOT fix with number and alphanumeric word
    if (command.match(/(?!fix[0-9]+)(?!fix ?[A-Za-z])(?!fix [0-9 ]+[A-Za-z]+)(?!fix [0-9]+ +[0-9A-Za-z]+)^fix$|(^fix (-?[1]|[0-9]|1[0-7])$)/)) {    
      
      if (commandArray[1] === undefined) {
        if (isNaN(parseInt(stackedCommand.getRealPart()))) return;
        stack.pop();
        setFixDecimal(parseInt(stack[stack.length - 1].getRealPart()));
      } else {
        setFixDecimal(parseInt(commandArray[1]));
      }
      stack.pop();
      $('txt-input').value = '';
      updateDisplay();    
    }// NOT sci with number and no space, NOT sci with word, NOT sci with number and word, NOT sci with number and alphanumeric word
    if (command.match(/(?!sci[0-9]+)(?!sci ?[A-Za-z])(?!sci [0-9 ]+[A-Za-z]+)(?!sci [0-9]+ +[0-9A-Za-z]+)^sci$|(^sci (-?[1]|[0-9]|1[0-7])$)/)) {    
      
      if (commandArray[1] === undefined) {
        if (isNaN(parseInt(stackedCommand.getRealPart()))) return;
        stack.pop();
        setSciDecimal(parseInt(stack[stack.length - 1].getRealPart()));
      } else {
        setSciDecimal(parseInt(commandArray[1]));
      }
      stack.pop();
      $('txt-input').value = '';
      updateDisplay();    
    }// NOT eng with number and no space, NOT eng with word, NOT eng with number and word, NOT eng with number and alphanumeric word
    if (command.match(/(?!eng[0-9]+)(?!eng ?[A-Za-z])(?!eng [0-9 ]+[A-Za-z]+)(?!eng [0-9]+ +[0-9A-Za-z]+)^eng$|(^eng (-?[1]|[1-9]|1[0-7])$)/)) {    
      
      if (commandArray[1] === undefined) {
        if (isNaN(parseInt(stackedCommand.getRealPart()))) return;
        stack.pop();
        setEngDecimal(parseInt(stack[stack.length - 1].getRealPart()));
      } else {
        setEngDecimal(parseInt(commandArray[1]));
      }
      stack.pop();
      $('txt-input').value = '';
      updateDisplay();    
    }// NOT timer with number and no space, NOT timer with word, NOT timer with number and word, NOT timer with number and alphanumeric word 
    if (command.match(/(?!timer[0-9]+)(?!timer ?[A-Za-z])(?!timer [0-9 ]+[A-Za-z]+)(?!timer [0-9]+ +[0-9A-Za-z]+)^timer$|(^timer [0-9]{1,5}$)/)) {    
      
      if (commandArray[1] === undefined) {
        if (isNaN(parseInt(stackedCommand.getRealPart()))) return;
        stack.pop();
        stopwatchStart(parseInt(stack[stack.length - 1].getRealPart()));
      } else {
        stopwatchStart(parseInt(commandArray[1]));
      }
      stack.pop();
      updateDisplay();    
    }// NOT saveas with word and no space, NOT saveas with number, NOT saveas with word and alphanumeric word
    if (command.match(/(?!saveas[A-Za-z]+)(?!saveas ?[0-9])(?!saveas [A-Za-z]+ +[0-9A-Za-z]+)^saveas ?[A-Za-z]*/)) {    

      if (commandArray[1] === undefined) {
        stack.pop();
        stack[stack.length - 1] ? saveFile(stack[stack.length - 1].soul, true) : saveFile('', true);
      } else {
        stack.pop();
        saveFile(commandArray[1], true);
      }
      $('txt-input').value = '';
      updateDisplay();
    }// NOT sort with word and no space, NOT sort with number, NOT sort with word and number, NOT sort with word and two more alphanumeric words
    if (command.match(/(?!sort[A-Za-z]+)(?!sort ?[0-9])(?!sort [A-Za-z ]+[0-9]+)(?!sort [A-Za-z]+ +[0-9A-Za-z]+ +[0-9A-Za-z]+)^sort ?(asc|desc|unit)? ?(asc|desc)?$/)) { 
      var com1 = commandArray[1];
      var com2 = commandArray[2];  
      var sortOrder;
      var sortByUnits = false;
      
      if (com1 === undefined || com1 === 'asc' || (com1 === 'unit' && (com2 === undefined || com2 === 'asc'))) sortOrder = true;
      if (com1 === 'desc' || (com1 === 'unit' && com2 === 'desc')) sortOrder = false;
      if (com1 === 'unit') sortByUnits = true;

      stack.pop();
      objectSort(sortOrder, sortByUnits);
      updateDisplay();
    }// NOT tostring with word and no space, NOT tostring with number, NOT tostring with word and alphanumeric word
    if (command.match(/(?!tostring[A-Za-z]+)(?!tostring ?[0-9])(?!tostring [A-Za-z]+ +[0-9A-Za-z]+)^tostring ?[A-Za-z]*/)) {    

      if (commandArray[1] === undefined) {
        stack.pop();
        stack[stack.length - 1] ? saveFile(stack[stack.length - 1].soul, false) : saveFile('', false);
      } else {
        stack.pop();
        saveFile(commandArray[1], false)
      }
      $('txt-input').value = '';
      updateDisplay();
    }// If (command === embed and end of stack === URL) or command === embed with URL
    if ((command.match(/^embed$/) && stackedCommand.getSoul().match(/^http[s]:\/\/[0-9A-Za-z]/)) || command.match(/^embed http[s]:\/\/[0-9A-Za-z]/)) {    
      
      if (commandArray[1] === undefined) {

        embed(stackedCommand.getSoul());
      } else {
        embed(commandArray[1]);
      }
      stack.pop();
      $('txt-input').value = '';
      updateDisplay();
      saveTricorder();
    }
    if (command === 'duckgo'|| command.match(/^duckgo .+/)) {
      
      if (commandArray[1] === undefined) {
        $('txt-input').value = decodeSpecialChar(stackedCommand.getSoul());
      } else {
        commandArray.shift();
        $('txt-input').value = commandArray.join(' ');
      }
      searchDuckDuckGo();
      stack.pop();
      $('txt-input').value = '';
      updateDisplay();
    }
    if (command === 'google' || command === 'go' || command.match(/^google .+/) || command.match(/^go .+/)) {
      
      if (commandArray[1] === undefined) {
        $('txt-input').value = decodeSpecialChar(stackedCommand.getSoul());
      } else {
        commandArray.shift();
        $('txt-input').value = commandArray.join(' ');
      }
      searchGoogle();
      stack.pop();
      $('txt-input').value = '';
      updateDisplay();
    }
    if (command === 'wiki' || command.match(/^wiki .+/)) {
      
      if (commandArray[1] === undefined) {
        $('txt-input').value = decodeSpecialChar(stackedCommand.getSoul());
      } else {
        commandArray.shift();
        $('txt-input').value = commandArray.join(' ');
      }
      searchWikipedia();
      stack.pop();
      $('txt-input').value = '';
      updateDisplay();
    }
    if (command === 'youtube' || command === 'you' || command.match(/^youtube .+/) || command.match(/^you .+/)) {
      
      if (commandArray[1] === undefined) {
        $('txt-input').value = decodeSpecialChar(stackedCommand.getSoul());
      } else {
        commandArray.shift();
        $('txt-input').value = commandArray.join(' ');
      }
      searchYouTube();
      stack.pop();
      $('txt-input').value = '';
      updateDisplay();
    }

    switch (command) {  
    case 'about':
      stack.pop();
      inputText('');
      enterInput();
      inputText($('lst-stack').getAttribute('placeholder'));
      enterInput();
      inputText('https://github.com/NapesWeaver/rpnapes');
      enterInput();
      updateDisplay();
      $('txt-input').value = '';
      break;
    case 'ave':
      // Falls through
    case 'average':
      stack.pop();
      updateDisplay();
      inputText(averageStack());
      break;
    case 'bin':
      // Falls through
    case 'binary':
      stack.pop();
      convertBase(2);
      $('txt-input').value = '';
      break;
    case 'constants':
      stack.pop();
      inputText('');
      enterInput();
      inputText('Φ = ' + calculate(Φ));
      enterInput();
      inputText('℮ = ' + calculate(℮));
      enterInput();
      inputText('ɢ = ' + calculate(ɢ));
      enterInput();
      inputText('ⅽ = ' + calculate(ⅽ));
      enterInput();
      inputText('π = ' + calculate(π));
      enterInput();
      updateDisplay();
      $('txt-input').value = '';
      break;
    case 'contact':
      stack.pop();
      $('txt-input').value = '';
      updateDisplay();
      window.location.href = "mailto:napesweaver@gmail.com?subject=RPNapes"
        break;
    case 'clear':
    case 'cls':
      btnClear();
      break;
    case 'darkmode':
      stack.pop();
      toggleDarkMode();
      updateDisplay(); 
      $('txt-input').value = '';
      break;
    case 'date':
      stack.pop();
      updateDisplay();
      insertDate();
      break;
    case 'decimal':
      stack.pop();
      convertBase(10);
      $('txt-input').value = '';
      break;
    case 'email':
      stack.pop();
      $('txt-input').value = '';
      updateDisplay();
      // window.location.href = "mailto:user@example.com?subject=Subject&body=message%20goes%20here"
      window.location.href = "mailto:?subject=&body=";
      break;
    case 'gravity':
      gravity();
      btnDelete();
      btnDelete();
      break;
    case 'haptic':
      if (isMobile) {
        stack.pop();
        updateDisplay();
        $('txt-input').value = '';      
        toggleHaptic();
      }
      break;
    case 'hex':
      // Falls through
    case 'hexadecimal':
      stack.pop();
      convertBase(16);
      $('txt-input').value = '';
      break;
    case 'How are ya?':
      // Falls through
    case 'How are ya doing?':
      // Falls through
    case 'How are you?':
      // Falls through
    case 'How are you doing':
      // Falls through
    case 'How ya doing?':
      // Falls through
    case 'How you doing?':
      inputText('');
      enterInput();
      inputText('Like a rhinestone cowboy!');
      enterInput();
      $('txt-input').value = '';
      updateDisplay();
      break;
    case 'Hallo':
      // Falls through
    case 'Hello':
      // Falls through
    case 'Hey':
      // Falls through
    case 'Hi':
      inputText('');
      enterInput();
      inputText('Hallo there!');
      enterInput();
      $('txt-input').value = '';
      updateDisplay();
      break;
    case 'keyboard':
      if (isMobile) {
        stack.pop();
        updateDisplay();
        $('txt-input').value = '';      
        toggleKeyboard();
      }
      break;    
    case 'ip':      
      stack.pop();
      updateDisplay();
      $('txt-input').value = '';     
      getIP();
      break;
    case 'load':
    case 'ls':
      stack.pop();
      $('txt-input').value = '';
      btnLoad();
      break;
    case 'locus':
      stack.pop();
      updateDisplay();
      inputText('lat:' + lat + ', lon:' + lng);
      break;
    // case 'login':
    //   window.location.href = '/login'; 
    //   break;
    // case 'logout':
    //   window.location.href = '/logout'; 
    //   break;
    case 'maths':
      stack.pop();
      inputText('');
      enterInput();
      inputText('acos(x) asin(x) atan(x) cos(x) sin(x) tan(x) ln(x) log(y,[x]) pow(y,[x]) root(y,[x]) roots(y,[x]). Imaginary and complex numbers may be entered as strings e.g. sin(\'3 + 6j\').');
      enterInput();
      updateDisplay();
      $('txt-input').value = '';
      break;
    case 'max':
      stack.pop();
      updateDisplay();
      inputText(maxNum());
      break;
    case 'min':
      stack.pop();
      updateDisplay();
      inputText(minNum());
      break;    
    case 'notes':
      stack.pop();
      updateDisplay();
      btnXoff();
      break;
    case 'oct':
      // Falls through
    case 'octal':
      stack.pop();
      convertBase(8);
      $('txt-input').value = '';
      break;
    case 'off':
      stack.pop();
      updateDisplay();
      btnOff();
      break;
    case 'open':
      stack.pop();
      $('txt-input').value = '';
      openAFile();
      break;
    case 'opennotes':
      stack.pop();
      updateDisplay();      
      btnXoff();
      $('txt-input').value = '';
      openAFile();
      break;
    case 'polar':
      stack.pop();
      if ($('menu-form').textContent === 'Polar') toggleForm();
      $('txt-input').value = '';
      break;
    case 'print':
      stack.pop();
      updateDisplay();
      $('txt-input').value = '';
      printHtml();
      break;
    case 'sandbox':
        window.location.href = 'reference/sandbox.html';
        break;
    case 'save':
      stack.pop();
      updateDisplay();
      $('txt-input').value = '';
      btnSave();
      break;
    case 'stop':
      stack.pop();
      updateDisplay();
      $('txt-input').value = '';
      stopwatchReset();
      break;
    case 'run':
      stack.pop();
      updateDisplay();
      $('txt-input').value = '';
      runProgram();
      break;
    case 'runnotes':
      stack.pop();
      updateDisplay();
      $('txt-input').value = '';
      runNotes();
      break;
    case 'shortcuts':
      stack.pop();
      inputText('');
      enterInput();
      inputText('Ctrl + z = Undo');
      enterInput();
      inputText('Ctrl + y = Redo');
      enterInput();
      inputText('Ctrl + s = Save');
      enterInput();
      inputText('Alt + Shift = Shift Keypad');
      enterInput();
      inputText('Esc = Toggle interface button.');
      enterInput();
      updateDisplay();
      $('txt-input').value = '';
      break;
    case 'sound':
      stack.pop();
      updateDisplay();
      toggleSound();
      $('txt-input').value = '';
      break;
    case 'stopwatch':      
      stopwatchStart();
      break;
    case 'time':
      stack.pop();
      updateDisplay();
      inputText(getTime());
      break;
    case 'total':
      stack.pop();
      updateDisplay();
      inputText(totalStack());
      break;
    case 'tri':
      // Falls through
    case 'tricorder':
      stack.pop();
      updateDisplay();
      inputText('');
      showTricorder();
      break;
    case 'twig':
      stack.pop();
      updateDisplay();
      inputText('');
      monOn();
      break;
    case 'unembed':
      stack.pop();
      updateDisplay();
      inputText(''); 
      widgetSrc.shift();
      saveTricorder();
      break;
    case 'vector':
      // Falls through
    case 'rectangular':
      stack.pop();
      if ($('menu-form').textContent === 'Vector') toggleForm();
      inputText('');
      break;
    default:
      if ($('twig').className !== 'hidden' && twig.health > 0) {
        $('twig').src = 'images/twig/hat-tip.gif';
      }
      break;
    }
  }
  // Resizing input with soft-keyboard open breaks resizing logic
  if (!isMobile) resizeInput();
}

function parseInline(input, symbol, prefix) {
  
  var inputArr = input.split('');
  var index = input.indexOf(symbol);
  var endPos = 0;
  var parenthesis = 0;
  var leftParen = 0;

  // Overwrite symbol
  symbol === '!' ? inputArr[index] = '' : inputArr[index] = ',';  
  endPos = index;

  // Insert prefix
  while (index > 0 && (parenthesis > 0 || (!/[-+*/^√(]/.test(inputArr[index]) || (/[eEglnstw]/.test(inputArr[index - 1]) && leftParen <= 1)))) {
    index--; 
    if (inputArr[index] === ')') parenthesis++;
    if (inputArr[index] === '(') parenthesis--; 
    if (inputArr[index] === '(') leftParen++; 
  }
  if (parenthesis === 0 && (index === 0 || (inputArr[index] === '('))) {
    inputArr.splice(index, 0, prefix);
  } else {
    inputArr.splice(index + 1, 0, prefix);
  }
  // Insert ')'
  parenthesis = 0;
  do {
    endPos++;
    if (inputArr[endPos] === '(') parenthesis++;
    if (inputArr[endPos] === ')') parenthesis--; 
    if (inputArr[endPos + 1] === '-' && (inputArr[endPos] === ',' || inputArr[endPos] === '')) endPos = endPos + 2;

  } while (endPos < inputArr.length && ((!/[-+*/^√)]/.test(inputArr[endPos])) || /[Ee]/.test(inputArr[endPos - 1]) || parenthesis > 0)); 

  inputArr.splice(endPos, 0, ')');
  input = inputArr.join('');  
  return input;
}

function parseNested(input, symbol, prefix) {
  input = input.replace('(', '((');
  input = input.replace(')', '))');
  
  var inputArr = input.split('');
  var index = 0;
  var startPos = 0;
  var leftP = null;
  var rightP = null;
  var maths = '';
  // Get nested parenthesis indices
  while (startPos === 0) {
    index++;    
    if (inputArr[index] === symbol) startPos = index;
  }
  while (index < inputArr.length && rightP === null) {   
    index++;
    if (inputArr[index] === ')') rightP = index;
  }
  while (index > 0 && leftP === null) {
    index--;
    if (inputArr[index] === '(') leftP = index;
  }
  // Get nested maths
  maths = inputArr.slice(leftP + 1, rightP).join('');
  // Parse nested maths
  if (/[(-ⅽ℮ɢΦπ\w][\^√][-ⅽ℮ɢΦπ\w)]/.test(maths) || /[(-ⅽ℮ɢΦπ\w]![-ⅽ℮ɢΦπ\w)]*/.test(maths)) {
    maths = parseInline(maths, symbol, prefix);
  }
  // Re-insert parsed maths
  inputArr.splice(leftP + 1, rightP - leftP - 1, maths);  
  input = inputArr.join('');
  
  return input;
}

function insertDefaultIndex(input) {
  var inputArr = input.split('');
  
  for (var i = 0; i < inputArr.length; i++) {
    if ((inputArr[i] === '√' && inputArr[i - 1] !== '!') && (inputArr[i - 1] === undefined || !/[\d\w)ⅽ℮ɢΦπ]/.test(inputArr[i - 1]))) inputArr.splice(i, 0, '2');
  }
  return inputArr.join('');
}

function parseEvaluation(input) {
  input = '' + input;
  
  // Contains [!^√()ⅽ℮ɢΦπ] && Not part of a program
  if (/[!^√()ⅽ℮ɢΦπ]/.test(input) && !/[=;,<>?:'"`~@#$%&×{}[\]|\\_]/g.test(input)) {

    input = input.replace(/ /g, '');
    input = input.replace(/(?<!^|[-+*\/^√!\(a-zA-Z])[ ]*\(/g, '*(');
    input = input.replace(/\)(?!$|[-+*\/\)^√!a-zA-Z])/g, ')*');
    input = input.replace(/(?<!^|[-+*\/^√!\(a-zA-Z])[ ]*ⅽ/g, '*ⅽ');
    input = input.replace(/ⅽ(?!$|[-+*\/\)^√!a-zA-Z])/g, 'ⅽ*');
    input = input.replace(/(?<!^|[-+*\/^√!\(a-zA-Z])[ ]*℮/g, '*℮');
    input = input.replace(/℮(?!$|[-+*\/\)^√!a-zA-Z])/g, '℮*');
    input = input.replace(/(?<!^|[-+*\/^√!\(a-zA-Z])[ ]*ɢ/g, '*ɢ');
    input = input.replace(/ɢ(?!$|[-+*\/\)^√!a-zA-Z])/g, 'ɢ*');
    input = input.replace(/(?<!^|[-+*\/^√!\(a-zA-Z])[ ]*Φ/g, '*Φ');
    input = input.replace(/Φ(?!$|[-+*\/\)^√!a-zA-Z])/g, 'Φ*');
    input = input.replace(/(?<!^|[-+*\/^√!\(a-zA-Z])[ ]*π/g, '*π');
    input = input.replace(/π(?!$|[-+*\/\)^√!a-zA-Z])/g, 'π*');    
    
    if (/√/g.test(input)) input = insertDefaultIndex(input);

    // Parse nested symbols
    while (/\([-+*\/!^√ⅽ℮ɢΦπ.\w]+!\)/.test(input)) input = parseNested(input, '!', 'factorial(');
    while (/\w\([-+*\/!^√ⅽ℮ɢΦπ.\w]+√[-+*\/!^√ⅽ℮ɢΦπ.\w]+\)/.test(input)) input = parseNested(input, '√', 'mathRoot('); 
    while (/\w\([-+*\/!^√ⅽ℮ɢΦπ.\w]+\^[-+*\/!^√ⅽ℮ɢΦπ.\w]+\)/.test(input)) input = parseNested(input, '^', 'mathPow(');
    // Parse in-line symbols
    while (/!/.test(input)) input = parseInline(input, '!', 'factorial(');
    while (/√/.test(input)) input = parseInline(input, '√', 'mathRoot(');
    while (/\^/.test(input)) input = parseInline(input, '^', 'mathPow(');    
  }
  return input;
}

// User functions
function pow(y, x) {
  if (x === undefined) x = 2;
  return mathPow(y, x);
}

function root(y, x) {
  if (x === undefined) x = 2;
  return mathRoot(x, y);
}

function roots(y, x) {
  if (x === undefined) x = 2;
  return mathRoots(x, y);
}

function ln(x) {
  return mathLn(x);
}

function log(y, x) {
  return mathLog(x, y);
}

// Wired to HTML
function lstStackFocus() {
  stackFocus = true;  
}
convertBase
function txtInputFocus() {
  stackFocus = false;
}

function resetConstants() {
  Φ = 1.618033988749895;
  ℮ = Math.exp(1);
  π = Math.PI
  ɢ = 6.674e-11;
  ⅽ = 299792458;
}

function resetNotation() {
  fixDecimal = -1;
  sciDecimal = -1;
  engDecimal = -1;
  selectElement('eng-select', -1);
  selectElement('fix-select', -1);
  selectElement('sci-select', -1);
  $('label-eng').classList.remove('hidden');
  $('label-fix').classList.remove('hidden');
  $('label-sci').classList.remove('hidden');
}

function convertBase(newRadix) {           
  resetNotation();

  var inputArr = $('txt-input').value.trim().split('\n');

  for (var i = 0; i < inputArr.length; i++) {
    inputArr[i] = getX(inputArr[i]);
  }
  radix = newRadix;

  switch(radix) {
    case 2:
      $('indicate-format').innerHTML = 'bin';
      break;
    case 8:
      $('indicate-format').innerHTML = 'oct';      
      break;
    case 10:
      $('indicate-format').innerHTML = '';      
      break;
    case 16:
      $('indicate-format').innerHTML = 'hex';
      break;
  }
  for (var i = 0; i < inputArr.length; i++) {
    inputArr[i] = objToString(inputArr[i]);
  }
  displayResults(inputArr, '');
}

function onClickSelection(textarea){ 
  // https://stackoverflow.com/questions/13650534/how-to-select-line-of-text-in-textarea
  if (typeof textarea.selectionStart ==='undefined') return false;
  var startPos = (textarea.value.slice(0, textarea.selectionStart).lastIndexOf('\n') >= 0) ? textarea.value.slice(0, textarea.selectionStart).lastIndexOf('\n') : 0;
  var endPos = (textarea.value.slice(textarea.selectionEnd, textarea.value.length).indexOf('\n') >= 0) ? textarea.selectionEnd+textarea.value.slice(textarea.selectionEnd, textarea.value.length).indexOf('\n') : textarea.value.length;
  var emptyRows = getEmptyRows();

  if (startPos > (emptyRows * 2) - 1) {
    textarea.selectionStart = startPos + 1;
    textarea.selectionEnd = endPos;
  }
  return true;  
}

function openAFile() {
  $('open-file').click();
}

function getStackEntry() {
  backupUndo();  
  insertAtCursor($('txt-input'), getSelectedText('lst-stack'));
  $('txt-input').select();
}

function getIndex(name) {
  var t = document.getElementsByName(name)[0];
  return (t.value.slice(0, t.selectionStart).split('\n').length);
}

function getSelectedText(id) {

  var textComponent = $(id);
  var selectedText;

  // IE version
  if (document.selection !== undefined) {
    textComponent.focus();
    var sel = document.selection.createRange();
    selectedText = sel.text;
  } else if (textComponent.selectionStart !== undefined) {
    // Mozilla version
    var startPos = textComponent.selectionStart;
    var endPos = textComponent.selectionEnd;
    selectedText = textComponent.value.slice(startPos, endPos);
  }
  return selectedText.trim();  
}

function returnSelectedText(id) {

  var textComponent = $(id);
  var selectedText;
  // IE
  if (document.selection !== undefined) {
    textComponent.focus();
    var sel = document.selection.createRange();
    selectedText = sel.text;
  } else if (textComponent.selectionStart !== undefined) {
    // Firefox
    var startPos = textComponent.selectionStart;
    var endPos = textComponent.selectionEnd;
    selectedText = textComponent.value.slice(startPos, endPos);
  }
  return selectedText;
}

function isTextSelected(input) {
  var startPos = input.selectionStart;
  var endPos = input.selectionEnd;
  var doc = document.selection;

  if(doc && doc.createRange().text.length !== 0){
    return true;
  } else if (!doc && input.value.slice(startPos,endPos).length != 0){
    return true;
  }
  return false;
}

function insertAtCursor(txtField, txtValue) {
  var startPos = txtField.selectionStart;
  var endPos = txtField.selectionEnd;
  var textarea = $('lst-stack');
  var linePos = (textarea.value.slice(0, textarea.selectionStart).lastIndexOf('\n') >= 0) ? textarea.value.slice(0, textarea.selectionStart).lastIndexOf('\n') : 0;
  var emptyRows = getEmptyRows();
 
  if (!stackFocus || linePos > (emptyRows * 2) - 1) {
    txtField.value = txtField.value.slice(0, startPos) + txtValue + txtField.value.slice(endPos, txtField.value.length);
    txtField.selectionEnd = startPos + txtValue.length;
    // Deselect text for IE
    txtField.selectionStart = txtField.selectionEnd;
  }
}

function moveCursorToEnd(el) {
  try {
    if (typeof el.selectionStart === 'number') {
      el.selectionStart = el.selectionEnd = el.value.length;
    } else if (typeof el.createTextRange !== 'undefined') {
      el.focus();
      var range = el.createTextRange();
      range.collapse(false);
      range.select();
    }
  } catch (err) {
    rpnAlert(err);
  }  
}

function rpnAlert(text) {
  backupUndo();
  inputText(text);
  $('txt-input').select();
}

function inputText(text) {
  $('txt-input').value = text;  
}

function insertText(text) {
  backupUndo();
  insertAtCursor($('txt-input'), text);
  resizeInput();
  $('txt-input').focus();
}

function updateDisplay() {
  $('lst-stack').value = '';  
  // Buffer stack display
  for (var i = 0; i < $('lst-stack').getAttribute('rows') ; i++) {
    $('lst-stack').value += ' \n';
  }
  // Print to stack display
  for (var sta in stack) {
    $('lst-stack').value += '\n';
    
    if (stack[sta].getSoul() !== '') {
      $('lst-stack').value += objToString(stack[sta]);
    } else {
      // A VERY long string of spaces ;)
      $('lst-stack').value += '                                                                                                                                                                                                                                                                                                                                                                                      ';
    }
  }
  colorSaveButton();  
  $('lst-stack').scrollTop = $('lst-stack').scrollHeight;   
  $('txt-input').select();
}

function printHtml() {
  print();
}

function isANumber(testString) {  
  var isNum = true;
  if (isNaN(testString) || testString === '') isNum = false;
  if (/[ⅽ℮ɢΦπ]/g.test(testString)) isNum = true;
  return isNum;
}

function colorSaveButton() {

  try {
    var index = getCookie('STACK').indexOf('=') + 1;
    var shortStack = [];   
    for (var i = 0; i < stack.length; i++) shortStack.push(stack[i].getSoul());
    
    if (getCookie('STACK').slice(index) !== nestArrayByBrowser(shortStack).trim()) {
      $('btn-save').style.color = '#000000';
    } else {
      $('btn-save').style.color = '#D4D0C8';
    }
  } catch (err) { rpnAlert('load Stack error.'); }
}

function saveCookie(aName, tmpArray) {
  var d = new Date();
  // years * days * hours * min * sec * mili second
  d.setTime(d.getTime() + (1 * 365 * 24 * 60 * 60 * 1000));
  var expires = '; expires=' + d.toUTCString();
  // document.cookie = aName + '=' + tmpArray + expires + 'SameSite=Lax;' + ';path=/';
  document.cookie = aName + '=' + tmpArray + expires + ';path=/';
}

function getCookie(cname) {
  var name = cname + '=';
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

function encodeSpecialChar(tmpString) {
  tmpString = tmpString.replace(/%/g, '&#37');
  tmpString = tmpString.replace(/,/g, '&#44');
  tmpString = tmpString.replace(/;/g, '&#59');
  tmpString = tmpString.replace(/=/g, '&#61');
  tmpString = tmpString.replace(/_/g, '&#95');
  tmpString = tmpString.replace(/°/g, '&deg');
  tmpString = tmpString.replace(/−/g, '-');
  return tmpString;
}
function decodeSpecialChar(tmpString) {
  tmpString = tmpString.replace(/&#37/g, '%');
  tmpString = tmpString.replace(/&#44/g, ',');
  tmpString = tmpString.replace(/&#59/g, ';');
  tmpString = tmpString.replace(/&#61/g, '=');
  tmpString = tmpString.replace(/&#95/g, '_');
  tmpString = tmpString.replace(/&deg/g, '°');
  return tmpString;
}

function removeTrailingZeros(str) {

  var arr = str.split(/[eE]/);
  var engineering;

  while (/[.]*0$/.test(arr[0])) {    
    arr[0] = arr[0].slice(0, -1);
  }
  if (/[.]$/.test(arr[0])) arr[0] = arr[0].slice(0, -1);

  arr[1] ? engineering = 'e' + arr[1] : engineering = '';

  return arr[0] + engineering;
}

function removeLeadingZeros(str) {
  var neg = '';
  
  if (str.charAt(0) === '-') {
    neg = '-';
    str = str.slice(1);
  }
  while (str.length > 1 && /^[0][.]*/.test(str)) {
    str = str.slice(1);
  }
  if (str.charAt(0) === '.') {
    str = '0' + str;
  }
  return neg + str;
}

function extractFirstValue(tmpString) {
  var real = '';  

  if (!/[=;,<>?:'"`~!@#$%√&×(){}[\]|\\_]/g.test(tmpString)) {
        
    tmpString = stripUnits(tmpString).trim();    

    if (radix === 10
    && (/^[-+]?[ ]*([ⅽ℮ɢΦπ]|Infinity|([0-9]+[.]?[0-9]*|[0-9]*[.]?[0-9]+)([eE][-+]?[0-9]+)?)$/.test(tmpString) 
    || /^[-+]?[ ]*([ⅽ℮ɢΦπ]|Infinity|([0-9]+[.]?[0-9]*|[0-9]*[.]?[0-9]+)([eE][-+]?[0-9]+)?)([ ]+[-+][ ]*|[ ]*[-+][ ]+)([ij]|[ⅽ℮ɢΦπ][ij]|Infinity[ij]|([0-9]+[.]?[0-9]*|[0-9]*[.]?[0-9]+)([eE][-+]?[0-9]+)?[ij])$/.test(tmpString)
    || /^[-+]?[ ]*([ⅽ℮ɢΦπ]|Infinity|([0-9]+[.]?[0-9]*|[0-9]*[.]?[0-9]+)([eE][-+]?[0-9]+)?)[ ]*[∠][ ]*[-+]?[ ]*([ⅽ℮ɢΦπ]|Infinity|([0-9]+[.]?[0-9]*|[0-9]*[.]?[0-9]+)([eE][-+]?[0-9]+)?)$/.test(tmpString))) {

      var tmp = '' + tmpString.match(/^[-+]?[ ]*[ⅽ℮ɢΦπ](?![ij])|^[-+]?[ ]*Infinity[-+]?(?![ij])|^[-+]?[ ]*[0-9]*[.]?[0-9]*[eE]?[-+]?[0-9]*(?![ij])/);
      
      tmp = tmp.replace(/ /g, '');

      if (/[-+]$/.test(tmp)) tmp = tmp.slice(0, tmp.length - 1);  
      if (isANumber(tmp)) real += tmp;         
    }
    if (radix === 2) {
      // Looking for a binary number but not an imaginary number
      if (/^[-+]?[0-1]+/g.test(tmpString) && !/^[-+]?[0-1]+[ij]/g.test(tmpString)) {
        real = '' + parseInt(tmpString, radix);   
      }
    }
    if (radix === 8) {
      if (/^[-+]?[0-7]+/g.test(tmpString) && !/^[-+]?[0-7]+[ij]/g.test(tmpString)) {
        real = '' + parseInt(tmpString, radix);
      }
    }
    if (radix === 16) {
      if (/^[-+]?[0-9a-f]+/g.test(tmpString) && !/^[-+]?[0-9a-f]+[ij]/g.test(tmpString)) {
        real = '' + parseInt(tmpString, radix);
      }
    }
    if (real.charAt(0) === '+') real = real.slice(1);
  
    if (/^[-]?0*[.]0+$|^[-]?0+[.]?0*$/.test(real)) real = '0';
    if (/[.]/g.test(real)) real = removeTrailingZeros(real);
    if (/^[-]?0*/.test(real)) real = removeLeadingZeros(real);
    if (real === '') real = 'NaN';
  } else {
    return NaN;
  }
  return real;
}

function extractImaginary(tmpString) {
  var imaginary = '';
  
  tmpString = stripUnits(tmpString).trim();  

  if (radix === 10) {
    
    if (!/[=;,<>?:'"`~!@#$%√&×(){}[\]|\\_]/g.test(tmpString)
    && (/^[-+]?[ ]*([ij]|[ⅽ℮ɢΦπ][ij]|Infinity[ij]|([0-9]+[.]?[0-9]*|[0-9]*[.]?[0-9]+)([eE][-+]?[0-9]+)?[ij])$/.test(tmpString)
    || /^[-+]?[ ]*([ⅽ℮ɢΦπ]|Infinity|([0-9]+[.]?[0-9]*|[0-9]*[.]?[0-9]+)([eE][-+]?[0-9]+)?)([ ]+[-+][ ]*|[ ]*[-+][ ]+)([ij]|[ⅽ℮ɢΦπ][ij]|Infinity[ij]|([0-9]+[.]?[0-9]*|[0-9]*[.]?[0-9]+)([eE][-+]?[0-9]+)?[ij])$/.test(tmpString))) {
 
      var tmp = '' + tmpString.match(/[-+]?[ ]*[ij]$|[-+]?[ ]*[ⅽ℮ɢΦπ][ij]$|[-+]?[ ]*Infinity[ij]$|[-+]?[ ]*[0-9]*[.]?[0-9]*[eE]?[-+]?[0-9]*[ij]$/);
      
      tmp = tmp.replace(/ /g, '');
  
      if (/^[-][ij]\b/.test(tmp)) {
        tmp = '-1';
      } else if (/^[+]?[ij]\b/.test(tmp)) {
        tmp = '1';
      } else {// remove [ij]
        tmp = tmp.slice(0, tmp.length - 1);    
      }
      if (tmp.charAt(0) === '+') tmp = tmp.slice(1);
      if (isANumber(tmp)) imaginary += tmp;
    }
  } else {
    if (radix === 2) imaginary += tmpString.match(/[-+]?[ ]*[0-1]+[ij]/);
    if (radix === 8) imaginary += tmpString.match(/[-+]?[ ]*[0-7]+[ij]/);
    if (radix === 16) imaginary += tmpString.match(/[-+]?[ ]*[a-f0-9]+[ij]/);
    if (imaginary.charAt(1) === ' ') imaginary = imaginary.replace(/ /g, '');

    imaginary = imaginary.slice(0, imaginary.length - 1);
    imaginary = '' + parseInt(imaginary, radix);
  }
  if (/^[-]?0*[.]0+$|^[-]?0+[.]?0*$/.test(imaginary)) imaginary = '0';
  if (/[.]/g.test(imaginary)) imaginary = removeTrailingZeros(imaginary);
  if (/^[-]?0*/.test(imaginary)) imaginary = removeLeadingZeros(imaginary);
  if (imaginary === '') imaginary = 'NaN';  
  
  return  imaginary;
}

function parseAngle(tmpAngle, firstValue) {
  var tmpComplex = [];

  if ($('btn-angle').value === 'deg' && tmpAngle !== '0') tmpAngle = tmpAngle * Math.PI / 180;

  polar = math.complex({ abs: calculate(firstValue), arg: calculate(tmpAngle) });             
  tmpAngle = tmpAngle * 180 / Math.PI;
  
  if (tmpAngle === 0 || tmpAngle % 360 === 0 || tmpAngle === 180 || (tmpAngle - 180) % 360 === 0) {
    tmpComplex[0] = polar.re;
    tmpComplex[1] = '0';
  } else if ((tmpAngle === 270 || (tmpAngle - 270) % 360 === 0 || tmpAngle === 90 || (tmpAngle - 90) % 360 === 0)) {
    tmpComplex[0] = 0;
    tmpComplex[1] = polar.im.toString();
  } else {
    tmpComplex[0] = polar.re;
    tmpComplex[1] = polar.im.toString();
  }
  return tmpComplex;
}

function parseInfinitePolars(tmpAngle) {
  var tmpComplex = [];
  var degrees = $('btn-angle').value === 'deg' ? parseFloat(tmpAngle) : 180 / π * tmpAngle;

  if (degrees === 0 || degrees % 360 === 0) {
    tmpComplex[0] = Infinity;
    tmpComplex[1] = '0';
  } else if (degrees === 315 || (degrees - 315) % 360 === 0) {
    tmpComplex[0] = Infinity;
    tmpComplex[1] = '-Infinity';
  } else if (degrees === 270 || (degrees - 270) % 360 === 0) {
    tmpComplex[0] = 0;
    tmpComplex[1] = '-Infinity';
  } else if (degrees === 225 || (degrees - 225) % 360 === 0) {
    tmpComplex[0] = -Infinity;
    tmpComplex[1] = '-Infinity';
  } else if (degrees === 180 || (degrees - 180) % 360 === 0) {
    tmpComplex[0] = -Infinity;
    tmpComplex[1] = '0';
  } else if (degrees === 135 || (degrees - 135) % 360 === 0) {
    tmpComplex[0] = -Infinity;
    tmpComplex[1] = 'Infinity';
  } else if (degrees === 90 || (degrees - 90) % 360 === 0) {
    tmpComplex[0] = 0;
    tmpComplex[1] = 'Infinity';
  } else if (degrees === 45 || (degrees - 45) % 360 === 0) {
    tmpComplex[0] = Infinity;
    tmpComplex[1] = 'Infinity';
  } else {
    tmpComplex[0] = NaN;
    tmpComplex[1] = 'NaN';
  }
  return tmpComplex;
}

function extractAngle(tmpString, firstValue) {  
  var tmpComplex = [];
  var tmpAngle = '';

  tmpString = tmpString.trim();
  
  if (radix === 10) {
    
    if (!/[=;,<>?:'"`~!@#$%√&×(){}[\]|\\_]/g.test(tmpString)) {   
      tmpAngle += tmpString.match(/∠[ ]*[-+]?[ ]*[ⅽ℮ɢΦπ](?![ij])$|∠[ ]*[-+]?[ ]*Infinity[-+]?(?![ij])$|∠[ ]*[-+]?[ ]*[0-9]*[.]?[0-9]*[eE]?[-+]?[0-9]*(?![ij])$/);    
      tmpAngle = tmpAngle.replace(/ /g, '');
      // Remove ∠
      tmpAngle = tmpAngle.slice(1);    
      if (/[-+]?Infinity/.test(firstValue)) {
        tmpComplex = parseInfinitePolars(tmpAngle);         
      } else {
        if (/[-+]?Infinity/.test(tmpAngle)) tmpAngle = '0';
        tmpComplex =  parseAngle(tmpAngle, firstValue);
      }
    }
  } else {
    if (radix === 2) tmpAngle += tmpString.match(/∠[ ]*[-+]?[ ]*[0-1]+/);
    if (radix === 8) tmpAngle += tmpString.match(/∠[ ]*[-+]?[ ]*[0-7]+/);
    if (radix === 16) tmpAngle += tmpString.match(/∠[ ]*[-+]?[ ]*[a-f0-9]+/);   

    tmpAngle = tmpAngle.replace(/ /g, '');
    tmpAngle = tmpAngle.slice(1);
    tmpAngle = parseInt(tmpAngle, radix);
    tmpComplex = parseAngle(tmpAngle, firstValue);
  }  
  return tmpComplex;
}

function extractLateral(tmpString, firstValue) {
  var tmpComplex = [];

  tmpString = stripUnits(tmpString);

  if (/∠/g.test(tmpString) && isANumber(firstValue)) {    
    tmpComplex = extractAngle(tmpString, firstValue);    
  } else {
    tmpComplex[0] = firstValue;
    tmpComplex[1] = extractImaginary(tmpString);
  }
  return tmpComplex;
}

function extractUnits(tmpString) {
  var tmpUnits = '';

  if (tmpString.indexOf('Infinity') !== -1) tmpString = tmpString.replace(/Infinity/g, '');

  if (radix !== 16) {
    tmpUnits += tmpString.match(/(?![eE][-+]?[0-9]+)(?![ij]\b)(?:[1][\/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9\/]*$/);
  } else {
    tmpUnits += tmpString.match(/(?![eE][-+]?[0-9]+)(?![a-f0-9]+[ij]*\b)(?![ij]\b)(?:[1][\/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9\/]*$/);    
  }
  return tmpUnits.replace(' ', '');
}

function appendUnits(unitString, tmpUnits, exponent) {

  if (tmpUnits !== 'null') {
    if (exponent === 1) {

      if (unitString.length > 0) unitString += '*';
      unitString += tmpUnits;
    } else if (exponent !== 0) {

      if (unitString.length > 0) unitString += '*';
      if (exponent.toString().indexOf('.') < 0) {
        unitString += tmpUnits + '^' + exponent;
      } else {
        unitString += tmpUnits + '^' + toFixed(exponent, 2);
      }
    }
  }
  return unitString;
}

function splitUnits(tmpUnits) {
  var unitsA = '';
  var unitsB = '';

  if (tmpUnits.indexOf('/') !== -1) {
    tmpUnits = tmpUnits.split('/');
    unitsA = tmpUnits[0];
    unitsB = tmpUnits[1];
  } else {
    unitsA += tmpUnits;
  }
  unitsA = unitsA.split('*');
  unitsB = unitsB.split('*');

  return [unitsA, unitsB];
}

function removeNegativeExponentSign(factorsArray) {
  var tmpArray = [];
  var i = 0;

  while (i < factorsArray.length) {
    if (factorsArray[i].indexOf('-') !== -1) {
      var tmpString = '';
      tmpString += factorsArray.splice(i, 1).toString();
      tmpString = tmpString.replace(/-/g, '');
      tmpArray.push(tmpString);
      i--;
    }
    i++;
  }
  return tmpArray;
}

function unitAddition(unitsA, unitsB, multiplier, add) {
  var unitsCombined = '';
  var unitsDoNotMatch = true;

  for (var a in unitsA) {
    var tmpUnitsA = '';
    var expA = 1;
    unitsDoNotMatch = true;

    tmpUnitsA += unitsA[a].match(/[Ω♥a-zA-Z]+/);
    if (unitsA[a].indexOf('^') !== -1) expA = unitsA[a].match(/[-]?[.0-9]+/);
    // Check for matches between tmpUnitsA and unitsB
    for (var b in unitsB) {
      var tmpUnitsB = '';
      var expB = 1;
      tmpUnitsB += unitsB[b].match(/[Ω♥a-zA-Z]+/);

      if (unitsB[b].indexOf('^') !== -1) expB = unitsB[b].match(/[-]?[.0-9]+/);

      if (tmpUnitsA === tmpUnitsB) {
        unitsDoNotMatch = false;

        if (add) {
          expA = (parseFloat(expA) * multiplier) + parseFloat(expB);
        } else {
          expA = parseFloat(expA) - parseFloat(expB);
        }
        unitsCombined = appendUnits(unitsCombined, tmpUnitsA, expA);
      }
    }
    if (unitsDoNotMatch) {
      if (add) expA = expA * multiplier;
      unitsCombined = appendUnits(unitsCombined, tmpUnitsA, expA);
    }
  }// Check tmpUnitsB for units that didn't match unitsA
  for (b in unitsB) {
    tmpUnitsB = '';
    expB = 1;
    unitsDoNotMatch = true;
    tmpUnitsB += unitsB[b].match(/[Ω♥a-zA-Z]+/);

    if (unitsB[b].indexOf('^') !== -1) expB = unitsB[b].match(/[-]?[.0-9]+/);

    for (a in unitsA) {
      tmpUnitsA = '';
      tmpUnitsA += unitsA[a].match(/[Ω♥a-zA-Z]+/);

      if (tmpUnitsB === tmpUnitsA) unitsDoNotMatch = false;
    }
    if (unitsDoNotMatch) {
      if (!add) expB = expB * -1;
      unitsCombined = appendUnits(unitsCombined, tmpUnitsB, parseFloat(expB));
    }
  }
  return unitsCombined;
}

function rewriteNegUnitExp(tmpUnits) {
  var newUnits = '';

  if (tmpUnits.indexOf('-') !== -1) {
    var unitsSplit = [];
    var numerator = [];
    var denominator = [];
    var changedUnits = [];

    unitsSplit = splitUnits(tmpUnits);
    numerator = unitsSplit[0];
    denominator = unitsSplit[1];

    changedUnits = removeNegativeExponentSign(numerator);

    denominator = unitAddition(denominator, changedUnits, 1, true);
    denominator = denominator.split('*');

    changedUnits = [];
    changedUnits = removeNegativeExponentSign(denominator);

    numerator = unitAddition(numerator, changedUnits, 1, true);
    changedUnits = [];
    denominator = unitAddition(denominator, changedUnits, 1, true);

    if (numerator === '' && denominator !== '') numerator += '1';
    newUnits += numerator;
    if (denominator !== '') newUnits += '/' + denominator;  
  } else {
    newUnits = '' + tmpUnits;
  }
  return newUnits;
}

function addUnits(unitsX, unitsY) {
  var units = '';
  if (unitsY !== 'null' && (unitsY === unitsX || unitsX === 'null')) units = unitsY;
  if (unitsX !== 'null' && (unitsX === unitsY || unitsY === 'null')) units = unitsX;
  if (units.indexOf('-') !== -1) units = rewriteNegUnitExp(units);
  if (units) units = ' ' + units;
  return units;
}

function processUnits(unitsY, unitsX, multiplier, multiply) {

  var unitsSplit = [];
  var numeratorY = '';
  var denominatorY = '';
  var numeratorX = '';
  var denominatorX = '';
  var unitsCombined = '';

  unitsSplit = splitUnits(unitsY);
  numeratorY = unitsSplit[0];
  denominatorY = unitsSplit[1];
  unitsSplit = splitUnits(unitsX);
  numeratorX = unitsSplit[0];
  denominatorX = unitsSplit[1];

  if (multiply) {
    // Multiplication
    numeratorX = unitAddition(numeratorY, numeratorX, multiplier, true);
    denominatorX = unitAddition(denominatorY, denominatorX, multiplier, true);
  } else {
    // Division
    numeratorY = unitAddition(numeratorY, denominatorX, multiplier, true);

    if (denominatorY !== '') {
      denominatorY = unitAddition(denominatorY, numeratorX, multiplier, true);
    } else {
      denominatorY = numeratorX.join('*');
    }
    numeratorX = numeratorY;
    denominatorX = denominatorY;
  }
  unitsCombined = unitAddition(numeratorX.split('*'), denominatorX.split('*'), 1, false);

  if (unitsCombined.indexOf('-') !== -1) unitsCombined = rewriteNegUnitExp(unitsCombined);
  return unitsCombined;
}

function multiplyUnits(unitsX, unitsY, multiplier) {
  var units = '';

  if ((unitsY !== 'null' || unitsX !== 'null')) {
    units = ' ' + processUnits(unitsY, unitsX, multiplier, true);
    if (units === ' ') units = '';
  }
  return units;
}

function divideUnits(unitsX, unitsY, multiplier) {
  var units = '';

  if ((unitsY !== 'null' || unitsX !== 'null')) {
    units = ' ' + processUnits(unitsY, unitsX, multiplier, false);
    if (units === ' ') units = '';
  }
  return units;
}

function inverseUnits(units) {
  var tmpArray = [];
  var invertedUnits = '';

  if (units !== 'null') {
    units = rewriteNegUnitExp(units);
    if (units.indexOf('/') !== -1) {
      tmpArray = units.split('/');
      
      if (tmpArray[0].indexOf('1') === -1) {
        invertedUnits += ' ' + tmpArray[1] + '/' + tmpArray[0];
      } else {
        invertedUnits += ' ' + tmpArray[1];
      }
    } else {
      invertedUnits += ' 1/' + units;
    }
  }
  return invertedUnits;
}

function selectElement(id, valueToSelect) {    
  let element = document.getElementById(id);
  element.value = valueToSelect;
}

function setFixDecimal(value) {
  var inputArr = $('txt-input').value.trim();

  if (radix !== 10) {
    inputArr = undoBase(inputArr, radix);
    radix = 10;
  }
  inputArr = inputArr.split('\n');

  if (value === '' || isNaN(value) || parseInt(value) < -1 || parseInt(value) > 17) {
    throw 'Enter an integer from -1 to 17.';
  }
  if (value !== '-1') {
    sciDecimal = -1;
    engDecimal = -1;
    $('indicate-format').innerHTML = 'f:' + value;
    $('label-sci').classList.add('hidden');
    $('label-eng').classList.add('hidden');
  } else {
    $('label-sci').classList.remove('hidden');
    $('label-eng').classList.remove('hidden');
    $('indicate-format').innerHTML = '';
  }
  fixDecimal = parseInt(value);
  
  for (var i = 0; i < inputArr.length; i++) {
    inputArr[i] = objToString(getX(inputArr[i]));
  }
  displayResults(inputArr, '');
}

function setSciDecimal(value) {
  var inputArr = $('txt-input').value.trim();

  if (radix !== 10) {
    inputArr = undoBase(inputArr, radix);
    radix = 10;
  }
  inputArr = inputArr.split('\n');
  
  if (value === '' || isNaN(value) || parseInt(value) < -1 || parseInt(value) > 17) {
    throw 'Enter an integer from -1 to 17.';
  }
  if (value !== '-1') {
    fixDecimal = -1;
    engDecimal = -1;
    $('indicate-format').innerHTML = 's:' + value;
    $('label-fix').classList.add('hidden');
    $('label-eng').classList.add('hidden');
  } else {
    $('label-fix').classList.remove('hidden');
    $('label-eng').classList.remove('hidden');
    $('indicate-format').innerHTML = '';
  }
  sciDecimal = parseInt(value);
  
  for (var i = 0; i < inputArr.length; i++) {
    inputArr[i] = objToString(getX(inputArr[i]));
  }
  displayResults(inputArr, '');
}

function setEngDecimal(value) {
  var inputArr = $('txt-input').value.trim();

  if (radix !== 10) {
    inputArr = undoBase(inputArr, radix);
    radix = 10;
  }
  inputArr = inputArr.split('\n');

  if (value === '' || isNaN(value) || parseInt(value) < -1 || parseInt(value) > 17) {
    throw 'Enter an integer -1 or 1 to 17.';
  }
  if (value !== '-1') {
    fixDecimal = -1;
    sciDecimal = -1;
    $('indicate-format').innerHTML = 'e:' + value;
    $('label-fix').classList.add('hidden');
    $('label-sci').classList.add('hidden');
  } else {
    $('label-fix').classList.remove('hidden');
    $('label-sci').classList.remove('hidden');
    $('indicate-format').innerHTML = '';
  }
  engDecimal = parseInt(value);
  
  for (var i = 0; i < inputArr.length; i++) {
    inputArr[i] = objToString(getX(inputArr[i]));
  }
  displayResults(inputArr, '');
}

function removePositiveNotation(formatted) {
  if (/e[+]0$/g.test(formatted)) formatted = formatted.replace('e+0', '');
  if (/e[+]/g.test(formatted)) formatted = formatted.replace('+', '');  
  return formatted;
}

function toFixed(value, p) {

  var precision = p || 0,
    power = Math.pow(10, precision),
    absValue = Math.abs(Math.round(value * power)),
    formatted = (value < 0 ? '-' : '') + String(Math.floor(absValue / power));

  if (precision > 0) {
    var fraction = String(absValue % power),
      padding = new Array(Math.max(precision - fraction.length, 0) + 1).join('0');
    formatted += '.' + padding + fraction;
  }
  return formatted;
}

function toEngineering(value, precision) {
  var formatted = math.format(parseFloat(value), {notation: 'engineering', precision: precision});    
  return removePositiveNotation(formatted);
}

function toScientific(value, precision) {
  var formatted = parseFloat(value).toExponential(precision);
  return removePositiveNotation(formatted);
}

function formatNumber(result) {

  if (!/[ⅽ℮ɢΦπ]|Infinity/.test(result)) {
    if (radix === 10) {      
      if (!isNaN(result)) {
        if (fixDecimal !== -1) {
          result = toFixed(result, fixDecimal);          
        }
        if (sciDecimal !== -1) {
          result = toScientific(result, sciDecimal);          
        }
        if (engDecimal !== -1) {
          result = toEngineering(result, engDecimal);          
        }        
      }
    } else {  
      if (!isNaN(result)) {
        result = parseInt(result).toString(radix);
      }
    }  
  }
  return result.toString().replace('+', '');
}

//////// Notes ///////////////////////////////////////////////////////////////////////

var notes = [];
var backupNotes = [];
var restoreNotes = [];

function updateDisplayNotes() {
  $('lst-notes').value = '';
  // Needed for responsive textarea
  unFloat();
  // Print to notes display
  for (var note in notes) {
    $('lst-notes').value += decodeSpecialChar(notes[note]);
    $('lst-notes').value += '\n';
  }
  $('lst-notes').value = $('lst-notes').value.trim();
  $('lst-notes').value += '\n';

  if (notes.length === 1 && notes[0] === '') {
    $('lst-notes').value = '';
  }
}

function currentEqualsNotes() {
  var last = notes;
  var current = $('lst-notes').value.split('\n');
  var equals = false;

  if (last.length > 1 && current.length > 1) {

    while (last[0] === '') last.shift();
    while (current[0] === '') current.shift();
    while (last[last.length - 1] === '') last.pop();
    while (current[current.length -1 ] === '') current.pop();
  }


  if (last.length === current.length) {
    equals = true;

    for (var i = 0; i < last.length; i ++) {
      last[i] = last[i].trim();
      current[i] = current[i].trim();
    }
    for (var i = 0; i < last.length; i++) {
      if (last[i] !== current[i]) equals = false;
    }
  }
  return equals;
}

function currentEqualsSavedNotes() {
  var index = getCookie('NOTES').indexOf('=') + 1;
  var cookieValue = getCookie('NOTES').slice(index);
  var tmpNotes = encodeSpecialChar($('lst-notes').value);
  var notesValue = nestArrayByBrowser(tmpNotes.split('\n')).trim();

  while (notesValue.charAt(notesValue.length - 1) === '_') notesValue = notesValue.slice(0, -1);
 
  return cookieValue === notesValue ?  true : false;  
}

function colorSaveNotesButton() {

  if (currentEqualsSavedNotes()) {
    $('btn-save-notes').style.color = '#919191';
  } else {
    $('btn-save-notes').style.color = '#000000';
  }
}

function colorUndoNotesButton() {
  if (backupNotes.length > 0) {
    $('btn-undo-notes').style.color = '#01c401';
  } else {
    $('btn-undo-notes').style.color = '#919191';
  }
  if (restoreNotes.length > 0) {
    $('btn-redo-notes').style.color = '#01c401';
  } else {
    $('btn-redo-notes').style.color = '#919191';
  }  
}

function backupUndoNotes() {  
   
  if (backupNotes.length > 0)  { 

    if (!currentEqualsNotes()) {
      restoreNotes.length = 0;
      backupNotes.push(nestArrayByBrowser(notes));
      notes = $('lst-notes').value.split('\n');
      if (notes[notes.length - 1] === '') notes.pop();
    }
  } else {
    if (!currentEqualsSavedNotes()) {
      restoreNotes.length = 0;
      backupNotes.push(nestArrayByBrowser(notes));
      notes = $('lst-notes').value.split('\n');
      if (notes[notes.length - 1] === '') notes.pop();
    }
  }
  colorSaveNotesButton();
  colorUndoNotesButton();  
}

function loadNotes() {
  try {
    var index = getCookie('NOTES').indexOf('=') + 1;
    
    notes = [];
    notes = splitArrayByBrowser(getCookie('NOTES').slice(index));
    if (notes[0] === '' && notes[1] === '') notes.pop();
  } catch (err) {
    notes.push('Load NOTES error.');
  }
  updateDisplayNotes();
  $('btn-save-notes').style.color = '#919191';
  $('lst-notes').scrollTop = $('lst-notes').scrollHeight;
}

function btnLoadNotes() {
  if (shifted) {
    runNotes();
  } else {
    backupUndoNotes();
    loadNotes();
    if (!isMobile) $('lst-notes').focus();
  }
}

function btnSaveNotes() {
  $('btn-save-notes').style.color = 'rgb(145, 145, 145)';
  notes = encodeSpecialChar($('lst-notes').value.trim()).split('\n');
  saveCookie('NOTES', nestArrayByBrowser(notes));
  if (!isMobile) $('lst-notes').focus();
}

function btnUndoNotes() {
  if (backupNotes.length > 0) {
    restoreNotes.push(nestArrayByBrowser(notes));
    notes = splitArrayByBrowser(backupNotes.pop());
    updateDisplayNotes();
  }
  colorUndoNotesButton();
  colorSaveNotesButton();
  if (!isMobile) $('lst-notes').focus();
}

function btnRedoNotes() {
  if (restoreNotes.length > 0) {
    backupNotes.push(nestArrayByBrowser(notes));
    notes = splitArrayByBrowser(restoreNotes.pop());
    updateDisplayNotes();
  }
  colorUndoNotesButton();
  colorSaveNotesButton();
  if (!isMobile) $('lst-notes').focus();
}

function btnClearNotes() {  
  if ($('lst-notes').value.trim() !== '') {
    $('lst-notes').value = '';
    backupUndoNotes();
    notes = [];
  }
  if (!isMobile) $('lst-notes').focus();
}

function btnDeleteNotes() {
  var txtField = $('lst-notes').value;
  var startPos = $('lst-notes').selectionStart;
  var endPos = $('lst-notes').selectionEnd;  
  $('lst-notes').value = txtField.slice(0, startPos) + txtField.slice(endPos + 1, txtField.length);
  $('lst-notes').setSelectionRange(startPos, startPos);
  backupUndoNotes();

  if (isMobile) $('lst-notes').readOnly = true;
  if (!isMobile) $('lst-notes').focus();
}

function btnCopyNotes() {
  if (getSelectedText('lst-notes') === '') {
    navigator.clipboard.writeText($('lst-notes').value);
  } else {
    navigator.clipboard.writeText(getSelectedText('lst-notes'));
  }
  if (!isMobile) $('lst-notes').focus();
}

function btnPasteNotes() {
  var copiedText = navigator.clipboard.readText();
  copiedText.then(copiedText => {
    insertAtCursor($('lst-notes'), copiedText);
    backupUndoNotes();
  });

  if (!isMobile) $('lst-notes').focus();
}

//////// Tricorder ///////////////////////////////////////////////////////////////////

var viewPortSrc = [];
var viewPortSrc2 = [];
var widgetSrc = [];

var lat = '';
var lng = '';

function loadTricorder() {
  var index = getCookie('TRICORDER').indexOf('=') + 1;
  
  widgetSrc = splitArrayByBrowser(getCookie('TRICORDER').slice(index));

  for (var i in widgetSrc) {
    widgetSrc[i] = decodeSpecialChar(widgetSrc[i]);
    if (widgetSrc[i] === '') {
      widgetSrc.splice(i, 1);
    }
  }
}

function power() {
  var onOff;
  onOff = $('tricorderskin').src.toString().indexOf('tricorderon');

  if (onOff === -1) return false;
  return true;
}

function muteAudio(mute) {
  if (mute) {
    for (var i = 0; i < $('tricorder').getElementsByTagName('audio').length; i++) {
      $('tricorder').getElementsByTagName('audio')[i].muted = true;
      $('tricorder').getElementsByTagName('audio')[i].pause();
    }
  } else {
    for (i = 0; i < $('tricorder').getElementsByTagName('audio').length; i++) {
      $('tricorder').getElementsByTagName('audio')[i].muted = false;
    }
  }
}

function playAudio(obj) {
  if (!$('menu-sound-li').classList.contains('strikethrough')) obj.play();
}

// Power On/Off.
function button1() {
  haptic();
  if (power()) {
    tricorderOff();
  } else {
    tricorderOn();
  }
}

function tricorderOff() {
  muteAudio(true);
  $('widget').src = '';
  $('widget').classList.remove('visible');
  $('widget').classList.add('hidden');
  $('viewport').src = '';
  $('viewport').classList.remove('visible');
  $('viewport').classList.add('hidden');
  $('tricorderskin').src = 'images/tricorder.png';
}

function tricorderOn() {
  muteAudio(false);  
  $('tricorderskin').src = 'images/tricorderon.png';
  $('viewport').src = 'https://www.youtube.com/embed/563Fp4fv1Vk?autoplay=1&mute=1&loop=1&playlist=563Fp4fv1Vk';// Jerobeam Fenderson - Lines
  
  $('viewport').classList.remove('hidden');
  $('viewport').classList.add('visible');
  playAudio($('working'));
  playAudio($('hailing-frequencies'));
  getLocation();
}

function preloadImages() {
  var tricorderOnImg = new Image(); 
  tricorderOnImg.src = 'images/tricorderon.png';
}

function button2() {
  if (power()) {    
    haptic();

    if (viewPortSrc.indexOf($('viewport').src) !== -1) {
      var i = viewPortSrc.indexOf($('viewport').src);
      if (i === viewPortSrc.length - 1) i = -1;
      
      $('viewport').src = viewPortSrc[i + 1];
    } else {
      $('viewport').src = viewPortSrc[0];
    }
    playAudio($('keypress2'));
  }
}

function button3() {
  if (power()) {
    haptic();

    if (viewPortSrc2.indexOf($('viewport').src) !== -1) {
      var i = viewPortSrc2.indexOf($('viewport').src);
      if (i === viewPortSrc2.length - 1) i = -1;

      $('viewport').src = viewPortSrc2[i + 1];
    } else {
      $('viewport').src = viewPortSrc2[0];
    }
    playAudio($('keypress1'));
    playAudio($('data-received'));
  }
}

function button4() {
  if (power()) {
    haptic();
    
    if ($('widget').classList.contains('hidden')) {      
      var srcString = '';

      if ($('widget').src.indexOf('orbitalmechanics') === -1) {    
        srcString += 'https://orbitalmechanics.info/';        
      } else {    
        srcString += 'https://www.worldwidetelescope.org/webclient/';              
      }
      $('widget').src = srcString;
      $('widget').classList.remove('hidden');
      $('widget').classList.add('visible');
      playAudio($('keypress6'));
      playAudio($('verified'));
    } else {
      $('widget').classList.remove('visible');
      $('widget').classList.add('hidden');
      playAudio($('keypress5'));
    }
  }
}

function button5() {
  if (power()) {
    haptic();

    if ($('widget').classList.contains('hidden')) {
      var srcString = '';

      if ($('widget').src.indexOf('windy') === -1) {
        srcString += 'https://embed.windy.com/embed2.html?' + lat + '&lon=' + lng + '&detailLat=' + lat + '&detailLon=' + lng + '&width=650&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1';// Windy.com
      } else {     
        srcString += 'https://radar.weather.gov/region/conus/standard';// NATIONAL WEATHER SERVICE
      }
      $('widget').src = srcString;
      $('widget').classList.remove('hidden');
      $('widget').classList.add('visible');
      playAudio($('keypress6'));
      playAudio($('computer-thinking'));
    } else {
      $('widget').classList.remove('visible');
      $('widget').classList.add('hidden');
      playAudio($('keypress5'));
    }
  }
}

function button6() {
  if (power()) {    
    haptic();

    if ($('widget').classList.contains('hidden')) {
      if (widgetSrc.indexOf($('widget').src.slice(0, -7)) !== -1) {
        var i = widgetSrc.indexOf($('widget').src.slice(0, -7));
        
        if (i === widgetSrc.length - 1) i = -1;
        
        $('widget').src = widgetSrc[i + 1];
      } else {
        $('widget').src = widgetSrc[0];
      }
      $('widget').classList.remove('hidden');
      $('widget').classList.add('visible');
      playAudio($('scanner'));
      playAudio($('keypress6'));
    } else {
      $('widget').src += '&mute=1';
      $('widget').classList.remove('visible');
      $('widget').classList.add('hidden');
      playAudio($('keypress5'));
    }
  }
}

// Tricorder sensors
function sensor1() {
  if (power()) {    
    haptic();
    $('viewport').src = '';
    playAudio($('keypress7'));
    playAudio($('scanner'));
    $('viewport').src = 'https://tunein.com/embed/player/s249942/';// Classic Hits
  }
}

function sensor2() {
  if (power()) {
    haptic();
    $('viewport').src = '';
    playAudio($('keypress7'));
    playAudio($('scanner'));
    $('viewport').src = 'https://s8.yesstreaming.net:17004/krnu';// KRNU
  }
}

function saveTricorder() {
  for (var i in widgetSrc) widgetSrc[i] = encodeSpecialChar(widgetSrc[i]);  
  saveCookie('TRICORDER', nestArrayByBrowser(widgetSrc));
}

///////////// Mathmon idName, xPos, yPos, objSize, health, speed, ammo ///////////////

var twig = new Mathmon('twig', 135, -365, 3, 100, 5, 6);
var tv = new Mathmon('tv', -45, -395, 30, 100, 7, 0);
var don = new Mathmon('don', -45, -420, 3, 100, 6, 0);
var theObjects = [3];
var worldBorders = {};

function Mathmon(idName, xPos, yPos, objSize, health, speed, ammo) {

  this.idName = idName;
  this.xPos = xPos;
  this.yPos = yPos;
  this.objSize = objSize;
  this.health = health;
  this.speed = speed;
  this.ammo = ammo;
}
Mathmon.prototype.setIdName = function(name) {
  this.idName = name;
};
Mathmon.prototype.getIdName = function() {
  return this.idName;
};
Mathmon.prototype.setXPos = function(x) {
  this.xPos = x;
};
Mathmon.prototype.setYPos = function(y) {
  this.yPos = y;
};
Mathmon.prototype.movXPos = function(x) {
  this.xPos += x;
};
Mathmon.prototype.movYPos = function(y) {
  this.yPos += y;
};
Mathmon.prototype.getXPos = function() {
  return this.xPos;
};
Mathmon.prototype.getYPos = function() {
  return this.yPos;
};
Mathmon.prototype.setObjSize = function(objSize) {
  return this.objSize = objSize;
};
Mathmon.prototype.getObjSize = function() {
  return this.objSize;
};
Mathmon.prototype.setHealth = function(health) {
  return this.health = health;
};
Mathmon.prototype.movHealth = function(health) {
  return this.health += health;
};
Mathmon.prototype.getHealth = function(health) {
  return this.health = health;
};
Mathmon.prototype.setSpeed = function(velocity) {
  this.speed = velocity;
  if (this.speed <= 0) this.speed = 1;
};
Mathmon.prototype.getSpeed = function() {
  return this.speed;
};
Mathmon.prototype.setAmmo = function(ammo) {
  this.ammo = ammo;
  if (ammo < 0) ammo = 0;
};
Mathmon.prototype.getAmmo = function() {
  return this.ammo;
};
Mathmon.prototype.toString = function() {
  return this.idName + ',' + this.xPos + ',' + this.yPos + ',' + this.objSize + ',' + this.health + ',' + this.speed + ',' + this.ammo;
};

function displayGIF(obj) {
  $(obj.idName).style.left = obj.xPos + 'px';
  $(obj.idName).style.top = obj.yPos + 'px';
}

function monStatus() {
  for (var i = 0; i < theObjects.length; i++) {
    inputText(theObjects[i].toString());
    enterInput();
    updateDisplay();
  }
}

function worldIsRunning() {
  if ($('twig').src.indexOf('pop') === -1) {
    return true;
  } else {
    return false;
  }
}

function monOn() {
  $('don').src = 'images/twig/don-jon.gif';
  $('don').className = 'visible';
  $('tv').src = 'images/twig/tv-off.gif';
  $('tv').className = 'visible';
  $('twig').src = 'images/twig/piece-frog.gif';
  $('twig').className = 'visible';
  twig.setHealth(100);
  worldBordersSet();
  worldEngine();
}

function monOff() {  
  $('twig').src = 'images/twig/pop.gif';
  twig.setHealth(0);
  setTimeout(function() {
    $('twig').className = 'hidden';
    $('tv').className = 'hidden';
    $('don').className = 'hidden';
  }, 1000);
}

function resetMathmon() {
  inputText('');
  $('twig').src = 'images/twig/piece-frog.gif';

  for (var i = 0; i < theObjects.length; i++) {
    theObjects[i].setHealth(100);
  }
  twig.setXPos(135);
  twig.setYPos(-400);
  tv.setXPos(-45);
  tv.setYPos(-330);
  don.setXPos(-45);
  don.setYPos(-420);

  for (i = 0; i < theObjects.length; i++) {
    $(theObjects[i].idName).style.left = theObjects[i].xPos + 'px';
    $(theObjects[i].idName).style.top = theObjects[i].yPos + 'px';
  }
  worldBordersSet();
  worldEngine();
}

function loadMathMon(tmpStack) {
  if ((/*@cc_on!@*/false || !!document.documentMode) || isChrome || isSafari) {
    // Remove underscore from begining of string
    tmpStack = tmpStack.slice(1);
  }
  tmpStack = splitArrayByBrowser(tmpStack);  
  mathMonConstructor(tmpStack);
}

function mathMonConstructor(tmpStack) {
  var i = 0;
  while (tmpStack.length > 0) {
    var tmpArray = [];    
    tmpArray = tmpStack.shift();
    tmpArray = tmpArray.split(',');

    theObjects[i].setXPos(parseInt(tmpArray[1]));
    theObjects[i].setYPos(parseInt(tmpArray[2]));
    theObjects[i].setObjSize(parseInt(tmpArray[3]));
    theObjects[i].setHealth(parseInt(tmpArray[4]));
    theObjects[i].setSpeed(parseInt(tmpArray[5]));
    theObjects[i].setAmmo(parseInt(tmpArray[6]));
    $(theObjects[i].idName).style.left = theObjects[i].xPos + 'px';
    $(theObjects[i].idName).style.top = theObjects[i].yPos + 'px';
    i++;
  }
}

function moveObj(obj, speed, xMov, yMov) {
  var index = 0;
  // Move obj
  obj.movXPos(speed * xMov);
  obj.movYPos(speed * yMov);
  // Find obj's index in theObjects array
  for (var i = 0; i < theObjects.length; i++) {
    if (obj.idName === theObjects[i].idName) { index = i; }
  }    
  // Check for collision with other objects
  for (i = 0; i < theObjects.length; i++) {
    if (obj.idName !== theObjects[i].idName) {
      // Compute space between two objects
      var spaceX = Math.abs(obj.xPos - (theObjects[i].xPos + ((i - index) * (65 + theObjects.length))));
      var spaceY = Math.abs(obj.yPos - theObjects[i].yPos);
      // If spaceX and spaceY are smaller than the total size of the two objects: COLLISION!
      if (spaceX < (obj.objSize + theObjects[i].objSize) && spaceY < (obj.objSize + theObjects[i].objSize)) {
        // Move object which was hit
        moveObj(theObjects[i], speed + 1, xMov, yMov);                
        if (theObjects[i].idName === 'twig') {
          twig.movHealth(-1);
          inputText(twig.health);
          if (twig.health <= 0) {
            $('twig').src = 'images/twig/pop.gif';
            rpnAlert('Game Over');
            setTimeout(resetMathmon, 3000);
          }
        }
        if (theObjects[i].idName === 'tv') {
          // If not already animated
          if ($('tv').src.indexOf('tv-off') !== -1) {
            $('tv').src = 'images/twig/tv-pong.gif';
            staticTV();
          }
        }
        if (theObjects[i].idName === 'don') {
          // If not already animated
          if ($('don').src.indexOf('don-walk') === -1) {
            $('don').src = 'images/twig/don-walk.gif';
            donMove();
          }
        }
      }
    }
  }
  displayGIF(obj);
}

function worldEngine() {
  if (worldIsRunning()) {
    for (var i = 0; i < theObjects.length; i++) {
      shifted ? transXBorders(i) : collideWithBorders(i);      
      displayGIF(theObjects[i]);
    }            
  }
  setTimeout(worldEngine, 90);
}

function worldBordersSet() {
  var stackHeight = $('lst-stack').offsetHeight;
  var stackWidth = $('lst-stack').offsetWidth;  
  var inputHeight = $('txt-input').offsetHeight; 

  if (window.innerWidth > 360) {
    worldBorders = {
      bTop: -315 - stackHeight - inputHeight,
      bBottom: -330 - inputHeight,
      bLeft: -129,
      bRight: - 153 + stackWidth
    }
  } else {
    worldBorders = {
      bTop: -246 - stackHeight - inputHeight,
      bBottom: -260 - inputHeight,
      bLeft: -stackWidth / 3.9,
      bRight: -120 + stackWidth
    }
  }
}

function collideWithBorders(i) {
  // The gifs are offset from each other in the html, each is 64px * 64px.
  var gifWidth = 64;
  if (theObjects[i].yPos < worldBorders.bTop + (theObjects[i].objSize / 2)) { theObjects[i].setYPos(worldBorders.bTop + theObjects[i].objSize); }// Top border
  if (theObjects[i].yPos > worldBorders.bBottom - (theObjects[i].objSize / 2)) { theObjects[i].setYPos(worldBorders.bBottom - theObjects[i].objSize); }// Bottom border
  if (theObjects[i].xPos < worldBorders.bLeft - (i * gifWidth) + (theObjects[i].objSize / 2)) { theObjects[i].setXPos(worldBorders.bLeft - (i * gifWidth) + theObjects[i].objSize); }// Left border
  if (theObjects[i].xPos > worldBorders.bRight - (i * gifWidth) - (theObjects[i].objSize / 2)) { theObjects[i].setXPos(worldBorders.bRight - (i * gifWidth) - theObjects[i].objSize); }// Right border
}

function transXBorders(i) {
  var gifWidth = 64;  
  if (theObjects[i].yPos < worldBorders.bTop + (theObjects[i].objSize / 2)) { theObjects[i].setYPos(worldBorders.bBottom - theObjects[i].objSize); }// Top border
  if (theObjects[i].yPos > worldBorders.bBottom - (theObjects[i].objSize / 2)) { theObjects[i].setYPos(worldBorders.bTop + theObjects[i].objSize); }// Bottom border
  if (theObjects[i].xPos < worldBorders.bLeft - (i * gifWidth) + (theObjects[i].objSize / 2)) { theObjects[i].setXPos(worldBorders.bRight - (i * gifWidth) - theObjects[i].objSize); }// Left border
  if (theObjects[i].xPos > worldBorders.bRight - (i * gifWidth) - (theObjects[i].objSize / 2)) { theObjects[i].setXPos(worldBorders.bLeft - (i * gifWidth) + theObjects[i].objSize); }// Right border
}

function brownianMovement(obj) {
  var x = Math.floor(Math.random() * 2);
  var y = Math.floor(Math.random() * 2);

  if (Math.floor(Math.random() * 2) === 0) x = x * -1;
  if (Math.floor(Math.random() * 2) === 0) y = y * -1;
  moveObj(obj, obj.speed, x, y);
}

function gravity() {
  if (worldIsRunning()) {
    for (var i = 0; i < theObjects.length; i++) {
      moveObj(theObjects[i], 1, 0, 1);
    }
    setTimeout(gravity, 1);
  }
}

function pongTV() {
  if (worldIsRunning()) {
    $('tv').src = 'images/twig/tv-pong.gif';
    setTimeout(staticTV, 600);
    brownianMovement(tv);
  } else {
    $('tv').src = 'images/twig/tv-off.gif';
  }
}

function staticTV() {
  if (worldIsRunning()) {
    $('tv').src = 'images/twig/tv-static.gif';
    setTimeout(pongTV, 900);
    brownianMovement(tv);
  } else {
    $('tv').src = 'images/twig/tv-off.gif';
  }
}

function donMove() {
  if (worldIsRunning()) {

    if ($('don').src.indexOf('left') === -1) {
      $('don').src = 'images/twig/don-walk-left.gif';
    } else {
      $('don').src = 'images/twig/don-walk-right.gif';
    }   
    setTimeout(donMove, 300);
    brownianMovement(don);
  } else {
    $('don').src = 'images/twig/don-jon.gif';
  }  
}

//////// Event Firing and Listening //////////////////////////////////////////////////

// Fire A Click Event
function eventFire(el, etype) {
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}//eventFire(document.getElementById('test'), 'click');

// Custom 'double click' for Stack
document.addEventListener('click', function(event) {
  if (event.detail === 2 && event.target === $('lst-stack')) {
    getStackEntry();
    resizeInput();
  }
});

document.addEventListener('keypress', function(event) {
  
  switch (event.key) {
  case 'Enter':
  if ($('rpnapes').className !== 'hidden') {    
      if (!event) event = window.event;
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      if (isMobile) {
        softEnter();
      } else {
        enterButton();
      }
      return false;
    }
  }
});

function getEmptyRows() {
  var rows =  $('lst-stack').value.split('\n');
  var emptyRows = 0;

  while (rows[emptyRows] === ' ') {
    emptyRows++;
  }
  return emptyRows;
}

document.addEventListener('keydown', function(event) {
  var key = event.keyCode || event.charCode;

  switch (key) {
  case 8:// BACKSPACE  
    if ($('rpnapes').className !== 'hidden' && !isMobile) {
      if (!event) event = window.event;
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      var isShifted = shifted;
      shifted = true;
      btnBackspace();
      shifted = isShifted;
    }
    return;
  case 16:// SHIFT
    if (altHeld) {
      btnShift();
    } else {
      shiftHeld = true;
    }
    return;
  case 17:// CTRL
    if (!event) event = window.event;
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    ctrlHeld = true;
    return;
  case 18:// ALT
    altHeld = true;
    return;  
  case 33:// PAGE UP  
  if ($('notes').className === 'hidden') {
      if (!event) event = window.event;
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      $('lst-stack').scrollTop = $('lst-stack').scrollTop - $('lst-stack').offsetHeight;     
    }
    return;
  case 34:// PAGE DOWN
    if ($('notes').className === 'hidden') {
      if (!event) event = window.event;
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      $('lst-stack').scrollTop = $('lst-stack').scrollTop + $('lst-stack').offsetHeight;
    }
    return;
  case 35:// END    
    if ($('notes').className === 'hidden' && stackFocus) {
      if (!event) event = window.event;
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      $('lst-stack').scrollTop = $('lst-stack').scrollHeight;
      $('lst-stack').setSelectionRange($('lst-stack').value.lastIndexOf('\n', $('lst-stack').value.length) + 1, $('lst-stack').value.length);      
    }
    return;
  case 36:// HOME
    if ($('notes').className === 'hidden' && stackFocus) {      
      if (!event) event = window.event;
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      var emptyRows = getEmptyRows();
      window.innerWidth > 359 ? $('lst-stack').scrollTop = emptyRows * 18 : $('lst-stack').scrollTop = emptyRows * 12;      
      $('lst-stack').setSelectionRange((emptyRows * 2) + 1, $('lst-stack').value.indexOf('\n', (emptyRows * 2) + 1));      
    }
    return;
  case 37:// LEFT ARROW
    if (twig.health > 0 && $('twig').className !== 'hidden') {
      if (!event) event = window.event;
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);

      $('twig').src = 'images/twig/walk-left.gif';
      moveObj(twig, twig.speed, -1, 0);
    }
    return;
  case 38:// UP ARROW
    if ($('rpnapes').className !== 'hidden') {
      if (!event) event = window.event;
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
            
      if (!stackFocus && stack.length > 0) {
        $('lst-stack').focus();
        $('lst-stack').scrollTop = $('lst-stack').scrollHeight;
        $('lst-stack').setSelectionRange($('lst-stack').value.lastIndexOf('\n', $('lst-stack').value.length) + 1, $('lst-stack').value.length);
      } else {
        var testString = $('lst-stack').value.slice($('lst-stack').selectionStart);
        var newLines = (testString.match(/\n/g) || []).length;
        var emptyRows = getEmptyRows();
        
        if ($('lst-stack').selectionEnd > $('lst-stack').value.indexOf('\n', (emptyRows * 2) + 1)) {

            if ($('lst-stack').offsetHeight < 35 && newLines > 0 || $('lst-stack').offsetHeight > 35 && $('lst-stack').offsetHeight / newLines < 69) {
            window.innerWidth > 359 ? $('lst-stack').scrollTop = $('lst-stack').scrollTop - 18 : $('lst-stack').scrollTop = $('lst-stack').scrollTop - 12;
          }
          if ($('lst-stack').selectionStart - 1 > $('lst-stack').value.indexOf('\n', (emptyRows * 2))) $('lst-stack').setSelectionRange($('lst-stack').value.lastIndexOf('\n', $('lst-stack').selectionStart - 2) + 1, $('lst-stack').selectionStart - 1);
        }
      }
      if (twig.health > 0 && $('twig').className !== 'hidden') {
        $('twig').src = 'images/twig/walk-left.gif';
        moveObj(twig, twig.speed, 0, -1);
      }
    }
    return;
  case 39:// RIGHT ARROW
    if (twig.health > 0 && $('twig').className !== 'hidden') {
      if (!event) event = window.event;
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      
      $('twig').src = 'images/twig/walk-right.gif';
      moveObj(twig, twig.speed, 1, 0);      
    }
    return;
  case 40:// DOWN ARROW
    if ($('rpnapes').className !== 'hidden')  {
      if (!event) event = window.event;
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      
      if ($('lst-stack').selectionEnd === $('lst-stack').value.length) {
        $('txt-input').focus();
      } else {
        window.innerWidth > 359 ? $('lst-stack').scrollTop = $('lst-stack').scrollTop + 18 : $('lst-stack').scrollTop = $('lst-stack').scrollTop + 12;
        $('lst-stack').setSelectionRange($('lst-stack').selectionEnd + 1, $('lst-stack').value.indexOf('\n', $('lst-stack').selectionEnd + 1));        
      }      
      if (twig.health > 0 && $('twig').className !== 'hidden') {
        $('twig').src = 'images/twig/walk-right.gif';
        moveObj(twig, twig.speed, 0, 1);
      }
    }
    return;
  case 46:// DELETE
    if ($('rpnapes').className !== 'hidden') {
      if (!event) event = window.event;
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      deleteInput();
      if (!isMobile) resizeInput();        
    }
    return;
  case 57:
      if ($('rpnapes').className !== 'hidden') {        
        if (isTextSelected($('txt-input')) && shiftHeld) {
          event.preventDefault ? event.preventDefault() : (event.returnValue = false);
          btnParenthesis();
        }
      }
      return;
  case 65:// a
    if ($('rpnapes').className !== 'hidden' && stackFocus && ctrlHeld) {
      if (!event) event = window.event;
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      var emptyRows = getEmptyRows();
      $('lst-stack').setSelectionRange((emptyRows * 2) + 1, $('lst-stack').value.length);
    }
    return;
  case 83:// s
    if (ctrlHeld) {
      if (!event) event = window.event;
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);  
      if ($('rpnapes').className !== 'hidden') {
        btnSave();
      } else {
        btnSaveNotes();
      }
    }        
    break;
  case 89:// y
    if (ctrlHeld) {
      if (!event) event = window.event;
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      if ($('rpnapes').className !== 'hidden') {
        redoFunction();
      } else {
        btnRedoNotes();
      }
    }        
    break;
  case 90:// z
    if (ctrlHeld) {
      if (!event) event = window.event;
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      if ($('rpnapes').className !== 'hidden') {
        undoFunction();
      } else {
        btnUndoNotes();
      }
    }
    break;        
  case 106:// NUMPAD *
    if ($('rpnapes').className !== 'hidden') {
      if (!event) event = window.event;
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btnMultiply();
    }
    break;        
  case 107:// NUMPAD +
    if ($('rpnapes').className !== 'hidden') {
      if (!event) event = window.event;
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btnAdd();
    }
    break;        
  case 109:// NUMPAD -
    if ($('rpnapes').className !== 'hidden') {
      if (!event) event = window.event;
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btnSubtract();
    }
    break;      
  case 111:// NUMPAD /
    if ($('rpnapes').className !== 'hidden') {
      if (!event) event = window.event;
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btnDivide();
    }
    break; 
  }
  // Resizing input with soft-keyboard open breaks resizing logic
  if (!isMobile) resizeInput();
});

document.addEventListener('keyup', function(event) {
  
  switch (event.key) {    
  case 'Control':
    ctrlHeld = false;
    break;
  case 'Alt':
    altHeld = false; 
    break;
  case 'Escape':
    if (!event) event = window.event;
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    btnXoff();
    break;
  case 'Shift':
    shiftHeld = false;
    break;
  case 'ArrowLeft':// (Falls through)
  case 'ArrowUp'://  (Falls through)
  case 'ArrowRight'://  (Falls through)
  case 'ArrowDown':
    if ($('twig').className !== 'hidden' && twig.health > 0) {      
      $('twig').src = 'images/twig/hat-on.gif';
    }
    break;
  }
});

window.onload = function () {
  // Internet Explorer needs this for "btn-off" ~ window.close()   
  window.open('', '_self');

  // MathMon
  theObjects[0] = twig;
  theObjects[1] = tv;
  theObjects[2] = don;

  // Menu File 
  $('menu-load').onclick = btnLoad;
  $('open-file').addEventListener('change', function () {    
    $('indicate-execution').classList.remove('hidden');

    try {
      var fr = new FileReader();

      fr.onload = function () {

        if ($('rpnapes').classList.contains('hidden')) {
          backupUndoNotes();
          $('lst-notes').value += this.result;
          backupUndoNotes();
        } else {
          var tmpStack = [];
          backupUndo();
          tmpStack = this.result.split('\n');
          for (var i in tmpStack) {
            $('txt-input').value = tmpStack[i];
            
            if (shifted) {
              calculate($('txt-input').value);
              if (testing) runTest();
            }
            var objX = getX();
            stack.push(objX);
          }
          updateDisplay();
          if (!$('indicate-execution').classList.contains('hidden')) $('indicate-execution').classList.add('hidden');
        }
      };
      fr.readAsText(this.files[0]);
      this.value = '';
    } catch (err) {
      rpnAlert(err.toString());
      if (!$('indicate-execution').classList.contains('hidden')) $('indicate-execution').classList.add('hidden');
    }
    i = '√-1';
    j = '√-1';
    resizeInput();
  });

  $('menu-google').onclick = function() {
    searchGoogle();
    resizeInput();
  }
  $('menu-you-tube').onclick = function() {
    searchYouTube();
    resizeInput();
  }
  $('menu-save').onclick = btnSave;
  $('menu-print').onclick = printHtml;
  $('menu-off').onclick = function() {
    btnOff();
  };

  // Menu Edit
  $('menu-enter').onclick = btnEnter;
  $('menu-evaluate').onclick = btnEval;
  $('menu-copy').onclick = copy;
  $('menu-paste').onclick = btnPaste;
  $('menu-delete').onclick = btnDelete;
  $('menu-backspace').onclick = btnBackspace;
  $('menu-clear').onclick = btnClear;
  $('menu-undo').onclick = undoFunction;
  $('menu-redo').onclick = redoFunction;
  $('menu-ab').onclick = abFunction;
  $('menu-xy').onclick = xyFunction;

  // Menu Maths
  $('menu-root').onclick = radical;
  $('menu-exponential').onclick = exponential;
  $('menu-log').onclick = baseLog;
  $('menu-ln').onclick = naturalLog;
  $('menu-inverse').onclick = inverse;
  $('menu-factorial').onclick = btnFactorial;
  $('menu-modulus').onclick = modulus;
  $('menu-sign').onclick = signChange;
  $('menu-divide').onclick = division;
  $('menu-multiply').onclick = multiplication;
  $('menu-subtract').onclick = subtraction;
  $('menu-add').onclick = addition;
  $('menu-sine').onclick = btnSine;
  $('menu-cosine').onclick = btnCosine;
  $('menu-tangent').onclick = btnTangent;

  // Menu View
  $('menu-angle-mode').onclick = toggleAngleMode;
  $('menu-haptic').onclick = toggleHaptic;
  $('menu-darkmode').onclick = toggleDarkMode;
  $('menu-keyboard').onclick = toggleKeyboard;
  $('menu-sound').onclick = toggleSound;
  $('menu-notes').onclick = menuNotes;
  $('menu-shift').onclick = btnShift;
  $('menu-form').onclick = toggleForm;

  // Menu Constants
  $('menu-phi').onclick = function() {
    insertAtCursor($('txt-input'), 'Φ');
    $('txt-input').focus();    
  }
  $('menu-eulers').onclick = function() {
    insertAtCursor($('txt-input'), '℮');
    $('txt-input').focus();   
  }
  $('menu-gravitational-constant').onclick = function() {  
    insertAtCursor($('txt-input'), 'ɢ');
    $('txt-input').focus();   
  }  
  $('menu-light-speed').onclick = function() {
    insertAtCursor($('txt-input'), 'ⅽ');
    $('txt-input').focus();   
  } 
  $('menu-pi').onclick = function() {
    insertAtCursor($('txt-input'), 'π');
    $('txt-input').focus();      
  }
  
  $('menu-date').onclick = insertDate;

  $('menu-time').onclick = insertTime;

  // Menu Formulas
  $('menu-compound-interest').onclick = function() {
    insertText('P*(1+r/n)^(n*t)');
  }
  $('menu-circumference').onclick = function() {
        insertText('(2*π*r)');
  } 
  $('menu-circle-area').onclick = function() {    
    insertText('(π*r^2)');
  }
  $('menu-sphere-area').onclick = function() {
    insertText('(4*π*r^2)');
  }  
  $('menu-sphere-volume').onclick = function() {
    insertText('(4/3*π*r^3)');
  } 
  $('menu-cone-area').onclick = function() {    
    insertText('(π*r^2 + π*r*l)');
  } 
  $('menu-cone-volume').onclick = function() {   
    insertText('(h/3*π*r^2)');
  }  

  // Menu Programs
  $('menu-stack-average').onclick = function() {   
    backupUndo();
    inputText(averageStack());
    resizeInput();
    $('txt-input').select();
  }  
  $('menu-stack-sort').onclick = function() {    
    backupUndo();
    objectSort(true, false);
    updateDisplay();
    $('txt-input').select();
  }  
  $('menu-stack-total').onclick = function() {    
    backupUndo();
    inputText(totalStack());
    resizeInput();
    $('txt-input').select();
  }  
  $('menu-stack-max').onclick = function() {    
    backupUndo();
    inputText(maxNum());
    resizeInput();
    $('txt-input').select();
  }
  $('menu-stack-min').onclick = function() {    
    backupUndo();
    inputText(minNum());
    $('txt-input').select();
  }
  
  $('menu-stopwatch').onclick = menuStopwatch;
  $('menu-tricorder').onclick = showTricorder;
  $('menu-twig').onclick = monOn;
  
  // Menu Symbols
  $('menu-parenthesis').onclick = function() {    
    btnParenthesis();
  }  
  $('menu-equals').onclick = function() {    
    if (!/[√]$/.test($('txt-input').value) && !/===/g.test($('txt-input').value) || isTextSelected($('txt-input'))) insertAtCursor($('txt-input'), '=');
    resizeInput();
    $('txt-input').focus();     
  }
   $('menu-radical').onclick = function() {     
    if (!/[!=]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[√]/, '√');
  }  
  $('menu-bang').onclick = function() {   
    if (!/[-+*/√^%]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[!]/, '!');
  }  
  $('menu-carat').onclick = function() {   
    if (!/[-+*/√%=]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[\^]/, '^');
  }
  $('menu-modulus-symbol').onclick = function() {    
    if (!/[-+*/√^=]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[%]/, '%');
  }  
  $('menu-solidus').onclick = function() {    
    if (!/[-+*√^%=]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[/]/, '/');
  } 
  $('menu-asterisk').onclick = function() {  
    if (!/[-+/√^%=]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[*]/, '*');
  }  
  $('menu-minus').onclick = function() {    
    buttonInsert(/[-]/, '-');
  } 
  $('menu-angle').onclick = function() {    
    buttonInsert(/[∠]/, '∠');
  } 
  $('menu-plus').onclick = function() {    
    if (!/[-*/√^%=]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[+]/, '+');
  }
  $('menu-omega').onclick = function() {     
    buttonInsert(/[Ω]/ , 'Ω');
  }  
  $('menu-heart').onclick = function() {    
    buttonInsert(/[♥]/ , '♥');
  }  
  
  $('menu-help').onclick = menuHelp;

  if (isMobile) {
    $('menu-twig').style = 'display:none';
  } else {
    $('menu-keyboard').style = 'display:none';
    $('menu-haptic').style = 'display:none';
  }

  $('timer').onclick = enterLapTime;

  // Indicators
  if (isFirefox || isMobile) {
    $('indicate-polar').innerHTML = '<span class=\"firefox-ind-polar\">&#8736;</span>';
    $('indicate-execution').innerHTML = '<span class=\"firefox-ind-exe\">&#10711</span>';
  }

  // Text Area
  $('lst-stack').style.color = '#000000';// noscript warning was red ;)
  $('lst-stack').value = '';
  // Stop long tap menu on mobile
  $('lst-stack').oncontextmenu = function(event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    return false;
  }
  $('lst-stack').onscroll = function() {    
    var emptyRows = window.innerWidth > 359 ? getEmptyRows() * 18 : getEmptyRows() * 12;
    if ($('lst-stack').scrollTop < emptyRows) $('lst-stack').scrollTop = emptyRows;
  }
  resizeTextarea($('lst-stack'));
  $('lst-stack').setAttribute('rows', parseInt(screen.height / 18));
  stackSize = parseInt(screen.height / 18 + 2);

  // Text Input
  $('txt-input').onclick = mobileKeyboardAllow;
  $('txt-input').readOnly = true;
  $('txt-input').addEventListener('paste', function() {
    backupUndo();
  });

  // Buttons
  $('btn-xoff').onclick = btnXoff;
  $('btn-copy').onclick = btnCopy;
  $('btn-xy').onclick = btnXy;
  $('btn-enter').onclick = enterButton;
  $('btn-delete').onclick = deleteButton;

  $('btn-inverse').onclick = btnInverse;
  $('btn-log').onclick = btnLog;
  $('btn-root').onclick = btnRoot;
  $('btn-undo').onclick = btnUndo;

  $('btn-ee').onclick = btnEe;
  $('btn-pi').onclick = btnPi;
  $('btn-modulus').onclick = btnModulus;
  $('btn-sign').onclick = btnSign;
  $('btn-go').onclick = btnGo;
  $('btn-shift').onclick = btnShift;

  $('btn-seven').onclick = btnSeven;
  $('btn-eight').onclick = btnEight;
  $('btn-nine').onclick = btnNine;
  $('btn-divide').onclick = btnDivide;
  $('btn-angle').onclick = toggleAngleMode;
  $('btn-clear').onclick = btnClear;

  $('btn-four').onclick = btnFour;
  $('btn-five').onclick = btnFive;
  $('btn-six').onclick = btnSix;
  $('btn-multiply').onclick = btnMultiply;
  $('btn-sine').onclick = btnSine;
  $('btn-load').onclick = btnLoad;  

  $('btn-one').onclick = btnOne;
  $('btn-two').onclick = btnTwo;
  $('btn-three').onclick = btnThree;
  $('btn-subtract').onclick = btnSubtract;
  $('btn-cosine').onclick = btnCosine;
  $('btn-save').onclick = btnSave;

  $('btn-zero').onclick = btnZero;
  $('btn-dot').onclick = btnDot;
  $('btn-space').onclick = btnSpace;
  $('btn-add').onclick = btnAdd;
  $('btn-tangent').onclick = btnTangent;
  $('btn-off').onclick = btnOff;

  // Tricorder
  preloadImages();
  
  viewPortSrc.push('https://www.youtube.com/embed/563Fp4fv1Vk?autoplay=1&mute=1&loop=1&playlist=563Fp4fv1Vk');// Jerobeam Fenderson - Lines
  viewPortSrc.push('https://www.youtube.com/embed/XziuEdpVUe0?autoplay=1&mute=1&loop=1&playlist=XziuEdpVUe0');// Jerobeam Fenderson - Planets
  viewPortSrc.push('https://www.youtube.com/embed/8ybTURnxywo?autoplay=1&mute=1&loop=1&playlist=8ybTURnxywo');// Oscilloscope Experiments Live
  viewPortSrc.push('https://www.youtube.com/embed/RGDEKqU0T2k?autoplay=1&mute=1&loop=1&playlist=RGDEKqU0T2k');// Starfleet Technical Manual
  viewPortSrc.push('https://www.youtube.com/embed/jlJgi3SxDaI?autoplay=1&mute=1&loop=1&playlist=jlJgi3SxDaI');//  LCARS Display
  viewPortSrc.push('https://www.youtube.com/embed/4oY3v0jAWr4?autoplay=1&mute=1&loop=1&playlist=4oY3v0jAWr4');// Star field
  
  viewPortSrc2.push('https://www.youtube.com/embed/1LsRygSoU80?autoplay=1');// Star Trek Meets Batman
  viewPortSrc2.push('https://www.youtube.com/embed/OL7g0mdzGic?autoplay=1');// Star Track
  viewPortSrc2.push('https://www.youtube.com/embed/MMGKNGCb8g8?autoplay=1');// Sepia Track

  $('sensor1').onclick = sensor1;
  $('sensor2').onclick = sensor2;
  $('button1').onclick = button1;
  $('button2').onclick = button2;
  $('button3').onclick = button3;
  $('button4').onclick = button4;
  $('button5').onclick = button5;
  $('button6').onclick = button6;
  muteAudio(true);

  // Notes
  $('btn-load-notes').onclick = btnLoadNotes;
  $('btn-save-notes').onclick = btnSaveNotes;
  $('btn-copy-notes').onclick = btnCopyNotes;
  $('btn-paste-notes').onclick = btnPasteNotes;
  if (isFirefox) $('btn-paste-notes').style.color = '#808080';
  $('btn-undo-notes').onclick = btnUndoNotes;
  $('btn-redo-notes').onclick = btnRedoNotes;
  $('btn-clear-notes').onclick = btnClearNotes;
  $('btn-delete-notes').onclick = btnDeleteNotes;

  $('lst-notes').onclick = function() {
    $('lst-notes').readOnly = false;
  }
  $('lst-notes').oninput = backupUndoNotes; 

  // Attach hapticResponse to Menu items and buttons
  var elements = document.getElementsByClassName('haptic-response');
  
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', hapticResponse, false);
  }  
  // Check for cookies
  if (document.cookie.indexOf('NOTES') !== -1) {
    $('lst-notes').value = '';
    loadNotes();
  }
  colorUndoNotesButton(); 
  colorSaveNotesButton();

  if (document.cookie.indexOf('TRICORDER') !== -1) {
    loadTricorder();        
  } else {
    widgetSrc.push('https://www.wolframalpha.com/');
  }
  if (document.cookie.indexOf('STACK') !== -1) {
    $('lst-stack').value = '';
    $('txt-input').value = '';
    btnLoad();
  } else {
    backupUndo();
    $('btn-save').style.color = '#D4D0C8';
  }
  autoDark();
  $('txt-input').readOnly = false;
  $('txt-input').focus();
};