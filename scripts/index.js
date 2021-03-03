var $ = function (id) {
  return document.getElementById(id);
};

/*
  Array.prototype.indexOf()
  Added to the ECMA-262 standard in the 5th edition may not work in all browsers.
  You can work around this by utilizing the following code at the beginning of your scripts.
  This will allow you to use indexOf() when there is still no native support.
  This algorithm matches the one specified in ECMA-262, 5th edition, assuming TypeError and Math.abs() have their original values.
  This version tries to optimize by only checking for "in" when looking for undefined and
  skipping the definitely fruitless NaN search. Other parts are merely cosmetic conciseness.
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
      } else// all else
        for (; i !== Len; ++i) if (that[i] === member) return i 

      return -1// if the value was not found, then return -1
    }
  })(Object, Math.max, Math.min);

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
// var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);

if (isMobile) navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

window.onresize = resizeTextareas;

new ResizeObserver(unFloat).observe($('lst-stack'));
new ResizeObserver(unFloat).observe($('lst-notes'));
$('main').onresize = unFloat;

const Φ = 1.618033988749895;
const e = 2.718281828459045;
const π = Math.PI;
const G = 6.674E-11;
const c = 299792458;
const tStamp = '20:30:37';
var testing = false;

var stack = [];
var backUps = [];
var restores = [];
var stackSize = 99;
var stackFocus = false;
var shifted = false;
var keyHeld = false;
var fixDecimal = -1;
var sciDecimal = -1;
var radix = 10;

function NumberObject(soul, realPart, imaginary, units, timeStamp) {

  this.soul = soul;
  this.realPart = realPart;
  this.imaginary = imaginary;
  this.units = units;
  this.timeStamp = timeStamp;
  
  // if (isNaN(this.realPart) && isNaN(this.imaginary)) {
  //   this.units = 'null';
  // }
}
NumberObject.prototype.setSoul = function (s) {
  this.soul = s;
};
NumberObject.prototype.getSoul = function () {
  return this.soul;
};
NumberObject.prototype.setRealPart = function (r) {
  this.realPart = r;
};
NumberObject.prototype.getRealPart = function () {
  return this.realPart;
};
NumberObject.prototype.setImaginary = function (i) {
  this.imaginary = i;
};
NumberObject.prototype.getImaginary = function () {
  return this.imaginary;
};
NumberObject.prototype.setUnits = function (u) {
  this.units = u;
};
NumberObject.prototype.getUnits = function () {
  return this.units;
};
NumberObject.prototype.setTimestamp = function (t) {
  this.timeStamp = t;
};
NumberObject.prototype.getTimeStamp = function () {
  return this.timeStamp;
};
NumberObject.prototype.toString = function () {
  return this.soul + ', ' + this.realPart + ', ' + this.imaginary + ', ' + this.units + ', ' + this.timeStamp;
};

function resizeTextareas() {
  resizeTextarea($('lst-stack'));
  resizeTextarea($('lst-notes'));
  if ($('lst-stack').offsetHeight === 0) $('lst-stack').classList.add('resizable');
  if ($('lst-notes').offsetHeight === 0) $('lst-notes').classList.add('resizable');
}

function resizeTextarea(textarea) {
  var winSize = getSize();  
  var textareaHeight = textarea.offsetHeight;
  var bodyHeight = document.getElementsByTagName('body')[0].offsetHeight;
  
  if (textareaHeight > 0) {
    textarea.style.height = (winSize[1] + textareaHeight - bodyHeight) + 'px';    
    textarea.classList.remove('resizable');
  }
}

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
  // For Timer - Vibrate 'SOS' in Morse :)
  //window.navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100]);
}

function toggleKeyboard() {
  if ($('menu-keyboard-li').classList.contains('strikethrough')) {
    $('menu-keyboard-li').classList.remove('strikethrough');
  } else {
    $('menu-keyboard-li').className += ' strikethrough';
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
  } else {
    $('menu-sound-li').classList.add('strikethrough');
  }
}

//////// Buttons /////////////////////////////////////////////////////////////////////

function btnXoff() {

  if ($('rpnapes').classList.contains('hidden')) {
    // Notes is visible - turn on RPNapes
    rpnapesOn();
  }
  else if ($('notes').classList.contains('hidden') && $('tricorder').classList.contains('hidden')) {
    // RPNapes is visible - turn on Notes
    notesOn();
  }
}
function rpnapesOn() {

  $('notes').classList.remove('visible');
  $('notes').classList.add('hidden');
  $('wrap').classList.remove('tricorder-min-height');
  $('widget').classList.remove('visible');
  $('widget').classList.add('hidden');
  $('viewport').classList.remove('visible');
  $('viewport').classList.add('hidden');
  $('tricorder').classList.remove('visible');
  $('tricorder').classList.add('hidden');
  if (power()) playAudio($('keypress3'));
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
  $('wrap').classList.remove('tricorder-min-height');
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
}
function showTricorder() {
  
  $('rpnapes').classList.remove('visible');
  $('rpnapes').classList.add('hidden');
  monOff();
  $('notes').classList.remove('visible');
  $('notes').classList.add('hidden');
  if (power()) playAudio($('tricorder-alert'));
  $('wrap').classList.add('tricorder-min-height');
  $('tricorder').classList.remove('hidden');
  $('tricorder').classList.add('visible');
  $('viewport').classList.remove('hidden');
  $('viewport').classList.add('visible');
}

function btnCopy() {

  if (shifted) {
    btn_paste();
  } else {
    copy();
  }  
}
function copy() {
  if (!stackFocus && !isTextSelected($('txt-input'))) $('txt-input').select();

  if (!stackFocus) {
    navigator.clipboard.writeText(getSelectedText('txt-input'));    
  } else {
    navigator.clipboard.writeText(getSelectedText('lst-stack'));
  }
}
function btn_paste() {

  backupUndo();

  if (stackFocus) {
    insertAtCursor($('txt-input'), getSelectedText('lst-stack'));
  }
  else {
    if (/*@cc_on!@*/false || !!document.documentMode) {// IE
      insertAtCursor($('txt-input'), window.clipboardData.getData('Text'));
    }
    else {
      rpnAlert('This functionality prohibited by your browser.');
    }
  }
  $('txt-input').select();
}

function btnXy() {

  if (shifted) {
    abFunction();
  }
  else {
    xyFunction();
  }
}
function abFunction() {

  if (stack.length > 1) {
    backupUndo();
    var tmp = stack.pop();
    var tmp2 = stack.pop();
    stack.push(tmp);
    stack.push(tmp2);
    updateDisplay();
  }
  $('txt-input').focus();
}
function xyFunction() {

  if (stack.length > 0) {
    backupUndo();
    var tmpX = stack.pop();
    enterInput();
    $('txt-input').value = '';

    if (isNaN(parseFloat(tmpX.getRealPart()))) {
      $('txt-input').value += decodeSpecialChar(tmpX.getSoul());
    }
    else {
      $('txt-input').value += formatNumber(tmpX.getRealPart().toString());

      if (!isNaN(parseFloat(tmpX.getImaginary()))) {
        if (parseFloat(tmpX.getImaginary()) > 0) {
          $('txt-input').value += ' + ' + formatNumber(tmpX.getImaginary().toString()) + 'j';
        }
        else {
          $('txt-input').value += ' - ' + formatNumber(tmpX.getImaginary().toString().substring(1)) + 'j';
        }
      }
      if (tmpX.getUnits() !== 'null') {
        $('txt-input').value += ' ' + decodeSpecialChar(tmpX.getUnits());
      }
    }
    updateDisplay();
  }
  $('txt-input').focus();
}

function commandRun() {
  if (!shifted) btnShift();
  btnLoad();
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
  if ($('txt-input').value.trim().match(/^run$/)) {
    commandRun();
    return;
  }
  if (stackFocus) {
    insertAtCursor($('txt-input'), getSelectedText('lst-stack'));
  }
  else {
    enterInput();
  }
  updateDisplay();
  parseCommand();
}

function btnEval() {
  backupUndo();
  if ($('txt-input').value.trim().match(/^run$/)) {
    commandRun();
    return;

  }
  if (stackFocus) insertAtCursor($('txt-input'), getSelectedText('lst-stack'));
  evaluateExpression($('txt-input').value);
  $('txt-input').select();    
}

function getX() {

  var soulX = $('txt-input').value.trim();
  var realPartX = extractReal(soulX);
  var imaginaryX = extractImaginary(soulX);
  var unitsX = extractUnits(soulX);
  var timeStampX = Date.now();
  soulX = encodeSpecialChar(soulX);
  unitsX = encodeSpecialChar(unitsX);
  return new NumberObject(soulX, realPartX, imaginaryX, unitsX, timeStampX);
}

function enterInput() {

  var objX = getX();
  stack.push(objX);
  $('txt-input').value = $('txt-input').value.trim();  
}
function evaluateExpression(input) {  
  
  $('txt-input').value = calculate(input);  
  if (testing) {
    // Data Testing
    try {
      if (stack.length > 0 && stack.length % 2 === 0) {
        console.log(`${decodeSpecialChar(stack[stack.length - 2].soul)} %c${stack[stack.length - 1].soul === calculate((decodeSpecialChar(stack[stack.length - 2].soul))).toString()}`, 'font-weight: bold; color: green');
      }
    } catch(e) {
      console.log(stack[stack.length - 2].soul, e.toString());
    }
  }  
}
function calculate(x) {
  try {
    x = eval(parseEvaluation(x));
  } catch(e) {
    return e.toString();
  }
  return x;
}

function deleteButton() {

  if (shifted) {
    btnBackspace();
  }
  else {
    btnDelete();
  }
}
function btnDelete() {

  backupUndo();
  $('txt-input').value = $('txt-input').value.trim();
  if (stackFocus) {
    deleteFromStack();
    updateDisplay();
  } else if ($('txt-input').value !== '' && $('txt-input').value.length === $('txt-input').selectionEnd) {
    $('txt-input').value = '';
    $('txt-input').focus();
  } else if ($('txt-input').value === '') {
    stack.pop();
    updateDisplay();
  }
  else {
    deleteText($('txt-input'), true);
  }
  if (elapsedTime > 0) stopwatchReset();
}
function deleteFromStack() {

  var stackIndex = getIndex('lst-stack') - stackSize;
  stack.splice(stackIndex, 1);
}
function btnBackspace() {

  backupUndo();
  if (stackFocus) {
    deleteFromStack();
    updateDisplay();
  } else if ($('txt-input').value === '') {
    stack.pop();
    updateDisplay();
  } else {
    deleteText($('txt-input'), false);
  }
}
function deleteText(txtField, forward) {
  var startPos = txtField.selectionStart;
  var endPos = txtField.selectionEnd;
  
  if (txtField.selectionStart === txtField.selectionEnd && forward) endPos++;
  if (txtField.selectionStart === txtField.selectionEnd && !forward ) startPos--;

  txtField.value = txtField.value.substring(0, startPos) + txtField.value.substring(endPos, txtField.value.length);

  txtField.selectionStart = startPos;
  txtField.selectionEnd = startPos;
  $('txt-input').focus();
}

function btnUndo() {

  if (shifted) {
    redoFunction();
  }
  else {
    undoFunction();
  }
}
function undoFunction() {
  if (backUps.length > 3) {    
    restores.push(nestArrayByBrowser(stack));
    restores.push($('txt-input').value);

    $('txt-input').value = backUps.pop();
    var tmpArray = backUps.pop();

    stack.length = 0;
    tmpArray = splitArrayByBrowser(tmpArray);
    var i = 1;

    while (i < tmpArray.length) {
      pushObjectToStack(tmpArray[i]);
      i++;
    }
    updateDisplay();
  }
  colorUndoButton();
}
function redoFunction() {

  if (restores.length > 0) {
    backUps.push(nestArrayByBrowser(stack));
    backUps.push($('txt-input').value);

    $('txt-input').value = restores.pop();
    var tmpArray = restores.pop();

    stack.length = 0;
    tmpArray = splitArrayByBrowser(tmpArray);
    var i = 1;

    while (i < tmpArray.length) {
      pushObjectToStack(tmpArray[i]);
      i++;
    }
    updateDisplay();
  }
  colorUndoButton();
}
function backupUndo() {
  backUps.push(nestArrayByBrowser(stack));
  backUps.push($('txt-input').value.trim());
  restores.length = 0;
  colorUndoButton();
}
function colorUndoButton() {

  if (($('btn-undo').value === 'UND' && backUps.length > 3) || ($('btn-undo').value === 'REDO' && restores.length > 0)) {
    $('btn-undo').style.color = '#25FC5A';
  }
  else {
    $('btn-undo').style.color = '#D4D0C8';
  }        
  colorUndoRedoMenu();
}
function colorUndoRedoMenu() {

  if (backUps.length > 3) {
    //$('menu-undo').style.color = '#25FC5A';
    $('menu-undo').style.color = '#088B00';
  } else {
    $('menu-undo').style.color = '#D4D0C8';
  }
  if (restores.length > 0) {
    //$('menu-redo').style.color = '#25FC5A';
    $('menu-redo').style.color = '#088B00';
  } else {
    $('menu-redo').style.color = '#D4D0C8';
  }
}
function btnEe() {

  if (shifted) {

    if (radix !== 16) {
      if (isANumber($('txt-input').value) && $('txt-input').value.indexOf('j') === -1 && $('txt-input').value.trim() !== '') {
        insertAtCursor($('txt-input'), 'j');
      }
    } else {
      if ((/[-+]?[a-e0-9]/g.test($('txt-input').value) || /[-+]?[ΦeπGc]/g.test($('txt-input').value)) && $('txt-input').value.indexOf('j') === -1) {
        insertAtCursor($('txt-input'), 'j');
      }
    }
  }
  else {
    if (/(?!^[-+]?\d+[.]?\d*[eE])[-+]?\d+[.]?\d*/g.test($('txt-input').value) && !/.*[eE]/g.test($('txt-input').value) && !/[-+]?\d?[.][.]+/.test($('txt-input').value) && $('txt-input').value.slice(-1) !== '.') {
      insertAtCursor($('txt-input'), 'e');
    }
  }
  $('txt-input').focus();
}

function btnGo() {
  backupUndo();

  if (shifted) {   
    internetSearch('https://www.youtube.com/results?search_query=', $('txt-input').value.trim());    
  }
  else {
    internetSearch('https://www.google.com/search?q=', $('txt-input').value.trim());
  }  
  $('txt-input').select();
}

function btnShift() {

  if (shifted) {
    // Shifting to false...
    shifted = false;
    $('menu-open').innerHTML = 'Open';
    $('open').setAttribute('title', 'Open a file');
    $('menu-load').innerHTML = 'Load';
    $('menu-load').setAttribute('title', 'Load stack');
    //$('menu-copy').innerHTML = 'Copy';
    //$('menu-copy').setAttribute('title', 'Copy text');
    //$('menu-xy').innerHTML = 'x&nbsp;&#60;&nbsp;&#62;&nbsp;y';
    //$('menu-xy').setAttribute('title', 'Swap input and last stack entry');
    $('menu-sine').innerHTML = 'sin';
    $('menu-cosine').innerHTML = 'cos';
    $('menu-tangent').innerHTML = 'tan'
    $('btn-copy').value = 'COPY';
    $('btn-xy').value = 'x < > y';
    $('btn-enter').classList.remove('btn-big-font');
    $('btn-enter').value = 'ENTER';
    $('btn-delete').innerHTML = 'DEL';
    $('btn-inverse').value = '1 / x';
    $('btn-log').innerHTML = 'log<sub>e</sub>';
    $('btn-root').innerHTML = 'y&nbsp;<sup>x</sup>';
    $('btn-undo').value = 'UND';
    $('btn-ee').classList.add('btn-small-font');
    $('btn-ee').value = 'EE';
    $('btn-pi').innerHTML = '&#120587;';
    $('btn-modulus').style.color = '#000000';
    $('btn-modulus').value = '%';
    $('btn-sign').style.color = '#000000';
    $('btn-sign').innerHTML = '±';
    $('btn-go').classList.remove('you-tube');
    $('btn-go').classList.add('google');
    $('btn-go').innerHTML = '<span class="color-blue">G</span><span class="color-red">o</span>';
    // if ($('menu-darkmode').textContent === 'Dark') {
    //   $('btn-shift').className = 'btn-med btn-shift';
    // } else {
    //   $('btn-shift').className = 'btn-med btn-shifted';      
    // }
    $('btn-shift').className = 'btn-med btn-shift';
    $('btn-divide').style.color = '#000000';
    $('btn-divide').value = '÷';
    $('btn-multiply').style.color = '#000000';
    $('btn-multiply').innerHTML = 'x';
    $('btn-sine').innerHTML = 'sin';
    $('btn-subtract').style.color = '#000000';
    $('btn-cosine').innerHTML = 'cos';
    $('btn-load').value = 'LOA';
    $('btn-space').value = '';
    $('btn-add').style.color = '#000000';
    $('btn-tangent').innerHTML = 'tan';
  }
  else {
    // Shifting to true...
    shifted = true;
    $('menu-open').innerHTML = 'RunFile';
    $('open').setAttribute('title', 'Run JS file');
    $('menu-load').innerHTML = 'Run';
    $('menu-load').setAttribute('title', 'Run stack');
    //$('menu-copy').innerHTML = 'Paste';
    //$('menu-copy').setAttribute('title', 'Paste text from stack or clipboard');
    //$('menu-xy').innerHTML = 'a&nbsp;&#60;&nbsp;&#62;&nbsp;b';
    //$('menu-xy').setAttribute('title', 'Swap last two stack entries');
    $('menu-sine').innerHTML = '<span class="btn-small-font">sin<sup>-1</sup></span>';
    $('menu-cosine').innerHTML = '<span class="btn-small-font">cos<sup>-1</sup></span>';
    $('menu-tangent').innerHTML = '<span class="btn-small-font">tan<sup>-1</sup></span>';
    $('btn-copy').value = 'PASTE';
    $('btn-xy').value = 'a < > b';
    $('btn-enter').classList.add('btn-big-font');
    $('btn-enter').value = '=';
    // $('btn-delete').innerHTML = '<---';
    // $('btn-delete').innerHTML = '◀---';
    $('btn-delete').innerHTML = '<−−';
    // $('btn-delete').innerHTML = '<span class="btn-big-font">␈</span>';
    $('btn-delete').innerHTML = '<span class="btn-backspace">⌫</span>';
    // $('btn-delete').innerHTML = '<span class="btn-big-font">⬅</span>';
    // $('btn-delete').innerHTML = '<span class="btn-big-font">⇐</span>';
    $('btn-inverse').value = 'x !';
    $('btn-log').innerHTML = 'log<sub>x</sub>y';
    $('btn-root').innerHTML = '<sup>x</sup>&nbsp;&#8730;¯y';    
    $('btn-undo').value = 'REDO';
    $('btn-ee').classList.remove('btn-small-font');
    $('btn-ee').value = 'j';
    $('btn-pi').innerHTML = '(  )';
    $('btn-modulus').style.color = '#0000A0';
    $('btn-modulus').value = '√¯';
    $('btn-sign').style.color = '#0000A0';
    $('btn-sign').innerHTML = '<sub class="symbol-big">^</sub>';
    $('btn-go').classList.remove('google');
    $('btn-go').classList.add('you-tube');
    $('btn-go').innerHTML = '&#9654';
    // if ($('menu-darkmode').textContent === 'Dark') {
    //   $('btn-shift').className = 'btn-med btn-shifted';
    // } else {
    //   $('btn-shift').className = 'btn-med btn-shift';
    // }
    $('btn-shift').className = 'btn-med btn-shifted';
    $('btn-divide').style.color = '#0000A0';
    $('btn-divide').value = '/';
    $('btn-multiply').style.color = '#0000A0';
    $('btn-multiply').innerHTML = '<sub class="symbol-big">*</sub>';
    $('btn-sine').innerHTML = '<span class="btn-small-font">sin<sup>-1</sup></span>'
    $('btn-subtract').style.color = '#0000A0';
    $('btn-cosine').innerHTML = '<span class="btn-small-font">cos<sup>-1</sup></span>';
    $('btn-load').value = 'RUN';
    $('btn-space').value = '=';
    $('btn-add').style.color = '#0000A0';
    $('btn-tangent').innerHTML = '<span class="btn-small-font">tan<sup>-1</sup></span>';    
  }
  colorUndoButton();
  
  if (stackFocus) {
    $('lst-stack').focus();
  } else {
    $('txt-input').focus();
  }
}

function btnClear() {

  backupUndo();
  monOff();
  $('txt-input').value = '';
  $('lst-stack').value = '';
  stack.length = 0;
  $('txt-input').focus();
}

function btnSave() {

  $('btn-save').style.color = '#D4D0C8';
  storeCookie('STACK', nestArrayByBrowser(stack));
  storeCookie('MATHMON', nestArrayByBrowser(theObjects));
  $('txt-input').focus();
}
function nestArrayByBrowser(srcArray) {
  var newArray = '';

  if ((/*@cc_on!@*/false || !!document.documentMode) || isChrome || isSafari) {
    for (var chro in srcArray) {
      newArray += '_';
      newArray += srcArray[chro];
    }
  } else {
    // Firefox
    for (var fire in srcArray) {
      newArray += '\t';
      newArray += srcArray[fire];
    }
  }
  return newArray;
}

function saveFile(fileName, pretty) {

  var myBlob;
  var blobContent = '';

  fileName = decodeSpecialChar(fileName.toString());

  if (fileName.trim() === '') {
    fileName = 'untitled';
  }
  if (stack.length > 0 || notes.length > 1) {
    blobContent += '===== Stack =====\n\n';
    for (var sta in stack) {
      if (pretty) {
        blobContent = prettyPrint(sta, blobContent);
      } else {
        blobContent += decodeSpecialChar(stack[sta].toString());
      }      
      blobContent += '\n';
    }
    blobContent += '\n===== Notes ======\n\n';
    for (var note in notes) {
      blobContent += decodeSpecialChar(notes[note]);
      blobContent += '\n';
    }
    myBlob = new Blob([blobContent], { type: 'text/plain;charset=utf-8' });
    fileName += '.txt';
    saveAs(myBlob, fileName);
  }
  else {
    rpnAlert('Error: There is no data to save.');
  }
}

function btnLoad() {

  var index = 0;
  backupUndo();
  try { 
    $('btn-save').style.color = '#D4D0C8';        
    index = getCookie('STACK').indexOf('=') + 1;
    if (getCookie('STACK').substr(index) !== '') {
      loadStack(getCookie('STACK').substr(index));
    }        
  }
  catch (err) { rpnAlert('load Stack error.'); }
  try {
    index = getCookie('MATHMON').indexOf('=') + 1;
    loadMathMon(getCookie('MATHMON').substr(index));
  }
  catch(err) { rpnAlert('load MathMon error'); }
  updateDisplay();
}
function loadStack(tmpStack) {

  //stack.length = 0;

  if ((/*@cc_on!@*/false || !!document.documentMode) || isChrome || isSafari) {
    // Remove underscore from begining of string
    tmpStack = tmpStack.substr(1);
  }
  tmpStack = splitArrayByBrowser(tmpStack);
    
  while (tmpStack.length > 0) {

    var tmpArray = [];
    tmpArray = tmpStack.shift();
    pushObjectToStack(tmpArray);
    
    if (shifted) evaluateExpression(decodeSpecialChar(stack[stack.length - 1].soul));
  }    
}
function splitArrayByBrowser(tmpArray) {
  if ((/*@cc_on!@*/false || !!document.documentMode) || isChrome || isSafari) {
    tmpArray = tmpArray.split('_');
  }
  else {
    // Firefox
    tmpArray = tmpArray.split('\t');
  }
  return tmpArray;
}
function pushObjectToStack(tmpArray) {

  tmpArray = tmpArray.split(',');

  var soulY = tmpArray[0].trim();
  var realPartY = tmpArray[1].trim();
  var unitsY = tmpArray[2].trim();
  var imaginaryY = tmpArray[3].trim();
  var timeStampY = tmpArray[4].trim();

  var objY = new NumberObject(soulY, realPartY, unitsY, imaginaryY, timeStampY);
  
  stack.push(objY);
}

function btnOff() {

  monOff();
  tricorderOff();
  
  // Not working at all for mobile Firefox :(
  if (navigator.userAgent.toLowerCase().indexOf('firefox') === -1 || !isMobile) {
    window.open('','_self').close();
    window.top.close();
    rpnAlert('Window not opened with window.open()');
    return false;
    //throw new Error();
  }
}

//////// Algebraic Buttons ///////////////////////////////////////////////////////////

function btnInverse() {

  if (stackFocus) insertAtCursor($('txt-input'), getSelectedText('lst-stack'));

  if (shifted) {
    btn_factorial();    
  }
  else {
    inverse();
  } 
}
function inverse() {
  backupUndo();

  var newUnits = inverseUnits();
  var isNumber = !isNaN(extractReal($('txt-input').value));
  var isImaginary = !isNaN(extractImaginary($('txt-input').value));
  
  if (isNumber || isImaginary) {
      
    if (isNumber && !isImaginary) {
      $('txt-input').value = 1 / extractReal($('txt-input').value);
    }
    if (!isNumber && isImaginary) {
      $('txt-input').value = -1 * (1 / extractImaginary($('txt-input').value));
      $('txt-input').value += 'j';
    }
    if (isNumber && isImaginary) {
      // write code here please ;)
    }
    $('txt-input').value += newUnits;
  } else {    
    if(/^1\//.test($('txt-input').value)) {
      $('txt-input').value = $('txt-input').value.slice(2);
    } else {
      $('txt-input').value = '1/' + $('txt-input').value;
    }
  }
  $('txt-input').select();
}
function btn_factorial() {
  backupUndo();

  $('txt-input').value = calculate($('txt-input').value);
  $('txt-input').value = factorial(extractReal($('txt-input').value));
  $('txt-input').select();
}
function factorial(num) {
  
  if (num <= 1) {
    return 1;
  }
  else {
    try {
      var theResult = num * factorial(num - 1);
    }
    catch (err) {
      return 'Infinity';
    }
    return theResult;
  }
}

function btnLog() {

  if (shifted) {
    baseLog();
  }
  else {
    naturalLog();
  }
}

function log(x, y) {
  if (y === undefined) y = 10;
  return Math.log(x) / Math.log(y);
}
function baseLog() {
  backupUndo();
  var objY;
  var objX;
  var y;
  var x;

  if (stack.length - 1 < 0 || stack[stack.length - 1].getSoul() === '') {
    enterInput();
    $(('txt-input')).value = '10';
  }
  objY = stack.pop();
  objX = getX();
  y = isNaN(objY.getRealPart()) && isNaN(objY.getImaginary()) ? calculate(objY.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : objY.getRealPart();
  x = isNaN(objX.getRealPart()) && isNaN(objX.getImaginary()) ? calculate(objX.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : objX.getRealPart(); 

  $('txt-input').value = log(y, x);  
  updateDisplay();
  $('txt-input').select();
}
function ln(x) {
  return Math.log(x);
}
function naturalLog() {
  backupUndo();

  var objX = getX();
  var x = isNaN(objX.getRealPart()) && isNaN(objX.getImaginary()) ? calculate(objX.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : objX.getRealPart();
  $('txt-input').value = ln(x);
  updateDisplay();
  $('txt-input').select();
}

function btnRoot() {

  if (shifted) {
    rootFunction();
  }
  else {
    exponentialFunction();
  }
}
function exponentialFunction() {
  backupUndo();

  var newUnits = '';
  if (stack.length - 1 < 0 || isNaN(stack[stack.length - 1].getRealPart().toString())) {
    enterInput();
    $(('txt-input')).value = '2';
  }
  if (extractUnits($('txt-input').value) === 'null') {
    newUnits = multiplyUnits(extractReal($('txt-input').value));
    if (newUnits === ' ') newUnits = '';
  }
  $('txt-input').value = Math.pow(parseFloat(stack.pop().getRealPart()), extractReal($('txt-input').value)) + decodeSpecialChar(newUnits);
  updateDisplay();
  $('txt-input').select();
}
function rootFunction() {
  backupUndo();

  var newUnits = '';
  if (stack.length - 1 < 0 || isNaN(stack[stack.length - 1].getRealPart().toString().trim())) {
    enterInput();
    $(('txt-input')).value = '2';
  }
  if (extractUnits($('txt-input').value) === 'null') {
    newUnits = divideUnits(1 / extractReal($('txt-input').value));
  }
  $('txt-input').value = Math.pow(parseFloat(stack.pop().getRealPart()), 1 / extractReal($('txt-input').value)) + decodeSpecialChar(newUnits);
  updateDisplay();
  $('txt-input').select();
}

function btnPi() {

  backupUndo();

  if (shifted) {
    btn_parentheses();
  }
  else {
    // insertText(Math.PI);
    insertText('π');
  }
}
function btn_parentheses() {
  
  insertAroundSelection($('txt-input'), '(' + returnSelectedText('txt-input') + ')');
  $('txt-input').focus();
}
function insertAroundSelection(txtField, txtValue) {

  var startPos = txtField.selectionStart;
  var endPos = txtField.selectionEnd;

  txtField.value = txtField.value.substring(0, startPos) + txtValue + txtField.value.substring(endPos, txtField.value.length);
  txtField.selectionEnd = endPos + 1;  
  txtField.selectionStart = txtField.selectionEnd;// Deselect text for IE
}

function btnModulus() {
  
  if (shifted) {
    backupUndo();
    insertText('√');
  }
  else {
    modulus();
  }  
}

function modulus() {
  backupUndo(); 
  var objY = stack.pop();
  var objX = getX();
  var y = isNaN(objY.getRealPart()) && isNaN(objY.getImaginary()) ? calculate(objY.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : objY.getRealPart();  
  var x = isNaN(objX.getRealPart()) && isNaN(objX.getImaginary()) ? calculate(objX.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : objX.getRealPart();  
  var result;

  if (radix === 10) {
    result = y % x;
  } else {
    result = (y % x).toString(radix);
  }  
  $('txt-input').value = result;
  updateDisplay();
  $('txt-input').select();
}

function btnSign() {
  
  if (shifted) {
    backupUndo();
    insertText('^');    
  }
  else {
    changeSign();
  }
}
function changeSign() {
  backupUndo();

  var tmpX = $('txt-input').value;  
  if (stackFocus) tmpX = getSelectedText('lst-stack');

  // If input is blank
  if (tmpX === '') {
    tmpX = '-';
  }
  else if (tmpX === '+') {
    tmpX = '-';
  }
  else if (tmpX === '-') {
    tmpX = '+';
  }
  // If exponential number
  else if (/^[-+]?[0-9]+\.?[0-9]+[eE]$/.test(tmpX)) {
    tmpX += '-';
  }
  else if (/^[-+]?[0-9]+\.?[0-9]+([eE][-])$/.test(tmpX)) {
    tmpX = tmpX.substring(0, tmpX.length - 1);
  }
  else if (/^[-+]?[0-9]+\.?[0-9]+([eE][+])$/.test(tmpX)) {
    tmpX = tmpX.substring(0, tmpX.length - 1);
    tmpX += '-';
  }
  // If imaginary number
  else if (radix !==  16 && /^[-+]?[0-9]+\.?[0-9]*[eE]?[-+]?[0-9]* +$/.test(tmpX)) {
    tmpX = tmpX.substring(0, tmpX.length);
    tmpX += '-';
  }
  else if (radix !==  16 && /^[-+]?[0-9]+\.?[0-9]*[eE]?[-+]?[0-9]* +[-]$/.test(tmpX)) {
    tmpX = tmpX.substring(0, tmpX.length - 1);
  }
  else if (radix !==  16 && /^[-+]?[0-9]+\.?[0-9]*[eE]?[-+]?[0-9]* +[+]$/.test(tmpX)) {
    tmpX = tmpX.substring(0, tmpX.length - 1);
    tmpX += '-';
  }
  else if (radix === 16 && /^[-+]?[a-e0-9]+ +$/.test(tmpX)) {
    tmpX = tmpX.substring(0, tmpX.length);
    tmpX += '-';
  }
  else if (radix === 16 && /^[-+]?[a-e0-9]+ +[-]$/.test(tmpX)) {
    tmpX = tmpX.substring(0, tmpX.length - 1);
  }
  else if (radix === 16 && /^[-+]?[a-e0-9]+ +[+]$/.test(tmpX)) {
    tmpX = tmpX.substring(0, tmpX.length - 1);
    tmpX += '-';
  }
  // If exponential imaginary number
  else if (/^[-+]?[0-9]+\.?[0-9]*[eE]?[-+]?[0-9]* +[-+]?[0-9]+\.?[0-9]+[eE]$/.test(tmpX)) {
    tmpX = tmpX.substring(0, tmpX.length);
    tmpX += '-';
  }
  else if (/^[-+]?[0-9]+\.?[0-9]*[eE]?[-+]?[0-9]* +[-+]?[0-9]+\.?[0-9]+([eE][-])$/.test(tmpX)) {
    tmpX = tmpX.substring(0, tmpX.length - 1);
  }
  else if (/^[-+]?[0-9]+\.?[0-9]*[eE]?[-+]?[0-9]* +[-+]?[0-9]+\.?[0-9]+([eE][+])$/.test(tmpX)) {
    tmpX = tmpX.substring(0, tmpX.length - 1);
    tmpX += '-';
  }
  // If unit exponent
  else if (/^[-+]?[0-9]+.*\^$/.test(tmpX)) {
    tmpX += '-'
  }
  else if (/^[-+]?[0-9]+.*\^[-]$/.test(tmpX)) {
    tmpX = tmpX.substring(0, tmpX.length - 1);
  }
  else if (/^[-+]?[0-9]+.*\^[+]$/.test(tmpX)) {
    tmpX = tmpX.substring(0, tmpX.length - 1);
    tmpX += '-';
  }
  // Change sign
  else {
    if (tmpX.charAt(0) === '+') {
      tmpX = tmpX.substring(1);
    }
    if (tmpX.charAt(0) === '-') {
      tmpX = tmpX.substring(1);
    }
    else {
      tmpX = '-' + tmpX;
    }
  }
  // $('txt-input').value = tmpX;
  stackFocus ? insertAtCursor($('txt-input'), tmpX) : $('txt-input').value = tmpX;
  $('txt-input').focus();
}

//////// Basic Maths Buttons /////////////////////////////////////////////////////////

function btnDivide() {
  
  if (shifted) {
    backupUndo();
    insertText('/');    
  }
  else {
    division();
  }  
}
function division() {
  backupUndo();
  var newUnits = getDivideUnits(1);
  var objY = stack.pop();
  var objX = getX();
  var y = isNaN(objY.getRealPart()) && isNaN(objY.getImaginary()) ? calculate(objY.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : objY.getRealPart();
  // var yI;
  var x = isNaN(objX.getRealPart()) && isNaN(objX.getImaginary()) ? calculate(objX.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : objX.getRealPart();
  // var xI;
  var result;
   
  if (radix === 10) {
    result = y / x;
  } else {
    result = (y / x).toString(radix);
  }  
  result += decodeSpecialChar(newUnits);
  $('txt-input').value = result;
  updateDisplay();
  $('txt-input').focus();
}

function btnMultiply() {
  
  if (shifted) {
    backupUndo();
    insertText('*');
  } else {
    multiplication();
  }      
}
function multiplication() {
  backupUndo();
  var newUnits = getMultiplyUnits(1);
  var objY = stack.pop();
  var objX = getX();
  var y = isNaN(objY.getRealPart()) && isNaN(objY.getImaginary()) ? calculate(objY.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : objY.getRealPart();  
  var x = isNaN(objX.getRealPart()) && isNaN(objX.getImaginary()) ? calculate(objX.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : objX.getRealPart();  
  var result;

  if (radix === 10) {
    result = y * x;
  } else {
    result = (y * x).toString(radix);
  }
  result += decodeSpecialChar(newUnits);
  $('txt-input').value = result;
  updateDisplay();
  $('txt-input').focus();
}

function btnSubtract() {
  
  if (shifted) {
    backupUndo();
    insertText('-');    
  }
  else {
    subtraction();
  }  
}
function subtraction() {
  backupUndo();
  var newUnits = getAddUnits();
  var objY = stack.pop();
  var objX = getX();
  var y = isNaN(objY.getRealPart()) && isNaN(objY.getImaginary()) ? calculate(objY.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : objY.getRealPart();  
  var x = isNaN(objX.getRealPart()) && isNaN(objX.getImaginary()) ? calculate(objX.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : objX.getRealPart();  
  var result;

  if (radix === 10) {
    result = y - x;
  } else {
    result = (y - x).toString(radix);
  }
  result += decodeSpecialChar(newUnits);
  $('txt-input').value = result;
  updateDisplay();
  $('txt-input').focus();
}

function btnAdd() {
  
  if (shifted) {
    backupUndo();
    insertText('+');    
  }
  else {
    addition();
  }  
}
function addition() {
  backupUndo();
  var newUnits = getAddUnits();
  var objY = stack.pop();
  var objX = getX();
  var y = isNaN(objY.getRealPart()) && isNaN(objY.getImaginary()) ? calculate(objY.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : objY.getRealPart();  
  var x = isNaN(objX.getRealPart()) && isNaN(objX.getImaginary()) ? calculate(objX.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : objX.getRealPart();  
  var result;
  
  if (radix === 10) {
    result = y + x;
  } else {
    result = (y + x).toString(radix);
  }
  result += decodeSpecialChar(newUnits);
  $('txt-input').value = result; 
  updateDisplay();
  $('txt-input').focus();
}

//////// Trigonometric Buttons ///////////////////////////////////////////////////////

function btnAngle() {

  if ($('btn-angle').value === 'deg') {
    $('btn-angle').value = 'rad';
    $('btn-angle').className = 'btn-small btn-radian radian-border';
    $('btn-sine').className = 'btn-small radian-border';
    $('btn-cosine').className = 'btn-small radian-border';
    $('btn-tangent').className = 'btn-small radian-border';
  }
  else {
    $('btn-angle').value = 'deg';
    $('btn-angle').className = 'btn-small btn-angle degree-border';
    $('btn-sine').className = 'btn-small degree-border';
    $('btn-cosine').className = 'btn-small degree-border';
    $('btn-tangent').className = 'btn-small degree-border';
  }
  $('txt-input').focus();
}
function btnSine() {
  backupUndo();

  if (stackFocus) insertAtCursor($('txt-input'), getSelectedText('lst-stack'));

  if (shifted) {
    $('txt-input').value = asin($('txt-input').value);
  } else {
    $('txt-input').value = sin($('txt-input').value);
  }
  updateDisplay();
  $('txt-input').select();  
}
function btnCosine() {
  backupUndo();

  if (stackFocus) insertAtCursor($('txt-input'), getSelectedText('lst-stack'));

  if (shifted) {
    $('txt-input').value = acos($('txt-input').value);
  } else {
    $('txt-input').value = cos($('txt-input').value);
  }
  updateDisplay();
  $('txt-input').select();
}
function btnTangent() {
  backupUndo();

  if (stackFocus) insertAtCursor($('txt-input'), getSelectedText('lst-stack'));

  if (shifted) {
    $('txt-input').value = atan($('txt-input').value);
  } else {
    $('txt-input').value = tan($('txt-input').value);
  }
  updateDisplay();
  $('txt-input').select();
}
function sin(x) {
  x = calculate(x);
  if ($('btn-angle').value === 'deg' && (x === 0 || x % 360 === 0)) return 0;
  if ($('btn-angle').value === 'deg' && (x === 270 || (x - 270) % 360 === 0)) return -1;
  if ($('btn-angle').value === 'deg' && (x === 180 || (x - 180) % 360 === 0)) return 0;
  if ($('btn-angle').value === 'deg' && (x === 90 || (x - 90) % 360 === 0)) return 1;

  if ($('btn-angle').value === 'deg') x = x * Math.PI / 180;
  return Math.sin(x);
}
function cos(x) {
  x = calculate(x);
  if ($('btn-angle').value === 'deg' && (x === 0 || x % 360 === 0)) return 1;
  if ($('btn-angle').value === 'deg' && (x === 270 || (x - 270) % 360 === 0)) return 0;
  if ($('btn-angle').value === 'deg' && (x === 180 || (x - 180) % 360 === 0)) return -1;
  if ($('btn-angle').value === 'deg' && (x === 90 || (x - 90) % 360 === 0)) return 0;
  if ($('btn-angle').value === 'deg') x = x * Math.PI / 180;
  return Math.cos(x);
}
function tan(x) {
  x = calculate(x);
  if ($('btn-angle').value === 'deg' && (x === 0 || x % 360 === 0)) return 0;
  if ($('btn-angle').value === 'deg' && (x === 270 || (x - 270) % 360 === 0)) return NaN;
  if ($('btn-angle').value === 'deg' && (x === 180 || (x - 180) % 360 === 0)) return NaN;
  if ($('btn-angle').value === 'deg' && (x === 90 || (x - 90) % 360 === 0)) return 1;
  if ($('btn-angle').value === 'deg') x = x * Math.PI / 180;
  return Math.tan(x);
}
function asin(x) {
  x = calculate(x);
  if ($('btn-angle').value === 'deg') x = (x * 180) / Math.PI;
  return Math.asin(x);
}
function acos(x) {
  x = calculate(x);
  if ($('btn-angle').value === 'deg') x = x * Math.PI / 180;
  return Math.acos(x);
}
function atan(x) {
  x = calculate(x);
  if ($('btn-angle').value === 'deg') x = x * Math.PI / 180;
  return Math.atan(x);
}

//////// Input Buttons ///////////////////////////////////////////////////////////////

function btnDot() {
  insertAtCursor($('txt-input'), '.');
  $('txt-input').focus();
}
function btnZero() {
  insertAtCursor($('txt-input'), '0');
  $('txt-input').focus();
}
function btnOne() {
  insertAtCursor($('txt-input'), '1');
  $('txt-input').focus();
}
function btnTwo() {
  insertAtCursor($('txt-input'), '2');
  $('txt-input').focus();
}
function btnThree() {
  insertAtCursor($('txt-input'), '3');
  $('txt-input').focus();
}
function btnSpace() {
    
  if (shifted) {
    insertAtCursor($('txt-input'), '=');
  }
  else {
    insertAtCursor($('txt-input'), ' ');
  } 
  $('txt-input').focus();
}
function btnFour() {
  insertAtCursor($('txt-input'), '4');
  $('txt-input').focus();
}
function btnFive() {
  insertAtCursor($('txt-input'), '5');
  $('txt-input').focus();
}
function btnSix() {
  insertAtCursor($('txt-input'), '6');
  $('txt-input').focus();
}
function btnSeven() {
  insertAtCursor($('txt-input'), '7');
  $('txt-input').focus();
}
function btnEight() {
  insertAtCursor($('txt-input'), '8');
  $('txt-input').focus();
}
function btnNine() {
  insertAtCursor($('txt-input'), '9');
  $('txt-input').focus();
}

//////// More Calcamatrons ///////////////////////////////////////////////////////////

function averageStack() {

}
function inArray(arrayToCheck, value) {

  for (var i = 0; i < arrayToCheck.length; i++) {
    if (arrayToCheck[i] === value) {
      return true;
    }
  }
  return false;
}
function sortStack(maxMin) {

}
// Sum an unknown number of arguments eg. getSum(1,2,3,4,5,6) = 21
function getSum() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
function totalStack() {

}
function editStack() {

  for (var sta in stack) {

    var stackEntry = stack[sta].soul;
    var searchTerm = /btn[A-Z]/;
    var tmpIndex = 1;
    // While 'btn[A-Z]' exists globally
    while(stackEntry.match(/btn[A-Z]/g)) {

      var index = stackEntry.search(searchTerm);
      // Insert '-'
      stackEntry.insertAt(index, '-');

      // toLowerCase        

      tmpIndex ++;
      if (tmpIndex > 2) break;  
    }      
  }
  // While 'btn_' exists globally
  // Remove '-'
  // toCamelCase
}

// Extract any substring that follows a number
function extractSubString(tmpArray) {

  var subString = '';
  var subIndex = -1;
  var noExponent = true;

  tmpArray = decodeSpecialChar(tmpArray);

  // If tmpArray contains a number
  if (!isNaN(parseFloat(tmpArray))) {
    // If the number is followed by more text find the index of the substring
    if (isNaN(tmpArray)) {
      var tmpSubString = tmpArray.split('');
      // Not bothering to check index 0, it is either a number or "-" or "+"
      for (var i = 1; i < tmpSubString.length ; i++) {
        // Check if character is not part of a normal decimal number
        if (subIndex < 0 && isNaN(tmpSubString[i]) && tmpSubString[i] !== '.') {
          // Check if character is part of scientific notation
          if (noExponent && (tmpSubString[i].toLowerCase() === 'e' && (!isNaN(tmpSubString[i + 1]) || ((tmpSubString[i + 1] === '-' || tmpSubString[i + 1] === '+') && !isNaN(tmpSubString[i + 2]))))) {
            noExponent = false;
            // If there is a leading minus or plus increment index
            if ((tmpSubString[i + 1] === '-' || tmpSubString[i + 1] === '+') && !isNaN(tmpSubString[i + 2])) {
              i++;
            }
          }
          else {
            // Found substring
            subIndex = i;
          }
        }
      }
      // Capture substring
      while (subIndex < tmpSubString.length) {
        subString += tmpSubString[subIndex];
        subIndex++;
      }
    }
  }
  return subString;
}

String.prototype.insertAt = function (index, input) {
  return this.slice(0,index) + input + this.slice(index);
}

function insertTime() {
  insertText(getTime());
}
function getTime() {

  var currentdate = new Date();
  var datetime = currentdate.getHours() + ':' + currentdate.getMinutes() + ':' + currentdate.getSeconds();
  return datetime;
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
  if (src.indexOf('http') !== -1 && src.indexOf('embed') !== -1) {
    widgetSrc.unshift(src);//https://www.youtube.com/embed/25QpDHCLOUc
  }
  else {
    rpnAlert('Enter web address to embed.');
  }
}

function getLocation() {

  lat = '';
  lng = '';

  if (navigator.geolocation) {
    //Geolocation.getCurrentPosition(); // Determines the device’s current location
    //Geolocation.watchPosition(); // Listens for changes in the location and invokes a callback on every movement
    //Geolocation.clearWatch(); // Removes a watchPosition event handler
    navigator.geolocation.getCurrentPosition(function (position) {
      // Get the coordinates of the current position.
      lat += position.coords.latitude;
      lng += position.coords.longitude;
      lat = lat.substr(0, 8);
      lng = lng.substr(0, 8);
    }, geolocationError);
  }
  else {
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

  if (/*@cc_on!@*/false || !!document.documentMode) {// IE
    rpnAlert('Not supported by this browser.');
  }
  else {
    getUserIP(function (ip) {
      inputText(ip);
    });
  }
}
/**
 * Get the user IP throught the webkitRTCPeerConnection
 * @param onNewIP {Function} listener function to expose the IP locally
 * @return undefined
 */
function getUserIP(onNewIP) {

  // onNewIp - your listener function for new IPs
  // compatibility for firefox and chrome
  var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
  var pc = new myPeerConnection({
      iceServers: []
    }),
    noop = function () { },
    localIPs = {},
    ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
    key;

  function iterateIP(ip) {
    if (!localIPs[ip]) onNewIP(ip);
    localIPs[ip] = true;
  }
  //create a bogus data channel
  pc.createDataChannel('');
  // create offer and set local description
  pc.createOffer().then(function (sdp) {
    sdp.sdp.split('\n').forEach(function (line) {
      if (line.indexOf('candidate') < 0) return;
      line.match(ipRegex).forEach(iterateIP);
    });
    pc.setLocalDescription(sdp, noop, noop);
  }).catch(function (e) {
    // An error occurred, so handle the failure to connect
  });
  //listen for candidate events
  pc.onicecandidate = function (ice) {
    if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
    ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
  };
}
function internetSearch(domainString, query) {
  domainString += query;
  window.open(domainString, '_blank');
  //window.location.href = domainString;
  //window.location.reload();
  //history.forward();
  //history.go(-2);
}

function help(command) {
  var commandArray = command.split(' ');
  
  if (commandArray[1] !== undefined) {

    switch (commandArray[1]) {    
    case 'about':
      inputText($('lst-stack').getAttribute('placeholder'));
      enterInput();
      inputText('https://github.com/NapesWeaver/rpnapes');
      break;
    case 'darkmode':
      inputText('darkmode: Toggle between dark and light mode.');
      break;
    case 'date':
      inputText('date: Returns the current date.');
      break;
    case 'clear':
      inputText('clear: Clears the displays. Alias: cls');
      break;
    case 'embed':
      inputText('embed [URL]: Embed URL into Tricorder iFrame. If no argument is supplied in-line, last entry on stack is used for URL. URL must be in format of https://www.youtube.com/embed/G2re3s0kQgM. ');
      break;
    case 'flightLogger':
      inputText('flightLogger: Opens Flight Logger in a new tab.');
      break;
    case 'fix':
      inputText('fix [n]: Fix number of decimals shown on the stack (0 to 17). If no argument is supplied in-line, last entry on stack is used. Turn Fixed Decimals off with -1.');
      break;
    case 'google':
      inputText('google [query]: Search Google. If no argument is supplied in-line, last entry on stack is used as query. Alias: go');
      break;
    case 'ip':
      inputText('ip: Returns local IP address.');
      break;
    case 'ipMapper':
      inputText('ipMapper: Opens IP Mapper in a new tab.');
      break;
    case 'haptic':
      inputText('haptic: For mobile devices only. Toggles haptic response for the keypad.');
      break;
    case 'keyboard':
      inputText('keyboard: For mobile devices only. Toggles the mobile keyboard.');
      break;
    case 'load':
      inputText('load: Loads the Stack to the display. Alias: ls');
      break;
    // case 'login':
    //   inputText('Log into the database.');
    //   break;
    // case 'logout':
    //   inputText('Logs out of the database.');
    //   break;
    case 'locus':
      inputText('locus: Returns geo-coordinates of device (very roughly). Tricorder must have been opend first.');
      break;
    case 'maths':
      inputText('acos() asin() atan() cos() sin() tan() ln() log() root()');
      break;
    case 'napes':
      inputText('napes: Switch to Referances interface.');
      break;
    case 'notes':
      inputText('notes: Switch to Notes interface.');
      break;
    case 'open':
      inputText('open: Open a text file into the Stack.');
      break;
    case 'openNotes':
      inputText('openNotes: Open a text file into Notes.');
      break;
    case 'off':
      inputText('off: Close browser tab. Works sporadically, tab must be opened with window.open()');
      break;
    case 'print':
      inputText('print: Open printer dialoge.');
      break;
    case 'run':
      inputText('run: Run the contents of the stack as a script.');
      break;
    case 'save':
      inputText('save: Saves the stack to a browser cookie.');
      break;
    case 'saveAs':
      inputText('saveAs [filename]: Saves the stack to a text file. If no argument is supplied in-line, last entry on stack is used as the filename.');
      break;
    case 'size':
      inputText('size: Returns the width and height of the browser window.');
      break;
    case 'sound':
      inputText('sound: Toggle sound on/off for Tricorder buttons.');
      break;
    case 'stopwatch':
      inputText('stopwatch: Starts the stopwatch. Press DEL key to reset.');
      break;
    case 'time':
      inputText('time: Returns the current time.');
      break;
    case 'toString':
      inputText('toString [filename]: Saves the Stack to a text file showing all fields for each Stack entry. If no argument is supplied in-line, last entry on stack is used as the filename.');
      break;
    case 'tricorder':
      inputText('tricorder: Opens the Tricorder interface.');
      break;
    case 'unembed':
      inputText('unembed: Removes the last embedded video from Tricorder iFrame.');
      break;
    case 'youTube':
      inputText('youTube [query]: Search YouTube. If no argument is supplied in-line, last entry on stack is used as query. Alias: you');
      break;    
    default:// case NOT a help argument
      enterInput();
      return;
    }
  } else {
    inputText('about, clear, darkmode, date, embed, fix, flightLogger, google, ip, ipMapper, haptic, keyboard, load, locus, maths, napes, notes, open, openNotes, off, print, run, save, saveAs, size, sound, stopwatch, time, toString, unembed, youTube');
  }
  enterInput();
  $('txt-input').value = '';
  updateDisplay();
}

function parseCommand() {

  var command = $('txt-input').value.trim();

  // Commands consist of words and numbers and URLs
  if (!/[,*√=Φπ\\^]+/.test(command)) {
    
    var commandArray = command.split(' ');   
    // NOT help with word and no space, NOT help with number, NOT help with word and number, NOT help with word and alphanumeric word
    if (command.match(/(?!help[A-Za-z]+)(?!help ?[0-9])(?!help [A-Za-z ]+[0-9]+)(?!help [A-Za-z]+ +[0-9A-Za-z]+)^help ?[A-Za-z]*/)) {
      stack.pop();
      help(command);
    }
    // NOT fix with number and no space, NOT fix with word, NOT fix with number and word, NOT fix with number and alphanumeric word
    if (command.match(/(?!fix[0-9]+)(?!fix ?[A-Za-z])(?!fix [0-9 ]+[A-Za-z]+)(?!fix [0-9]+ +[0-9A-Za-z]+)^fix$|(^fix (-?[1]|[0-9]|1[0-7])$)/)) {    
      
      if (commandArray[1] === undefined) {
        if (isNaN(parseInt(stack[stack.length - 2].getRealPart()))) return;
        stack.pop();
        setFixDecimal(parseInt(stack[stack.length - 1].getRealPart()));
      } else {
        setFixDecimal(parseInt(commandArray[1]));
      }
      stack.pop();
      $('txt-input').value = '';
      updateDisplay();    
    }
    // NOT saveAs with word and no space, NOT saveAs with number, NOT saveAs with word and alphanumeric word
    if (command.match(/(?!saveAs[A-Za-z]+)(?!saveAs ?[0-9])(?!saveAs [A-Za-z]+ +[0-9A-Za-z]+)^saveAs ?[A-Za-z]*/)) {    
      
      if (commandArray[1] === undefined) {
        stack.pop();
        stack[stack.length - 1] ? saveFile(stack[stack.length - 1].soul, true) : saveFile('', true);
      } else {
        saveFile(commandArray[1], true);
      }
      stack.pop();
      $('txt-input').value = '';
      updateDisplay();
    }
    // NOT toString with word and no space, NOT toString with number, NOT toString with word and alphanumeric word
    if (command.match(/(?!toString[A-Za-z]+)(?!toString ?[0-9])(?!toString [A-Za-z]+ +[0-9A-Za-z]+)^toString ?[A-Za-z]*/)) {    

      if (commandArray[1] === undefined) {
        stack.pop();
        stack[stack.length - 1] ? saveFile(stack[stack.length - 1].soul, false) : saveFile('', false);
      } else {
        saveFile(commandArray[1], false)
      }
      stack.pop();
      $('txt-input').value = '';
      updateDisplay();
    }
    // If (command === embed and end of stack === URL) or command === embed with URL
    if ((command.match(/^embed$/) && stack[stack.length - 2].getSoul().match(/^http[s]:\/\/[0-9A-Za-z]/)) || command.match(/^embed http[s]:\/\/[0-9A-Za-z]/)) {    
      
      if (commandArray[1] === undefined) {

        embed(stack[stack.length - 2].getSoul());
      } else {
        embed(commandArray[1]);
      }
      stack.pop();
      $('txt-input').value = '';
      updateDisplay();
      saveTricorder();
    }
    if (command === 'google' || command === 'go' || command.match(/^google .+/) || command.match(/^go .+/)) {

      if (commandArray[1] === undefined) {
        internetSearch('https://www.google.com/search?q=', decodeSpecialChar(stack[stack.length - 2].getSoul()));                
      } else {
        commandArray.shift();
        internetSearch('https://www.google.com/search?q=', commandArray.join(' '));
      }
      stack.pop();
      $('txt-input').value = '';
      updateDisplay();
    }
    if (command === 'youTube' || command === 'you' || command.match(/^youTube .+/) || command.match(/^you .+/)) {

      if (commandArray[1] === undefined) {
        internetSearch('https://www.youtube.com/results?search_query=', decodeSpecialChar(stack[stack.length - 2].getSoul()));               
      } else {
        commandArray.shift();
        internetSearch('https://www.youtube.com/results?search_query=', commandArray.join(' '));
      }
      stack.pop();
      $('txt-input').value = '';
      updateDisplay();
    }
  
    switch (command) {  
    case 'about':
      stack.pop();
      inputText($('lst-stack').getAttribute('placeholder'));
      enterInput();
      inputText('https://github.com/NapesWeaver/rpnapes');
      enterInput();
      updateDisplay();
      $('txt-input').value = '';
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
    // case 'editstack':
    //   editStack();
    //   break;  
    case 'fizzBuzz':
      fizzBuzz();
      break;  
    case 'flightLogger':
      stack.pop();
      $('txt-input').value = '';
      updateDisplay();
      window.open('https://orbiter-flight-logger.herokuapp.com/', '_blank').focus();
      break;
    case 'gravity':
      //resetMathmon();
      gravity();
      btnDelete();
      btnDelete();
      break;
    case 'How are ya':
    case 'How are ya doing':
    case 'How are you':
    case 'How are you doing':
    case 'How ya doing':
    case 'How you doing':
      inputText('Like a rhinestone cowboy!');
      enterInput();
      $('txt-input').value = '';
      updateDisplay();
      break;
    case 'Hallo':
    case 'Hello':
    case 'Hey':
    case 'Hi':
      inputText('Hallo there!');
      enterInput();
      $('txt-input').value = '';
      updateDisplay();
      break;
    case 'ip':
      stack.pop();
      updateDisplay();
      getIP();
      break;
    case 'ipMapper':
      stack.pop();
      updateDisplay();
      $('txt-input').value = '';
      window.open('https://napesweaver.github.io/ip-mapper/', '_blank').focus();
      break;
    case 'keyboard':
      if (isMobile) {
        stack.pop();
        updateDisplay();
        $('txt-input').value = '';      
        toggleKeyboard();
      }
      break;
    case 'haptic':
      if (isMobile) {
        stack.pop();
        updateDisplay();
        $('txt-input').value = '';      
        toggleHaptic();
      }
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
    case 'login':
      window.location.href = '/login'; 
      break;
    case 'logout':
      window.location.href = '/logout'; 
      break;
    case 'maths':
      stack.pop();
      inputText('acos() asin() atan() cos() sin() tan() ln() log() root()');
      enterInput();
      updateDisplay();
      $('txt-input').value = '';
      break;
    case 'napes':
      window.location.href = 'https://napesweaver.github.io/rpnapes/reference/index.html';
      break;
    case 'notes':
      stack.pop();
      updateDisplay();
      btnXoff();
      break;
    case 'off':
      stack.pop();
      updateDisplay();
      btnOff();
      break;
    case 'open':
      stack.pop();
      openAFile();
      break;
    case 'openNotes':
      stack.pop();
      updateDisplay();      
      btnXoff();
      $('txt-input').value = '';
      openAFile();
      break;
    case 'print':
      stack.pop();
      updateDisplay();
      $('txt-input').value = '';
      printHtml();
      break;
    case 'save':
      stack.pop();
      updateDisplay();
      $('txt-input').value = '';
      btnSave();
      break;
    case 'size':
      stack.pop();
      updateDisplay();
      inputText(getSize());
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
    case 'twig':
      stack.pop();
      updateDisplay();
      $('txt-input').value = '';         
      monOn();
      break;
    case 'twigStat':
      stack.pop();
      monStatus();
      $('txt-input').value = '';
      break;
    case 'tricorder':
      stack.pop();
      updateDisplay();
      $('txt-input').value = '';
      showTricorder();
      break;
    case 'unembed':
      stack.pop();
      updateDisplay();
      $('txt-input').value = ''; 
      widgetSrc.shift();
      saveTricorder();
      break;
    // case 'you':
    //   internetSearch('https://www.youtube.com/results?search_query=');
    //   break;
    default:
      if (twig.health > 0) {
        $('twig').src = 'images/twig/hat-tip.gif';
        //rpnAlert('pos: ' + twig.xPos + ', ' + twig.yPos);
      }
      break;
    }
  }
}

function parseEvaluation(input) {
  // If input does not contain quotes or regex (input is not part of another program) AND it contains [!^√]  
  if (!/(['"]|\/[ig]?\.|\/\))/.test(input) && /[!^√]/.test(input)) {
    input = input.replace(/ /g, '');
    // Parse nested symbols
    while (/\([-+*/!^√Φπ\w]+\^[-+*/!^√Φπ\w]+\)/.test(input)) input = parseNested(input, '^', 'Math.pow(');
    while (/\([-+*/!^√Φπ\w]+√[-+*/!^√Φπ\w]+\)/.test(input) || /\(√[-+*/!^√Φπ\w]+\)/.test(input)) input = parseNested(input, '√', 'mathsRoot(');
    while (/\([-+*/!^√Φπ\w]+!\)/.test(input)) input = parseNested(input, '!', 'factorial(');
    // Parse in-line symbols
    while (/[Φπ\w)]\^[-(Φπ\w]/.test(input)) input = parseInline(input, '^', 'Math.pow(');
    while (/√[(Φπ\w]/.test(input) || /[Φπ\w)]√[(Φπ\w]/.test(input)) input = parseInline(input, '√', 'mathsRoot(');   
    while (/[(Φπ\w]!/.test(input)) input = parseInline(input, '!', 'factorial(');
  }
  return input;
}
function parseNested(input, symbol, prefix) {

  var inputArr = input.split('');
  var index = 0;
  var startPos = 0;
  var leftP = null;
  var rightP = null;
  var maths = '';  
  // Get nested parentheses indices
  while (startPos === 0) {
    index++;
    if (inputArr[index] === symbol && inputArr[index + 1] !== '(') {
      startPos = index;
    }
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
  if (/[(-Φπ\w][\^√][-Φπ\w)]/.test(maths) || /[(-Φπ\w]![-Φπ\w)]*/.test(maths)) {
    maths = parseInline(maths, symbol, prefix);
  }
  // Re-insert parsed maths
  if (!/\(\)/.test(maths)) {// Overwrite parentheses
    inputArr.splice(leftP + 1, rightP - leftP - 1, maths);
  } else {// Keep parentheses
    inputArr.splice(leftP, rightP - leftP + 1, maths);
  }
  
  input = inputArr.join('');
  return input;
}
function parseInline(input, symbol, prefix) {  
  
  var inputArr = input.split('');
  var index = 0;
  var endPos = 0;
  var parentheses = 0;  
  // Overwrite symbol
  while (inputArr[index] !== symbol) {
    index++;
  }
  if (inputArr[index - 1] === undefined || /[-+*/(]/.test(inputArr[index - 1])) {
    // '2,' for implicit notation e.g. √16 => 2√16
    inputArr[index] = '2,';    
  } else if (inputArr[index] === '!'){// factorial !
    inputArr[index] = '';
  } else {// powers ^
    inputArr[index] = ',';    
  }
  endPos = index;
  // Insert prefix
  while (index > 0 && (!/[-+*/^√!(]/.test(inputArr[index]) || /[Φπ\w.,]/.test(inputArr[index]) || parentheses > 0)) {
    index--;    
    if (inputArr[index] === ')') parentheses++;
    if (inputArr[index] === '(') parentheses--;  
  }
  if (index === 0 || (inputArr[index] === '(' && parentheses === 0)) {
    inputArr.splice(index, 0, prefix);
  } else {
    inputArr.splice(index + 1, 0, prefix);
  }
  // Insert ')'
  parentheses = 0;
  do {
    endPos++;
    if (inputArr[endPos] === '(') parentheses++;
    if (inputArr[endPos] === ')') parentheses--;
    if (inputArr[endPos] === ',' && inputArr[endPos + 1] === '-') endPos = endPos + 2;
  }
  while (endPos < inputArr.length && (!/[-+*/^√!)]/.test(inputArr[endPos]) || /[Φπ\w.,]/.test(inputArr[endPos]) || parentheses > 0));    
  inputArr.splice(endPos, 0, ')');

  input = inputArr.join('');
  return input;
}

// User functions
function root(x, y) {
  return Math.pow(x, 1/y);
}

// Passed to parseNested() and parseInline()
function mathsRoot(y, x) {
  return Math.pow(x, 1/y);
}
// Wired to HTML
function lstStackFocus() {
  stackFocus = true;  
}
function txtInputFocus() {
  stackFocus = false;  
}
function convertBase(r) {
  fixDecimal = -1;
  sciDecimal = -1;

  var inputTxt = getX();
  var outputTxt = '';
  
  inputTxt.setRealPart(parseInt(inputTxt.realPart, 10));
  inputTxt.setImaginary(parseInt(inputTxt.imaginary, 10));

  radix = r;

  if (!isNaN(inputTxt.realPart)) outputTxt += parseInt(inputTxt.realPart).toString(radix);
  if (!isNaN(inputTxt.imaginary)) {
    if (!isNaN(inputTxt.realPart)) outputTxt += ' ';
    outputTxt += parseInt(inputTxt.imaginary).toString(radix) + 'j';
  }
  $('txt-input').value = outputTxt;
}
function menuHelp() {
  help('help');
}
function onClickSelection(textarea){
 
  // https://stackoverflow.com/questions/13650534/how-to-select-line-of-text-in-textarea
  if (typeof textarea.selectionStart ==='undefined') return false;
  var startPos = (textarea.value.substring(0,textarea.selectionStart).lastIndexOf('\n') >= 0) ? textarea.value.substring(0,textarea.selectionStart).lastIndexOf('\n') : 0;
  var endPos = (textarea.value.substring(textarea.selectionEnd,textarea.value.length).indexOf('\n') >= 0) ? textarea.selectionEnd+textarea.value.substring(textarea.selectionEnd,textarea.value.length).indexOf('\n') : textarea.value.length;
  textarea.selectionStart = startPos + 1;
  textarea.selectionEnd = endPos;
  return true;  
}

// Experimental
function loadUserStack() {
  var xhr = new XMLHttpRequest();
  // Open - type, url/file, async
  xhr.open('GET', 'https://api.github.com/users', true);
  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready
  xhr.onreadystatechange = function(){
    // HTTP status
    // 200: ok
    // 403: forbidden
    // 404: not found
    if (this.readyState === 4 && this.status === 200) {
      var users = JSON.parse(this.responseText);
			
      for (var i in users) {
        //console.log(users[i].id, users[i].login);
      }
    }
  }
  xhr.send();
}
function loadText() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '../test/The Passing Strange.txt', true);
  xhr.onload = function(){
    if (this.status === 200) {
      //console.log(this.responseText);
    }
  }
  xhr.send();
}

function fizzBuzz() {
  if (!shifted) btnShift();
  inputText('maxCount = prompt("Enter a number number", "25");');
  enterInput();
  evaluateExpression($('txt-input').value);
  inputText('getFizzBuzz = function(w){ word = w;if (w % 3 === 0) word = "fizz"; if(w % 5 === 0) word = "buzz"; if (w % 15 === 0) word = "fizzbuzz"; return word}');
  enterInput();
  evaluateExpression($('txt-input').value);
  inputText('for(w = 1; w <= maxCount; w++){ word=getFizzBuzz(w); $("txt-input").value=""; $("txt-input").value=word; enterInput(); }');
  enterInput();
  evaluateExpression($('txt-input').value);
  updateDisplay();
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
  return (t.value.substr(0, t.selectionStart).split('\n').length);
}

function getSelectedText(id) {

  var textComponent = $(id);
  var selectedText;

  // IE version
  if (document.selection !== undefined) {
    textComponent.focus();
    var sel = document.selection.createRange();
    selectedText = sel.text;
  }// Mozilla version
  else if (textComponent.selectionStart !== undefined) {
    var startPos = textComponent.selectionStart;
    var endPos = textComponent.selectionEnd;
    selectedText = textComponent.value.substring(startPos, endPos);
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
  }// Firefox
  else if (textComponent.selectionStart !== undefined) {
    var startPos = textComponent.selectionStart;
    var endPos = textComponent.selectionEnd;
    selectedText = textComponent.value.substring(startPos, endPos);
  }
  return selectedText;
}

function isTextSelected(input){
  var startPos = input.selectionStart;
  var endPos = input.selectionEnd;
  var doc = document.selection;

  if(doc && doc.createRange().text.length !== 0){
    return true;
  }else if (!doc && input.value.substring(startPos,endPos).length != 0){
    return true;
  }
  return false;
}

function insertAtCursor(txtField, txtValue) {

  var startPos = txtField.selectionStart;
  var endPos = txtField.selectionEnd;

  txtField.value = txtField.value.substring(0, startPos) + txtValue + txtField.value.substring(endPos, txtField.value.length);
  txtField.selectionEnd = startPos + txtValue.length;
  // Deselect text for IE
  txtField.selectionStart = txtField.selectionEnd;
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
    // console.error(err);
  }  
}

function rpnAlert(text) {

  backupUndo();
  $('txt-input').value = text;
  $('txt-input').select();
}
function inputText(text) {
  
  backupUndo();
  $('txt-input').value = text;
}
function insertText(text) {

  backupUndo();
  insertAtCursor($('txt-input'), text);
  $('txt-input').focus();
}

function updateDisplay() {

  $('lst-stack').value = '';

  // console.log('clientHeight', $('lst-stack').clientHeight / 20.25);
  // console.log('clientHeight / 20.25', $('lst-stack').clientHeight / 20.25);
  // console.log('rows', $('lst-stack').getAttribute('rows')); 
  
  // Buffer stack display
  for (var i = 0; i < $('lst-stack').getAttribute('rows'); i++) {
    $('lst-stack').value += ' \n';
  }
  // Print to stack display
  for (var sta in stack) {
    $('lst-stack').value += '\n';
    $('lst-stack').value = prettyPrint(sta,$('lst-stack').value);
  }
  colorSaveButton();
  $('lst-stack').scrollTop = $('lst-stack').scrollHeight;
  $('txt-input').select();
}

function printHtml() {
  print();
}

function isANumber(testString) {
  
  var isNumber = true;

  if (isNaN(testString)) isNumber = false;
  if (testString.toString().match(/Φ/)) isNumber = true;
  if (testString.toString().match(/e/)) isNumber = true;
  if (testString.toString().match(/π/)) isNumber = true;
  if (testString.toString().match(/G/)) isNumber = true;
  if (testString.toString().match(/c/)) isNumber = true;

  return isNumber;
}

function prettyPrint(i, content) {
  // If not a number and not imaginary
  if (!isANumber(stack[i].getRealPart()) && !isANumber(stack[i].getImaginary())) {
    content += decodeSpecialChar(stack[i].getSoul());
  } else {
    // If a number
    if (isANumber(stack[i].getRealPart())) {
      // Append number
      content += formatNumber(stack[i].getRealPart().toString());
      // If complex number
      if (isANumber(stack[i].getImaginary())) {
        // If imaginary number is positive
        if (parseFloat(stack[i].getImaginary()) > 0) {
          // Append positive imaginary number
          content += ' + ' + formatNumber(stack[i].getImaginary().toString()) + 'j';
        } else {
          // Append negative imaginary number
          content += ' - ' + formatNumber(stack[i].getImaginary().toString()).substring(1) + 'j';
        }
      }
    } else {
      // If imaginary number is positive
      if (parseFloat(stack[i].getImaginary()) > 0) {
        // Append positive imaginary number
        content += formatNumber(stack[i].getImaginary().toString()) + 'j';
      } else {
        // Append negative imaginary number
        content += '-' + formatNumber(stack[i].getImaginary().toString()).substring(1) + 'j';
      }
    }
    // If there are units, append units
    if (stack[i].getUnits() !== 'null') {
      content += ' ' + decodeSpecialChar(stack[i].getUnits());
    }          
  }
  return content;
}
function colorSaveButton() {

  if (document.cookie.indexOf('STACK') !== -1) {
    var index = 0;
    
    index = getCookie('STACK').indexOf('=') + 1;
    //console.log(getCookie("STACK").substr(0).trim(), nestArrayByBrowser(stack).trim());
    if (getCookie('STACK').substr(index).trim() !== nestArrayByBrowser(stack).trim()) {
      $('btn-save').style.color = '#000000';
    }
    else {
      $('btn-save').style.color = '#D4D0C8';
    }
  }  else {
    $('btn-save').style.color = '#000000';
  }  
}

function storeCookie(aName, tmpArray) {
  var d = new Date();
  // years * days * hours * min * sec * mili second
  d.setTime(d.getTime() + (1 * 365 * 24 * 60 * 60 * 1000));
  var expires = '; expires=' + d.toUTCString();
  //document.cookie = aName + '=' + tmpArray + expires + ';path=/';
  document.cookie = aName + '=' + tmpArray + expires + 'SameSite=Lax;'+';path=/';
}

function getCookie(cname) {

  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var cookieItem = ca[i];

    while (cookieItem.charAt(0) === ' ') {
      cookieItem = cookieItem.substring(1);
    }
    if (cookieItem.indexOf(name) === 0) {
      return cookieItem.substring(name.length, cookieItem.length);
    }
  }
  return '';
}

function encodeSpecialChar(tmpString) {

  // tmpString = tmpString.replace(/×/g, '*');// What the what ???

  tmpString = tmpString.replace(/%/g, '&#37');
  //tmpString = tmpString.replace(/\*/g, "&#42");
  tmpString = tmpString.replace(/,/g, '&#44');
  //tmpString = tmpString.replace(/\./g, "&#46");
  //tmpString = tmpString.replace(/\//g, "&#47");
  //tmpString = tmpString.replace(/:/g, "&#58");
  tmpString = tmpString.replace(/;/g, '&#59');
  //tmpString = tmpString.replace(/</g, "&#60");
  tmpString = tmpString.replace(/=/g, '&#61');
  //tmpString = tmpString.replace(/>/g, "&#62");
  //tmpString = tmpString.replace(/\[/g, "&#91");
  //tmpString = tmpString.replace(/]/g, "&#93");
  //tmpString = tmpString.replace(/_/g, "&#95");
  //tmpString = tmpString.replace(/{/g, "&#123");
  //tmpString = tmpString.replace(/}/g, "&#125");
  //tmpString = tmpString.replace(/~/g, "&#126");    
  tmpString = tmpString.replace(/°/g, '&deg');// degree
  //tmpString = tmpString.replace(/±/g, "&#177");
  //tmpString = tmpString.replace(/²/g, "&#178");
  //tmpString = tmpString.replace(/³/g, "&#179");
  //tmpString = tmpString.replace(/µ/g, "&#181");// micro
  //tmpString = tmpString.replace(/¹/g, "&#185");
  //tmpString = tmpString.replace(/¼/g, "&#188");// 1/2
  //tmpString = tmpString.replace(/½/g, "&#189");// 1/4
  //tmpString = tmpString.replace(/¾/g, "&#190");// 3/4
  //tmpString = tmpString.replace(/Ð/g, "&#208");// ETH
  //tmpString = tmpString.replace(/Þ/g, "&#222");// THORN
  //tmpString = tmpString.replace(/Δ/g, "&#916");// Delta
  tmpString = tmpString.replace(/Ω/g, '&#937');// Omega
  //tmpString = tmpString.replace(/θ/g, "&#952");// Theta
  //tmpString = tmpString.replace(/φ/g, "&#966");// Phi
  //tmpString = tmpString.replace(/ψ/g, "&#968");// Psi
  //tmpString = tmpString.replace(/†/g, "&#8224");// dagger
  //tmpString = tmpString.replace(/‡/g, "&#8225");// double dagger
  //tmpString = tmpString.replace(/•/g, "&#8226");// bullet
  //tmpString = tmpString.replace(/…/g, "&#8230");// ellipsis
  //tmpString = tmpString.replace(/⁰/g, "&#8304");
  //tmpString = tmpString.replace(/⁴/g, "&#8308");
  //tmpString = tmpString.replace(/⁵/g, "&#8309");
  //tmpString = tmpString.replace(/⁶/g, "&#8310");
  //tmpString = tmpString.replace(/⁷/g, "&#8311");
  //tmpString = tmpString.replace(/⁸/g, "&#8312");
  //tmpString = tmpString.replace(/⁹/g, "&#8313");
  //tmpString = tmpString.replace(/⁻/g, "&#8315");// superscript minus    
  //tmpString = tmpString.replace(/€/g, "&#8364");// Euro
  //tmpString = tmpString.replace(/∞/g, "&#8734");// Infinity
  //tmpString = tmpString.replace(/∠/g, "&#8736");// angle
  //tmpString = tmpString.replace(/∴/g, "&#8756");// therefore
  //tmpString = tmpString.replace(/≅/g, "&#8773");// approx. equal
  //tmpString = tmpString.replace(/⊕/g, "&#8853");// direct sum
  //tmpString = tmpString.replace(/⊗/g, "&#8855");// vector product
  //tmpString = tmpString.replace(/⊥/g, "&#8869");// perpendicular
  //tmpString = tmpString.replace(/◊/g, "&#9674");// lozenge
  //tmpString = tmpString.replace(/♠/g, "&#9824");
  //tmpString = tmpString.replace(/♣/g, "&#9827");
  tmpString = tmpString.replace(/♥/g, '&#9829');
  //tmpString = tmpString.replace(/♦/g, "&#9830");
  // tmpString = tmpString.replace(/π/g, '&#960');

  return tmpString;
}
function decodeSpecialChar(tmpString) {

  tmpString = tmpString.replace(/&#37/g, '%');
  //tmpString = tmpString.replace(/&#42/g, "*");
  tmpString = tmpString.replace(/&#44/g, ',');
  //tmpString = tmpString.replace(/&#46/g, ".");
  //tmpString = tmpString.replace(/&#47/g, "/");
  //tmpString = tmpString.replace(/&#58/g, ":");
  tmpString = tmpString.replace(/&#59/g, ';');
  //tmpString = tmpString.replace(/&#60/g, "<");
  tmpString = tmpString.replace(/&#61/g, '=');
  //tmpString = tmpString.replace(/&#62/g, ">");
  //tmpString = tmpString.replace(/&#91/g, "[");
  //tmpString = tmpString.replace(/&#93/g, "]");
  //tmpString = tmpString.replace(/&#95/g, "_");
  //tmpString = tmpString.replace(/&#123/g, "{");
  //tmpString = tmpString.replace(/&#125/g, "}");
  //tmpString = tmpString.replace(/&#126/g, "~");
  tmpString = tmpString.replace(/&deg/g, '°');
  //tmpString = tmpString.replace(/&#177/g, "±");
  //tmpString = tmpString.replace(/&#178/g, "²");
  //tmpString = tmpString.replace(/&#179/g, "³");
  //tmpString = tmpString.replace(/&#181/g, "µ");
  //tmpString = tmpString.replace(/&#185/g, "¹");
  //tmpString = tmpString.replace(/&#188/g, "¼");
  //tmpString = tmpString.replace(/&#189/g, "½");
  //tmpString = tmpString.replace(/&#190/g, "¾");
  //tmpString = tmpString.replace(/&#208/g, "Ð");
  //tmpString = tmpString.replace(/&#222/g, "Þ");
  //tmpString = tmpString.replace(/&#916/g, "Δ");
  tmpString = tmpString.replace(/&#937/g, 'Ω');
  //tmpString = tmpString.replace(/&#952/g, "θ");
  //tmpString = tmpString.replace(/&#966/g, "φ");
  //tmpString = tmpString.replace(/&#968/g, "ψ");
  //tmpString = tmpString.replace(/&#8224/g, "†");
  //tmpString = tmpString.replace(/&#8225/g, "‡");
  //tmpString = tmpString.replace(/&#8226/g, "•");
  //tmpString = tmpString.replace(/&#8230/g, "…");
  //tmpString = tmpString.replace(/&#8304/g, "⁰");
  //tmpString = tmpString.replace(/&#8308/g, "⁴");
  //tmpString = tmpString.replace(/&#8309/g, "⁵");
  //tmpString = tmpString.replace(/&#8310/g, "⁶");
  //tmpString = tmpString.replace(/&#8311/g, "⁷");
  //tmpString = tmpString.replace(/&#8312/g, "⁸");
  //tmpString = tmpString.replace(/&#8313/g, "⁹");
  //tmpString = tmpString.replace(/&#8315/g, "⁻");
  //tmpString = tmpString.replace(/&#8364/g, "€");
  //tmpString = tmpString.replace(/&#8734/g, "∞");
  //tmpString = tmpString.replace(/&#8736/g, "∠");
  //tmpString = tmpString.replace(/&#8756/g, "∴");
  //tmpString = tmpString.replace(/&#8773/g, "≅");
  //tmpString = tmpString.replace(/&#8853/g, "⊕");
  //tmpString = tmpString.replace(/&#8855/g, "⊗");
  //tmpString = tmpString.replace(/&#8869/g, "⊥");
  //tmpString = tmpString.replace(/&#9674/g, "◊");
  //tmpString = tmpString.replace(/&#9824/g, "♠");
  //tmpString = tmpString.replace(/&#9827/g, "♣");
  tmpString = tmpString.replace(/&#9829/g, '♥');
  //tmpString = tmpString.replace(/&#9830/g, "♦");
  // tmpString = tmpString.replace(/&#960/g, 'π');

  return tmpString;
}

// Extract Real component from 'soul' of argument
function extractReal(tmpArray) {

  var tmpReal = '';
  
  if (radix === 10) {
    // We are checking that it is not a constant or an instance of addition, subtraction, multiplication, division, power-of, root && not an IP address && not containing evaluation symbols && an not an imaginary number
    if (!/^[\dΦeπGc]+[-+*/^√]\d*[-+]?\d*/g.test(tmpArray) && !/^\d+[.]\d*[.]\d*/g.test(tmpArray) && !/^\d+[.]*\d*\s*[×,;/<>?:`~!@#$%^&*(){}[\]|\\_=]\s*\d*[.]*\d*/g.test(tmpArray) && !/^[-+]?\d+[.]?\d*[eE]?[-+]?\d*j/g.test(tmpArray)) {
      // parseFloat does the rest of the regex work for us
      tmpReal = parseFloat(tmpArray);
    }
  }
  if (radix === 2) {
    // Looking for a binary number but not an imaginary number
    if (/^[-+]?[0-1]+/g.test(tmpArray) && !/^[-+]?[0-1]+j/g.test(tmpArray)) {
      tmpReal = parseInt(tmpArray, radix);
    }
  }
  if (radix === 8) {
    // Looking for an ocatal number but not an imaginary number
    if (/^[-+]?[0-7]+/g.test(tmpArray) && !/^[-+]?[0-7]+j/g.test(tmpArray)) {
      tmpReal = parseInt(tmpArray, radix);
    }
  }
  if (radix === 16) {
    // Looking for a hexadecimal number but not an imaginary number
    if (/^[-+]?[0-9a-f]+/g.test(tmpArray) && !/^[-+]?[0-9a-f]+j/g.test(tmpArray)) {
      tmpReal = parseInt(tmpArray, radix);
    }
  }  
  if (tmpReal === '') tmpReal = NaN;
  return tmpReal;
}

// Extract Imaginary component from 'soul' of argument
function extractImaginary(tmpArray) {

  var tmpImaginary = '';  

  if (radix === 10) {
    tmpImaginary += tmpArray.match(/[-+]?[ ]*[0-9]+[.]?[0-9]*[eE]?[-+]?[0-9]*j/);
    
    // Remove any space following a '+' or '-'
    if (tmpImaginary.charAt(1) === ' ') {
      tmpImaginary = tmpImaginary.replace(/ /g, '');
    }
    // Remove 'j'
    tmpImaginary = tmpImaginary.substring(0, tmpImaginary.length - 1);
    tmpImaginary = parseFloat(tmpImaginary);
  } else {
    if (radix === 2) tmpImaginary += tmpArray.match(/[-+]?[ ]*[0-1]+j/);
    if (radix === 8) tmpImaginary += tmpArray.match(/[-+]?[ ]*[0-7]+j/);
    if (radix === 16) tmpImaginary += tmpArray.match(/[-+]?[ ]*[a-f0-9]+j/);
    if (tmpImaginary.charAt(1) === ' ') {
      tmpImaginary = tmpImaginary.replace(/ /g, '');
    }
    tmpImaginary = tmpImaginary.substring(0, tmpImaginary.length - 1);
    tmpImaginary = parseInt(tmpImaginary, radix);
  }
  if (/[-+]?[ ]*Φj/g.test(tmpArray)) {
    tmpImaginary = '';
    tmpImaginary += tmpArray.match(/[-+]?[ ]*[Φ]j/);
    // Remove 'j'
    tmpImaginary = tmpImaginary.substring(0, tmpImaginary.length - 1);
  }
  return tmpImaginary;
}

// Extract units from 'soul' of argument
function extractUnits(tmpArray) {

  var tmpUnits = '';

  if (tmpArray.indexOf('Infinity') !== -1) {
    tmpArray = tmpArray.replace(/Infinity/g, '');
  }
  if (radix !== 16) {
    tmpUnits += tmpArray.match(/(?![eE][-+]?[0-9]+)(?![j]\b)(?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*/);
  } else {
    tmpUnits += tmpArray.match(/(?![eE][-+]?[0-9]+)(?![a-f0-9]+j*\b)(?![j]\b)(?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*/);
  }
  return tmpUnits;
}

function getAddUnits() {

  var newUnits = addUnits();
  if (newUnits === ' null') {
    newUnits = '';
  }
  return newUnits;
}
function getMultiplyUnits(exponent) {

  var newUnits = multiplyUnits(exponent);    
  if (newUnits === ' ') {
    newUnits = '';
  }
  return newUnits;
}
function getDivideUnits(exponent) {

  var newUnits = divideUnits(exponent);    
  if (newUnits === ' ') {
    newUnits = '';
  }
  return newUnits;
}
function addUnits() {

  var newUnits = '';

  // If x and y have the same units or y has no units
  if (extractUnits($('txt-input').value) === decodeSpecialChar(stack[stack.length - 1].getUnits()) || (extractUnits($('txt-input').value) !== 'null' && stack[stack.length - 1].getUnits()) === '') {
    newUnits = ' ' + extractUnits($('txt-input').value);
  }
  // If y has units but x does not
  if (extractUnits($('txt-input').value) === 'null' && stack[stack.length - 1].getUnits() !== '') {
    newUnits = ' ' + stack[stack.length - 1].getUnits();
  }
  return newUnits;
}
function multiplyUnits(multiplier) {

  var unitsMultiplied = '';
  var unitsY = decodeSpecialChar(stack[stack.length - 1].getUnits());
  var unitsX = extractUnits($('txt-input').value);

  if (unitsY !== '' || unitsX !== 'null') {
    unitsMultiplied = ' ' + processUnits(unitsY, unitsX, multiplier, true);
  }
  return unitsMultiplied;
}
function divideUnits(multiplier) {

  var unitsDivided = '';
  var unitsY = decodeSpecialChar(stack[stack.length - 1].getUnits());
  var unitsX = extractUnits($('txt-input').value);

  if ((unitsY !== '' || unitsX !== 'null') && unitsY !== unitsX) {
    unitsDivided = ' ' + processUnits(unitsY, unitsX, multiplier, false);
  }
  return unitsDivided;
}
function inverseUnits() {

  var tmpArray = [];
  var invertedUnits = '';
  var unitsX = extractUnits($('txt-input').value);

  if (unitsX !== 'null') {
    unitsX = rewriteNegUnitExp(unitsX);

    if (unitsX.indexOf('/') !== -1) {
      tmpArray = unitsX.split('/');

      if (tmpArray[0].indexOf('1') === -1) {
        invertedUnits += ' ' + tmpArray[1] + '/' + tmpArray[0];
      }
      else {
        invertedUnits += ' ' + tmpArray[1];
      }
    }
    else {
      invertedUnits += ' 1/' + unitsX;
    }
  }
  return invertedUnits;
}

function splitUnits(tmpUnits) {

  var unitsA = '';
  var unitsB = '';

  if (tmpUnits.indexOf('/') !== -1) {
    tmpUnits = tmpUnits.split('/');
    unitsA = tmpUnits[0];
    unitsB = tmpUnits[1];
  }
  else {
    unitsA += tmpUnits;
  }
  unitsA = unitsA.split('*');
  unitsB = unitsB.split('*');

  return [unitsA, unitsB];
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
  }
  else {
    // Division
    numeratorY = unitAddition(numeratorY, denominatorX, multiplier, true);

    if (denominatorY !== '') {
      denominatorY = unitAddition(denominatorY, numeratorX, multiplier, true);
    }
    else {
      denominatorY = numeratorX.join('*');
    }
    numeratorX = numeratorY;
    denominatorX = denominatorY;
  }
  //unitsCombined = numeratorX + "/" + denominatorX;
  unitsCombined = unitAddition(numeratorX.split('*'), denominatorX.split('*'), 1, false);
  if (unitsCombined.indexOf('-') !== -1) {
    unitsCombined = rewriteNegUnitExp(unitsCombined);
  }
  return unitsCombined;
}

function unitAddition(unitsA, unitsB, multiplier, add) {

  var unitsCombined = '';
  var unitsDoNotMatch = true;

  for (var a in unitsA) {
    var tmpUnitsA = '';
    var expA = 1;
    unitsDoNotMatch = true;

    tmpUnitsA += unitsA[a].match(/[Ω♥a-zA-Z]+/);
    if (unitsA[a].indexOf('^') !== -1) {
      expA = unitsA[a].match(/[-]?[.0-9]+/);
    }
    // Check for matches between tmpUnitsA and unitsB
    for (var b in unitsB) {
      var tmpUnitsB = '';
      var expB = 1;

      tmpUnitsB += unitsB[b].match(/[Ω♥a-zA-Z]+/);
      if (unitsB[b].indexOf('^') !== -1) {
        expB = unitsB[b].match(/[-]?[.0-9]+/);
      }
      if (tmpUnitsA === tmpUnitsB) {
        unitsDoNotMatch = false;

        if (add) {
          expA = (parseFloat(expA) * multiplier) + parseFloat(expB);
        }
        else {
          expA = parseFloat(expA) - parseFloat(expB);
        }
        unitsCombined = appendUnits(unitsCombined, tmpUnitsA, expA);
      }
    }
    if (unitsDoNotMatch) {
      if (add) {
        expA = expA * multiplier;
      }
      unitsCombined = appendUnits(unitsCombined, tmpUnitsA, expA);
    }
  }
  // Check tmpUnitsB for units that didn't match unitsA
  for (b in unitsB) {
    tmpUnitsB = '';
    expB = 1;

    unitsDoNotMatch = true;
    tmpUnitsB += unitsB[b].match(/[Ω♥a-zA-Z]+/);
    if (unitsB[b].indexOf('^') !== -1) {
      expB = unitsB[b].match(/[-]?[.0-9]+/);
    }
    for (a in unitsA) {
      tmpUnitsA = '';

      tmpUnitsA += unitsA[a].match(/[Ω♥a-zA-Z]+/);

      if (tmpUnitsB === tmpUnitsA) {
        unitsDoNotMatch = false;
      }
    }
    if (unitsDoNotMatch) {
      if (!add) {
        expB = expB * -1;
      }
      unitsCombined = appendUnits(unitsCombined, tmpUnitsB, parseFloat(expB));
    }
  }
  return unitsCombined;
}
function appendUnits(unitString, tmpUnits, exponent) {

  if (tmpUnits !== 'null') {
    if (exponent === 1) {
      if (unitString.length > 0) {
        unitString += '*';
      }
      unitString += tmpUnits;
    }
    else if (exponent !== 0) {
      if (unitString.length > 0) {
        unitString += '*';
      }
      if (exponent.toString().indexOf('.') < 0) {
        unitString += tmpUnits + '^' + exponent;
      }
      else {
        unitString += tmpUnits + '^' + toFixed(exponent, 2);
      }
    }
  }
  return unitString;
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

    if (numerator === '' && denominator !== '') {
      numerator += '1';
    }
    newUnits += numerator;

    if (denominator !== '') {
      newUnits += '/' + denominator;
    }
  }
  else {
    newUnits = tmpUnits;
  }
  return newUnits;
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

function setFixDecimal(value) {

  if (value === '' || isNaN(value) || parseInt(value) < -1 || parseInt(value) > 17) {
    throw 'Enter an integer from -1 to 17 first.';
  }
  fixDecimal = parseInt(value);
}

function setSciDecimal(value) {

  if (value === '' || isNaN(value) || parseInt(value) < -1 || parseInt(value) > 17) {
    throw 'Enter an integer from -1 to 17 first.';
  }
  sciDecimal = parseInt(value);
}

function formatNumber(possibleNumber) {

  if (!/[ΦeπGc]/.test(possibleNumber)) {

    if (radix === 10) {
      
      if (!isNaN(possibleNumber)) {
        if (fixDecimal !== -1) {
          possibleNumber = toFixed(possibleNumber, fixDecimal);
        }
        if (sciDecimal !== -1) {
          possibleNumber = parseFloat(possibleNumber).toExponential(sciDecimal);
        }
      }
    } else {  
      if (!isNaN(possibleNumber)) {
        possibleNumber = parseInt(possibleNumber).toString(radix);
      }
    }
  }
  return possibleNumber;
}
function toFixed(value, p) {

  var precision = p || 0,
    power = Math.pow(10, precision),
    absValue = Math.abs(Math.round(value * power)),
    result = (value < 0 ? '-' : '') + String(Math.floor(absValue / power));

  if (precision > 0) {
    var fraction = String(absValue % power),
      padding = new Array(Math.max(precision - fraction.length, 0) + 1).join('0');
    result += '.' + padding + fraction;
  }
  return result;
}

//////// Notes ///////////////////////////////////////////////////////////////////////

var notes = [];
var backupNotes = [];
var restoreNotes = [];

function btnCopyNotes() {
  //document.execCommand('copy');
  navigator.clipboard.writeText(getSelectedText('lst-notes'));
}
function btnPasteNotes() {

  backupUndoNotes();

  if (/*@cc_on!@*/false || !!document.documentMode) {// IE
    insertAtCursor($('lst-notes'), window.clipboardData.getData('Text'));
  }
  else {
    //insertAtCursor($("lst-notes"), "\nNot supported by this browser.\n");
    alert('Not supported by this browser.');
  }
}
function btnUndoNotes() {
  if (backupNotes.length > 1) {
    restoreNotes.push(nestArrayByBrowser(notes));
    notes = splitArrayByBrowser(backupNotes.pop());
    updateDisplayNotes();
  }
  colorNotesUndoButton();
}
function btnRedoNotes() {

  if (restoreNotes.length > 0) {
    backupNotes.push(nestArrayByBrowser(notes));
    notes = splitArrayByBrowser(restoreNotes.pop());
    updateDisplayNotes();
  }
  colorNotesUndoButton();
}
function backupUndoNotes() {
  
  backupNotes.push(nestArrayByBrowser(notes));
  notes = $('lst-notes').value.split('\n');
  restoreNotes.length = 0;
  colorNotesUndoButton();
}
function colorNotesUndoButton() {

  if (backupNotes.length > 1) {
    $('btn-undo-notes').style.color = '#01c401';
  }
  else {
    $('btn-undo-notes').style.color = '#919191';
  }
  if (restoreNotes.length >= 1) {
    $('btn-redo-notes').style.color = '#01c401';
  }
  else {
    $('btn-redo-notes').style.color = '#919191';
  }
  colorNotesSaveButton();
}
function colorNotesSaveButton() {

  var index = 0;
  var cookieValue = '';
  var notesValue = '';

  index = getCookie('NOTES').indexOf('=') + 1;
  cookieValue = getCookie('NOTES').substr(index);
  notesValue = nestArrayByBrowser(notes);
  // This step is needed for Chrome and IE
  cookieValue = cookieValue.replace(/_/g, ' ').trim();
  notesValue = notesValue.replace(/_/g, ' ').trim();

  if (cookieValue !== notesValue) {
    $('btn-save-notes').style.color = '#000000';
  }
  else {
    $('btn-save-notes').style.color = '#919191';
  }
}
function btnSaveNotes() {

  var tmpY;

  backupUndoNotes();
  $('btn-save-notes').style.color = '#919191';
  tmpY = encodeSpecialChar($('lst-notes').value);
  notes = tmpY.split('\n');
  storeCookie('NOTES', nestArrayByBrowser(notes));
}
function btnLoadNotes() {
  var index = 0;
  var tmpNotes = [];
  
  backupUndoNotes();
  index = getCookie('NOTES').indexOf('=') + 1;
  try {
    tmpNotes = splitArrayByBrowser(getCookie('NOTES').substr(index));
    notes = notes.concat(tmpNotes);
  }
  catch (err) {
    notes.push('Load error.');
  }
  updateDisplayNotes();
  $('btn-save-notes').style.color = '#919191';
  $('lst-notes').scrollTop = $('lst-notes').scrollHeight;
}
function btnClearNotes() {

  backupUndoNotes();
  $('lst-notes').value = '';
  notes = $('lst-notes').value.split('\n');
}
function btnDeleteNotes() {

  backupUndoNotes();
  var txtField = $('lst-notes').value;
  var startPos = $('lst-notes').selectionStart;
  var endPos = $('lst-notes').selectionEnd;
  $('lst-notes').value = txtField.slice(0, startPos) + txtField.slice(endPos + 1, txtField.length);
  $('lst-notes').setSelectionRange(startPos, startPos);
  $('lst-notes').focus();
  notes = $('lst-notes').value.split('\n');
  if (isMobile) $('lst-notes').readOnly = true;
  colorNotesSaveButton();
}
function updateDisplayNotes() {

  $('lst-notes').value = '';
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

// https://tinloof.com/blog/how-to-build-a-stopwatch-with-html-css-js-react-part-2/

var startTime;
var elapsedTime = 0;
var timerInterval;

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
function stopwatchPrint(txt) {
  $('txt-input').value = txt;
}
function stopwatchStart() {  

  if (elapsedTime === 0) {
    stack.pop();
    inputText('Press DEL key to reset stopwatch');
    enterInput();
    updateDisplay();
  
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      stopwatchPrint(timeToString(elapsedTime));
    }, 10);
  }
}
function stopwatchPause() {
  clearInterval(timerInterval);
}
function stopwatchReset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  $('txt-input').value = '00:00:00';
  $('txt-input').select();
}

//////// Tricorder ///////////////////////////////////////////////////////////////////

var viewPortSrc = [];
var viewPort2Src = [];
var widgetSrc = [];

var lat;
var lng;

function loadTricorder() {
  var index = 0;
  index = getCookie('TRICORDER').indexOf('=') + 1;
  widgetSrc = splitArrayByBrowser(getCookie('TRICORDER').substr(index));
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

  if (onOff === -1) {
    return false;
  }
  return true;
}
function muteAudio(mute) {

  if (mute) {
    for (var i = 0; i < $('tricorder').getElementsByTagName('audio').length; i++) {
      $('tricorder').getElementsByTagName('audio')[i].muted = true;
    }
  }
  else {
    for (i = 0; i < $('tricorder').getElementsByTagName('audio').length; i++) {
      $('tricorder').getElementsByTagName('audio')[i].muted = false;
    }
  }
}
function playAudio(obj) {

  //if (!isMobile) {
  if (!$('menu-sound-li').classList.contains('strikethrough')) {
    obj.play();
  }
}

// Power On/Off.
function button1() {

  haptic();

  if (power()) {
    tricorderOff();
  }
  else {
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
  $('viewport').src = 'https://www.youtube.com/embed/RGDEKqU0T2k?autoplay=0';  
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
    }
    else {
      $('viewport').src = viewPortSrc[0];
    }
    playAudio($('keypress2'));
  }
}
function button3() {

  if (power()) {
    haptic();

    if (viewPort2Src.indexOf($('viewport').src) !== -1) {
      var i = viewPort2Src.indexOf($('viewport').src);

      if (i === viewPort2Src.length - 1) i = -1;
      $('viewport').src = viewPort2Src[i + 1];
    }
    else {
      $('viewport').src = viewPort2Src[0];
    }
    playAudio($('keypress1'));
    playAudio($('data-received'));
  }
}
function button4() {

  if (power()) {    
    haptic();

    if ($('widget').classList.contains('hidden')) {
      if (widgetSrc.indexOf($('widget').src) !== -1) {
        var i = widgetSrc.indexOf($('widget').src);

        if (i === widgetSrc.length - 1) i = -1;
        $('widget').src = widgetSrc[i + 1];
      }
      else {
        $('widget').src = widgetSrc[0];
      }
      $('widget').classList.remove('hidden');
      $('widget').classList.add('visible');
      playAudio($('scanner'));
      playAudio($('keypress6'));
    }
    else {
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
      var uniqueString = 'forecast';

      if ($('widget').src.indexOf(uniqueString) === -1) {
        // Forcast widget
        srcString += 'https://forecast.io/embed/#lat=' + lat + '&lon=' + lng + '&name=Current';
        $('widget').src = srcString;
      }
      else {
        // Dark Sky Map
        srcString += 'https://maps.darksky.net/@temperature,' + lat + ',' + lng + ',4?embed=true&timeControl=false&fieldControl=true&defaultField=temperature&defaultUnits=_f';
        $('widget').src = srcString;
      }
      $('widget').classList.remove('hidden');
      $('widget').classList.add('visible');
      playAudio($('keypress6'));
      playAudio($('computer-thinking'));
    }
    else {
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
      
      var srcString = '';
      // IP Mapper
      srcString += 'https://napesweaver.github.io/ip-mapper/';
      $('widget').src = srcString;
      $('widget').classList.remove('hidden');
      $('widget').classList.add('visible');
      playAudio($('keypress6'));
      playAudio($('verified'));
    }
    else {
      $('widget').src = '';
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
    // $('viewport').src = 'https://tunein.com/embed/player/s35862/';// KZUM
    $('viewport').src = 'https://tunein.com/embed/player/s249942/';// Classic Hits
    // $('viewport').src = 'https://tunein.com/embed/player/s51173/';// 1920's
  }
}
function sensor2() {

  if (power()) {

    haptic();

    $('viewport').src = '';
    playAudio($('keypress7'));
    playAudio($('scanner'));
    // $('viewport').src = 'https://tunein.com/embed/player/s35862/';// NET
    $('viewport').src = 'https://tunein.com/embed/player/s67176/';// BBC World Service
  }
}

function saveTricorder() {

  for (var i in widgetSrc) {
    widgetSrc[i] = encodeSpecialChar(widgetSrc[i]);
  }  
  storeCookie('TRICORDER', nestArrayByBrowser(widgetSrc));
}

///////////// Mathmon idName, xPos, yPos, objSize, health, speed, ammo ///////////////

var twig = new Mathmon('twig', 135, -365, 3, 100, 5, 6);
var tv = new Mathmon('tv', -45, -395, 30, 100, 7, 0);
var don = new Mathmon('don', -45, -420, 3, 100, 6, 0);
var theObjects = [3];
var wBorders = { };

function Mathmon(idName, xPos, yPos, objSize, health, speed, ammo) {

  this.idName = idName;
  this.xPos = xPos;
  this.yPos = yPos;
  this.objSize = objSize;
  this.health = health;
  this.speed = speed;
  this.ammo = ammo;
}
Mathmon.prototype.setIdName = function (name) {
  this.idName = name;
};
Mathmon.prototype.getIdName = function () {
  return this.idName;
};
Mathmon.prototype.setXPos = function (x) {
  this.xPos = x;
};
Mathmon.prototype.setYPos = function (y) {
  this.yPos = y;
};
Mathmon.prototype.movXPos = function (x) {
  this.xPos += x;
};
Mathmon.prototype.movYPos = function (y) {
  this.yPos += y;
};
Mathmon.prototype.getXPos = function () {
  return this.xPos;
};
Mathmon.prototype.getYPos = function () {
  return this.yPos;
};
Mathmon.prototype.setObjSize = function (objSize) {
  return this.objSize = objSize;
};
Mathmon.prototype.getObjSize = function () {
  return this.objSize;
};
Mathmon.prototype.setHealth = function (health) {
  return this.health = health;
};
Mathmon.prototype.movHealth = function (health) {
  return this.health += health;
};
Mathmon.prototype.getHealth = function (health) {
  return this.health = health;
};
Mathmon.prototype.setSpeed = function (velocity) {
  this.speed = velocity;
  if (this.speed <= 0) this.speed = 1;
};
Mathmon.prototype.getSpeed = function () {
  return this.speed;
};
Mathmon.prototype.setAmmo = function (ammo) {
  this.ammo = ammo;
  if (ammo < 0) ammo = 0;
};
Mathmon.prototype.getAmmo = function () {
  return this.ammo;
};
Mathmon.prototype.toString = function () {
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
  }
  else {
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
  $('twig').className = 'hidden';
  $('tv').className = 'hidden';
  $('don').className = 'hidden';
}

function resetMathmon() {

  $('txt-input').value = '';
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
    tmpStack = tmpStack.substr(1);
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
  for (var o = 0; o < theObjects.length; o++) {
    if (obj.idName === theObjects[o].idName) { index = o; }
  }    
  // Check for collision with other objects
  for (var i = 0; i < theObjects.length; i++) {
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
  //inputText("twig:" + theObjects[0].xPos.toString() + " " + theObjects[0].yPos.toString() + " tv:" + theObjects[1].xPos.toString() + " " + theObjects[1].yPos.toString() + " don:" + theObjects[2].xPos.toString() + " " + theObjects[2].yPos.toString());
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

  var browserWindow = getSize();

  if (browserWindow[0] > 330) {
    wBorders = {
      bTop: -593,
      bBottom: -361,
      bLeft: -96,
      bRight: 214
    }
  } else {
    wBorders = {
      bTop: -445,
      bBottom: -287,
      bLeft: -59,
      bRight: 177
    }
  }
}

function collideWithBorders(i) {
  // The gifs are offset from each other in the html. Each is 64px * 64px.
  var gifWidth = 64;

  if (theObjects[i].yPos < wBorders.bTop + (theObjects[i].objSize / 2)) { theObjects[i].setYPos(wBorders.bTop + theObjects[i].objSize); }// Top border
  if (theObjects[i].yPos > wBorders.bBottom - (theObjects[i].objSize / 2)) { theObjects[i].setYPos(wBorders.bBottom - theObjects[i].objSize); }// Bottom border
  if (theObjects[i].xPos < wBorders.bLeft - (i * gifWidth) + (theObjects[i].objSize / 2)) { theObjects[i].setXPos(wBorders.bLeft - (i * gifWidth) + theObjects[i].objSize); }// Left border
  if (theObjects[i].xPos > wBorders.bRight - (i * gifWidth) - (theObjects[i].objSize / 2)) { theObjects[i].setXPos(wBorders.bRight - (i * gifWidth) - theObjects[i].objSize); }// Right border
}
function transXBorders(i) {
  var gifWidth = 64;
  
  if (theObjects[i].yPos < wBorders.bTop + (theObjects[i].objSize / 2)) { theObjects[i].setYPos(wBorders.bBottom - theObjects[i].objSize); }// Top border
  if (theObjects[i].yPos > wBorders.bBottom - (theObjects[i].objSize / 2)) { theObjects[i].setYPos(wBorders.bTop + theObjects[i].objSize); }// Bottom border
  if (theObjects[i].xPos < wBorders.bLeft - (i * gifWidth) + (theObjects[i].objSize / 2)) { theObjects[i].setXPos(wBorders.bRight - (i * gifWidth) - theObjects[i].objSize); }// Left border
  if (theObjects[i].xPos > wBorders.bRight - (i * gifWidth) - (theObjects[i].objSize / 2)) { theObjects[i].setXPos(wBorders.bLeft - (i * gifWidth) + theObjects[i].objSize); }// Right border
}

function brownianMovement(obj) {

  var x = Math.floor(Math.random() * 2);
  var y = Math.floor(Math.random() * 2);

  if (Math.floor(Math.random() * 2) === 0) {
    x = x * -1;
  }
  if (Math.floor(Math.random() * 2) === 0) {
    y = y * -1;
  }
  moveObj(obj, obj.speed, x, y);
}

function gravity() {

  if (worldIsRunning()) {
    for (var i = 0; i < theObjects.length; i++)
    {
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
  }
  else {
    $('tv').src = 'images/twig/tv-off.gif';
  }
}
function staticTV() {

  if (worldIsRunning()) {
    $('tv').src = 'images/twig/tv-static.gif';
    setTimeout(pongTV, 900);
    brownianMovement(tv);
  }
  else {
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
    setTimeout(donMove, 600);
    brownianMovement(don);
  }
  else {
    $('don').src = 'images/twig/don-jon.gif';
  }  
}

//////// Event Firing and Listening //////////////////////////////////////////////////

// Fire Click Event
function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}// eventFire(document.getElementById('test'), 'click');

document.addEventListener('click', function (evt) {
  if (evt.detail === 2 && evt.target === $('lst-stack')) {
    getStackEntry();
  }
});
document.addEventListener('keypress', function (event) {
  var key = event.keyCode || event.charCode;
  if ($('rpnapes').className !== 'hidden') {
    switch (key) {
    case 13:// RPNapes ENTER
      enterButton();
      break;
    }
  }
});
document.addEventListener('keydown', function (event) {
  var key = event.keyCode || event.charCode;
  if ($('rpnapes').className !== 'hidden') {
    // Mathmon keys
    if ($('twig').className !== 'hidden') {
      switch (key) {      
      case 37:// LEFT ARROW
        if (!event) { event = window.event; }
        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
        if (twig.health > 0) {
          $('twig').src = 'images/twig/walk-left.gif';
          moveObj(twig, twig.speed, -1, 0);
        }
        break;
      case 38:// UP ARROW
        if (!event) { event = window.event; }
        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
        if (twig.health > 0) {
          $('twig').src = 'images/twig/walk-left.gif';
          moveObj(twig, twig.speed, 0, -1);
        }
        break;
      case 39:// RIGHT ARROW
        if (!event) { event = window.event; }
        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
        if (twig.health > 0) {
          $('twig').src = 'images/twig/walk-right.gif';
          moveObj(twig, twig.speed, 1, 0);
        }
        break;
      case 40:// DOWN ARROW
        if (!event) { event = window.event; }
        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
        if (twig.health > 0) {
          $('twig').src = 'images/twig/walk-right.gif';
          moveObj(twig, twig.speed, 0, 1);
        }
        break;
      }
    }
    // RPNapes keys
    switch (key) {
    case 8:// BACKSPACE
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btnBackspace();
      break;
    case 16:// SHIFT
      if (keyHeld) btnShift();
      break;
    case 18:// ALT
      keyHeld = true;
      break;
    case 46:// DELETE
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btnDelete();
      break;
    case 106:// NUMPAD *
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btnMultiply();
      break;
    case 107:// NUMPAD +
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btnAdd();
      break;
    case 109:// NUMPAD -
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btnSubtract();
      break;
    case 111:// NUMPAD /
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btnDivide();
      break;
    }
  }
});
document.addEventListener('keyup', function (event) {
  var key = event.keyCode || event.charCode;
  if ($('rpnapes').className !== 'hidden') {
    switch (key) {
    case 18:// ALT
      keyHeld = false;
      break;
    case 27:// ESC
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btnXy();
      break;
    case 37:// LEFT ARROW (Falls through)
    case 38:// UP ARROW (Falls through)
    case 39:// RIGHT ARROW (Falls through)
    case 40:// DOWN ARROW
      if (twig.health > 0) {
        $('twig').src = 'images/twig/hat-on.gif';
      }
    }
  }
  else {
    // Notes keys
    $('btn-save-notes').style.color = '#000000';
    switch (key) {
    case 27:// ESC
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      rpnapesOn();
      break;
    case 8:// NOTES BACKSPACE (Falls through)
    case 13:// NOTES ENTER (Falls through)
    case 46:// NOTES DELETE
      backupUndoNotes();
      notes = $('lst-notes').value.split('\n');
      break;
    }
  }
});

//////// window.onload ///////////////////////////////////////////////////////////////

window.onload = function () {

  // Internet Explorer needs this for "btn-off" ~ window.close()   
  window.open('', '_self');

  // MathMon
  theObjects[0] = twig;
  theObjects[1] = tv;
  theObjects[2] = don;

  $('twig').onclick = monStatus;
  $('tv').onclick = monStatus;
  $('don').onclick = monStatus;

  // Menu File 
  $('menu-load').onclick = btnLoad;
  $('open-file').addEventListener('change', function () {
    try{
      var fr = new FileReader();

      fr.onload = function () {

        if ($('rpnapes').classList.contains('hidden')) {
          backupUndoNotes();
          $('lst-notes').value += this.result;
          backupUndoNotes();
        }
        else {
          var tmpStack = [];
          backupUndo();
          tmpStack = this.result.split('\n');
          for (var i in tmpStack) {
            $('txt-input').value = tmpStack[i];
            if (shifted) {
              evaluateExpression($('txt-input').value);
              enterInput();
            }
            else {
              enterInput();              
            }
          }
          updateDisplay();
        }
      };
      fr.readAsText(this.files[0]);
    }
    catch (err) {
      rpnAlert(err.toString());
    }
  });
  $('menu-save').onclick = btnSave;
  $('menu-print').onclick = printHtml;
  //$('menu-print').onclick = print;
  $('menu-off').onclick = function() {
    monOff();
    tricorderOff();
    window.open('','_self').close();
    window.top.close();
    rpnAlert('Window not opened with window.open()');
    //throw new Error();
  };

  // Menu Edit
  $('menu-enter').onclick = btnEnter;
  $('menu-evaluate').onclick = btnEval;
  $('menu-copy').onclick = copy;
  $('menu-delete').onclick = btnDelete;
  $('menu-backspace').onclick = btnBackspace;
  $('menu-clear').onclick = btnClear;
  $('menu-undo').onclick = undoFunction;
  $('menu-redo').onclick = redoFunction;
  $('menu-ab').onclick = abFunction;
  $('menu-xy').onclick = xyFunction;

  // Menu Maths
  $('menu-root').onclick = rootFunction;
  $('menuExponential').onclick = exponentialFunction;
  $('menu-log').onclick = baseLog;
  $('menu-ln').onclick = naturalLog;
  $('menu-inverse').onclick = inverse;
  $('menu-factorial').onclick = btn_factorial;
  $('menu-modulus').onclick = modulus;
  $('menu-sign').onclick = changeSign;
  $('menu-divide').onclick = division;
  $('menu-multiply').onclick = multiplication;
  $('menu-subtract').onclick = subtraction;
  $('menu-add').onclick = addition;
  $('menu-sine').onclick = btnSine;
  $('menu-cosine').onclick = btnCosine;
  $('menu-tangent').onclick = btnTangent;

  // Menu View
  $('menu-angle').onclick = btnAngle;
  $('menu-haptic').onclick = toggleHaptic;
  $('menu-darkmode').onclick = toggleDarkMode;
  $('menu-keyboard').onclick = toggleKeyboard;
  $('menu-sound').onclick = toggleSound;
  $('menu-notes').onclick = btnXoff;
  $('menu-shift').onclick = btnShift;

  // Menu Constants
  $('menu-phi').onclick = (function() {
    return function() { 
      insertText('Φ');
    }
  })();
  $('menu-eulers').onclick = (function() {
    return function() { 
      // insertText(Math.exp(1));
      insertText('e');      
    }
  })();
  $('menu-gravitational-constant').onclick = (function() {
    return function() { 
      insertText('G');
    }
  })();
  $('menu-light-speed').onclick = (function() {
    return function() { 
      insertText('c');
    }
  })(); 
  $('menu-pi').onclick = (function() {
    return function() { 
      insertText('π');
    }
  })();

  // Menu Date
  $('menu-date').onclick = insertDate;

  // Menu Time
  $('menu-time').onclick = insertTime;

  // Menu Equations
  $('menu-ohms-law').onclick = (function() {
    return function() {
      insertText('E=I*R');
    }
  })();
  $('menu-circumference').onclick = (function() {
    return function() {
      insertText('2*π*r');
    }
  })();
  $('menu-circle-area').onclick = (function() {
    return function() {
      insertText('π*r^2');
    }
  })();
  $('menu-sphere-area').onclick = (function() {
    return function() {
      insertText('4*π*r^2');
    }
  })();
  $('menu-sphere-volume').onclick = (function() {
    return function() {
      insertText('4/3*π*r^3');
    }
  })();
  $('menu-cone-area').onclick = (function() {
    return function() {
      insertText('π*r^2 + π*r*l');
    }
  })();
  $('menu-cone-volume').onclick = (function() {
    return function() {
      insertText('h/3*π*r^2');
    }
  })();

  // Menu Programs
  $('menu-fizz-buzz').onclick = fizzBuzz;
  $('menu-stopwatch').onclick = stopwatchStart;
  $('menu-tricorder').onclick = showTricorder;
  $('menu-twig').onclick = monOn;
  
  // Menu Symbols
  $('menu-parentheses').onclick = (function() {
    return function() { 
      btn_parentheses();
    }
  })();
  $('menu-equals').onclick = (function() {
    return function() { 
      insertText('=');
    }
  })();
  $('menu-radical').onclick = (function() {
    return function() { 
      insertText('√');
    }
  })();
  $('menu-bang').onclick = (function() {
    return function() { 
      insertText('!');
    }
  })();
  $('menu-carat').onclick = (function() {
    return function() { 
      insertText('^');
    }
  })();
  $('menu-solidus').onclick = (function() {
    return function() { 
      insertText('/');
    }
  })();
  $('menu-asterisk').onclick = (function() {
    return function() { 
      insertText('*');
    }
  })();
  $('menu-minus').onclick = (function() {
    return function() { 
      insertText('-');
    }
  })();
  $('menu-plus').onclick = (function() {
    return function() { 
      insertText('+');
    }
  })();
  $('menu-ohm').onclick = (function() {
    return function() { 
      insertText('Ω');
    }
  })();
  $('menu-heart').onclick = (function() {
    return function() { 
      insertText('♥');
    }
  })();

  $('menu-sound-li').classList.add('strikethrough');
  
  $('menu-help').onclick = menuHelp;

  if (isMobile) {
    $('menu-off').style = 'display:none';
    $('menu-twig').style = 'display:none';
  } else {
    $('menu-keyboard').style = 'display:none';
    $('menu-haptic').style = 'display:none';
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
  resizeTextarea($('lst-stack'));
  
  // Text Input
  $('txt-input').onclick = mobileKeyboardAllow;
  $('txt-input').readOnly = true;

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
  $('btn-angle').onclick = btnAngle;
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

  $('txt-input').addEventListener('paste', function() {
    backupUndo();
  });

  // Tricorder
  preloadImages();
  viewPortSrc.push('https://www.youtube.com/embed/jkuJG1_2MnU?autoplay=1');
  viewPortSrc.push('https://www.youtube.com/embed/1LEay4dm5Ag?autoplay=1');
  viewPortSrc.push('https://www.youtube.com/embed/ZVCXw1xJFJ4?autoplay=1');
  viewPortSrc.push('https://www.youtube.com/embed/Zx-up8quvnI?autoplay=1');
  viewPortSrc.push('https://www.youtube.com/embed/sKtieXEBLcE?autoplay=1');
  viewPortSrc.push('https://www.youtube.com/embed/VVpRv6rC8RY?autoplay=1');

  viewPort2Src.push('https://www.youtube.com/embed/qb43-hn_-_c?autoplay=1');
  viewPort2Src.push('https://www.youtube.com/embed/XziuEdpVUe0?autoplay=1');
  viewPort2Src.push('https://www.youtube.com/embed/v_5fA85qGcU?autoplay=1');

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
  // $('btn-paste-notes').onclick = btnPasteNotes;
  $('btn-undo-notes').onclick = btnUndoNotes;
  $('btn-redo-notes').onclick = btnRedoNotes;
  $('btn-clear-notes').onclick = btnClearNotes;
  $('btn-delete-notes').onclick = btnDeleteNotes;
  $('lst-notes').onclick = function() {
    $('lst-notes').readOnly = false;
  }
  $('lst-notes').addEventListener('paste', function() {
    setTimeout(function() {
      if (notes.length > 0) backupUndoNotes(); 
    }, 100);
  });

  // Attach hapticResponse to Menu items and buttons
  var elements = document.getElementsByClassName('haptic-response');
  
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', hapticResponse, false);
  }

  // Check for cookies
  if (document.cookie.indexOf('NOTES') !== -1) {
    $('lst-notes').value = '';
    btnLoadNotes();
  }
  else {
    backupUndoNotes();
  }
  if (document.cookie.indexOf('TRICORDER') !== -1) {
    loadTricorder();        
  }
  else {
    widgetSrc.push('https://www.youtube.com/embed/jlJgi3SxDaI?autoplay=1');
    widgetSrc.push('https://www.youtube.com/embed/Fn44paKMX4E?autoplay=1');
    widgetSrc.push('https://www.youtube.com/embed/yXQz-VU5iVc?autoplay=1');
  }
  if (document.cookie.indexOf('STACK') !== -1) {
    $('lst-stack').value = '';
    $('txt-input').value = '';
    btnLoad();
  }
  else
  {
    backupUndo();
    $('btn-save').style.color = '#D4D0C8';
  }
  $('txt-input').readOnly = false;
};
