﻿﻿var $ = function (id) {
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
new ResizeObserver(unFloat).observe($('lst-notes'));
if (!isPhone) window.onresize = resizeTextAreas;

var Φ = 1.618033988749895;
var ℮ = Math.exp(1);
var π = Math.PI;
var ɢ = 6.674e-11;
var ⅽ = 299792458;
var testing = false;
var cashed = '';
var tStamp = '22:37:38';

var stack = [];
var backups = [];
var restores = [];
var stackSize = 0;
var stackFocus = false;
var shifted = false;
var altHeld = false;
var ctrlHeld = false;
var fixDecimal = -1;
var sciDecimal = -1;
var engDecimal = -1;
var radix = 10;

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
  if ($('notes').classList.contains('hidden')) worldBordersSet();

  $('txt-input').style.width = $('lst-stack').offsetWidth - 18 + 'px';
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
    muteAudio(false);
  } else {
    $('menu-sound-li').classList.add('strikethrough');
    muteAudio(true);
  }
  clearInterval(flashInterval);
}

function menuNotes() {
  if (shifted) {
    backupUndo();
    calculate($('lst-notes').value);
  } else {
    btnXoff();
  }
}

//////// Buttons /////////////////////////////////////////////////////////////////////

function btnXoff() {

  if ($('rpnapes').classList.contains('hidden')) {
    // Notes is visible - turn on RPNapes
    rpnapesOn();
  } else if ($('notes').classList.contains('hidden') && $('tricorder').classList.contains('hidden')) {
    // RPNapes is visible - turn on Notes
    notesOn();
  }
}

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

function btnCopy() {
  if (shifted) {
    btnPaste();
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
  
function btnPaste() {
  // Firefox only supports reading clipboard in browser extensions
  // using the "clipboardRead" extension permission :(
  backupUndo();    
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
  $('txt-input').focus();
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
    var objX = stack.pop();
    enterInput();
    $('txt-input').value = '';

    if (!isANumber(objX.getRealPart())) {
      $('txt-input').value += decodeSpecialChar(objX.getSoul());
    } else {
      $('txt-input').value += formatNumber(objX.getRealPart().toString());

      if (isANumber(objX.getImaginary())) {
        if (objX.getImaginary().charAt(0) === '-') {
          $('txt-input').value += ' - ' + formatNumber(objX.getImaginary().toString().slice(1)) + 'j';
        } else {
          $('txt-input').value += ' + ' + formatNumber(objX.getImaginary().toString()) + 'j';
        }
      }
      if (objX.getUnits() !== 'null') {
        $('txt-input').value += ' ' + decodeSpecialChar(objX.getUnits());
      }
    }
    updateDisplay();
  }
  $('txt-input').focus();
}

function runProgram() {
  btnShift();
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
  if (stackFocus) {
    insertAtCursor($('txt-input'), getSelectedText('lst-stack'));
  } else {
    var input = $('txt-input').value.trim();    
    if (stack.length > 0 || (input !== '' && input !== 'NaN')) enterInput();
  }
  updateDisplay();
  parseCommand();
  cashed = '';
}

function btnEval() {
  backupUndo();
  var objX;

  if (stackFocus) insertAtCursor($('txt-input'), getSelectedText('lst-stack'));
  objX  = getX();

  if (objX.getSoul().match(/^run$/)) {
    btnLoad();
    return;
  }
  $('txt-input').value = calculate($('txt-input').value.replace(/[ ]*$/, ''));
  if (objX.getUnits() !== 'null') $('txt-input').value += ' ' + decodeSpecialChar(objX.getUnits());
  $('txt-input').select();  
}

function getX() {
  var soulX = $('txt-input').value.trim();
  var realPartX = extractReal(soulX);
  var imaginaryX = extractImaginary(soulX);
  var unitsX;

  isANumber(realPartX) || isANumber(imaginaryX) ? unitsX = extractUnits(soulX) : unitsX = 'null';  
  soulX = encodeSpecialChar(soulX);
  unitsX = encodeSpecialChar(unitsX);
  return new NumberObject(soulX, realPartX, imaginaryX, unitsX);
}

function enterInput() {
  var objX = getX();
  stack.push(objX);
  $('txt-input').value = $('txt-input').value.trim();  
}

function calculate(x) {
  try {
    x = eval(parseEvaluation(x));
  } catch(e) {
    return e.toString();
  }
  return x;
}

function runTest() {  
  try {
    if (stack.length > 0 && stack.length % 2 === 0) {
      var y = decodeSpecialChar(stack[stack.length - 2].getSoul());
      var x = stack[stack.length - 1].getSoul()
      var color = calculate(y).toString() === x ? 'green' : 'red';      
      console.log(`${y} %c${calculate(y).toString() === x}`, `font-weight: bold; color: ${color};`);   
    }
  } catch(e) {
    console.log(`%c${stack[stack.length - 2].soul, e.toString()}`, 'font-weight: bold; color: red;');
  }  
}

function evaluateExpression(input) {  
  $('txt-input').value = calculate(input);  
  if (testing) runTest();
}

function deleteButton() {
  if (shifted) {
    btnBackspace();
  } else {
    btnDelete();
  }
}

function btnDelete() {
  if (stack.toString() !== '') backupUndo();
  $('txt-input').value = $('txt-input').value.trim();

  if (stackFocus) {
    stack.splice(getIndex('lst-stack') - stackSize, 1);
    updateDisplay();
  } else if ($('txt-input').value !== '' && $('txt-input').value.length === $('txt-input').selectionEnd) {
    $('txt-input').value = '';
    $('txt-input').focus();
  } else if ($('txt-input').value === '') {
    stack.pop();
    updateDisplay();
  } else {
    deleteText($('txt-input'), true);
  }
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
}

function deleteText(txtField, forward) {
  var startPos = txtField.selectionStart;
  var endPos = txtField.selectionEnd;
  
  if (txtField.selectionStart === txtField.selectionEnd && forward) endPos++;
  if (txtField.selectionStart === txtField.selectionEnd && !forward ) startPos--;

  txtField.value = txtField.value.slice(0, startPos) + txtField.value.slice(endPos, txtField.value.length);

  txtField.selectionStart = startPos;
  txtField.selectionEnd = startPos;
  $('txt-input').focus();
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

function undoFunction() {

  if (backups.length > 3) {    
    restores.push(nestArrayByBrowser(stack));
    restores.push($('txt-input').value);
    $('txt-input').value = backups.pop();    
    var tmpArray = backups.pop();
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
    backups.push(nestArrayByBrowser(stack));
    backups.push($('txt-input').value);
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
  var input = $('txt-input').value.trim();
  
  if (backups.length < 3 || backups[backups.length - 2] !== nestArrayByBrowser(stack) || backups[backups.length - 1] !== input && (stack.length > 0 || (input !== '' && input !== 'NaN'))) {      
    backups.push(nestArrayByBrowser(stack));
    backups.push($('txt-input').value.trim());
    restores.length = 0;
    colorUndoButton();  
  }
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
  }
  $('txt-input').focus();
}

function btnEe() {
  backupUndo();
  var input = $('txt-input').value;
  var index = $('txt-input').selectionStart;
  var objX = getX();
  var units = objX.getUnits();

  if (shifted) {
    // ((Cursor is at the end && there is no 'j') || there are units && there are no 'j's) && (cursor is next to a valid number && input doesn't contain illegal symbols) || (cursor is at || next to 'j'))
    if ((((index >= input.length - 1 && input.split('j').length - 1 === 0) || (units !== 'null' && input.split('j').length - 1 === 0)) && (/[ⅽ℮ɢΦπ0-9jy]/.test(input.charAt(index - 1)) && !/[;<>?:`~!@#$%√&×(){}|\\_=]+/g.test(input))) || (input.charAt(index) === 'j' || input.charAt(index - 1) === 'j')) {
      toggleChar(input, index, /[j]/, 'j');
    }
  } else {
    // (Cursor is at valid char && not an illegal char && [Ee] is not already part of the number) || (cursor is at || next to [Ee])
    if ((/[0-9Ee](?![.])/.test(input.charAt(index - 1)) && !/[.]/.test(input.charAt(index)) && !/[;<>?:`~@#$%&×{}|\\_]+/g.test(input) && !/[0-9.]+[Ee]+[0-9.]+$/.test(input)) || (/[Ee]/.test(input.charAt(index)) || /[Ee]/.test(input.charAt(index - 1)))) {      
      toggleChar(input, index, /[Ee]/, 'e');
    }
  }
  $('txt-input').focus();
}

function searchDuckDuckGo() {
  if (stackFocus) $('txt-input').value = getSelectedText('lst-stack');
  var query = $('txt-input').value.trim();
  var domainString = 'https://duckduckgo.com/?q=';

  if (query) {    
    domainString += query;
    window.open(domainString, '_blank');    
  } else {
    window.open('https://duckduckgo.com/');
  }
}

function searchGoogle() {
  if (stackFocus) $('txt-input').value = getSelectedText('lst-stack');
  var query = $('txt-input').value.trim();
  var domainString = 'https://www.google.com/search?q=';

  if (/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(query) || /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/.test(query)) query = 'https://' + query;

  if (query) {
    if (/^http[s]?:\/\//.test(query)) {
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
  if (stackFocus) $('txt-input').value = getSelectedText('lst-stack');
  var query = $('txt-input').value.trim();
  var domainString = 'https://en.wikipedia.org/w/index.php?search=';

  if (query) {    
    domainString += query;
    window.open(domainString, '_blank');    
  } else {
    window.open('https://en.wikipedia.org/');
  }
}

function searchYouTube() {
  if (stackFocus) $('txt-input').value = getSelectedText('lst-stack');
  var query = $('txt-input').value.trim();
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
    $('btn-modulus').value = '%';
    $('btn-sign').style.color = '#000000';
    $('btn-sign').innerHTML = '±';
    $('btn-go').classList.remove('you-tube');
    $('btn-go').classList.add('google');
    $('btn-go').innerHTML = '<span class="color-blue">G</span><span class="color-red">o</span>';
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
    $('btn-ee').value = 'j';
    $('btn-pi').innerHTML = '(  )';
    $('btn-modulus').style.color = '#0000A0';
    $('btn-modulus').value = '√¯';
    $('btn-sign').style.color = '#0000A0';
    $('btn-sign').innerHTML = '<sub class="symbol-big">^</sub>';
    $('btn-go').classList.remove('google');
    $('btn-go').classList.add('you-tube');
    $('btn-go').innerHTML = '&#9654';
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
  if (stack.toString() !== '') backupUndo();
  monOff();
  $('txt-input').value = '';
  $('lst-stack').value = '';
  stack.length = 0;
  colorSaveButton();
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
    saveAs(myBlob, fileName);// This function exist in utils/filesaver.js
  } else {
    rpnAlert('Error: There is no data to save.');
  }
}

function btnLoad() {  
  var index = 0;

  try { 
    $('btn-save').style.color = '#D4D0C8';        
    index = getCookie('STACK').indexOf('=') + 1;
    if (getCookie('STACK').slice(index) !== '') {
      loadStack(getCookie('STACK').slice(index));
    } else {
      backupUndo();
    } 
  } catch (err) { rpnAlert('load Stack error.'); }
  try {
    index = getCookie('MATHMON').indexOf('=') + 1;
    loadMathMon(getCookie('MATHMON').slice(index));
  } catch(err) { rpnAlert('load MathMon error'); }
  updateDisplay();
}

function loadStack(tmpStack) {
  var prevStack = nestArrayByBrowser(stack);
  if (prevStack !== tmpStack || shifted) backupUndo();
  stack = [];

  if ((/*@cc_on!@*/false || !!document.documentMode) || isChrome || isSafari) {
    // Remove underscore from begining of string
    tmpStack = tmpStack.slice(1);
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
  } else {
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
  var objY = new NumberObject(soulY, realPartY, unitsY, imaginaryY);  

  stack.push(objY);
}

function btnOff() {
  // Works for Chrome and Firefox-desktop if set as a home page ;)
  monOff();
  tricorderOff();  

  window.open('','_self').close();
  window.open(location, '_self').close();
  window.close();
  window.open('', '_self', '');
  window.close();
  window.top.close();
  
  rpnAlert('Scripts may only close windows they opened.');
  window.location.href = 'https://www.google.com';
}

//////// Algebraic Buttons ///////////////////////////////////////////////////////////

function btnInverse() {
  if (shifted) {
    btnFactorial();    
  } else {
    inverse();
  } 
}

function inverse() {
  backupUndo();
  var objX;

  if (stackFocus) {
    objX = stack[getIndex('lst-stack') - stackSize];
    $('txt-input').value = decodeSpecialChar(objX.getSoul());
    backupUndo();// <--Needed for UI consistency in this case
  } else { 
    objX = getX();
  }
  var isNumber = !isNaN(objX.getRealPart());
  var isImaginary = !isNaN(objX.getImaginary());
  var newUnits = inverseUnits(decodeSpecialChar(objX.getUnits()));

  if ($('txt-input').value === cashed && $('txt-input').value !== decodeSpecialChar(backups[backups.length - 3])) {    
    $('txt-input').value = decodeSpecialChar(backups[backups.length - 3]);
  } else {
    if (isNumber || isImaginary) {
      if (isNumber && !isImaginary) $('txt-input').value = 1 / objX.getRealPart();
      if (!isNumber && isImaginary) {
        $('txt-input').value =  1 / objX.getImaginary();
        $('txt-input').value += 'j';
      }
      if (isNumber && isImaginary) {
        var x = buildComplexNumber(objX);
        $('txt-input').value = math.inv(x).toString().replace(/i$/, 'j');
      }
      $('txt-input').value += newUnits;
    } else {
      // Remove units from expression and calculate
      var result = calculate($('txt-input').value.replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, ''));

      if (!isNaN(result)) {
        $('txt-input').value = 1 / result;
        $('txt-input').value += newUnits; 
      } else {
        if(/^1\//.test($('txt-input').value)) {
          $('txt-input').value = $('txt-input').value.slice(2);          
        } else {
          if ($('txt-input').value.trim() === '') {
            $('txt-input').value = '0';
            backupUndo();
            $('txt-input').value = 1 / 0;
          } else {
            $('txt-input').value = '1/' + $('txt-input').value.toString();
          }
        }
      }      
    }
  }  
  if (!/Infinity/g.test(objX.getSoul())) cashed = $('txt-input').value;
  $('txt-input').select();
}

function btnFactorial() {
  backupUndo();
  var objX;

  if (stackFocus) {
    objX = stack[getIndex('lst-stack') - stackSize];
  } else {
    objX = getX();
  }
  var x = isNaN(objX.getRealPart()) && isNaN(objX.getImaginary()) ? calculate(objX.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : parseFloat(objX.getRealPart());
  var result = factorial(x);
  
  if (radix !== 10) result = result.toString(radix);
  $('txt-input').value = result;
  $('txt-input').select();
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
  if (num % 1 === 0) {
    result = intFactorial(num);
  } else {
    result = gamma(num + 1);
  }
  return result;
}

function btnLog() {
  if (shifted) {
    naturalLog();
  } else {
    baseLog();
  }
}

function log(x, y) {
  var result;
  if (y === undefined) y = 10;
  result = Math.log(x) / Math.log(y);
  if (/[.][9]{11,}[0-9]*[0-9]$/.test(result)) result = Math.round(result);
  return result;
}

function baseLog() {
  backupUndo();
  var objY;

  if (stackFocus) {
    objY = stack[getIndex('lst-stack') - stackSize];
  } else {
    if (stack.length - 1 < 0 || (isNaN(calculate(stack[stack.length - 1].getSoul())) && !isANumber(stack[stack.length - 1].getRealPart()) && !isANumber(stack[stack.length - 1].getImaginary()))) {
      enterInput();
      $('txt-input').value = Number(10).toString(radix);
    }
    objY = stack.pop();
  }  
  var objX = getX();
  var y = isNaN(objY.getRealPart()) && isNaN(objY.getImaginary()) ? calculate(objY.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : parseFloat(objY.getRealPart());
  var x = isNaN(objX.getRealPart()) && isNaN(objX.getImaginary()) ? calculate(objX.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : parseFloat(objX.getRealPart());
  var result = log(y, x);  

  if (radix !== 10) result = result.toString(radix);
  $('txt-input').value = result;
  updateDisplay();
  $('txt-input').select();
}

function ln(x) {
  return Math.log(x);
}

function naturalLog() {
  backupUndo();
  var objX;

  if (stackFocus) {
    objX = stack[getIndex('lst-stack') - stackSize];
  } else {
    objX = getX();
  }
  var x = isNaN(objX.getRealPart()) && isNaN(objX.getImaginary()) ? calculate(objX.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : parseFloat(objX.getRealPart());
  var result = ln(x);

  if (radix !== 10) result = result.toString(radix);
  $('txt-input').value = result;
  $('txt-input').select();
}

function btnRoot() {
  if (shifted) {
    radical();
  } else {
    exponential();
  }
}

function mathPow(y, x) {
  return Math.pow(y, x);
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
    if (stack.length - 1 < 0 || (isNaN(calculate(stack[stack.length - 1].getSoul())) && !isANumber(stack[stack.length - 1].getRealPart()) && !isANumber(stack[stack.length - 1].getImaginary()))) {
      enterInput();
      $('txt-input').value = '2';
    }
    objY = stack.pop();
  }  
  objX = getX();

  y = buildComplexNumber(objY); 
  x = buildComplexNumber(objX);
  result = math.pow(y, x).toString().replace(/i$/, 'j');
  
  if (radix !== 10) result = result.toString(radix);  
  newUnits = multiplyUnits(decodeSpecialChar(objX.getUnits()), decodeSpecialChar(objY.getUnits()), x); 
  displayResult(result, newUnits);
}

function mathRoot(x, y) {
  var result;
  if (y === undefined) {
    y = x;
    x = 2;
  }  
  if (y > 0) {
    result = Math.pow(y, 1/x);
  } else {    
    result = Math.pow(-y, 1/x);
    if (x % 2 === 0) {
      result += 'j';
    } else {
      result = result * -1;
    }
  }
  return result;
}

function radical() {
  backupUndo();  
  var objX;
  var objY;
  var x;
  var y;
  var result;
  var resultArr;
  var newUnits = '';
  
  if (stackFocus) {
    objY = stack[getIndex('lst-stack') - stackSize];
  } else {
    if (stack.length - 1 < 0 || (isNaN(calculate(stack[stack.length - 1].getSoul())) && !isANumber(stack[stack.length - 1].getRealPart()) && !isANumber(stack[stack.length - 1].getImaginary()))) {
      enterInput();
      $('txt-input').value = '2';
    }
    objY = stack.pop();
  }
  objX = getX();

  x = isNaN(objX.getRealPart()) && isNaN(objX.getImaginary()) ? calculate(objX.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : parseFloat(objX.getRealPart());
  y = buildComplexNumber(objY);
  
  result = math.nthRoots(y, x).toString().replace(/i/, 'j');
  resultArr = result.split(',');
  newUnits = multiplyUnits(decodeSpecialChar(objX.getUnits()), decodeSpecialChar(objY.getUnits()), 1/x); 
  
  for (var i = 0; i < resultArr.length; i++) {
    resultArr[i] = resultArr[i].replace(/i$/, 'j');
    if (radix !== 10) resultArr[i] = resultArr[i].toString(radix);  
    displayResult(resultArr[i], newUnits);
    if (i < resultArr.length - 1) enterInput();
  }
}

function btnPi() {
  if (shifted) {
    backupUndo();
    btnParenthesis();
  } else {
    if (!/[ⅽ℮ɢΦa-zA-Z0-9]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[π]/ , 'π');
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
    // Auto-complete parentesis
    $('txt-input').value = $('txt-input').value.trim() + ')';
  } else {
    insertAroundSelection($('txt-input'), '(' + returnSelectedText('txt-input') + ')');
  }
  $('txt-input').focus();
}

function btnModulus() {  
  if (shifted) {
    if (!/[=]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[√]/, '√');
  } else {
    modulus();
  }  
}

function modulus() {
  backupUndo();
  var objY;

  if (stackFocus) {
    objY = stack[getIndex('lst-stack') - stackSize];
  } else {
    if (stack.length - 1 < 0 || (isNaN(calculate(stack[stack.length - 1].getSoul())) && !isANumber(stack[stack.length - 1].getRealPart()) && !isANumber(stack[stack.length - 1].getImaginary()))) {
      enterInput();
      $('txt-input').value = '2';
    }
    objY = stack.pop();
  }
  var objX = getX();
  var y = isNaN(objY.getRealPart()) && isNaN(objY.getImaginary()) ? calculate(objY.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : parseFloat(objY.getRealPart());  
  var x = isNaN(objX.getRealPart()) && isNaN(objX.getImaginary()) ? calculate(objX.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, '')) : parseFloat(objX.getRealPart());  
  var newUnits = '';
  var result = y % x;
  
  if (radix !== 10) result = result.toString(radix);
  newUnits = divideUnits(decodeSpecialChar(objX.getUnits()), decodeSpecialChar(objY.getUnits()), 1); 
  result += decodeSpecialChar(newUnits);
  $('txt-input').value = result;
  updateDisplay();
  $('txt-input').select();
}

function btnSign() {  
  if (shifted) {
    if (!/[-+*/√%=]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[\^]/, '^');
  } else {
    signChange();
  }
}

function leadingSignChange(x) {

  if (x.charAt(0) === '-') {
    x =  '+' + x.slice(1);
  } else {
    if (x.charAt(0) === '+') x = x.slice(1);
    x =  '-' + x;
  }
  return x.trim();
}

// function signChange() {
//   backupUndo();
//   var x = '';
  
//   if (stackFocus) {// Rebild x from stack
//     var objY = stack[getIndex('lst-stack') - stackSize];

//     if (isANumber(objY.getRealPart())) x += objY.getRealPart();
//     if (x) x += ' ';
//     if (isANumber(objY.getImaginary())) {
//       if (objY.getImaginary().charAt(0) === '-') {
//         if (x) x += '- '
//         x += (objY.getImaginary().toString()).slice(1) + 'j';
//       } else {
//         if (x) x += '+ ';
//         x += objY.getImaginary() + 'j';
//       }
//     }
//     if (objY.getUnits() !== 'null') x += ' ' + objY.getUnits();
//     if(!x) x = decodeSpecialChar(objY.getSoul());
//     $('txt-input').value = x.trim();
//   }  
//   x = $('txt-input').value;
//   var startPos = $('txt-input').selectionStart;
//   if (startPos === 0 || (startPos >= x.length && !/[-+eE^√ ]/.test(x.charAt(startPos - 1)))) {
//     x = leadingSignChange(x);
//   } else {
//     if (/[-+]/.test(x.charAt(startPos - 1))) {
//       if (/-/.test(x.charAt(startPos - 1))) {
//         x = x.removeAt(startPos - 1, startPos);
//         if (/ /.test(x.charAt(startPos - 2))) {// If there is a space to the left, explicit '+' inserted           
//           x = x.insertAt(startPos - 1, '+');
//           startPos ++;
//         }
//       }
//       if (/[+]/.test(x.charAt(startPos - 1))) {          
//         x = x.removeAt(startPos - 1, startPos);
//         x = x.insertAt(startPos - 1, '-');
//         startPos ++;
//       }
//       $('txt-input').value = x;
//       $('txt-input').selectionStart = startPos - 1;
//       $('txt-input').selectionEnd = startPos - 1;

//     } else if (/[eE^√ ]/.test(x.charAt(startPos - 1)) && !/[-+]/.test(x.charAt(startPos)) && !/[-+][ ]*$/.test(x)) {
//       if (/ /.test(x.charAt(startPos - 1))) {    
//         x = x.insertAt(startPos, '-');
//         startPos = startPos + 2;
//       }
//       if (/[eE^√]/.test(x.charAt(startPos - 1))) {
//         if (/[-]/.test(x.charAt(startPos))) {
//           x = x.removeAt(startPos, startPos + 1);
//           startPos ++;            
//         } else if (/[+]/.test(x.charAt(startPos))) {                  
//           x = x.removeAt(startPos, startPos + 1);
//           x = x.insertAt(startPos, '-');
//           startPos = startPos + 2;
//         } else if (!/[-]/.test(x.charAt(startPos))) {
//           x = x.insertAt(startPos, '-')
//           startPos = startPos + 2;
//         }
//       }
//       $('txt-input').value = x;
//       $('txt-input').selectionStart = startPos - 1;
//       $('txt-input').selectionEnd = startPos - 1;
//     }       
//   }  
//   // if (radix !== 10) { }    
//   $('txt-input').value = x;
//   $('txt-input').focus();
// }

function signChange() {
  backupUndo();
  var x = '';
  
  if (stackFocus) {// Rebild x from stack
    var objY = stack[getIndex('lst-stack') - stackSize];

    if (isANumber(objY.getRealPart())) x += objY.getRealPart();
    if (x) x += ' ';
    if (isANumber(objY.getImaginary())) {
      if (objY.getImaginary().charAt(0) === '-') {
        if (x) x += '- '
        x += (objY.getImaginary().toString()).slice(1) + 'j';
      } else {
        if (x) x += '+ ';
        x += objY.getImaginary() + 'j';
      }
    }
    if (objY.getUnits() !== 'null') x += ' ' + objY.getUnits();
    if(!x) x = decodeSpecialChar(objY.getSoul());
    $('txt-input').value = x.trim();
  }  
  x = $('txt-input').value;
  var startPos = $('txt-input').selectionStart;
  if (startPos === 0 || (startPos >= x.length && !/[-+eE^√ ]/.test(x.charAt(startPos - 1)))) {
    x = leadingSignChange(x);
  } else {
    if (/[-+]/.test(x.charAt(startPos - 1))) {
      if (/-/.test(x.charAt(startPos - 1))) {
        x = x.removeAt(startPos - 1, startPos);
        if (/ /.test(x.charAt(startPos - 2))) {// If there is a space to the left, explicit '+' inserted           
          x = x.insertAt(startPos - 1, '+');
          startPos ++;
        }
      }
      if (/[+]/.test(x.charAt(startPos - 1))) {          
        x = x.removeAt(startPos - 1, startPos);
        x = x.insertAt(startPos - 1, '-');
        startPos ++;
      }
      $('txt-input').value = x;
      $('txt-input').selectionStart = startPos - 1;
      $('txt-input').selectionEnd = startPos - 1;

    } else if (/[eE^√ ]/.test(x.charAt(startPos - 1)) && !/[-+]/.test(x.charAt(startPos)) && !/[-+][ ]*$/.test(x)) {
      if (/ /.test(x.charAt(startPos - 1))) {    
        x = x.insertAt(startPos, '-');
        startPos = startPos + 2;
      }
      if (/[eE^√]/.test(x.charAt(startPos - 1))) {
        if (/[-]/.test(x.charAt(startPos))) {
          x = x.removeAt(startPos, startPos + 1);
          startPos ++;            
        } else if (/[+]/.test(x.charAt(startPos))) {                  
          x = x.removeAt(startPos, startPos + 1);
          x = x.insertAt(startPos, '-');
          startPos = startPos + 2;
        } else if (!/[-]/.test(x.charAt(startPos))) {
          x = x.insertAt(startPos, '-')
          startPos = startPos + 2;
        }
      }
      $('txt-input').value = x;
      $('txt-input').selectionStart = startPos - 1;
      $('txt-input').selectionEnd = startPos - 1;
    }       
  }  
  // if (radix !== 10) { }    
  $('txt-input').value = x;
  $('txt-input').focus();
}

//////// Basic Maths Buttons /////////////////////////////////////////////////////////

function btnDivide() {  
  if (shifted) {
    if (!/[-+*√^%=]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[/]/, '/');
  } else {
    division();
  }  
}

function division() {
  backupUndo();
  var objX = getX();
  var objY;
  var x;
  var y;
  var result;
  var newUnits = '';

  if (stackFocus) {
    objY = stack[getIndex('lst-stack') - stackSize];
  } else {
    objY = stack.pop();
  }
  if (objY === undefined) objY = new NumberObject('', 'NaN', 'NaN','null');  
  
  y = buildComplexNumber(objY); 
  x = buildComplexNumber(objX);
  result = math.divide(y, x).toString().replace(/i$/, 'j');

  if (radix !== 10) result = result.toString(radix);  
  newUnits = divideUnits(decodeSpecialChar(objX.getUnits()), decodeSpecialChar(objY.getUnits()), 1);
  displayResult(result, newUnits);
}

function btnMultiply() {  
  if (shifted) {
    if (!/[-+/√^%=]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[*]/, '*');
  } else {
    multiplication();
  }      
}

function multiplication() {
  backupUndo();
  var objX = getX();
  var objY;
  var x;
  var y;
  var result;
  var newUnits = '';

  if (stackFocus) {
    objY = stack[getIndex('lst-stack') - stackSize];
  } else {
    objY = stack.pop();
  }
  if (objY === undefined) objY = new NumberObject('', 'NaN', 'NaN','null');  
  
  y = buildComplexNumber(objY); 
  x = buildComplexNumber(objX);
  result = math.multiply(y, x).toString().replace(/i$/, 'j');

  if (radix !== 10) result = result.toString(radix);  
  newUnits = multiplyUnits(decodeSpecialChar(objX.getUnits()), decodeSpecialChar(objY.getUnits()), 1);
  displayResult(result, newUnits);
}

function btnSubtract() {  
  if (shifted) {
    buttonInsert(/[-]/, '-');
  } else {
    subtraction();
  }  
}

function subtraction() {
  backupUndo();
  var objX = getX();
  var objY;
  var x;
  var y;
  var result;
  var newUnits = '';

  if (stackFocus) {
    objY = stack[getIndex('lst-stack') - stackSize];
  } else {
    objY = stack.pop();
  }
  if (objY === undefined) objY = new NumberObject('', 'NaN', 'NaN','null');  
  
  y = buildComplexNumber(objY); 
  x = buildComplexNumber(objX);
  result = math.subtract(y, x).toString().replace(/i$/, 'j');

  if (radix !== 10) result = result.toString(radix);  
  newUnits = addUnits(decodeSpecialChar(objX.getUnits()), decodeSpecialChar(objY.getUnits()));
  displayResult(result, newUnits);
}

function btnAdd() {  
  if (shifted) {
    if (!/[-*/√^%=]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[+]/, '+');
  } else {
    addition();
  }  
}

function addition() {
  backupUndo();
  var objX = getX();
  var objY;
  var x;
  var y;
  var result;
  var newUnits = '';

  if (stackFocus) {
    objY = stack[getIndex('lst-stack') - stackSize];
  } else {
    objY = stack.pop();
  }
  if (objY === undefined) objY = new NumberObject('', 'NaN', 'NaN','null');  
  
  y = buildComplexNumber(objY); 
  x = buildComplexNumber(objX);
  result = math.add(y, x).toString().replace(/i$/, 'j');
  
  if (radix !== 10) result = result.toString(radix);  
  newUnits = addUnits(decodeSpecialChar(objX.getUnits()), decodeSpecialChar(objY.getUnits()));
  displayResult(result, newUnits);
}

function buildComplexNumber(obj) {
  var a = 0;
  var b = 0;
  
  if (!isANumber(obj.getRealPart()) && !isANumber(obj.getImaginary())) {
    a = calculate(obj.getSoul().replace(/(?![eE][-+]?[0-9]+)(?![j]\b) (?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/, ''));
  } else {
    if (isANumber(obj.getRealPart())) a = calculate(obj.getRealPart());
    if (isANumber(obj.getImaginary())) b = calculate(obj.getImaginary());
  }
  return math.complex(a, b);
}

function displayResult(result, newUnits) {  
  result = formatNumber(result);
  if (result !== '0') result += decodeSpecialChar(newUnits);
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
  } else {
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
  var objX;

  if (stackFocus) {
    objX = stack[getIndex('lst-stack') - stackSize];
  } else {
    objX = getX();
  }
  if (objX === undefined) objX = new NumberObject('', 'NaN', 'NaN','null');
  x = buildComplexNumber(objX);

  if (shifted) {
    $('txt-input').value = asin(x);
  } else {
    $('txt-input').value = sin(x);
  }
  $('txt-input').select();
}

function btnCosine() {
  backupUndo();
  var objX;

  if (stackFocus) {
    objX = stack[getIndex('lst-stack') - stackSize];
  } else {
    objX = getX();
  }
  if (objX === undefined) objX = new NumberObject('', 'NaN', 'NaN','null');
  x = buildComplexNumber(objX);

  if (shifted) {
    $('txt-input').value = acos(x);
  } else {
    $('txt-input').value = cos(x);
  }
  $('txt-input').select()
}

function btnTangent() {
  backupUndo();
  var objX;

  if (stackFocus) {
    objX = stack[getIndex('lst-stack') - stackSize];
  } else {
    objX = getX();
  }
  if (objX === undefined) objX = new NumberObject('', 'NaN', 'NaN','null');
  x = buildComplexNumber(objX);

  if (shifted) {
    $('txt-input').value = atan(x);
  } else {
    $('txt-input').value = tan(x);
  }
  $('txt-input').select()
}

function sin(x) {
  if ($('btn-angle').value === 'deg') {
    x.re = x.re * Math.PI / 180;
    x.im = x.im * Math.PI / 180;
  }
  return math.sin(x).toString().replace(/i$/, 'j');
}

function cos(x) {
  if ($('btn-angle').value === 'deg') {
    x.re = x.re * Math.PI / 180;
    x.im = x.im * Math.PI / 180;
  }
  return math.cos(x).toString().replace(/i$/, 'j');
}

function tan(x) {
  if ($('btn-angle').value === 'deg') {
    x.re = x.re * Math.PI / 180;
    x.im = x.im * Math.PI / 180;
  }
  return math.tan(x).toString().replace(/i$/, 'j');
}


function asin(x) {
  x = math.asin(x);
  if ($('btn-angle').value === 'deg') {
    x.re = x.re * 180 / Math.PI;
    x.im = x.im * 180 / Math.PI;
  }
  return x.toString().replace(/i$/, 'j');
}

function acos(x) {
  x = math.acos(x);
  if ($('btn-angle').value === 'deg') {
    x.re = x.re * 180 / Math.PI;
    x.im = x.im * 180 / Math.PI;
  }
  return x.toString().replace(/i$/, 'j');
}

function atan(x) {
  x = math.atan(x);
  if ($('btn-angle').value === 'deg') {
    x.re = x.re * 180 / Math.PI;
    x.im = x.im * 180 / Math.PI;
  }
  return x.toString().replace(/i$/, 'j');
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
    if (!/[√]$/.test($('txt-input').value) && !/===/g.test($('txt-input').value) || isTextSelected($('txt-input'))) insertAtCursor($('txt-input'), '=');
  } else {
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
          } else {
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

/**
 * Get the user IP through the webkitRTCPeerConnection
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

function getIP() {
  if (/*@cc_on!@*/false || !!document.documentMode) {// IE
    rpnAlert('Not supported by this browser.');
  } else {
    getUserIP(function (ip) {
      inputText(ip);
    });
  }
}

function autoDark() {
  var hour = new Date().getHours();
  if (hour <= 6 || hour >= 18) {
    $('menu-darkmode').innerHTML = 'Dark';
    toggleDarkMode();
  }
}

/**
 * https://tinloof.com/blog/how-to-build-a-stopwatch-with-html-css-js-react-part-2/
**/
var startTime;
var elapsedTime = 0;
var timerInterval;
var flashInterval;
var alertTimer;

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
  btnEnter();
}

function stopwatchStart(seconds) { 
  console.log('elapsedTime', elapsedTime);
  if ($('timer').innerHTML == '') {

    var milliseconds = seconds ? seconds * 1000 : 10;
    elapsedTime = 0;
    startTime = Date.now() - elapsedTime;

    if (stack[stack.length - 1].getSoul() === 'stopwatch') stack.pop();
    inputText('Quit the stopwatch/timer with the \'stop\' command or by clicking Stopwatch menu item.');
    updateDisplay();

    if (seconds) {
      alertTimer = setTimeout(function() {
        rpnAlert('Timer completed: ' + (1 + parseInt(elapsedTime / 1000)) + ' s');
        elapsedTime = 0;
        clearInterval(timerInterval);
        $('timer').innerHTML = '';
        if (!$('menu-haptic-li').classList.contains('strikethrough')) navigator.vibrate(300);
        //if (!$('menu-haptic-li').classList.contains('strikethrough')) navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100]);// Morse code - 'SOS'
        playAudio($('dual-red-alert'));
        // playAudio($('computerscanner'));
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
  
  if (commandArray[1] !== undefined) {
    switch (commandArray[1]) {    
    case 'about':
      inputText($('lst-stack').getAttribute('placeholder'));
      enterInput();
      inputText('https://github.com/NapesWeaver/rpnapes');
      break;
    case 'average':
      inputText('average: Finds the average of stack elements that are not NaN and returns the result.');
      break;
    case 'darkmode':
      inputText('darkmode: Toggle between light and dark themes.');
      break;
    case 'date':
      inputText('date: Returns the current date.');
      break;
    case 'duckgo':
      inputText('duckgo [query]: Search DuckDuckGo. If no argument is supplied in-line, last entry on stack is used as query.');
      break; 
    case 'clear':
      inputText('clear: Clears the displays. Alias: cls');
      break;
    case 'constants':
      inputText('constants: Displays the values of \'constants\'. Reassingment of \'constants\' is allowed. Opening Constants or Formulas menu resets all \'constants\'.');
      break;
    case 'embed':
      inputText('embed [URL]: Embed URL into Tricorder iFrame (Tricorder \'button\' 6). If no argument is supplied in-line, last entry on stack is used for URL.');
      break;
    case 'eng':
      inputText('eng [n]: Engineering notation. Precision 1 to 17. If no argument is supplied in-line, last entry on stack is used. Turn engineering notation off with -1.');
      break;
    case 'flightlogger':
      inputText('flightlogger: Opens Flight Logger in a new tab.');
      break;
    case 'fix':
      inputText('fix [n]: Fix number of decimals shown on the stack (0 to 17). If no argument is supplied in-line, last entry on stack is used. Turn fixed decimals off with -1.');
      break;
    case 'google':
      inputText('google [query]: Search Google / open link or IP address. If no argument is supplied in-line, last entry on stack is used as query. Alias: go');
      break;
    case 'ipmapper':
      inputText('ipmapper: Opens IP Mapper in a new tab.');
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
      inputText('acos(x) asin(x) atan(x) cos(x) sin(x) tan(x) ln(x) log([x],y) pow([x],y) root([x],y)');
      break;
    case 'max':
      inputText('max: Find the stack element with the maximum value that is not NaN.');
      break;
    case 'min':
      inputText('min: Find the stack element with the minimum value that is not NaN.');
      break;
    case 'napes':
      inputText('napes: Switch to Referances interface.');
      break;
    case 'notes':
      inputText('notes: Switch to Notes interface.');
      break;
    case 'open':
      inputText('open: Open a text file onto the Stack. A bug prohibits loading the same file successively ;(');
      break;
    case 'opennotes':
      inputText('opennotes: Open a text file into Notes.');
      break;
    case 'off':
      $('txt-input').value = 'off: Close browser tab or redirect to google.com.';
      enterInput();
      $('txt-input').value ='Firefox users may go to about:config dom.allow_scripts_to_close_windows = true.';
      enterInput();
      $('txt-input').value ='Try \'Open in new tab\' first though. Or set as home page ;)';
      enterInput();
      $('txt-input').value ='Not currently working for browsers on mobile devices :(';
      break;
    case 'paste':
      inputText('paste: Firefox only supports reading the clipboard in browser extensions using the "clipboardRead" extension permission :(');
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
    case 'saveas':
      inputText('saveas [filename]: Saves the stack to a text file. If no argument is supplied in-line, last entry on stack is used as the filename.');
      break;
    case 'sci':
      inputText('sci [n]: Scientific notation. Precision 0 to 17. If no argument is supplied in-line, last entry on stack is used. Turn scientific notation off with -1.');
      break;
    case 'shortcuts':
      inputText('Ctrl + z = Undo, Ctrl + y = Redo, Ctrl + s = Save, Alt + Shift = Shift Keypad, Esc = Toggle interface button.');
      break;
    case 'sort':
      inputText('sort [unit|asc|desc] [asc|desc]: Sort stack. Ascending order by default. Sorting by units is also supported. Example usage: \'sort unit desc\'.');
      break;
    case 'sound':
      inputText('sound: Toggle sound.');
      break;
    case 'stopwatch':
      inputText('stopwatch: Starts the stopwatch.  Clicking timer enters lap times. Stop the stopwatch with the \'stop\' command. Alternatively, clicking the Stopwatch menu item (Tools -> Programs -> Stopwatch) will start and stop the stopwatch.');
      break;
    case 'stop':
      inputText('stop: Stop/cancel the stopwatch/timer. Alternatively, click stopwatch menu item.');
      break;
    case 'time':
      inputText('time: Returns the current time.');
      break;
    case 'timer':
      inputText('timer [n]: Set a timer, in seconds. If no argument is supplied in-line, the last entry on the stack is used. Turn sound on from the menu (Veiw -> Sound) for alarm. Cancel timer with the \'stop\' command or by clicking the Stopwatch menu item (Tools -> Programs -> Stopwatch).');
      break;
    case 'total':
      inputText('total: Totals the stack elements that are not NaN and returns the result.');
      break;
    case 'tostring':
      inputText('tostring [filename]: Saves the Stack to a text file showing all fields for each Stack entry. If no argument is supplied in-line, last entry on stack is used as the filename.');
      break;
    case 'tricorder':
      inputText('tricorder: Opens the Tricorder interface. Alias: tri');
      break;
    case 'unembed':
      inputText('unembed: Removes the last embedded video from Tricorder iFrame.');
      break;
    case 'wiki':
      inputText('wiki [query]: Search Wikipedia. If no argument is supplied in-line, last entry on stack is used as query.');
      break;    
    case 'youtube':
      inputText('youtube [query]: Search youtube. If no argument is supplied in-line, last entry on stack is used as query. Alias: you');
      break;    
    default:// case NOT a help argument
      enterInput();
      return;
    }
  } else {
    inputText('about, average, clear, constants, darkmode, date, duckgo, embed, eng, fix, flightlogger, google, ipmapper, haptic, keyboard, load, locus, maths, max, min, notes, open, opennotes, off, paste, print, run, save, saveas, sci, shortcuts, sort, sound, stopwatch, stop, time, timer, total, tostring, unembed, wiki, youtube');
  }
  enterInput();
  $('txt-input').value = '';
  updateDisplay();
}

function parseCommand() {
  var command = $('txt-input').value.trim();
  var stackedCommand = stack[stack.length - 2] ? stack[stack.length - 2] : new NumberObject('', NaN, NaN, 'null');
 
  // Commands consist of words and numbers and URLs
  if (!/[,*√=ⅽ℮ɢΦπ\\^]+/.test(command)) {    
    var commandArray = command.split(' ');       
    // NOT help with word and no space, NOT help with number, NOT help with word and number, NOT help with word and alphanumeric word
    if (command.match(/(?!help[A-Za-z]+)(?!help ?[0-9])(?!help [A-Za-z ]+[0-9]+)(?!help [A-Za-z]+ +[0-9A-Za-z]+)^help ?[A-Za-z]*/)) {
      stack.pop();      
      help(command);
    }
    // NOT fix with number and no space, NOT fix with word, NOT fix with number and word, NOT fix with number and alphanumeric word
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
    }
    // NOT sci with number and no space, NOT sci with word, NOT sci with number and word, NOT sci with number and alphanumeric word
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
    }
    // NOT eng with number and no space, NOT eng with word, NOT eng with number and word, NOT eng with number and alphanumeric word
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
    }
    // NOT timer with number and no space, NOT timer with word, NOT timer with number and word, NOT timer with number and alphanumeric word 
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
    }
    // NOT saveas with word and no space, NOT saveas with number, NOT saveas with word and alphanumeric word
    if (command.match(/(?!saveas[A-Za-z]+)(?!saveas ?[0-9])(?!saveas [A-Za-z]+ +[0-9A-Za-z]+)^saveas ?[A-Za-z]*/)) {    
      
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
    // NOT sort with word and no space, NOT sort with number, NOT sort with word and number, NOT sort with word and two more alphanumeric words
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
    }
    // NOT tostring with word and no space, NOT tostring with number, NOT tostring with word and alphanumeric word
    if (command.match(/(?!tostring[A-Za-z]+)(?!tostring ?[0-9])(?!tostring [A-Za-z]+ +[0-9A-Za-z]+)^tostring ?[A-Za-z]*/)) {    

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
      inputText($('lst-stack').getAttribute('placeholder'));
      enterInput();
      inputText('https://github.com/NapesWeaver/rpnapes');
      enterInput();
      updateDisplay();
      $('txt-input').value = '';
      break;
    case 'average':
      stack.pop();
      updateDisplay();
      inputText(averageStack());
      break;
    case 'constants':
      stack.pop();
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
    case 'fizzBuzz':
      fizzBuzz();
      break;  
    case 'flightlogger':
      stack.pop();
      $('txt-input').value = '';
      updateDisplay();
      window.open('https://orbiter-flight-logger.herokuapp.com/', '_blank').focus();
      break;
    case 'gravity':
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
    case 'ipmapper':
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
    case 'login':
      window.location.href = '/login'; 
      break;
    case 'logout':
      window.location.href = '/logout'; 
      break;
    case 'maths':
      stack.pop();
      inputText('acos(x) asin(x) atan(x) cos(x) sin(x) tan(x) ln(x) log([x],y) pow([x],y) root([x],y)');
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
    case 'napes':
      window.location.href = 'https://napesweaver.github.io/rpnapes/reference/html.html';
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
    case 'shortcuts':
      stack.pop();
      inputText('Ctrl + z = Undo, Ctrl + y = Redo, Ctrl + s = Save, Alt + Shift = Shift Keypad, Esc = Toggle interface button.');
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
      stack.pop();
      updateDisplay();
      $('txt-input').value = '';
      showTricorder();
      break;
    case 'tricorder':
      stack.pop();
      updateDisplay();
      $('txt-input').value = '';
      showTricorder();
      break;
    case 'twig':
      stack.pop();
      updateDisplay();
      $('txt-input').value = '';         
      monOn();
      break;
    case 'unembed':
      stack.pop();
      updateDisplay();
      $('txt-input').value = ''; 
      widgetSrc.shift();
      saveTricorder();
      break;
    default:
      if (twig.health > 0) {
        $('twig').src = 'images/twig/hat-tip.gif';
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
    while (/\([-+*/!^√ⅽ℮ɢΦπ.\w]+!\)/.test(input)) input = parseNested(input, '!', 'factorial(');
    while (/\([-+*/!^√ⅽ℮ɢΦπ.\w]+√[-+*/!^√ⅽ℮ɢΦπ.\w]+\)/.test(input)) input = parseNested(input, '√', 'mathRoot('); 
    while (/\([-+*/!^√ⅽ℮ɢΦπ.\w]+\^[-+*/!^√ⅽ℮ɢΦπ.\w]+\)/.test(input)) input = parseNested(input, '^', 'mathPow(');
    // Parse in-line symbols
    while (/[ⅽ℮ɢΦπ.\w)]!/.test(input)) input = parseInline(input, '!', 'factorial(');
    // while (/√[ⅽ℮ɢΦπ.\w(]/.test(input)) input = parseInline(input, '√', 'mathRoot(');
    while (/√[-ⅽ℮ɢΦπ.\w(]/.test(input)) input = parseInline(input, '√', 'mathRoot(');
    while (/[ⅽ℮ɢΦπ.\w)]\^[-√ⅽ℮ɢΦπ.\w(]/.test(input)) input = parseInline(input, '^', 'mathPow(');
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
  // Get nested parenthesis indices
  while (startPos === 0) {
    index++;
    if (inputArr[index] === symbol && inputArr[index + 1] !== '(') startPos = index;
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
  if (!/\(\)/.test(maths)) {// Overwrite parenthesis
    inputArr.splice(leftP + 1, rightP - leftP - 1, maths);
  } else {// Keep parenthesis
    inputArr.splice(leftP, rightP - leftP + 1, maths);
  }
  input = inputArr.join('');  
  return input;
}

function parseInline(input, symbol, prefix) {
  var inputArr = input.split('');
  var index = 0;
  var endPos = 0;
  var parenthesis = 0;
  // Overwrite symbol
  while (inputArr[index] !== symbol) { index++; }  
  if (prefix === 'factorial(' || (prefix === 'mathRoot(' && (inputArr[index - 1] === undefined || !/[\d\w)ⅽ℮ɢΦπ]/g.test(inputArr[index - 1])))) {    
    // inputArr[index] = '';// ! or √n
    if (prefix === 'mathRoot(') {
      inputArr[index] = ',';
      inputArr.splice(index, 0, '2');
    } else {
      inputArr[index] = '';
    } 
  } else {    
    inputArr[index] = ',';// n^n or n√n
  }
  endPos = index;
  // Insert prefix
  while (index > 0 && ((!/[-+*/^√(]/.test(inputArr[index]) || /[a-z]/.test(inputArr[index - 1])) || parenthesis > 0)) {
    index--; 
    if (inputArr[index] === ')') parenthesis++;
    if (inputArr[index] === '(') parenthesis--;  
  }
  if (parenthesis > -1 && index === 0 || (inputArr[index] === '(' && parenthesis === 0)) {
    if (symbol === '!' && /[√]/.test(inputArr[index])) index ++;
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
    // if (inputArr[endPos] === ',' && inputArr[endPos + 1] === '-') endPos = endPos + 2;// Returns NaN for negative roots    
    if ((inputArr[endPos] === ',' || inputArr[endPos] === '') && inputArr[endPos + 1] === '-') endPos = endPos + 2;// Parse negative roots e.g. √-16 with (inputArr[endPos] === '') check
  } while (endPos < inputArr.length && ((!/[-+*/^√)]/.test(inputArr[endPos])) || /[Ee]/.test(inputArr[endPos - 1]) || parenthesis > 0)); 
  
  inputArr.splice(endPos, 0, ')');
  input = inputArr.join('');
  return input;
}

// User functions
function pow(y, x) {
  if (x === undefined) x = 2;
  return mathPow(y, x);
}

function root(y, x) {
  return mathRoot(x, y);
}

// Wired to HTML
function lstStackFocus() {
  stackFocus = true;  
}

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

function onClickSelection(textarea){ 
  // https://stackoverflow.com/questions/13650534/how-to-select-line-of-text-in-textarea
  if (typeof textarea.selectionStart ==='undefined') return false;
  var startPos = (textarea.value.slice(0,textarea.selectionStart).lastIndexOf('\n') >= 0) ? textarea.value.slice(0,textarea.selectionStart).lastIndexOf('\n') : 0;
  var endPos = (textarea.value.slice(textarea.selectionEnd,textarea.value.length).indexOf('\n') >= 0) ? textarea.selectionEnd+textarea.value.slice(textarea.selectionEnd,textarea.value.length).indexOf('\n') : textarea.value.length;
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
  backupUndo();
  if (!shifted) btnShift();
  $('txt-input').value = 'maxCount = prompt("Enter a number number", "25");';
  enterInput();
  calculate($('txt-input').value);
  $('txt-input').value = 'getFizzBuzz = function(w){ word = w;if (w % 3 === 0) word = "fizz"; if(w % 5 === 0) word = "buzz"; if (w % 15 === 0) word = "fizzbuzz"; return word}';
  enterInput();
  calculate($('txt-input').value);
  $('txt-input').value = 'for(w = 1; w <= maxCount; w++){ word=getFizzBuzz(w); $("txt-input").value=""; $("txt-input").value=word; enterInput(); }';
  enterInput();
  calculate($('txt-input').value);
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

  txtField.value = txtField.value.slice(0, startPos) + txtValue + txtField.value.slice(endPos, txtField.value.length);
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
    rpnAlert(err);
  }  
}

function rpnAlert(text) {
  backupUndo();
  $('txt-input').value = text;
  $('txt-input').select();
}

function inputText(text) {
  $('txt-input').value = text;
}

function insertText(text) {
  backupUndo();
  insertAtCursor($('txt-input'), text);
  $('txt-input').focus();
}

function updateDisplay() {
  $('lst-stack').value = '';  
  // Needed for responsive textarea
  unFloat();
  // Buffer stack display
  for (var i = 0; i < $('lst-stack').getAttribute('rows') ; i++) {
    $('lst-stack').value += ' \n';
  }
  // Print to stack display
  for (var sta in stack) {
    $('lst-stack').value += '\n';
    $('lst-stack').value = prettyPrint(sta, $('lst-stack').value);
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
  if (isNaN(testString)) isNum = false;
  if (/[ⅽ℮ɢΦπ]/g.test(testString)) isNum = true;
  return isNum;
}

function willCalculate(expression) {
  var calculated = false;
  if (!isNaN(calculate(expression))) calculated = true;
  return calculated;
}

function prettyPrint(i, content) {
  // If not a number and not imaginary
  if (!isANumber(stack[i].getRealPart()) && !isANumber(stack[i].getImaginary())) {
    content += decodeSpecialChar(stack[i].getSoul());
  } else {// There is a real component
    if (isANumber(stack[i].getRealPart())) {
      content += formatNumber(stack[i].getRealPart().toString());
      if (isANumber(stack[i].getImaginary())) {// There is an imanginary component        
        if (stack[i].getImaginary().charAt(0) === '-') {
          // Append negative imaginary number
          content += ' - ' + formatNumber(stack[i].getImaginary().toString()).slice(1) + 'j';
        } else {
          // Append positive imaginary number
          content += ' + ' + formatNumber(stack[i].getImaginary().toString()) + 'j';
        }
      }
    } else {// There is no real component
      if (stack[i].getImaginary().charAt(0) === '-') {
        // Append negative imaginary number
        content += '-' + formatNumber(stack[i].getImaginary().toString()).slice(1) + 'j';
      } else {
        // Append positive imaginary number
        content += formatNumber(stack[i].getImaginary().toString()) + 'j';
      }
    }// If there are units, append units
    if (stack[i].getUnits() !== 'null') content += ' ' + decodeSpecialChar(stack[i].getUnits());          
  }
  return content;
}

function colorSaveButton() {
  var index = 0;
  try {
    index = getCookie('STACK').indexOf('=') + 1;
    if (getCookie('STACK').slice(index) !== nestArrayByBrowser(stack).trim()) {
      $('btn-save').style.color = '#000000';
    } else {
      $('btn-save').style.color = '#D4D0C8';
    }
  } catch (err) { rpnAlert('load Stack error.'); }
}

function storeCookie(aName, tmpArray) {
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
  // tmpString = tmpString.replace(/ⅽ/g, '&#8573');
  // tmpString = tmpString.replace(/℮/g, '&#8494');
  // tmpString = tmpString.replace(/ɢ/g, '&#610');
  // tmpString = tmpString.replace(/Φ/g, '&#934');// Phi 
  return tmpString;
}

function decodeSpecialChar(tmpString) {
  tmpString = tmpString.replace(/&#37/g, '%');
  tmpString = tmpString.replace(/&#44/g, ',');
  tmpString = tmpString.replace(/&#59/g, ';');
  tmpString = tmpString.replace(/&#61/g, '=');
  tmpString = tmpString.replace(/&#95/g, '_');
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
  // tmpString = tmpString.replace(/&#8573/g, 'ⅽ');
  // tmpString = tmpString.replace(/&#8494/g, '℮');
  // tmpString = tmpString.replace(/&#610/g, 'ɢ');
  // tmpString = tmpString.replace(/&#934/g, 'Φ');
  // tmpString = tmpString.replace(/&#960/g, 'π');

  return tmpString;
}

function extractReal(tmpString) {
  var tmpReal = '';
  if (radix === 10) {  
    // Not a constant or number followed by evaluation symbols && not imaginary number && not IP address && not number text number e.g. 2x4
    if (!/^[-+]?[ ]*[ⅽ℮ɢΦπ]?[0-9]*[.]?[0-9]*[eE]?[-+]?[0-9]*\s*[;/<>?:`~!@#$%^√&*×(){}[\]|\\_=]+/g.test(tmpString) && !/^[-+]?[ ]*[ⅽ℮ɢΦπ]?[0-9]*[.]?[0-9]*[eE]?[-+]?[0-9]*j|^[-+]?[ ]*Infinityj/g.test(tmpString) && !/^\d+[.]\d*[.]\d*/g.test(tmpString) && !/^[0-9]+[ ]*[a-df-zA-DF-Z]+[ ]*[0-9]/.test(tmpString)) {
      
      if (/^[-+]?[ ]*Infinity/g.test(tmpString)) {
        tmpReal += tmpString.match(/^[-+]?[ ]*Infinity(?!j)/);
      } else {
        tmpReal += tmpString.match(/^[-+]?[ ]*[ⅽ℮ɢΦπ]?[0-9]*[.]?[0-9]*[eE]?[-+]?[0-9]*(?!j)/);
      }      
    }
    tmpReal = tmpReal.replace(/ /g, '');
    if (tmpReal.charAt(0) === '+') tmpReal = tmpReal.slice(1);
  }
  if (radix === 2) {
    // Looking for a binary number but not an imaginary number
    if (/^[-+]?[0-1]+/g.test(tmpString) && !/^[-+]?[0-1]+j/g.test(tmpString)) {
      tmpReal = parseInt(tmpString, radix);
    }
  }
  if (radix === 8) {
    // Looking for an ocatal number but not an imaginary number
    if (/^[-+]?[0-7]+/g.test(tmpString) && !/^[-+]?[0-7]+j/g.test(tmpString)) {
      tmpReal = parseInt(tmpString, radix);
    }
  }
  if (radix === 16) {
    // Looking for a hexadecimal number but not an imaginary number
    if (/^[-+]?[0-9a-f]+/g.test(tmpString) && !/^[-+]?[0-9a-f]+j/g.test(tmpString)) {
      tmpReal = parseInt(tmpString, radix);
    }
  } 
  
  if (tmpReal === '' || /^[eE]/g.test(tmpReal)) tmpReal = NaN;
  return tmpReal;
}

function extractImaginary(tmpString) {
  var tmpImaginary = '';  

  if (radix === 10) {     
    // if (!/[,]/g.test(tmpString)) {
      tmpImaginary += tmpString.match(/[-+]?[ ]*[ⅽ℮ɢΦπ]?[0-9]*[.]?[0-9]*[eE]?[-+]?[0-9]*j|[-+]?[ ]*Infinityj/);    
      tmpImaginary = tmpImaginary.replace(/ /g, '');
      if (tmpImaginary.charAt(0) === '+') tmpImaginary = tmpImaginary.slice(1);
      // Remove 'j'
      tmpImaginary = tmpImaginary.slice(0, tmpImaginary.length - 1);
    // }
  } else {
    if (radix === 2) tmpImaginary += tmpString.match(/[-+]?[ ]*[0-1]+j/);
    if (radix === 8) tmpImaginary += tmpString.match(/[-+]?[ ]*[0-7]+j/);
    if (radix === 16) tmpImaginary += tmpString.match(/[-+]?[ ]*[a-f0-9]+j/);
    if (tmpImaginary.charAt(1) === ' ') {
      tmpImaginary = tmpImaginary.replace(/ /g, '');
    }
    tmpImaginary = tmpImaginary.slice(0, tmpImaginary.length - 1);
    tmpImaginary = parseInt(tmpImaginary, radix);
  }
  if (tmpImaginary === '' || /^[eE]|nul/g.test(tmpImaginary)) tmpImaginary = NaN;  
  return  '' + tmpImaginary;
}

function extractUnits(tmpString) {
  var tmpUnits = '';
  if (tmpString.indexOf('Infinity') !== -1) tmpString = tmpString.replace(/Infinity/g, '');

  if (radix !== 16) {
    tmpUnits += tmpString.match(/(?![eE][-+]?[0-9]+)(?![j]\b)(?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/);
  } else {
    tmpUnits += tmpString.match(/(?![eE][-+]?[0-9]+)(?![a-f0-9]+j*\b)(?![j]\b)(?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*$/);    
  }
  return tmpUnits;
}

function addUnits(unitsX, unitsY) {
  var units = '';
  if (unitsY !== 'null' && (unitsY === unitsX || unitsX === 'null')) units = unitsY;
  if (unitsX !== 'null' && (unitsX === unitsY || unitsY === 'null')) units = unitsX;
  if (units.indexOf('-') !== -1) units = rewriteNegUnitExp(units);
  if (units) units = ' ' + units;
  return units;
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
    newUnits = ' ' + tmpUnits;
  }
  return newUnits;
}

// https://thisinterestsme.com/change-select-option-javascript/
// Custom function that changes a select element's option.
function resetSelect(selectId, optionValToSelect){
  // Get the select element by it's unique ID.
  var selectElement = document.getElementById(selectId);
  // Get the options.
  var selectOptions = selectElement.options;
  // Loop through these options using a for loop.
  for (var opt, j = 0; opt = selectOptions[j]; j++) {
      // If the option of value is equal to the option we want to select.
      if (opt.value == optionValToSelect) {
          // Select the option and break out of the for loop.
          selectElement.selectedIndex = j;
          break;
      }
  }
}

function setFixDecimal(value) {  

  if (value === '' || isNaN(value) || parseInt(value) < -1 || parseInt(value) > 17) {
    throw 'Enter an integer from -1 to 17.';
  }
  if (value !== '-1') {
    sciDecimal = -1;
    engDecimal = -1;
    $('label-sci').classList.add('hidden');
    $('label-eng').classList.add('hidden');
  } else {
    $('label-sci').classList.remove('hidden');
    $('label-eng').classList.remove('hidden');
  }
  fixDecimal = parseInt(value);
}

function setSciDecimal(value) {

  if (value === '' || isNaN(value) || parseInt(value) < -1 || parseInt(value) > 17) {
    throw 'Enter an integer from -1 to 17.';
  }
  if (value !== '-1') {
    fixDecimal = -1;
    engDecimal = -1;
    $('label-fix').classList.add('hidden');
    $('label-eng').classList.add('hidden');
  } else {
    $('label-fix').classList.remove('hidden');
    $('label-eng').classList.remove('hidden');
  }
  sciDecimal = parseInt(value);
}

function setEngDecimal(value) {

  if (value === '' || isNaN(value) || parseInt(value) < -1 || parseInt(value) > 17) {
    throw 'Enter an integer -1 or 1 to 17.';
  }
  if (value !== '-1') {
    fixDecimal = -1;
    sciDecimal = -1;
    $('label-fix').classList.add('hidden');
    $('label-sci').classList.add('hidden');
  } else {
    $('label-fix').classList.remove('hidden');
    $('label-sci').classList.remove('hidden');
  }
  engDecimal = parseInt(value);
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

function removePositiveNotation(formatted) {
  if (/e[+]0$/g.test(formatted)) formatted = formatted.replace('e+0', '');
  if (/e[+]/g.test(formatted)) formatted = formatted.replace('+', '');  
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

function formatNumber(possibleNumber) {

  if (!/[ⅽ℮ɢΦπ]/.test(possibleNumber)) {
    if (radix === 10) {      
      if (!isNaN(possibleNumber)) {
        if (fixDecimal !== -1) {
          possibleNumber = toFixed(possibleNumber, fixDecimal);
        }
        if (sciDecimal !== -1) {
          possibleNumber = toScientific(possibleNumber, sciDecimal);          
        }
        if (engDecimal !== -1) {
          possibleNumber = toEngineering(possibleNumber, engDecimal);          
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

function colorSaveNotesButton() {
  var index = getCookie('NOTES').indexOf('=') + 1;
  var cookieValue = getCookie('NOTES').slice(index);
  var tmpNotes = encodeSpecialChar($('lst-notes').value);
  var notesValue = nestArrayByBrowser(tmpNotes.split('\n')).trim();
  if (notesValue.slice(notesValue.length -1) === '_') notesValue = notesValue.slice(0, -1);
  if (cookieValue === notesValue) {
    $('btn-save-notes').style.color = '#919191';
  } else {
    $('btn-save-notes').style.color = '#000000';
  }
}

function colorUndoNotesButton() {
  if (backupNotes.length > 1) {
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
  restoreNotes.length = 0;
  backupNotes.push(nestArrayByBrowser(notes));
  notes = $('lst-notes').value.split('\n');
  if (notes[notes.length - 1] === '') notes.pop();
  colorUndoNotesButton(); 
}

function backSpaceUndo() {
  var backupLength = backupNotes[backupNotes.length - 1].replace(' ', '').length;
  var lstNotesLength = $('lst-notes').value.replace(' ', '').length - 1;
  if (lstNotesLength < backupLength) {
    backupUndoNotes();
  }
  colorSaveNotesButton();
}

function loadNotes() {
  var index = 0;  
  index = getCookie('NOTES').indexOf('=') + 1;
  try {
    notes = [];
    notes = notes.concat(splitArrayByBrowser(getCookie('NOTES').slice(index)));
    if (notes[0] === '' && notes[1] === '') notes.pop();
  } catch (err) {
    notes.push('Load error.');
  }
  updateDisplayNotes();
  $('btn-save-notes').style.color = '#919191';
  $('lst-notes').scrollTop = $('lst-notes').scrollHeight;
}

function btnLoadNotes() {
  backupUndoNotes();
  loadNotes();
  if (!isMobile) $('lst-notes').focus();
}

function btnSaveNotes() {
  $('btn-save-notes').style.color = 'rgb(145, 145, 145)';
  notes = encodeSpecialChar($('lst-notes').value.trim()).split('\n');
  storeCookie('NOTES', nestArrayByBrowser(notes));
  if (!isMobile) $('lst-notes').focus();
}

function btnUndoNotes() {
  if (backupNotes.length > 1) {
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
    colorSaveNotesButton();
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
  colorSaveNotesButton();
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
    colorSaveNotesButton();
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
  var index = 0;

  index = getCookie('TRICORDER').indexOf('=') + 1;
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
  $('viewport').src = 'https://www.youtube.com/embed/86YLFOog4GM?autoplay=1&mute=1';// ISS
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

      if ($('widget').src.indexOf('napesweaver') === -1) {
        srcString += 'https://napesweaver.github.io/ip-mapper/';        
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

      if ($('widget').src.indexOf('forecast') === -1) {
        srcString += 'https://forecast.io/embed/#lat=' + lat + '&lon=' + lng + '&name=Current';        
      } else {
        srcString += 'https://maps.darksky.net/@temperature,' + lat + ',' + lng + ',4?embed=true&timeControl=false&fieldControl=true&defaultField=temperature&defaultUnits=_f';
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
  storeCookie('TRICORDER', nestArrayByBrowser(widgetSrc));
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
  var height = $('lst-stack').offsetHeight;
  var width = $('lst-stack').offsetWidth;  

  if (window.innerWidth > 360) {
    worldBorders = {
      bTop: -(height + 345) + 21,
      bBottom: -345,
      bLeft: -129,
      bRight: width - 129 - 24
    }
  } else {
    worldBorders = {
      bTop: -(height + 270) + 21,
      bBottom: -270,
      bLeft: -84,
      bRight: width - 84 - 12
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
    setTimeout(donMove, 600);
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
document.addEventListener('click', function (evt) {
  if (evt.detail === 2 && evt.target === $('lst-stack')) {
    getStackEntry();
  }
});

document.addEventListener('keypress', function (event) {
  var key = event.keyCode || event.charCode;

  switch (key) {
  case 13:// ENTER
    if ($('rpnapes').className !== 'hidden') enterButton();
    break;
  }
});

document.addEventListener('keydown', function (event) {
  var key = event.keyCode || event.charCode;

  switch (key) {
  case 8:// BACKSPACE  
    if ($('rpnapes').className !== 'hidden') {
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btnBackspace();
    }
    break;
  case 16:// SHIFT
    if ($('rpnapes').className !== 'hidden') {
      if (altHeld) btnShift();        
    }
    break;
  case 17:// CTRL
    if (!event) { event = window.event; }
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    ctrlHeld = true;
    break;
  case 18:// ALT
    if ($('rpnapes').className !== 'hidden') {
      altHeld = true;        
    }
    break;
  case 37:// LEFT ARROW
    if ($('rpnapes').className !== 'hidden' && $('twig').className !== 'hidden') {
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      if (twig.health > 0) {
        $('twig').src = 'images/twig/walk-left.gif';
        moveObj(twig, twig.speed, -1, 0);
      }
    }
    break;
  case 38:// UP ARROW
    if ($('rpnapes').className !== 'hidden' && $('twig').className !== 'hidden') {
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      if (twig.health > 0) {
        $('twig').src = 'images/twig/walk-left.gif';
        moveObj(twig, twig.speed, 0, -1);
      }
    }
    break;
  case 39:// RIGHT ARROW
    if ($('rpnapes').className !== 'hidden' && $('twig').className !== 'hidden') {
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      if (twig.health > 0) {
        $('twig').src = 'images/twig/walk-right.gif';
        moveObj(twig, twig.speed, 1, 0);
      }
    }
    break;
  case 40:// DOWN ARROW
    if ($('rpnapes').className !== 'hidden' && $('twig').className !== 'hidden')  {
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      if (twig.health > 0) {
        $('twig').src = 'images/twig/walk-right.gif';
        moveObj(twig, twig.speed, 0, 1);
      }
    }
    break;
  case 46:// DELETE
    if ($('rpnapes').className !== 'hidden') {
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btnDelete();        
    }
    break;
  case 83:// S
    if (ctrlHeld) {
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
  
      if ($('rpnapes').className !== 'hidden') {
        btnSave();
      } else {
        btnSaveNotes();
      }
    }        
    break;
  case 89:// Y
    if (ctrlHeld) {
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);

      if ($('rpnapes').className !== 'hidden') {
        redoFunction();
      } else {
        btnRedoNotes();
      }
    }        
    break;
  case 90:// Z
    if (ctrlHeld) {
      if (!event) { event = window.event; }
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
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btnMultiply();
    }
    break;        
  case 107:// NUMPAD +
    if ($('rpnapes').className !== 'hidden') {
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btnAdd();
    }
    break;        
  case 109:// NUMPAD -
    if ($('rpnapes').className !== 'hidden') {
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btnSubtract();
    }
    break;      
  case 111:// NUMPAD /
    if ($('rpnapes').className !== 'hidden') {
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btnDivide();
    }
    break;        
  }
});

document.addEventListener('keyup', function (event) {
  
  switch (event.key) {
  case 'Enter':// ENTER
    if ($('notes').className !== 'hidden' && $('lst-notes') === document.activeElement) backupUndoNotes();
    break;
  case 'Control':// CTRL
    ctrlHeld = false;
    break;
  case 'Alt':// ALT
    altHeld = false; 
    break;
  case 'Escape':// ESC
    if (!event) { event = window.event; }
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    btnXoff();
    break;
  case 'ArrowLeft':// ARROW LEFT (Falls through)
  case 'ArrowUp':// ARROW UP (Falls through)
  case 'ArrowRight':// ARROW RIGHT (Falls through)
  case 'ArrowDown':// ARROW DOWN
    if ($('rpnapes').className !== 'hidden' && twig.health > 0) {      
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
              evaluateExpression($('txt-input').value);
              enterInput();
            } else {
              enterInput();              
            }
          }
          updateDisplay();
          // backupUndo();
        }
      };
      fr.readAsText(this.files[0]);
    } catch (err) {
      rpnAlert(err.toString());
    }
  });

  $('menu-google').onclick = searchGoogle;
  $('menu-youTube').onclick = searchYouTube;
  $('menu-save').onclick = btnSave;
  $('menu-print').onclick = printHtml;
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
  $('menuExponential').onclick = exponential;
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
  $('menu-angle').onclick = btnAngle;
  $('menu-haptic').onclick = toggleHaptic;
  $('menu-darkmode').onclick = toggleDarkMode;
  $('menu-keyboard').onclick = toggleKeyboard;
  $('menu-sound').onclick = toggleSound;
  $('menu-notes').onclick = menuNotes;
  $('menu-shift').onclick = btnShift;

  // Menu Constants
  $('menu-phi').onclick = (function() {
    return function() {
      if (!/[ⅽ℮ɢπa-zA-Z0-9]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[Φ]/ , 'Φ');
    }
  })();
  $('menu-eulers').onclick = (function() {
    return function() {  
      if (!/[ⅽɢΦπa-zA-Z0-9]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[℮]/ , '℮');   
    }
  })();
  $('menu-gravitational-constant').onclick = (function() {
    return function() {
      if (!/[ⅽ℮Φπa-zA-Z0-9]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[ɢ]/ , 'ɢ');
    }
  })();
  $('menu-light-speed').onclick = (function() {
    return function() {
      if (!/[℮ɢΦπa-zA-Z0-9]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[ⅽ]/ , 'ⅽ');
    }
  })(); 
  $('menu-pi').onclick = (function() {
    return function() {
      if (!/[ⅽ℮ɢΦa-zA-Z0-9]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[π]/ , 'π');
    }
  })();

  // Menu Date
  $('menu-date').onclick = insertDate;

  // Menu Time
  $('menu-time').onclick = insertTime;

  // Menu Formulas
  $('menu-compound-interest').onclick = (function() {
    return function() {
      insertText('P*(1+r/n)^(n*t)');
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
  $('menu-stack-average').onclick = (function() {
    return function() {
      backupUndo();
      inputText(averageStack());
    }
  })();
  $('menu-stack-sort').onclick = (function() {
    return function() {
      backupUndo();
      objectSort(true, false);
      updateDisplay();
    }
  })();
  $('menu-stack-total').onclick = (function() {
    return function() {
      backupUndo();
      inputText(totalStack());
    }
  })();
  $('menu-stack-max').onclick = (function() {
    return function() {
      backupUndo();
      inputText(maxNum());
    }
  })();
  $('menu-stack-min').onclick = (function() {
    return function() {
      backupUndo();
      inputText(minNum());
    }
  })();
  $('menu-stopwatch').onclick = menuStopwatch;
  $('menu-fizz-buzz').onclick = fizzBuzz;
  $('menu-tricorder').onclick = showTricorder;
  $('menu-twig').onclick = monOn;
  
  // Menu Symbols
  $('menu-parenthesis').onclick = (function() {
    return function() { 
      btnParenthesis();
    }
  })();
  $('menu-equals').onclick = (function() {
    return function() { 
      if (!/[√]$/.test($('txt-input').value) && !/===/g.test($('txt-input').value) || isTextSelected($('txt-input'))) insertAtCursor($('txt-input'), '=');
      $('txt-input').focus();     
    }
  })();
  $('menu-radical').onclick = (function() {
    return function() { 
      if (!/[!=]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[√]/, '√');
    }
  })();
  $('menu-bang').onclick = (function() {
    return function() { 
      if (!/[-+*/√^%]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[!]/, '!');
    }
  })();
  $('menu-carat').onclick = (function() {
    return function() { 
      if (!/[-+*/√%=]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[\^]/, '^');
    }
  })();
  $('menu-modulus-symbol').onclick = (function() {
    return function() { 
      if (!/[-+*/√^=]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[%]/, '%');
    }
  })();
  $('menu-solidus').onclick = (function() {
    return function() { 
      if (!/[-+*√^%=]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[/]/, '/');
    }
  })();
  $('menu-asterisk').onclick = (function() {
    return function() { 
      if (!/[-+/√^%=]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[*]/, '*');
    }
  })();
  $('menu-minus').onclick = (function() {
    return function() { 
      buttonInsert(/[-]/, '-');
    }
  })();
  $('menu-plus').onclick = (function() {
    return function() {
      if (!/[-*/√^%=]$/.test($('txt-input').value) || isTextSelected($('txt-input'))) buttonInsert(/[+]/, '+');
    }
  })();
  $('menu-omega').onclick = (function() {
    return function() { 
      buttonInsert(/[Ω]/ , 'Ω');
    }
  })();
  $('menu-heart').onclick = (function() {
    return function() { 
      buttonInsert(/[♥]/ , '♥');
    }
  })();

  // $('menu-haptic-li').classList.add('strikethrough');
  $('menu-sound-li').classList.add('strikethrough');
  
  $('menu-help').onclick = menuHelp;

  if (isMobile) {
    $('menu-off').style = 'display:none';
    $('menu-twig').style = 'display:none';
  } else {
    $('menu-keyboard').style = 'display:none';
    $('menu-haptic').style = 'display:none';
  }

  // $('timer').onclick = stopwatchReset;
  $('timer').onclick = enterLapTime;

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

  // Tricorder
  preloadImages();
  
  viewPortSrc.push('https://www.youtube.com/embed/86YLFOog4GM?autoplay=1&mute=1');// ISS
  viewPortSrc.push('https://www.youtube.com/embed/4oY3v0jAWr4?autoplay=1&mute=1');// Star field
  viewPortSrc.push('https://www.youtube.com/embed/RGDEKqU0T2k?autoplay=1');// Starfleet Technical Manual
  viewPortSrc.push('https://www.youtube.com/embed/jlJgi3SxDaI?autoplay=1');//  LCARS Display
  
  viewPortSrc2.push('https://www.youtube.com/embed/XziuEdpVUe0?autoplay=1&mute=1');// Jerobeam Fenderson - Planets
  viewPortSrc2.push('https://www.youtube.com/embed/jkuJG1_2MnU?autoplay=1');// Tressaurian Intersection
  viewPortSrc2.push('https://www.youtube.com/embed/1uJxTghyaO0?autoplay=1');// Star Trek Meets Batman
  viewPortSrc2.push('https://www.youtube.com/embed/OL7g0mdzGic?autoplay=1');// Star Track

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
  $('lst-notes').addEventListener('paste', function() {
    setTimeout(function() {
      backupUndoNotes(); 
    }, 100);
  });
  $('lst-notes').oninput = backSpaceUndo; 

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
  backupUndoNotes();
  colorSaveNotesButton();

  if (document.cookie.indexOf('TRICORDER') !== -1) {
    loadTricorder();        
  } else {    
    widgetSrc.push('https://mathnotepad.com/');
    widgetSrc.push('https://www.wolframalpha.com/');
    widgetSrc.push('https://98.js.org/');// Windows 98
    widgetSrc.push('https://orbitalmechanics.info/');
    // widgetSrc.push('https://www.youtube.com/embed/1LEay4dm5Ag');// KITUMBA
    // widgetSrc.push('https://www.youtube.com/embed/ZVCXw1xJFJ4');// In Harm's Way
    // widgetSrc.push('https://www.youtube.com/embed/Zx-up8quvnI');// Mind Sifter
    // widgetSrc.push('https://www.youtube.com/embed/sKtieXEBLcE');// Launch of the Botany Bay
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
};