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
  })(Object, Math.max, Math.min)

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);

if (isMobile) navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

const Φ = 1.618033988749895;
const e = 2.718281828459045;
const π = 3.141592653589793;
const G = 6.674E-11;
const c = 299792458;
const tStamp = '11:45:40';
var testing = false;

var stack = [];
var backUps = [];
var restores = [];
var stackSize = 14;
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
  
  if (isNaN(this.realPart) && isNaN(this.imaginary)) {
    this.units = 'null';
  }
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

function toggleHaptic() {
  if ($('menuHapticLi').classList.contains('strikethrough')) {
    $('menuHapticLi').classList.remove('strikethrough');
  } else {
    $('menuHapticLi').className += ' strikethrough';
  }
  $('txtInput').focus();
}
function hapticResponse() {
  if (isMobile) {
    haptic();
    $('txtInput').readOnly = true;
  }
}
function haptic() {
  if (!$('menuHapticLi').classList.contains('strikethrough')) navigator.vibrate([1]);
}

function toggleKeyboard() {
  if ($('menuKeyboardLi').classList.contains('strikethrough')) {
    $('menuKeyboardLi').classList.remove('strikethrough');
  } else {
    $('menuKeyboardLi').className += ' strikethrough';
  }
  $('txtInput').focus();
}
function mobileKeyboardAllow() {

  if(!$('menuKeyboardLi').classList.contains('strikethrough')) {
    if ($('txtInput').readOnly === true) {
      moveCursorToEnd($('txtInput'));
      $('txtInput').readOnly = false;
    }
  }
}

//////// Buttons /////////////////////////////////////////////////////////////////////

function btn_xoff() {

  if ($('rpnapes').className === 'hidden') {
    // Notes is visible - turn on RPNapes
    rpnapesOn();
  }
  else if ($('notes').className === 'hidden' && $('tricorder').className === 'hidden') {
    // RPNapes is visible - turn on Notes
    notesOn();
  }
}
function rpnapesOn() {

  $('notes').className = 'hidden';
  $('widget').className = 'hidden';
  $('viewport').className = 'hidden';
  $('tricorder').className = 'hidden';
  if (power()) {
    playAudio($('keypress3'));
  }
  $('rpnapes').className = 'visible';
  $('txtInput').focus();
}
function notesOn() {

  $('rpnapes').className = 'hidden';
  monOff();
  $('widget').className = 'hidden';
  $('viewport').className = 'hidden';
  $('tricorder').className = 'hidden';
  if (power()) {
    playAudio($('keypress3'));
  }
  $('notes').className = 'visible';
}
function showTricorder() {
  
  $('rpnapes').className = 'hidden';
  monOff();
  $('notes').className = 'hidden';
  if (power()) {
    playAudio($('tricorder_alert'));
  }
  $('tricorder').className = 'visible';
  $('viewport').className = 'visible';
}

function btn_copy() {

  if (shifted) {
    btn_paste();
  } else {
    copy();
  }  
}
function copy() {
  document.execCommand('copy');
}
function btn_paste() {

  backupUndo();

  if (stackFocus) {
    insertAtCursor($('txtInput'), getSelectedText('lstStack'));
  }
  else {
    if (/*@cc_on!@*/false || !!document.documentMode) {
      // IE
      insertAtCursor($('txtInput'), window.clipboardData.getData('Text'));
    }
    else {
      rpnAlert('This functionality prohibited by your browser.');
    }
  }
  $('txtInput').select();
}

function btn_xy() {

  if (shifted) {
    btn_ab();
  }
  else {
    xyFunction();
  }
}
function btn_ab() {

  if (stack.length > 1) {
    backupUndo();
    var tmp = stack.pop();
    var tmp2 = stack.pop();
    stack.push(tmp);
    stack.push(tmp2);
    updateDisplay();
  }
  $('txtInput').focus();
}
function xyFunction() {

  if (stack.length > 0) {
    backupUndo();
    var tmpX = stack.pop();
    enterInput();
    $('txtInput').value = '';

    if (isNaN(parseFloat(tmpX.getRealPart()))) {
      $('txtInput').value += decodeSpecialChar(tmpX.getSoul());
    }
    else {
      $('txtInput').value += formatNumber(tmpX.getRealPart().toString());

      if (!isNaN(parseFloat(tmpX.getImaginary()))) {
        if (parseFloat(tmpX.getImaginary()) > 0) {
          $('txtInput').value += ' + ' + formatNumber(tmpX.getImaginary().toString()) + 'j';
        }
        else {
          $('txtInput').value += ' - ' + formatNumber(tmpX.getImaginary().toString().substring(1)) + 'j';
        }
      }
      if (tmpX.getUnits() !== 'null') {
        $('txtInput').value += ' ' + decodeSpecialChar(tmpX.getUnits());
      }
    }
    updateDisplay();
  }
  $('txtInput').focus();
}

function commandRun() {
  if (!shifted) btn_shift();
  btn_load();
}

function enter_button() {

  if (shifted) {
    btn_eval();
  } else {
    btn_enter();
  }
}

function btn_enter() {
  backupUndo();
  if ($('txtInput').value.trim().match(/^run$/)) {
    commandRun();
    return;
  }
  if (stackFocus) {
    insertAtCursor($('txtInput'), getSelectedText('lstStack'));
  }
  else {
    enterInput();
  }
  updateDisplay();
  parseCommand();
}

function btn_eval() {
  backupUndo();
  if ($('txtInput').value.trim().match(/^run$/)) {
    commandRun();
    return;

  }
  if (stackFocus) insertAtCursor($('txtInput'), getSelectedText('lstStack'));
  evaluateInput($('txtInput').value);
  $('txtInput').select();    
}

function getX() {

  var soulX = $('txtInput').value.trim();
  var realPartX = extractReal(soulX);
  var imaginaryX = extractImaginary(soulX);
  var unitsX = extractUnits(soulX);
  var timeStampX = Date.now();

  soulX = encodeSpecialChar(soulX);
  //unitsX = rewriteNegUnitExp(unitsX);
  unitsX = encodeSpecialChar(unitsX);
  
  return new NumberObject(soulX, realPartX, imaginaryX, unitsX, timeStampX);
}
function enterInput() {

  var objX = getX();  

  stack.push(objX);
  $('txtInput').value = $('txtInput').value.trim();  
}
function evaluateInput(input) {  
  
  try{  
    $('txtInput').value = eval(parseEvaluation(input));
    // Data Testing
    if (testing) {
      try {
        if (stack.length > 0 && stack.length % 2 === 0) {
          console.log(decodeSpecialChar(stack[stack.length - 2].soul), stack[stack.length - 1].soul === eval(parseEvaluation((decodeSpecialChar(stack[stack.length - 2].soul)))).toString());
        }
      } catch(e) {
        console.log(stack[stack.length - 2].soul, e.toString());
      }
    }
  } catch (err) {
    rpnAlert(err.toString());
  }
}

function delete_button() {

  if (shifted) {
    btn_backspace();
  }
  else {
    btn_delete();
  }
}
function btn_delete() {

  backupUndo();
  if (stackFocus) {
    deleteFromStack();
    updateDisplay();
  } else if ($('txtInput').value === '') {
    stack.pop();
    updateDisplay();
  }
  else {
    deleteText($('txtInput'), true);
  }
}
function deleteFromStack() {

  var stackIndex = getIndex('lstStack') - stackSize;
  stack.splice(stackIndex, 1);
}
function btn_backspace() {

  backupUndo();
  if (stackFocus) {
    deleteFromStack();
    updateDisplay();
  } else if ($('txtInput').value === '') {
    stack.pop();
    updateDisplay();
  } else {
    deleteText($('txtInput'), false);
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
  $('txtInput').focus();
}

function btn_undo() {

  if (shifted) {
    redoFunction();
  }
  else {
    undoFunction();
  }
}
function undoFunction() {
  if (backUps.length > 3) {    
    restores.push(nestArray(stack));
    restores.push($('txtInput').value);

    $('txtInput').value = backUps.pop();
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
    backUps.push(nestArray(stack));
    backUps.push($('txtInput').value);

    $('txtInput').value = restores.pop();
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
  backUps.push(nestArray(stack));
  backUps.push($('txtInput').value.trim());
  restores.length = 0;
  colorUndoButton();
}
function colorUndoButton() {

  if (($('btnUndo').value === 'UND' && backUps.length > 3) || ($('btnUndo').value === 'REDO' && restores.length > 0)) {
    $('btnUndo').style.color = '#25FC5A';
  }
  else {
    $('btnUndo').style.color = '#D4D0C8';
  }        
  colorUndoRedoMenu();
}
function colorUndoRedoMenu() {

  if (backUps.length > 3) {
    //$('menuUndo').style.color = '#25FC5A';
    $('menuUndo').style.color = '#088B00';
  } else {
    $('menuUndo').style.color = '#D4D0C8';
  }
  if (restores.length > 0) {
    //$('menuRedo').style.color = '#25FC5A';
    $('menuRedo').style.color = '#088B00';
  } else {
    $('menuRedo').style.color = '#D4D0C8';
  }
}
function btn_EE() {

  if (shifted) {

    if (radix !== 16) {
      if (isANumber($('txtInput').value) && $('txtInput').value.indexOf('j') === -1) {
        insertAtCursor($('txtInput'), 'j');
      }
    } else {
      if ((/[-+]?[a-e0-9]/g.test($('txtInput').value) || /[-+]?[ΦeπGc]/g.test($('txtInput').value)) && $('txtInput').value.indexOf('j') === -1) {
        insertAtCursor($('txtInput'), 'j');
      }
    }
  }
  else {
    if (/(?!^[-+]?\d+[.]?\d*[eE])[-+]?\d+[.]?\d*[eE]?[-+]?\d* *[-+]? *\d*[.]?\d*/g.test($('txtInput').value) && !/.*[eE].*[eE].*/g.test($('txtInput').value)) {
    //if ((/(?!^[-+]?\d+[.]?\d*[eE])[-+]?\d+[.]?\d*[eE]?[-+]?\d* *[-+]? *\d*[.]?\d*/g.test($('txtInput').value) || /[-+]?[ΦeπGc]/g.test($('txtInput').value)) && !/.*[eE].*[eE].*/g.test($('txtInput').value)) {
      insertAtCursor($('txtInput'), 'e');
    }
  }
  $('txtInput').focus();
}

function btn_go() {
  backupUndo();

  if (shifted) {   
    internetSearch('https://www.youtube.com/results?search_query=', $('txtInput').value.trim());    
  }
  else {
    internetSearch('https://www.google.com/search?q=', $('txtInput').value.trim());
  }  
  $('txtInput').select();
}

function btn_shift() {

  if (shifted) {
    // Shifting to false...
    shifted = false;
    $('fileOpen').innerHTML = 'Open';
    $('open').setAttribute('title', 'Open a file');
    $('menuLoad').innerHTML = 'Load';
    $('menuLoad').setAttribute('title', 'Load stack');
    //$('menuCopy').innerHTML = 'Copy';
    //$('menuCopy').setAttribute('title', 'Copy text');
    //$('menuXy').innerHTML = 'x&nbsp;&#60;&nbsp;&#62;&nbsp;y';
    //$('menuXy').setAttribute('title', 'Swap input and last stack entry');
    $('menuSine').innerHTML = 'sin';
    $('menuCosine').innerHTML = 'cos';
    $('menuTangent').innerHTML = 'tan'
    $('btnCopy').value = 'COPY';
    $('btnXy').value = 'x < > y';
    $('btnEnter').className = 'btn-big';
    $('btnEnter').value = 'ENTER';
    $('btnDelete').innerHTML = 'DEL';
    $('btnInverse').value = '1 / x';
    $('btnLog').innerHTML = 'log<sub>e</sub>';
    $('btnRoot').innerHTML = 'y&nbsp;<sup>x</sup>';
    $('btnUndo').value = 'UND';
    $('btnEE').className = 'btn-small btn-small-font btn-char';
    $('btnEE').value = 'EE';
    $('btnPI').innerHTML = '&#120587;';
    $('btnModulus').style.color = '#000000';
    $('btnModulus').value = '%';
    $('btnSign').style.color = '#000000';
    $('btnSign').innerHTML = '±';
    $('btnGo').className = 'btn-small google';
    $('btnGo').innerHTML = '<span class="color-blue">G</span><span class="color-red">o</span>';
    $('btnShift').className = 'btn-med btn-shift';
    $('btnDivide').style.color = '#000000';
    $('btnDivide').value = '÷';
    $('btnMultiply').style.color = '#000000';
    $('btnMultiply').innerHTML = 'x';
    $('btnSine').innerHTML = 'sin';
    $('btnSubtract').style.color = '#000000';
    $('btnCosine').innerHTML = 'cos';
    $('btnLoad').value = 'LOA';
    $('btnSpace').value = '';
    $('btnAdd').style.color = '#000000';
    $('btnTangent').innerHTML = 'tan';
  }
  else {
    // Shifting to true...
    shifted = true;
    $('fileOpen').innerHTML = 'RunFile';
    $('open').setAttribute('title', 'Run JS file');
    $('menuLoad').innerHTML = 'Run';
    $('menuLoad').setAttribute('title', 'Run stack');
    //$('menuCopy').innerHTML = 'Paste';
    //$('menuCopy').setAttribute('title', 'Paste text from stack or clipboard');
    //$('menuXy').innerHTML = 'a&nbsp;&#60;&nbsp;&#62;&nbsp;b';
    //$('menuXy').setAttribute('title', 'Swap last two stack entries');
    $('menuSine').innerHTML = '<span class="btn-small-font">sin<sup>-1</sup></span>';
    $('menuCosine').innerHTML = '<span class="btn-small-font">cos<sup>-1</sup></span>';
    $('menuTangent').innerHTML = '<span class="btn-small-font">tan<sup>-1</sup></span>';
    $('btnCopy').value = 'PASTE';
    $('btnXy').value = 'a < > b';
    $('btnEnter').className = 'btn-big btn-big-font';
    $('btnEnter').value = '=';
    // $('btnDelete').innerHTML = '<---';
    // $('btnDelete').innerHTML = '◀---';
    $('btnDelete').innerHTML = '<−−';
    // $('btnDelete').innerHTML = '<span class="btn-big-font">␈</span>';
    // $('btnDelete').innerHTML = '<span class="btn-big-font">⬅</span>';
    // $('btnDelete').innerHTML = '<span class="btn-big-font">⇐</span>';
    $('btnInverse').value = 'x !';
    $('btnLog').innerHTML = 'log<sub>x</sub>y';
    $('btnRoot').innerHTML = '<sup>x</sup>&nbsp;&#8730;¯y';    
    $('btnUndo').value = 'REDO';
    $('btnEE').className = 'btn-small btn-char';
    $('btnEE').value = 'j';
    $('btnPI').innerHTML = '(  )';
    $('btnModulus').style.color = '#0000A0';
    $('btnModulus').value = '√¯';
    $('btnSign').style.color = '#0000A0';
    $('btnSign').innerHTML = '<sub class="symbol-big">^</sub>';
    $('btnGo').className = 'btn-small you-tube';
    $('btnGo').innerHTML = '&#9654';
    $('btnShift').className = 'btn-med btn-shifted';
    $('btnDivide').style.color = '#0000A0';
    $('btnDivide').value = '/';
    $('btnMultiply').style.color = '#0000A0';
    $('btnMultiply').innerHTML = '<sub class="symbol-big">*</sub>';
    $('btnSine').innerHTML = '<span class="btn-small-font">sin<sup>-1</sup></span>'
    $('btnSubtract').style.color = '#0000A0';
    $('btnCosine').innerHTML = '<span class="btn-small-font">cos<sup>-1</sup></span>';
    $('btnLoad').value = 'RUN';
    $('btnSpace').value = '=';
    $('btnAdd').style.color = '#0000A0';
    $('btnTangent').innerHTML = '<span class="btn-small-font">tan<sup>-1</sup></span>';    
  }
  colorUndoButton();
  
  if (stackFocus) {
    $('lstStack').focus();
  } else {
    $('txtInput').focus();
  }
}

function btn_clear() {

  backupUndo();
  monOff();
  $('txtInput').value = '';
  $('lstStack').value = '';
  stack.length = 0;
  $('txtInput').focus();
}

function btn_save() {

  $('btnSave').style.color = '#D4D0C8';
  storeCookie('STACK', nestArray(stack));
  storeCookie('MATHMON', nestArray(theObjects));
  $('txtInput').focus();
}
function nestArray(srcArray) {
  var newArray = '';

  if ((/*@cc_on!@*/false || !!document.documentMode) || isChrome) {
    // IE || Chrome
    for (var chro in srcArray) {
      newArray += '_';
      newArray += srcArray[chro];
    }
  } else {
    //Firefox        
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

function btn_load() {

  var index = 0;
  backupUndo();
  try { 
    $('btnSave').style.color = '#D4D0C8';        
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

  stack.length = 0;

  if ((/*@cc_on!@*/false || !!document.documentMode) || isChrome) {
    // IE || Chrome - remove underscore from begining of string
    tmpStack = tmpStack.substr(1);
  }
  tmpStack = splitArrayByBrowser(tmpStack);
    
  while (tmpStack.length > 0) {

    var tmpArray = [];
    tmpArray = tmpStack.shift();
    pushObjectToStack(tmpArray);
    
    if (shifted) evaluateInput(decodeSpecialChar(stack[stack.length - 1].soul));
  }    
}
function splitArrayByBrowser(tmpArray) {
  if ((/*@cc_on!@*/false || !!document.documentMode) || isChrome) {
    // IE || Chrome
    tmpArray = tmpArray.split('_');
  }
  else {
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

function btn_off() {

  monOff();
  tricorderOff();
  window.open('','_self').close();
  window.top.close();
  rpnAlert('Window not opened with window.open()');
  return false;
  //throw new Error();
}

//////// Algebraic Buttons ///////////////////////////////////////////////////////////

function btn_inverse() {

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
  //console.log(extractReal($('txtInput'.value)));
  var isNumber = !isNaN(extractReal($('txtInput').value));
  var isImaginary = !isNaN(extractImaginary($('txtInput').value));
  //console.log(newUnits, isNumber, isImaginary);
  if (isNumber || isImaginary) {
      
    if (isNumber && !isImaginary) {
      $('txtInput').value = 1 / extractReal($('txtInput').value);
    }
    if (!isNumber && isImaginary) {
      $('txtInput').value = -1 * (1 / extractImaginary($('txtInput').value));
      $('txtInput').value += 'j';
    }
    if (isNumber && isImaginary) {
      // write code here please ;)
    }
    $('txtInput').value += newUnits;
    $('txtInput').select();
  } else {
      
    if(/^1\//.test($('txtInput').value)) {
      $('txtInput').value = $('txtInput').value.slice(2);
    } else {
      $('txtInput').value = '1/' + $('txtInput').value;
    }
  }
}
function btn_factorial() {
  backupUndo();

  $('txtInput').value = factorial(extractReal($('txtInput').value));
  $('txtInput').select();
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

function btn_log() {

  if (shifted) {
    baseLog();
  }
  else {
    naturalLog();
  }
}
function baseLog() {
  backupUndo();

  if (stack.length - 1 < 0 || isNaN(stack[stack.length - 1].getRealPart().toString())) {
    enterInput();
    $(('txtInput')).value = '10';
  }
  $('txtInput').value = Math.log(parseFloat(stack.pop().getRealPart())) / Math.log(extractReal($('txtInput').value));
  updateDisplay();
  $('txtInput').select();
}
function naturalLog() {
  backupUndo();

  $('txtInput').value = Math.log(extractReal($('txtInput').value));
  updateDisplay();
  $('txtInput').select();
}

function btn_root() {

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
    $(('txtInput')).value = '2';
  }
  if (extractUnits($('txtInput').value) === 'null') {
    newUnits = multiplyUnits(extractReal($('txtInput').value));
    if (newUnits === ' ') newUnits = '';
  }
  $('txtInput').value = Math.pow(parseFloat(stack.pop().getRealPart()), extractReal($('txtInput').value)) + decodeSpecialChar(newUnits);
  updateDisplay();
  $('txtInput').select();
}
function rootFunction() {
  backupUndo();

  var newUnits = '';
  if (stack.length - 1 < 0 || isNaN(stack[stack.length - 1].getRealPart().toString().trim())) {
    enterInput();
    $(('txtInput')).value = '2';
  }
  if (extractUnits($('txtInput').value) === 'null') {
    newUnits = divideUnits(1 / extractReal($('txtInput').value));
  }
  $('txtInput').value = Math.pow(parseFloat(stack.pop().getRealPart()), 1 / extractReal($('txtInput').value)) + decodeSpecialChar(newUnits);
  updateDisplay();
  $('txtInput').select();
}

function btn_pi() {

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
  
  insertAroundSelection($('txtInput'), '(' + returnSelectedText('txtInput') + ')');
  $('txtInput').focus();
}
function insertAroundSelection(txtField, txtValue) {

  var startPos = txtField.selectionStart;
  var endPos = txtField.selectionEnd;

  txtField.value = txtField.value.substring(0, startPos) + txtValue + txtField.value.substring(endPos, txtField.value.length);
  txtField.selectionEnd = endPos + 1;  
  txtField.selectionStart = txtField.selectionEnd;// Deselect text for IE
}

function btn_modulus() {

  
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
  
  $('txtInput').value = parseFloat(stack.pop().getRealPart()) % parseFloat($('txtInput').value);
  updateDisplay();
  $('txtInput').select();
}

function btn_sign() {

  
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

  var tmpX = $('txtInput').value;
  
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
  $('txtInput').value = tmpX;
  $('txtInput').focus();
}

//////// Basic Maths Buttons /////////////////////////////////////////////////////////

function btn_divide() {
  
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
  $('txtInput').value = parseFloat(stack.pop().getRealPart()) / parseFloat($('txtInput').value) + decodeSpecialChar(newUnits);
  updateDisplay();
  $('txtInput').focus();
}

function btn_multiply() {
  
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
  $('txtInput').value = parseFloat(stack.pop().getRealPart()) * parseFloat($('txtInput').value) + decodeSpecialChar(newUnits);
  updateDisplay();
  $('txtInput').focus();
}

function btn_subtract() {
  
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
  $('txtInput').value = parseFloat(stack.pop().getRealPart()) - parseFloat($('txtInput').value) + decodeSpecialChar(newUnits);
  updateDisplay();
  $('txtInput').focus();
}

function btn_add() {
  
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
  var objX = getX();
  
  if (radix === 10) {
    $('txtInput').value = parseFloat(stack.pop().getRealPart()) + parseFloat($('txtInput').value) + decodeSpecialChar(newUnits);
    // $('txtInput').value = parseFloat(stack.pop().getRealPart()) + objX.getRealPart() + decodeSpecialChar(newUnits);
  } else {
    $('txtInput').value = (stack.pop().getRealPart() + objX.getRealPart()).toString(radix) + decodeSpecialChar(newUnits);
  }  
  updateDisplay();
  $('txtInput').focus();
}

//////// Trigonometric Buttons ///////////////////////////////////////////////////////

function btn_angle() {

  if ($('btnAngle').value === 'deg') {
    $('btnAngle').value = 'rad';
    $('btnAngle').className = 'btn-small btn-angle radian-style';
    $('btnSine').className = 'btn-small radian-style';
    $('btnCosine').className = 'btn-small radian-style';
    $('btnTangent').className = 'btn-small radian-style';
  }
  else {
    $('btnAngle').value = 'deg';
    $('btnAngle').className = 'btn-small btn-angle degree-style';
    $('btnSine').className = 'btn-small degree-style';
    $('btnCosine').className = 'btn-small degree-style';
    $('btnTangent').className = 'btn-small degree-style';
  }
  $('txtInput').focus();
}
function btn_sine() {

  backupUndo();

  if (shifted) {
    $('txtInput').value = computeTrig($('txtInput').value, Math.asin);
  } else {
    $('txtInput').value = computeTrig($('txtInput').value, Math.sin);
  }
  updateDisplay();
  $('txtInput').select();  
}
function btn_cosine() {

  backupUndo();

  if (shifted) {
    $('txtInput').value = computeTrig($('txtInput').value, Math.acos);
  } else {
    $('txtInput').value = computeTrig($('txtInput').value, Math.cos);
  }
  updateDisplay();
  $('txtInput').select();
}
function btn_tangent() {

  backupUndo();

  if (shifted) {
    $('txtInput').value = computeTrig($('txtInput').value, Math.atan);
  }
  else {
    $('txtInput').value = computeTrig($('txtInput').value, Math.tan);
  }
  updateDisplay();
  $('txtInput').select();
}
function computeTrig(input, trigFunc) {
  
  if ($('btnAngle').value === 'rad') {  
    input = trigFunc(extractReal(input));
  }
  else {
    input = trigFunc(extractReal(input) * Math.PI / 180);
  }
  return input;
}

//////// Input Buttons ///////////////////////////////////////////////////////////////

function btn_dot() {
  insertAtCursor($('txtInput'), '.');
  $('txtInput').focus();
}
function btn_zero() {
  insertAtCursor($('txtInput'), '0');
  $('txtInput').focus();
}
function btn_one() {
  insertAtCursor($('txtInput'), '1');
  $('txtInput').focus();
}
function btn_two() {
  insertAtCursor($('txtInput'), '2');
  $('txtInput').focus();
}
function btn_three() {
  insertAtCursor($('txtInput'), '3');
  $('txtInput').focus();
}
function btn_space() {
    
  if (shifted) {
    insertAtCursor($('txtInput'), '=');
  }
  else {
    insertAtCursor($('txtInput'), ' ');
  } 
  $('txtInput').focus();
}
function btn_four() {
  insertAtCursor($('txtInput'), '4');
  $('txtInput').focus();
}
function btn_five() {
  insertAtCursor($('txtInput'), '5');
  $('txtInput').focus();
}
function btn_six() {
  insertAtCursor($('txtInput'), '6');
  $('txtInput').focus();
}
function btn_seven() {
  insertAtCursor($('txtInput'), '7');
  $('txtInput').focus();
}
function btn_eight() {
  insertAtCursor($('txtInput'), '8');
  $('txtInput').focus();
}
function btn_nine() {
  insertAtCursor($('txtInput'), '9');
  $('txtInput').focus();
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
  // insertText(x + ' × ' + y);
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

  if (/*@cc_on!@*/false || !!document.documentMode) {
    // IE
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
      inputText($('lstStack').getAttribute('placeholder'));
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
      inputText('print: Opens print dialoge.');
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
      inputText('youTube [query]: Search YouTube. If no argument is supplied in-line, last entry on stack is used as query. Alias: go');
      break;    
    default:// case NOT a help argument
      enterInput();
      return;
    }
  } else {
    inputText('about, clear, date, embed, fix, flightLogger, google, ip, ipMapper, keyboard, load, locus, maths, napes, notes, open, openNotes, off, print, run, save, saveAs, size, time, toString, unembed, youTube');
  }
  enterInput();
  $('txtInput').value = '';
  updateDisplay();
}

function parseCommand() {

  var command = $('txtInput').value.trim();

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
      $('txtInput').value = '';
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
      $('txtInput').value = '';
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
      $('txtInput').value = '';
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
      $('txtInput').value = '';
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
      $('txtInput').value = '';
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
      $('txtInput').value = '';
      updateDisplay();
    }
  
    switch (command) {  
    case 'about':
      stack.pop();
      inputText($('lstStack').getAttribute('placeholder'));
      enterInput();
      updateDisplay();
      $('txtInput').value = '';
      break;
    case 'clear':
    case 'cls':
      btn_clear();
      break;
    case 'date':
      stack.pop();
      updateDisplay();
      insertDate();
      break;
    // case 'editstack':
    //   editStack();
    //   break;  
    case 'flightLogger':
      stack.pop();
      $('txtInput').value = '';
      updateDisplay();
      window.open('https://orbiter-flight-logger.herokuapp.com/', '_blank').focus();
      break;
    case 'gravity':
      //resetMathmon();
      gravity();
      btn_delete();
      btn_delete();
      break;
    case 'How are ya':
    case 'How are ya doing':
    case 'How are you':
    case 'How are you doing':
    case 'How ya doing':
    case 'How you doing':
      inputText('Like a rhinestone cowboy!');
      enterInput();
      $('txtInput').value = '';
      updateDisplay();
      break;
    case 'Hallo':
    case 'Hello':
    case 'Hey':
    case 'Hi':
      inputText('Hallo there!');
      enterInput();
      $('txtInput').value = '';
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
      $('txtInput').value = '';
      window.open('https://napesweaver.github.io/ip-mapper/', '_blank').focus();
      break;
    case 'keyboard':
      if (isMobile) {
        stack.pop();
        updateDisplay();
        $('txtInput').value = '';      
        toggleKeyboard();
      }
      break;
    case 'load':
    case 'ls':
      stack.pop();
      $('txtInput').value = '';
      btn_load();
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
      $('txtInput').value = '';
      break;
    case 'napes':
      window.location.href = 'https://napesweaver.github.io/rpnapes/reference/index.html';
      break;
    case 'notes':
      stack.pop();
      updateDisplay();
      btn_xoff();
      break;
    case 'off':
      stack.pop();
      updateDisplay();
      btn_off();
      break;
    case 'open':
      stack.pop();
      openAFile();
      break;
    case 'openNotes':
      stack.pop();
      updateDisplay();      
      $('txtInput').value = 'notes';
      openAFile();
      break;
    case 'print':
      stack.pop();
      updateDisplay();
      $('txtInput').value = '';
      print();
      break;
    case 'save':
      stack.pop();
      updateDisplay();
      $('txtInput').value = '';
      btn_save();
      break;
    case 'size':
      stack.pop();
      updateDisplay();
      inputText(getSize());
      break;  
    case 'time':
      stack.pop();
      updateDisplay();
      inputText(getTime());
      break;
    case 'twig':
      stack.pop();
      updateDisplay();
      $('txtInput').value = '';         
      monOn();
      break;
    case 'twigStat':
      stack.pop();
      monStatus();
      $('txtInput').value = '';
      break;
    case 'tricorder':
      stack.pop();
      updateDisplay();
      $('txtInput').value = '';
      showTricorder();
      break;
    case 'unembed':
      stack.pop();
      updateDisplay();
      $('txtInput').value = ''; 
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
  // If input does not contain quotes or regex i.e. input is not part of another program
  // if (!/(['"]|\/[ig]?\.|\/\))/.test(input)) {
  if (!/(['"]|\/[ig]?\.|\/\))/.test(input) && /[!^√]/.test(input)) {
    console.log(input);
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

// User function
function root(x, y) {
  return Math.pow(x, 1/y);
}

// Passed to parseInline()
function mathsRoot(y, x) {
  return Math.pow(x, 1/y);
}
function sin(x) {
  return computeTrig(x, Math.sin);
}
function cos(x) {
  return computeTrig(x, Math.cos);
}
function tan(x) {
  return computeTrig(x, Math.tan);
}
function asin(x) {
  return computeTrig(x, Math.asin);
}
function acos(x) {
  return computeTrig(x, Math.acos);
}
function atan(x) {
  return computeTrig(x, Math.atan);
}
function ln(x) {
  return Math.log(x);
}
function log(x, y) {
  if (y === undefined) {
    y = x;
    x = 10;
  }
  return Math.log(y) / Math.log(x);
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
  $('txtInput').value = outputTxt;
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
        console.log(users[i].id, users[i].login);
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
      console.log(this.responseText);
    }
  }
  xhr.send();
}

function openAFile() {
  $('openFile').click();
}

function getStackEntry() {

  backupUndo();  
  insertAtCursor($('txtInput'), getSelectedText('lstStack'));
  $('txtInput').select();
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
  return selectedText;
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
  $('txtInput').value = text;
  $('txtInput').select();
}
function inputText(text) {
  
  backupUndo();
  $('txtInput').value = text;
}
function insertText(text) {

  backupUndo();
  insertAtCursor($('txtInput'), text);
  $('txtInput').focus();
}

function updateDisplay() {

  $('lstStack').value = '';
  // Buffer stack display
  for (var i = 0; i < $('lstStack').getAttribute('rows') ; i++) {
    $('lstStack').value += ' \n';
  }
  // Print to stack display
  for (var sta in stack) {
    $('lstStack').value += '\n';
    $('lstStack').value = prettyPrint(sta,$('lstStack').value);
  }
  colorSaveButton();
  $('lstStack').scrollTop = $('lstStack').scrollHeight;
  $('txtInput').select();
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
    //console.log(getCookie("STACK").substr(0).trim(), nestArray(stack).trim());
    if (getCookie('STACK').substr(index).trim() !== nestArray(stack).trim()) {
      $('btnSave').style.color = '#000000';
    }
    else {
      $('btnSave').style.color = '#D4D0C8';
    }
  }  else {
    $('btnSave').style.color = '#000000';
  }  
}

function storeCookie(aName, tmpArray) {
  var d = new Date();
  // years * days * hours * min * sec * mili second
  d.setTime(d.getTime() + (1 * 365 * 24 * 60 * 60 * 1000));
  var expires = '; expires=' + d.toUTCString();
  document.cookie = aName + '=' + tmpArray + expires + ';path=/';
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
  if (extractUnits($('txtInput').value) === decodeSpecialChar(stack[stack.length - 1].getUnits()) || (extractUnits($('txtInput').value) !== 'null' && stack[stack.length - 1].getUnits()) === '') {
    newUnits = ' ' + extractUnits($('txtInput').value);
  }
  // If y has units but x does not
  if (extractUnits($('txtInput').value) === 'null' && stack[stack.length - 1].getUnits() !== '') {
    newUnits = ' ' + stack[stack.length - 1].getUnits();
  }
  return newUnits;
}
function multiplyUnits(multiplier) {

  var unitsMultiplied = '';
  var unitsY = decodeSpecialChar(stack[stack.length - 1].getUnits());
  var unitsX = extractUnits($('txtInput').value);

  if (unitsY !== '' || unitsX !== 'null') {
    unitsMultiplied = ' ' + processUnits(unitsY, unitsX, multiplier, true);
  }
  return unitsMultiplied;
}
function divideUnits(multiplier) {

  var unitsDivided = '';
  var unitsY = decodeSpecialChar(stack[stack.length - 1].getUnits());
  var unitsX = extractUnits($('txtInput').value);

  if ((unitsY !== '' || unitsX !== 'null') && unitsY !== unitsX) {
    unitsDivided = ' ' + processUnits(unitsY, unitsX, multiplier, false);
  }
  return unitsDivided;
}
function inverseUnits() {

  var tmpArray = [];
  var invertedUnits = '';
  var unitsX = extractUnits($('txtInput').value);

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
  fixDecimal = value;
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

function btn_copy_notes() {

  document.execCommand('copy');
}
function btn_paste_notes() {

  backupUndoNotes();

  if (/*@cc_on!@*/false || !!document.documentMode) {
    // IE
    insertAtCursor($('lstNotes'), window.clipboardData.getData('Text'));
  }
  else {
    // Firefox
    //insertAtCursor($("lstNotes"), "\nNot supported by this browser.\n");
    alert('Not supported by this browser.');
  }
}
function btn_undo_notes() {
  if (backupNotes.length > 1) {
    restoreNotes.push(nestArray(notes));
    notes = splitArrayByBrowser(backupNotes.pop());
    updateDisplayNotes();
  }
  colorNotesUndoButton();
}
function btn_redo_notes() {

  if (restoreNotes.length > 0) {
    backupNotes.push(nestArray(notes));
    notes = splitArrayByBrowser(restoreNotes.pop());
    updateDisplayNotes();
  }
  colorNotesUndoButton();
}
function backupUndoNotes() {
  
  backupNotes.push(nestArray(notes));
  notes = $('lstNotes').value.split('\n');
  restoreNotes.length = 0;
  colorNotesUndoButton();
}
function colorNotesUndoButton() {

  if (backupNotes.length > 1) {
    $('btnUndoNotes').style.color = '#01c401';
  }
  else {
    $('btnUndoNotes').style.color = '#919191';
  }
  if (restoreNotes.length >= 1) {
    $('btnRedoNotes').style.color = '#01c401';
  }
  else {
    $('btnRedoNotes').style.color = '#919191';
  }
  colorNotesSaveButton();
}
function colorNotesSaveButton() {

  var index = 0;
  var cookieValue = '';
  var notesValue = '';

  index = getCookie('NOTES').indexOf('=') + 1;
  cookieValue = getCookie('NOTES').substr(index);
  notesValue = nestArray(notes);
  // This step is needed for Chrome and IE
  cookieValue = cookieValue.replace(/_/g, ' ').trim();
  notesValue = notesValue.replace(/_/g, ' ').trim();

  if (cookieValue !== notesValue) {
    $('btnSaveNotes').style.color = '#000000';
  }
  else {
    $('btnSaveNotes').style.color = '#919191';
  }
}
function btn_save_notes() {

  var tmpY;

  backupUndoNotes();
  $('btnSaveNotes').style.color = '#919191';
  tmpY = encodeSpecialChar($('lstNotes').value);
  notes = tmpY.split('\n');
  storeCookie('NOTES', nestArray(notes));
}
function btn_load_notes() {

  var index = 0;

  backupUndoNotes();
  index = getCookie('NOTES').indexOf('=') + 1;
  try {
    notes = splitArrayByBrowser(getCookie('NOTES').substr(index));
  }
  catch (err) {
    notes.push('Load error.');
  }
  updateDisplayNotes();
  $('btnSaveNotes').style.color = '#919191';
  $('lstNotes').scrollTop = $('lstNotes').scrollHeight;
}
function btn_clear_notes() {

  backupUndoNotes();
  $('lstNotes').value = '';
  notes = $('lstNotes').value.split('\n');
}
function btn_delete_notes() {

  backupUndoNotes();
  var txtField = $('lstNotes').value;
  var startPos = $('lstNotes').selectionStart;
  var endPos = $('lstNotes').selectionEnd;
  $('lstNotes').value = txtField.slice(0, startPos) + txtField.slice(endPos + 1, txtField.length);
  $('lstNotes').setSelectionRange(startPos, startPos);
  $('lstNotes').focus();
  notes = $('lstNotes').value.split('\n');
  if (isMobile) $('lstNotes').readOnly = true;
  colorNotesSaveButton();
}
function updateDisplayNotes() {

  $('lstNotes').value = '';
  for (var note in notes) {
    $('lstNotes').value += decodeSpecialChar(notes[note]);
    $('lstNotes').value += '\n';
  }
  $('lstNotes').value = $('lstNotes').value.trim();
  $('lstNotes').value += '\n';
  if (notes.length === 1 && notes[0] === '') {
    $('lstNotes').value = '';
  }
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

  if (!isMobile) {
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
  $('widget').className = 'hidden';
  $('viewport').src = '';
  $('viewport').className = 'hidden';
  $('tricorderskin').src = 'images/tricorder.png';
}
function tricorderOn() {
  muteAudio(false);
  $('tricorderskin').src = 'images/tricorderon.png';
  $('viewport').src = 'https://www.youtube.com/embed/RGDEKqU0T2k?autoplay=1';
  
  $('viewport').className = 'visible';
  playAudio($('working'));
  playAudio($('hailing_frequencies'));
  getLocation();
}
function button2() {

  if (power()) {
    
    haptic();

    if (viewPortSrc.indexOf($('viewport').src) !== -1) {
      var i = viewPortSrc.indexOf($('viewport').src);

      if (i === viewPortSrc.length - 1) {
        i = -1;
      }
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

      if (i === viewPort2Src.length - 1) {
        i = -1;
      }
      $('viewport').src = viewPort2Src[i + 1];
    }
    else {
      $('viewport').src = viewPort2Src[0];
    }
    playAudio($('keypress1'));
    playAudio($('datareceived'));
  }
}
function button4() {

  if (power()) {
    
    haptic();

    if ($('widget').className === 'hidden') {
      if (widgetSrc.indexOf($('widget').src) !== -1) {
        var i = widgetSrc.indexOf($('widget').src);

        if (i === widgetSrc.length - 1) {
          i = -1;
        }
        $('widget').src = widgetSrc[i + 1];
      }
      else {
        $('widget').src = widgetSrc[0];
      }
      $('widget').className = 'visible';
      playAudio($('scanner'));
      playAudio($('keypress6'));
    }
    else {
      $('widget').className = 'hidden';
      playAudio($('keypress5'));
    }
  }
}
function button5() {

  if (power()) {

    haptic();

    if ($('widget').className === 'hidden') {
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
      $('widget').className = 'visible';
      playAudio($('keypress6'));
      playAudio($('computerthinking'));
    }
    else {
      $('widget').className = 'hidden';
      playAudio($('keypress5'));
    }
  }
}
function button6() {

  if (power()) {

    haptic();

    if ($('widget').className === 'hidden') {
      
      var srcString = '';
      // IP Mapper
      srcString += 'https://napesweaver.github.io/ip-mapper/';
      $('widget').src = srcString;
      $('widget').className = 'visible';
      playAudio($('keypress6'));
      playAudio($('verified'));
    }
    else {
      $('widget').src = '';
      $('widget').className = 'hidden';
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
  storeCookie('TRICORDER', nestArray(widgetSrc));
}

/////////////Mathmon idName, xPos, yPos, objSize, health, speed, ammo ////////////////

var twig = new Mathmon('twig', 135, -310, 3, 100, 5, 6);
var tv = new Mathmon('tv', -45, -330, 30, 100, 7, 0);
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

  $('txtInput').value = '';
  $('twig').src = 'images/twig/piece-frog.gif';
  for (var i = 0; i < theObjects.length; i++) {
    theObjects[i].setHealth(100);
  }
  twig.setXPos(135);
  twig.setYPos(-310);
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

  if ((/*@cc_on!@*/false || !!document.documentMode) || isChrome) {
    // IE || Chrome - remove underscore from begining of string
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
      bTop: -545,
      bBottom: -330,
      bLeft: -91,
      bRight: 209
    }
  } else {
    wBorders = {
      bTop: -420,
      bBottom: -275,
      bLeft: -46,
      bRight: 164
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

//////// Event listeners & window.onload /////////////////////////////////////////////

document.addEventListener('click', function (evt) {
  if (evt.detail === 2 && evt.target === $('lstStack')) {
    getStackEntry();
  }
});
document.addEventListener('keypress', function (event) {
  var key = event.keyCode || event.charCode;
  if ($('rpnapes').className !== 'hidden') {
    switch (key) {
    case 13:// RPNapes ENTER
      enter_button();
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
      btn_backspace();
      break;
    case 16:// SHIFT
      if (keyHeld) btn_shift();
      break;
    case 18:// ALT
      keyHeld = true;
      break;
    case 46:// DELETE
      btn_delete();
      break;
    case 106:// NUMPAD *
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btn_multiply();
      break;
    case 107:// NUMPAD +
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btn_add();
      break;
    case 109:// NUMPAD -
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btn_subtract();
      break;
    case 111:// NUMPAD /
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btn_divide();
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
      notesOn();
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
    $('btnSaveNotes').style.color = '#000000';
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
      notes = $('lstNotes').value.split('\n');
      break;
    }
  }
});

window.onload = function () {

  // Internet Explorer needs this for "btnOff" ~ window.close()   
  window.open('', '_self');

  // MathMon
  theObjects[0] = twig;
  theObjects[1] = tv;
  theObjects[2] = don;

  $('twig').onclick = monStatus;
  $('tv').onclick = monStatus;
  $('don').onclick = monStatus;

  // Menu File 
  $('menuLoad').onclick = btn_load;
  $('openFile').addEventListener('change', function () {
    try{
      var fr = new FileReader();

      fr.onload = function () {

        if ($('txtInput').value.toLowerCase().trim() === ('notes')) {
          btn_delete();
          backupUndoNotes();
          $('lstNotes').value += this.result;
          backupUndoNotes();
        }
        else {
          var tmpStack = [];
          backupUndo();
          tmpStack = this.result.split('\n');
          for (var i in tmpStack) {
            $('txtInput').value = tmpStack[i];
            if (shifted) {
              evaluateInput($('txtInput').value);
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
  $('menuSave').onclick = btn_save;
  $('menuOff').onclick = function() {
    monOff();
    tricorderOff();
    window.open('','_self').close();
    window.top.close();
    rpnAlert('Window not opened with window.open()');
    throw new Error();
  };

  // Menu Edit
  $('menuEnter').onclick = btn_enter;
  $('menuEvaluate').onclick = btn_eval;
  $('menuCopy').onclick = copy;
  $('menuDelete').onclick = btn_delete;
  $('menuBackspace').onclick = btn_backspace;
  $('menuClear').onclick = btn_clear;
  $('menuUndo').onclick = undoFunction;
  $('menuRedo').onclick = redoFunction;
  //$('menuXy').onclick = btn_xy;
  //$('menuAb').onclick = btn_ab;
  $('menuXy').onclick = xyFunction;

  // Menu Maths
  $('menuRoot').onclick = rootFunction;
  $('menuExponential').onclick = exponentialFunction;
  $('menuLog').onclick = baseLog;
  $('menuLn').onclick = naturalLog;
  $('menuInverse').onclick = inverse;
  $('menuFactorial').onclick = btn_factorial;
  $('menuModulus').onclick = modulus;
  $('menuSign').onclick = changeSign;
  $('menuDivide').onclick = division;
  $('menuMultiply').onclick = multiplication;
  $('menuSubtract').onclick = subtraction;
  $('menuAdd').onclick = addition;
  $('menuSine').onclick = btn_sine;
  $('menuCosine').onclick = btn_cosine;
  $('menuTangent').onclick = btn_tangent;

  // Menu View
  $('menuAngle').onclick = btn_angle;
  $('menuNotes').onclick = btn_xoff;
  $('menuShift').onclick = btn_shift;
  $('menuKeyboard').onclick = toggleKeyboard;
  $('menuHaptic').onclick = toggleHaptic;

  // Menu Constants
  $('menuPhi').onclick = (function() {
    return function() { 
      insertText('Φ');
    }
  })();
  $('menuEulers').onclick = (function() {
    return function() { 
      // insertText(Math.exp(1));
      insertText('e');      
    }
  })();
  $('menuPI').onclick = (function() {
    return function() { 
      insertText('π');
    }
  })();
  $('menuGravitationalConstant').onclick = (function() {
    return function() { 
      insertText('G');
    }
  })();
  $('menuLightSpeed').onclick = (function() {
    return function() { 
      insertText('c');
    }
  })(); 

  // Menu Date
  $('menuDate').onclick = insertDate;

  // Menu Time
  $('menuTime').onclick = insertTime;

  // Menu Equations
  $('menuOhmsLaw').onclick = (function() {
    return function() {
      insertText('E=I*R');
    }
  })();
  $('menuCircumference').onclick = (function() {
    return function() {
      insertText('2*π*r');
    }
  })();
  $('menuCircleArea').onclick = (function() {
    return function() {
      insertText('π*r^2');
    }
  })();
  $('menuSphereArea').onclick = (function() {
    return function() {
      insertText('4*π*r^2');
    }
  })();
  $('menuSphereVolume').onclick = (function() {
    return function() {
      insertText('4/3*π*r^3');
    }
  })();
  $('menuConeArea').onclick = (function() {
    return function() {
      insertText('π*r^2 + π*r*l');
    }
  })();
  $('menuConeVolume').onclick = (function() {
    return function() {
      insertText('h/3*π*r^2');
    }
  })();

  // Menu Programs
  $('menuTricorder').onclick = showTricorder;
  $('menuTwig').onclick = monOn;
  
  // Menu Symbols
  $('menuParentheses').onclick = (function() {
    return function() { 
      btn_parentheses();
    }
  })();
  $('menuEquals').onclick = (function() {
    return function() { 
      insertText('=');
    }
  })();
  $('menuRadical').onclick = (function() {
    return function() { 
      insertText('√');
    }
  })();
  $('menuBang').onclick = (function() {
    return function() { 
      insertText('!');
    }
  })();
  $('menuCarat').onclick = (function() {
    return function() { 
      insertText('^');
    }
  })();
  $('menuSolidus').onclick = (function() {
    return function() { 
      insertText('/');
    }
  })();
  $('menuAsterisk').onclick = (function() {
    return function() { 
      insertText('*');
    }
  })();
  $('menuMinus').onclick = (function() {
    return function() { 
      insertText('-');
    }
  })();
  $('menuPlus').onclick = (function() {
    return function() { 
      insertText('+');
    }
  })();
  $('menuOhm').onclick = (function() {
    return function() { 
      insertText('Ω');
    }
  })();
  $('menuHeart').onclick = (function() {
    return function() { 
      insertText('♥');
    }
  })();

  if (isMobile) {
    $('menuOff').style = 'display:none';
    $('menuTwig').style = 'display:none';
  } else {
    $('menuKeyboard').style = 'display:none';
    $('menuHaptic').style = 'display:none';
  }

  // Menu Help
  $('menuHelp').onclick = help; 

  // Text Area
  $('lstStack').style.color = '#000000';// noscript warning was red ;)
  $('lstStack').value = '';
  // Stop long tap menu on mobile
  $('lstStack').oncontextmenu = function(event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    return false;
  }

  // Text Input
  $('txtInput').onclick = mobileKeyboardAllow;
  $('txtInput').readOnly = true;

  // Buttons
  $('btnXoff').onclick = btn_xoff;
  $('btnCopy').onclick = btn_copy;
  $('btnXy').onclick = btn_xy;
  $('btnEnter').onclick = enter_button;
  $('btnDelete').onclick = delete_button;

  $('btnInverse').onclick = btn_inverse;
  $('btnLog').onclick = btn_log;
  $('btnRoot').onclick = btn_root;
  $('btnUndo').onclick = btn_undo;

  $('btnEE').onclick = btn_EE;
  $('btnPI').onclick = btn_pi;
  $('btnModulus').onclick = btn_modulus;
  $('btnSign').onclick = btn_sign;
  $('btnGo').onclick = btn_go;
  $('btnShift').onclick = btn_shift;

  $('btnSeven').onclick = btn_seven;
  $('btnEight').onclick = btn_eight;
  $('btnNine').onclick = btn_nine;
  $('btnDivide').onclick = btn_divide;
  $('btnAngle').onclick = btn_angle;
  $('btnClear').onclick = btn_clear;

  $('btnFour').onclick = btn_four;
  $('btnFive').onclick = btn_five;
  $('btnSix').onclick = btn_six;
  $('btnMultiply').onclick = btn_multiply;
  $('btnSine').onclick = btn_sine;
  $('btnLoad').onclick = btn_load;  

  $('btnOne').onclick = btn_one;
  $('btnTwo').onclick = btn_two;
  $('btnThree').onclick = btn_three;
  $('btnSubtract').onclick = btn_subtract;
  $('btnCosine').onclick = btn_cosine;
  $('btnSave').onclick = btn_save;

  $('btnZero').onclick = btn_zero;
  $('btnDot').onclick = btn_dot;
  $('btnSpace').onclick = btn_space;
  $('btnAdd').onclick = btn_add;
  $('btnTangent').onclick = btn_tangent;
  $('btnOff').onclick = btn_off;

  $('txtInput').addEventListener('paste', function() {
    backupUndo();
  });

  // Tricorder
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
  $('btnCopyNotes').onclick = btn_copy_notes;
  $('btnPasteNotes').onclick = btn_paste_notes;
  $('btnUndoNotes').onclick = btn_undo_notes;
  $('btnRedoNotes').onclick = btn_redo_notes;
  $('btnSaveNotes').onclick = btn_save_notes;
  $('btnLoadNotes').onclick = btn_load_notes;
  $('btnClearNotes').onclick = btn_clear_notes;
  $('btnDeleteNotes').onclick = btn_delete_notes;
  $('lstNotes').onclick = function() {
    $('lstNotes').readOnly = false;
  }
  $('lstNotes').addEventListener('paste', function() {
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
    $('lstNotes').value = '';
    btn_load_notes();
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
    $('lstStack').value = '';
    $('txtInput').value = '';
    btn_load();
  }
  else
  {
    backupUndo();
    $('btnSave').style.color = '#D4D0C8';
  }
  $('txtInput').readOnly = false;
};
