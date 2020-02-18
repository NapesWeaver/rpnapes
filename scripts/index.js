var $ = function (id) {
  return document.getElementById(id);
};

navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
//var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

var stack = [];
var backUps = [33];
var restores = [33];
var stackSize = 14;
var stackFocus = false;
var fixDecimal = -1;

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

  // RPNapes Menu
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
          for (var t in tmpStack) {
            //tmpStack[t] = encodeSpecialChar(tmpStack[t]);
            $('txtInput').value = tmpStack[t];
            enterFunction();
          }
          updateDisplay();
        }
      };
      fr.readAsText(this.files[0]);
    }
    catch (e) { }
  });
  $('menuSave').onclick = btn_save;
  $('menuOff').onclick = btn_off;

  $('menuCopy').onclick = btn_copy;
  $('menuPaste').onclick = btn_paste;
  $('menuDelete').onclick = btn_delete;
  $('menuClear').onclick = btn_clear;
  $('menuUndo').onclick = btn_undo;
  $('menuRedo').onclick = btn_redo;
  $('menuXy').onclick = xyFunction;
  $('menuAb').onclick = btn_ab;

  $('menuDivide').onclick = btn_divide;
  $('menuMultiply').onclick = btn_multiply;
  $('menuSubtract').onclick = btn_subtract;
  $('menuAdd').onclick = btn_add;
  $('menuRoot').onclick = rootFunction;
  $('menuExponential').onclick = exponentialFunction;
  $('menuInverse').onclick = btn_inverse;
  $('menuFactorial').onclick = btn_factorial;
  $('menuModulus').onclick = btn_modulus;
  $('menuSign').onclick = btn_sign;
  $('menuSine').onclick = btn_sine;
  $('menuCosine').onclick = btn_cosine;
  $('menuTangent').onclick = btn_tangent;

  $('menuAngle').onclick = btn_angle;
  $('menuNotes').onclick = btn_xoff;
  $('menuShift').onclick = btn_shift;

  $('menuPhi').onclick = goldenRatio;
  $('menuEulers').onclick = eulersNum;
  $('menuGravitationalConstant').onclick = gravitationalConstant;
  $('menuLightSpeed').onclick = speedOfLight;
  $('menuPi').onclick = btn_pi;
  $('menuDate').onclick = todaysDate;
  $('menuTricorder').onclick = tricorderOn;
  $('menuTwig').onclick = monOn;
  $('menuHeart').onclick = charHeart;
  $('menuOhm').onclick = charOhm;
  $('menuHelp').onclick = help;

  // Text Input
  $('txtInput').onclick = mobileKeyboardAllow;

  // Buttons
  $('btnXoff').onclick = btn_xoff;
  $('btnCopy').onclick = btn_copy;
  $('btnXy').onclick = btn_xy;
  $('btnEnter').onclick = btn_enter;
  $('btnDelete').onclick = btn_delete;

  $('btnPaste').onclick = btn_paste;
  $('btnRoot').onclick = btn_root;
  $('btnInverse').onclick = btn_inverse;
  $('btnUndo').onclick = btn_undo;

  $('btnEE').onclick = btn_EE;
  $('btnFactorial').onclick = btn_factorial;
  $('btnModulus').onclick = btn_modulus;
  $('btnSign').onclick = btn_sign;
  //$("btnPi").onclick = btn_pi;
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
  $('btnSave').onclick = btn_save;

  $('btnOne').onclick = btn_one;
  $('btnTwo').onclick = btn_two;
  $('btnThree').onclick = btn_three;
  $('btnSubtract').onclick = btn_subtract;
  $('btnCosine').onclick = btn_cosine;
  $('btnLoad').onclick = btn_load;

  $('btnSpace').onclick = btn_space;
  $('btnZero').onclick = btn_zero;
  $('btnDot').onclick = btn_dot;
  $('btnAdd').onclick = btn_add;
  $('btnTangent').onclick = btn_tangent;
  $('btnOff').onclick = btn_off;

  // This is not working for IE :(
  if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    $('menuTwig').style = 'display:none';
  }

  // Event Listener for Mouse
  //document.body.onmousemove = function (e) {
  //    e = e || window.event;
  //    var pageX = e.pageX;
  //    var pageY = e.pageY;
  //    if (pageX === undefined) {
  //        pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
  //        pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  //    }
  //      $("txtInput").value = pageX + ", " + pageY;
  //};

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

  // Note
  $('btnCopyNotes').onclick = btn_copy_notes;
  $('btnPasteNotes').onclick = btn_paste_notes;
  $('btnUndoNotes').onclick = btn_undo_notes;
  $('btnRedoNotes').onclick = btn_redo_notes;
  $('btnSaveNotes').onclick = btn_save_notes;
  $('btnLoadNotes').onclick = btn_load_notes;
  $('btnClearNotes').onclick = btn_clear_notes;

  $('lstStack').style.color = '#000000';
  $('lstStack').value = '';

  // Check for cookies
  if (document.cookie.indexOf('NOTES') != -1) {
    $('lstNotes').value = '';
    btn_load_notes();
  }
  else {
    backupUndoNotes();
  }
  if (document.cookie.indexOf('TRICORDER') != -1) {
    loadTricorder();        
  }
  else {
    widgetSrc.push('https://www.youtube.com/embed/jlJgi3SxDaI?autoplay=1');
    widgetSrc.push('https://www.youtube.com/embed/Fn44paKMX4E?autoplay=1');
    widgetSrc.push('https://www.youtube.com/embed/yXQz-VU5iVc?autoplay=1');
  }
  if (document.cookie.indexOf('STACK') != -1) {
    $('lstStack').value = '';
    $('txtInput').value = '';
    btn_load();
  }
  else
  {
    backupUndo();
  }
  // These two lines help Internet Explorer for getIndex('lstStack') ~ btn_delete function :(
  selectText('lstStack', 'lstStack');
  selectText('txtInput', 'txtInput');
};

function NumberObject(soul, realPart, units, imaginary, timeStamp) {

  this.soul = soul;
  this.realPart = realPart;
  this.units = units;
  this.imaginary = imaginary;
  this.timeStamp = timeStamp;
  
  if (isNaN(this.imaginary)) {
    this.imaginary = 'NiN';
  }
  if (isNaN(this.realPart) && this.imaginary === 'NiN') {
    this.units = 'null';
  }
}
NumberObject.prototype.setSoul = function (s) {
  this.soul = s;
}
NumberObject.prototype.getSoul = function () {
  return this.soul;
}
NumberObject.prototype.setRealPart = function (r) {
  this.realPart = r;
}
NumberObject.prototype.getRealPart = function () {
  return this.realPart;
}
NumberObject.prototype.setUnits = function (u) {
  this.units = u;
}
NumberObject.prototype.getUnits = function () {
  return this.units;
}
NumberObject.prototype.setImaginary = function (i) {
  this.imaginary = i;
}
NumberObject.prototype.getImaginary = function () {
  return this.imaginary;
}
NumberObject.prototype.setTimestamp = function (t) {
  this.timeStamp = t;
}
NumberObject.prototype.getTimeStamp = function () {
  return this.timeStamp;
}
NumberObject.prototype.toString = function () {

  return this.soul + ', ' + this.realPart + ', ' + this.units + ', ' + this.imaginary + ', ' + this.timeStamp;
};
NumberObject.prototype.prettyPrint = function () {
  var prettyString = '';

  if (isNaN(this.realPart)) return this.soul;

  prettyString += this.realPart.toString();

  if (this.imaginary !== 'NiN') {
    prettyString += ' ';

    if (this.imaginary > 0) {
      prettyString += '+ ';
    } else {
      prettyString += '- ';
    }
    prettyString += Math.abs(this.imaginary).toString() + 'j';
  }
  
  if (this.units !== 'null') {
    prettyString += ' ' + this.units;
  }
  return prettyString;
};

//////// Control Buttons /////////////////////////////////////////////////////////////

function btn_xoff() {

  navigator.vibrate([21]);
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
  $('date').className = 'visible';
  $('txtInput').focus();
}
function notesOn() {

  $('date').className = 'hidden';
  $('rpnapes').className = 'hidden';
  monOff();
  $('widget').className = 'hidden';
  $('viewport').className = 'hidden';
  $('tricorder').className = 'hidden';
  if (power()) {
    playAudio($('keypress3'));
  }
  $('notes').className = 'visible';
  $('lstNotes').focus();
}
function tricorderOn() {
  
  $('date').className = 'hidden';
  $('rpnapes').className = 'hidden';
  monOff();
  $('notes').className = 'hidden';
  if (power()) {
    playAudio($('tricorder_alert'));
  }
  $('tricorder').className = 'visible';
  $('viewport').className = 'visible';
}

function hapticResponseMobileKeySupress() {
  navigator.vibrate([21]);
  $('txtInput').readOnly = true;
}
function mobileKeyboardAllow() {
  $('txtInput').readOnly = false;
}

function btn_copy() {

  hapticResponseMobileKeySupress();

  if (stackFocus) {
    var tmpTxt;

    tmpTxt = $('txtInput').value;
    $('txtInput').value = '';
    getSelectedText('lstStack');
    $('txtInput').value = tmpTxt;
  }
  else {
    document.querySelector('#txtInput').select();
    document.execCommand('copy');
  }
}

function btn_xy() {

  if ($('btnGo').value === 'Go') {
    xyFunction();
  }
  else {
    btn_ab();
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
    enterFunction();
    $('txtInput').value = '';

    if (isNaN(parseFloat(tmpX.getRealPart()))) {
      $('txtInput').value += decodeSpecialChar(tmpX.getSoul());
    }
    else {
      $('txtInput').value += rounding(tmpX.getRealPart().toString());

      if (!isNaN(parseFloat(tmpX.getImaginary()))) {
        if (parseFloat(tmpX.getImaginary()) > 0) {
          $('txtInput').value += ' + ' + rounding(tmpX.getImaginary().toString()) + 'j';
        }
        else {
          $('txtInput').value += ' - ' + rounding(tmpX.getImaginary().toString().substring(1)) + 'j';
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

function btn_enter() {

  if (stackFocus) {
    selectText('lstStack', 'lstStack');
    getSelectedText('lstStack');
  }
  else {
    backupUndo();
    enterFunction();
  }
  updateDisplay();
  parseInput();
}
function enterFunction() {

  // if (parenthesesExist($("txtInput").value)) {
  //     if (parenthesesEven($("txtInput").value)) {
  //         $("txtInput").value = eval($("txtInput").value);
  //     }
  // }

  var soulX = $('txtInput').value.trim();
  var realPartX = extractReal(soulX);
  var unitsX = extractUnits(soulX);
  var imaginaryX = extractImaginary(soulX);
  var timeStampX = Date.now();

  soulX = encodeSpecialChar(soulX);
  //unitsX = rewriteNegUnitExp(unitsX);
  unitsX = encodeSpecialChar(unitsX);

  var objX = new NumberObject(soulX, realPartX, unitsX, imaginaryX, timeStampX);

  stack.push(objX);

  $('txtInput').value = $('txtInput').value.trim();
}

function btn_delete() {

  backupUndo();
  if ($('btnGo').value === 'Go') {
    if ($('txtInput').value == '' || stackFocus) {
      deleteFromStack();
    }
    else {
      $('txtInput').value = '';
    }
    updateDisplay();
    $('txtInput').focus();
  }
  else {
    backspaceKey();
  }
}
function deleteFromStack() {

  var i = getIndex('lstStack') - stackSize;
  stack.splice(i, 1);
}
function backspaceKey() {

  if ($('txtInput').value == '' || stackFocus) {
    var i = stack.length - 1;

    stack.splice(i, 1);
    updateDisplay();
  }
  else {
    backspace($('txtInput'));
  }
}
function backspace(txtField) {
  var startPos = txtField.selectionStart;
  var endPos = txtField.selectionEnd;

  if (txtField.selectionStart === txtField.selectionEnd) {
    startPos--;
  }
  txtField.value = txtField.value.substring(0, startPos) + txtField.value.substring(endPos, txtField.value.length);

  txtField.selectionStart = startPos;
  txtField.selectionEnd = startPos;
  $('txtInput').focus();
}

// Paste from stack or clipboard into txtInput
function btn_paste() {

  if (stackFocus) {
    getSelectedText('lstStack');
  }
  else {
    if (/*@cc_on!@*/false || !!document.documentMode) {
      // IE
      backupUndo();
      insertAtCursor($('txtInput'), window.clipboardData.getData('Text'));
    }
    else {
      rpnAlert('Function not available for this browser.');
      $('txtInput').focus();
    }
  }
}

function btn_undo() {

  if ($('btnGo').value === 'Go') {
    undoFunction();
  }
  else {
    btn_redo();
  }
}
function undoFunction() {

  if (backUps.length > 3) {
    // UNDO
    restores.push(nestArray(stack));
    restores.push($('txtInput').value);

    $('txtInput').value = backUps.pop();
    var tmpArray = backUps.pop();

    stack.length = 0;
    tmpArray = splitArrayByBrowser(tmpArray);
    var i = 1;

    while (i < tmpArray.length) {
      instantiateNumberObject(tmpArray[i]);
      i++;
    }
    updateDisplay();
  }
  colorUndoButton();
  $('txtInput').focus();
}
function btn_redo() {

  if (restores.length > 0) {
    // REDO
    backUps.push(nestArray(stack));
    backUps.push($('txtInput').value);

    $('txtInput').value = restores.pop();
    var tmpArray = restores.pop();

    stack.length = 0;
    tmpArray = splitArrayByBrowser(tmpArray);
    var i = 1;

    while (i < tmpArray.length) {
      instantiateNumberObject(tmpArray[i]);
      i++;
    }
    updateDisplay();
  }
  colorUndoButton();
  $('txtInput').focus();
}
function backupUndo() {

  backUps.push(nestArray(stack));
  backUps.push($('txtInput').value);
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
}

function btn_EE() {

  if ($('btnGo').value === 'Go') {
    //if (/(?!^[-+]?\d+[.]?\d*[eE])[-+]?\d+[.]?\d*[eE]?[-+]?\d* *[-+]? *\d*[.]?\d*/g.test($("txtInput").value) && !/.*[eE].*[eE].*/g.test($("txtInput").value)) {
    if (/(?!^[-+]?\d+[.]?\d*[eE])[-+]?\d+[.]?\d*[eE]?[-+]?\d* *[-+]? *\d*[.]?\d*/g.test($('txtInput').value) && !/.*[eE].*[eE].*/g.test($('txtInput').value)) {
      insertAtCursor($('txtInput'), 'e');
    }        
  }
  else {
    //if (/[-+]?\d+[.]?\d*[eE]?[-+]?\d*/g.test($("txtInput").value) && $("txtInput").value.indexOf("j") === -1) {
    if (/[-+]?\d+[.]?\d*[eE]?[-+]?\d*/g.test($('txtInput').value) && $('txtInput').value.indexOf('j') === -1) {
      insertAtCursor($('txtInput'), 'j');
    }
  }
  $('txtInput').focus();
}

function btn_go() {

  backupUndo();
  if ($('txtInput').value !== '') {
    if ($('btnGo').value === 'You') {

      internetSearch('https://www.youtube.com/results?search_query=');
    }
    else {
      internetSearch('https://www.google.com/#q=');
    }
  }
  $('txtInput').select();
}

function btn_shift() {

  if ($('btnGo').value === 'You') {
    $('btnGo').value = 'Go';
    $('btnGo').style.color = 'green';
    $('btnShift').style.backgroundColor = '#D4D0C8';
    $('btnShift').style.borderStyle = 'outset';
    $('btnXy').value = 'x <-> y';
    $('btnDelete').value = 'DEL';
    $('btnRoot').value = 'x √¯y';
    $('btnUndo').value = 'UND';
    $('btnEE').value = 'EE';
  }
  else {
    $('btnGo').value = 'You';
    $('btnGo').style.color = 'blue';
    $('btnShift').style.backgroundColor = 'grey';
    $('btnShift').style.borderStyle = 'inset';
    $('btnXy').value = 'a <-> b';
    $('btnDelete').value = '<-----';
    $('btnRoot').value = 'y ^ x';
    $('btnUndo').value = 'REDO';
    $('btnEE').value = 'j';
  }
  colorUndoButton();
  $('txtInput').focus();
}

function btn_clear() {

  backupUndo();
  monOff();
  $('txtInput').value = '';
  $('lstStack').value = '';
  stack = [];
  //updateDisplay();
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
    for (var s in srcArray) {
      newArray += '_';
      newArray += srcArray[s];
    }
  } else {
    //Firefox        
    for (var s in srcArray) {
      newArray += '\t';
      newArray += srcArray[s];
    }
  }
  return newArray;
}

function saveToHostFile(fileName, pretty) {

  var myBlob;
  var content = '';

  if (fileName.trim() === '') {
    fileName = 'untitled';
  }

  if (stack.length > 0 || notes.length > 1) {
    content += '===== RPNapes =====\n\n';
    for (var s in stack) {
      if (pretty) {
        content += rounding(decodeSpecialChar(stack[s].prettyPrint()));
      } else {
        content += rounding(decodeSpecialChar(stack[s].toString()));
      }      
      content += '\n';
    }
    content += '\n===== Notes ======\n\n';
    for (var n in notes) {
      content += decodeSpecialChar(notes[n]);
      content += '\n';
    }
    myBlob = new Blob([content], { type: 'text/plain;charset=utf-8' });
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
  catch (e) { rpnAlert('load Stack error.'); }
  try {
    index = getCookie('MATHMON').indexOf('=') + 1;
    loadTheObjects(getCookie('MATHMON').substr(index));
  }
  catch(e) { rpnAlert('load MathMon error'); }
  updateDisplay();
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
    instantiateNumberObject(tmpArray);
  }    
}
function instantiateNumberObject(tmpArray) {

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

  window.close();
  rpnAlert('Not supported by this browser.');
}

//////// Algebraic Buttons ///////////////////////////////////////////////////////////

function btn_root() {

  if ($('btnGo').value === 'Go') {
    rootFunction();
  }
  else {
    exponentialFunction();
  }
}
function rootFunction() {

  backupUndo();
  var newUnits = '';
  if (stack.length - 1 < 0 || stack[stack.length - 1].getRealPart().toString().trim() == 'NaN') {
    btn_enter();
    $(('txtInput')).value = '2';
  }
  if (extractUnits($('txtInput').value) == 'null') {
    newUnits = divideUnits(1 / extractReal($('txtInput').value));
  }
  $('txtInput').value = Math.pow(parseFloat(stack.pop().getRealPart()), 1 / extractReal($('txtInput').value)) + decodeSpecialChar(newUnits);
  updateDisplay();
  $('txtInput').select();
}
function exponentialFunction() {

  backupUndo();
  var newUnits = '';
  if (stack.length - 1 < 0 || stack[stack.length - 1].getRealPart().toString() === 'NaN') {
    btn_enter();
    $(('txtInput')).value = '2';
  }
  if (extractUnits($('txtInput').value) == 'null') {
    newUnits = multiplyUnits(extractReal($('txtInput').value));
  }
  $('txtInput').value = Math.pow(parseFloat(stack.pop().getRealPart()), extractReal($('txtInput').value)) + decodeSpecialChar(newUnits);
  updateDisplay();
  $('txtInput').select();
}
function btn_inverse() {

  var newUnits = inverseUnits();
  backupUndo();
  if (!isNaN(extractReal($('txtInput').value)) && isNaN(extractImaginary($('txtInput').value))) {
    $('txtInput').value = 1 / extractReal($('txtInput').value);
  }
  if (isNaN(extractReal($('txtInput').value)) && !isNaN(extractImaginary($('txtInput').value))) {
    $('txtInput').value = -1 * (1 / extractImaginary($('txtInput').value));
    $('txtInput').value += 'j';
  }
  if (!isNaN(extractReal($('txtInput').value)) && !isNaN(extractImaginary($('txtInput').value))) {
    // Invert complex number
  }
  $('txtInput').value += newUnits;
  $('txtInput').select();
}

function btn_factorial() {

  backupUndo();
  $('txtInput').value = factorial(extractReal($('txtInput').value));
  $('txtInput').select();
}
function factorial(num) {

  backupUndo();
  if (num <= 1) {
    return 1;
  }
  else {
    try {
      var theResult = num * factorial(num - 1);
    }
    catch (e) {
      return 'Infinity';
    }
    return theResult;
  }
}
function btn_modulus() {

  backupUndo();
  $('txtInput').value = parseFloat(stack.pop().getRealPart()) % parseFloat($('txtInput').value);
  updateDisplay();
  $('txtInput').select();
}
function btn_sign() {

  var tmpX = $('txtInput').value.trim();
  backupUndo();

  if (tmpX === '') {
    tmpX = '-';
  }
  else if (tmpX === '+') {
    tmpX = '-';
  }
  else if (tmpX === '-') {
    tmpX = '+';
  }
  else if (!isNaN(tmpX)) {
    tmpX = parseFloat(tmpX) * -1;
  }
  else if (/^[-+]?[0-9]*\.?[0-9]+([eE][-])$/.test(tmpX)) {
    tmpX = tmpX.substring(0, tmpX.length - 1);
    tmpX += '+';
  }
  else if (/^[-+]?[0-9]*\.?[0-9]+([eE][+])$/.test(tmpX)) {
    tmpX = tmpX.substring(0, tmpX.length - 1);

    tmpX += '-';
  }
  else if (/^[-+]?[0-9]*\.?[0-9]+[eE]$/.test(tmpX)) {
    tmpX += '-';
  }
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
function btn_pi() {

  backupUndo();
  insertAtCursor($('txtInput'), Math.PI);
  $('txtInput').select();
}

//////// Basic Maths Buttons /////////////////////////////////////////////////////////

function btn_divide() {

  backupUndo();
  if (parenthesesExist($('txtInput').value)) {
    if (parenthesesEven($('txtInput').value)) {
      $('txtInput').value = eval($('txtInput').value);
    } else {
      $('txtInput').value += '/';
    }
  }
  if (!parenthesesExist($('txtInput').value)) {
    var newUnits = divideNotNullUnits(1);
    $('txtInput').value = parseFloat(parseY()) / parseFloat($('txtInput').value) + decodeSpecialChar(newUnits);
    updateDisplay();
  }    
  $('txtInput').focus();
}
function btn_multiply() {

  backupUndo();
  if (parenthesesExist($('txtInput').value)) {
    if (parenthesesEven($('txtInput').value)) {
      $('txtInput').value = eval($('txtInput').value);
    } else {
      $('txtInput').value += '*';
    }
  }
  if (!parenthesesExist($('txtInput').value)) {
    var newUnits = multiplyNotNullUnits(1);
    $('txtInput').value = parseFloat(parseY()) * parseFloat($('txtInput').value) + decodeSpecialChar(newUnits);
    updateDisplay();        
  }
  $('txtInput').focus();    
}
function btn_subtract() {

  backupUndo();
  if (parenthesesExist($('txtInput').value)) {
    if (parenthesesEven($('txtInput').value)) {
      $('txtInput').value = eval($('txtInput').value);
    } else {
      $('txtInput').value += '-';
    }
  }
  if (!parenthesesExist($('txtInput').value)) {
    var newUnits = addNotNullUnits();        
    $('txtInput').value = parseFloat(parseY()) - parseFloat($('txtInput').value) + decodeSpecialChar(newUnits);
    updateDisplay();
  }    
  $('txtInput').focus();
}
function btn_add() {

  backupUndo();
  if (parenthesesExist($('txtInput').value)) {
    if (parenthesesEven($('txtInput').value)) {
      $('txtInput').value = eval($('txtInput').value);
    } else {
      $('txtInput').value += '+';
    }
  }
  if (!parenthesesExist($('txtInput').value)) {
    var newUnits = addNotNullUnits();
    $('txtInput').value = parseFloat(parseY()) + parseFloat($('txtInput').value) + decodeSpecialChar(newUnits);
    updateDisplay();
  }    
  $('txtInput').focus();
}

//////// Trigonometric Buttons ///////////////////////////////////////////////////////

function btn_angle() {

  if ($('btnAngle').value === 'deg') {
    $('btnAngle').value = 'rad';
  }
  else {
    $('btnAngle').value = 'deg';
  }
  $('txtInput').focus();
}
function btn_sine() {

  var newUnits = extractUnits($('txtInput').value);
  backupUndo();
  if (newUnits === 'null') { newUnits = ''; }
  if ($('btnAngle').value == 'rad') {

    $('txtInput').value = Math.sin(extractReal($('txtInput').value));
  }
  else {
    $('txtInput').value = Math.sin((extractReal($('txtInput').value)) * Math.PI / 180);
  }
  $('txtInput').value += newUnits;
  $('txtInput').select();
}
function btn_cosine() {

  var newUnits = extractUnits($('txtInput').value);
  backupUndo();
  if (newUnits === 'null') { newUnits = ''; }
  if ($('btnAngle').value == 'rad') {

    $('txtInput').value = Math.cos(extractReal($('txtInput').value));
  }
  else {
    $('txtInput').value = Math.cos((extractReal($('txtInput').value)) * Math.PI / 180);
  }
  $('txtInput').value += newUnits;
  $('txtInput').select();
}
function btn_tangent() {

  var newUnits = extractUnits($('txtInput').value);
  backupUndo();
  if (newUnits === 'null') { newUnits = ''; }
  if ($('btnAngle').value == 'rad') {

    $('txtInput').value = Math.tan(extractReal($('txtInput').value));
  }
  else {
    $('txtInput').value = Math.tan((extractReal($('txtInput').value)) * Math.PI / 180);
  }
  $('txtInput').value += newUnits;
  $('txtInput').select();
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
  insertAtCursor($('txtInput'), ' ');
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

function eulersNum() {

  backupUndo();
  insertAtCursor($('txtInput'), Math.exp(1));
  $('txtInput').select();
}
function gravitationalConstant() {
  rpnAlert('6.674E-11');
}
function speedOfLight() {
  rpnAlert('299792458 m/s');
}
function goldenRatio() {

  var phi;
  backupUndo();
  phi = (1 + Math.sqrt(5)) / 2;
  insertAtCursor($('txtInput'), phi);
  $('txtInput').select();
}
function charHeart() {
  backupUndo();
  insertAtCursor($('txtInput'), '♥');
}
function charOhm() {
  backupUndo();
  insertAtCursor($('txtInput'), 'Ω');
}

// Get current browser window screen size
function getSize() {

  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight || e.clientHeight || g.clientHeight;
  rpnAlert(x + ' × ' + y);
}
function getTime() {

  var currentdate = new Date();
  var datetime = currentdate.getHours() + ':' + currentdate.getMinutes() + ':' + currentdate.getSeconds();
  return datetime;
}
function dateModified() {

  var modified = new Date(document.lastModified);

  var month = modified.getMonth() + 1;
  var date = modified.getDate();
  var year = modified.getFullYear();

  document.writeln('Modified ' + month + '/' + date + '/' + year);
}
function todaysDate() {

  var today = new Date();

  var month = today.getMonth() + 1;
  var date = today.getDate();
  var year = today.getFullYear();

  rpnAlert(month + '/' + date + '/' + year);
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
      // Create a new map and place a marker at the device location.
      var map = new GMaps({
        el: '#map',
        lat: lat,
        lng: lng
      });
      map.addMarker({
        lat: lat,
        lng: lng
      });
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
      rpnAlert(ip);
    });
  }
}
/**
 * Get the user IP throught the webkitRTCPeerConnection
 * @param onNewIP {Function} listener function to expose the IP locally
 * @return undefined
 */
function getUserIP(onNewIP) {

  //  onNewIp - your listener function for new IPs
  //compatibility for firefox and chrome
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
  }).catch(function (reason) {
    // An error occurred, so handle the failure to connect
  });
  //listen for candidate events
  pc.onicecandidate = function (ice) {
    if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
    ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
  };
}
function internetSearch(domainString) {

  var win;
  var searchTerm = '';

  //window.location.href = "https://google.com";
  //window.location.reload();
  //history.forward();
  //history.back();
  //history.go(-2);

  if ($('txtInput').value.trim().toLowerCase() === 'go' || $('txtInput').value.trim().toLowerCase() === 'you') {
    searchTerm = decodeSpecialChar(stack[stack.length - 2].getSoul());
    btn_delete();
    btn_delete();
  }
  else if ($('txtInput').value.trim() != '') {
    searchTerm = $('txtInput').value.trim();
    btn_enter();
  }
  domainString += searchTerm;
  win = window.open(domainString, '_blank');
  win.location;
}

function help() {

  rpnAlert('Commands NOT case sensitive [about, c, city, clear, date, e, embed, fix, flightlogger, go, ip, ipmapper, load, locus, mobile, napes, notes, off, phi, pi, print, save, saveas, size, time, tricorder, tostring, unembed, you]');
  btn_enter();
  btn_delete();
}

function parseInput() {

  switch ($('txtInput').value.toLowerCase().trim()) {

  case 'about':
    stack.pop();
    rpnAlert('This is a Reverse Polish Notation Calculator, with a Stack. Designed by Napes Weaver.');
    btn_enter();
    btn_delete();
    break;
  case 'ai + drones =':
    rpnAlert('Really Super Smart Autonomous Drones');
    btn_enter();
    btn_delete();
    break;
  case 'c':
    stack.pop();
    updateDisplay();
    rpnAlert('299792458m/s');
    break;
  case 'city':
    stack.pop();
    // Change city for map widget 
    city = stack[stack.length - 1].getSoul();
    btn_delete();
    break;
  case 'clear':
  case 'clr':
  case 'cls':
    btn_clear();
    break;
  case 'date':
    stack.pop();
    updateDisplay();
    todaysDate();
    break;
  case 'e':
    stack.pop();
    updateDisplay();
    eulersNum();
    break;
  case 'embed':
    stack.pop();
    embed(stack[stack.length - 1].getSoul());
    btn_delete();
    saveTricorder();
    break;  
  case 'fix':
    stack.pop();
    setFixDecimal(parseInt(stack[stack.length - 1].getRealPart()));
    updateDisplay();
    break;
  case 'flightlogger':
    stack.pop();
    updateDisplay();
    window.open('https://orbiter-flight-logger.herokuapp.com/', '_blank').focus();
    break;
  case 'g':
    stack.pop();
    updateDisplay();
    rpnAlert('6.674E-11');
    break;
  case 'go':
    internetSearch('https://www.google.com/#q=');
    break;
  case 'gravity':
    //resetMathmon();
    gravity();
    break;
  case 'help':
  case '?':
    stack.pop();
    help();
    break;
  case 'how are ya':
  case 'how are you':
  case 'how ya doing':
    rpnAlert('Like a rhinestone cowboy!');
    btn_enter();
    btn_delete();
    break;
  case 'hello':
  case 'hi':
    rpnAlert('Hallo there!');
    btn_enter();
    btn_delete();
    break;
  case 'ip':
    stack.pop();
    updateDisplay();
    getIP();
    break;
  case 'ipmapper':
    window.open('https://napesweaver.github.io/ip-mapper/', '_blank').focus();
    break;
  case 'dir':
  case 'loa':
  case 'load':
  case 'ls':
    btn_delete();
    btn_load();
    break;
  case 'locus':
    stack.pop();
    updateDisplay();
    rpnAlert('lat:' + lat + ', lon:' + lng);
    break;
  case 'mobile':
    stack.pop();
    updateDisplay();
    rpnAlert(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    break;
  case 'napes':
    location.href = 'https://napesweaver.github.io/rpnapes/reference/index.html';
    break;
  case 'notes':
    stack.pop();
    updateDisplay();
    btn_xoff();
    break;
  case 'exit':
  case 'off':
    stack.pop();
    updateDisplay();
    btn_off();
    break;
  case 'phi':
    stack.pop();
    updateDisplay();
    goldenRatio();
    break;
  case 'pi':
    stack.pop();
    updateDisplay();
    btn_pi();
    break;
  case 'print':
    stack.pop();
    btn_delete();
    print();
    break;
  case 'save':
    stack.pop();
    btn_delete();
    btn_save();
    break;
  case 'saveas':
    stack.pop();
    saveToHostFile(stack[stack.length - 1].prettyPrint(), true);
    btn_delete();
    break;
  case 'size':
    stack.pop();
    updateDisplay();
    getSize();
    break;  
  case 'time':
    stack.pop();
    updateDisplay();
    rpnAlert(gameOn);
    break;
  case 'tostring':
    stack.pop();
    saveToHostFile(stack[stack.length - 1].prettyPrint(), false);
    btn_delete();
    break;
  case 'twig':
    stack.pop();
    btn_delete();           
    monOn();
    break;
  case 'twigstat':
    stack.pop();
    monStatus();
    btn_delete();
    break;
  case 'tricorder':
    stack.pop();
    btn_delete();
    tricorderOn();
    break;
  case 'unembed':
    stack.pop();
    updateDisplay();
    btn_delete();
    widgetSrc.shift();
    saveTricorder();
    break;
  case 'you':
    internetSearch('https://www.youtube.com/results?search_query=');
    break;
  default:
    if (twig.health > 0) {
      $('twig').src = 'images/twig/hat-tip.gif';
    }
    break;
  }
}

document.addEventListener('keypress', function (event) {

  if ($('rpnapes').className != 'hidden') {
    switch (event.keyCode) {
    case 13:
      // RPNapes ENTER
      btn_enter();
      break;
    default:
      break;
    }
  }
});

document.addEventListener('keydown', function (event) {

  if ($('rpnapes').className != 'hidden') {
    if ($('twig').className != 'hidden') {
      switch (event.keyCode) {
      case 37:
        // LEFT ARROW
        if (!event) { event = window.event; }
        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
        if (twig.health > 0) {
          $('twig').src = 'images/twig/walk-left.gif';
          moveObj(twig, twig.speed, -1, 0);
        }
        break;
      case 38:
        // UP ARROW
        if (!event) { event = window.event; }
        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
        if (twig.health > 0) {
          $('twig').src = 'images/twig/walk-left.gif';
          moveObj(twig, twig.speed, 0, -1);
        }
        break;
      case 39:
        // RIGHT ARROW
        if (!event) { event = window.event; }
        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
        if (twig.health > 0) {
          $('twig').src = 'images/twig/walk-right.gif';
          moveObj(twig, twig.speed, 1, 0);
        }
        break;
      case 40:
        // DOWN ARROW
        if (!event) { event = window.event; }
        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
        if (twig.health > 0) {
          $('twig').src = 'images/twig/walk-right.gif';
          moveObj(twig, twig.speed, 0, 1);
        }
        break;
      default:
        break;
      }
    }
    else {
      if (false) {
        //if ((/*@cc_on!@*/false || !!document.documentMode) || isChrome) {
        // IE || Chrome - No solution yet :(
      } else {
        // Firefox        
        switch (event.keyCode) {
        case 38:
          // UP ARROW - If focus is on txtInput move focus to bottom of lstStack                        
          if (!stackFocus) {
            //event.preventDefault();
            if (!event) { event = window.event; }
            event.preventDefault ? event.preventDefault() : (event.returnValue = false);
            var t = $('lstStack');
            t.onfocus = function () {
              t.scrollTop = t.scrollHeight;
              setTimeout(function () {
                t.select();
                t.selectionStart = t.selectionEnd;
              }, 10);
            };
            $('lstStack').focus();
            stackFocus = true;
          }
          break;
        case 40:
          // DOWN ARROW - If focus is at bottom of lstStack move focus to txtInput
          if (getIndex('lstStack') == $('lstStack').value.split('\n').length) {
            //event.preventDefault();
            if (!event) { event = window.event; }
            event.preventDefault ? event.preventDefault() : (event.returnValue = false);
            $('txtInput').focus();
          }
          break;
        default:
          break;
        }
      }
    }
    switch (event.keyCode) {
    case 8:
      // BACKSPACE
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      backupUndo();
      backspaceKey();
      break;
    case 27:
      // ESC
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btn_xy();
      break;
    case 46:
      // DELETE
      btn_delete();
      break;
    case 106:
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btn_multiply();
      break;
    case 107:
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btn_add();
      break;
    case 109:
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btn_subtract();
      break;
    case 111:
      if (!event) { event = window.event; }
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
      btn_divide();
      break;
    default:
      break;
    }
  }
});
document.addEventListener('keyup', function (event) {

  if ($('rpnapes').className != 'hidden') {

    switch (event.keyCode) {
    case 37:
      // LEFT ARROW
    case 38:
      // UP ARROW
    case 39:
      // RIGHT ARROW
    case 40:
      // DOWN ARROW
      if (twig.health > 0) {
        $('twig').src = 'images/twig/hat-on.gif';
      }
      break;
    default:
    }
  }
  else {
    //$("btnSaveNotes").style.color = "#000000";
    switch (event.keyCode) {
    case 13:
      // Notes ENTER
    case 46:
      // Notes DELETE
    case 49:
      // Notes 1 and !
    case 188:
      // Notes , and <
    case 190:
      // Notes . and >
    case 191:
      // Notes ? and /
      backupUndoNotes();
      notes = $('lstNotes').value.split('\n');
      $('lstNotes').focus();
      break;
    default:
    }
  }
});

function lstStackFocus() {

  stackFocus = true;
}
function txtInputFocus() {

  stackFocus = false;
}
function selectText(id, name) {

  var lines = $(id).value.split('\n');
  // Calculate start/end
  var startPos = 0, endPos = $(id).value.length;

  for (var x = 0; x < lines.length; x++) {
    if (x == getIndex(name) - 1) {
      break;
    }
    startPos += (lines[x].length + 1);
  }
  var endPos = lines[getIndex(name) - 1].length + startPos;

  // Firefox
  if (typeof ($(id).selectionStart) !== 'undefined') {
    $(id).focus();
    $(id).selectionStart = startPos;
    $(id).selectionEnd = endPos;
    return true;
  }
  // Internet Explorer
  if (document.selection && document.selection.createRange) {
    $(id).focus();
    $(id).select();
    var range = document.selection.createRange();
    range.collapse(true);
    range.moveEnd('character', endPos);
    range.moveStart('character', startPos);
    range.select();
    return true;
  }
  return false;
}
function getIndex(name) {

  var t = document.getElementsByName(name)[0];
  return (t.value.substr(0, t.selectionStart).split('\n').length);
}
function getSelectedText(id) {

  var textComponent = $(id);
  var selectedText;
  backupUndo();
  // IE version
  if (document.selection != undefined) {
    textComponent.focus();
    var sel = document.selection.createRange();
    selectedText = sel.text;
  }
  // Mozilla version
  else if (textComponent.selectionStart != undefined) {
    var startPos = textComponent.selectionStart;
    var endPos = textComponent.selectionEnd;
    selectedText = textComponent.value.substring(startPos, endPos);
  }
  selectedText = selectedText.trim();
  insertAtCursor($('txtInput'), selectedText);
  document.querySelector('#txtInput').select();
  document.execCommand('copy');
  //$("txtInput").focus();
}
function insertAtCursor(txtField, txtValue) {

  var startPos = txtField.selectionStart;
  var endPos = txtField.selectionEnd;

  txtField.value = txtField.value.substring(0, startPos) + txtValue + txtField.value.substring(endPos, txtField.value.length);
  txtField.selectionEnd = endPos + txtValue.length;
  // Deselect text for IE
  txtField.selectionStart = txtField.selectionEnd;
}

function updateDisplay() {

  $('lstStack').value = '';
  // Buffer stack display
  for (var i = 0; i < $('lstStack').getAttribute('rows') ; i++) {
    $('lstStack').value += ' \n';
  }
  // Print to stack display
  for (var s in stack) {
    $('lstStack').value += '\n';

    if (isNaN(stack[s].getRealPart()) && stack[s].getImaginary() == 'NiN') {
      $('lstStack').value += decodeSpecialChar(stack[s].getSoul());
    }
    else {
      if(!isNaN(stack[s].getRealPart())) {
        $('lstStack').value += rounding(stack[s].getRealPart().toString());
        if (stack[s].getImaginary() != 'NiN') {
          if (parseFloat(stack[s].getImaginary()) > 0) {
            $('lstStack').value += ' + ' + rounding(stack[s].getImaginary().toString()) + 'j';
          }
          else {
            $('lstStack').value += ' - ' + rounding(stack[s].getImaginary().toString()).substring(1) + 'j';
          }
        }
      }
      else {
        if (parseFloat(stack[s].getImaginary()) > 0) {
          $('lstStack').value += rounding(stack[s].getImaginary().toString()) + 'j';
        }
        else {
          $('lstStack').value += '-' + rounding(stack[s].getImaginary().toString()).substring(1) + 'j';
        }
      }
      if (stack[s].getUnits() != 'null') {
        $('lstStack').value += ' ' + decodeSpecialChar(stack[s].getUnits());
      }
    }
  }
  colorSaveButton();
  $('lstStack').scrollTop = $('lstStack').scrollHeight;
  $('txtInput').select();
}
function colorSaveButton() {

  if (document.cookie.indexOf('STACK') != -1) {
    var index = 0;

    index = getCookie('STACK').indexOf('=') + 1;
    //alert(getCookie("STACK").substr(0).trim() + "\n" + nestArray(stack).trim());
    if (getCookie('STACK').substr(index).trim() != nestArray(stack).trim()) {
      $('btnSave').style.color = '#000000';
    }
    else {
      $('btnSave').style.color = '#D4D0C8';
    }
  }    
}
function rpnAlert(input) {

  backupUndo();
  $('txtInput').value = input;
  $('txtInput').select();
}

function storeCookie(aName, tmpArray) {
  var d = new Date();
  // years * days * hours * min * sec * mili second
  d.setTime(d.getTime() + (1 * 365 * 24 * 60 * 60 * 1000));
  var expires = '; expires=' + d.toUTCString();
  document.cookie = aName + '=' + tmpArray + expires + ';path=/';
}
//function getCookie(name) {
//    var value = "; " + document.cookie;
//    var parts = value.split("; " + name + "=");
//    if (parts.length == 2) return parts.pop().split(";").shift();
//}
function getCookie(cname) {

  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

function encodeSpecialChar(tmpString) {

  tmpString = tmpString.replace(/×/g, '*');

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
  //tmpString = tmpString.replace(/°/g, "&#176");// degree
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
  //tmpString = tmpString.replace(/&#176/g, "°");
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

  return tmpString;
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
        if (subIndex < 0 && isNaN(tmpSubString[i]) && tmpSubString[i] != '.') {
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
function parseY() {

  var tmpY = stack.pop();
  if (parenthesesExist(tmpY.getSoul())) {
    if (parenthesesEven(tmpY.getSoul())) {
      tmpY = eval(tmpY.getSoul());
    }    
  } else {
    tmpY = tmpY.getRealPart();
  }
  return tmpY;
}
function parenthesesExist(tmpArray) {

  if(tmpArray.indexOf('(') == -1) {
    return false;
  }
  return true;
}
function parenthesesEven(tmpArray) {

  if ((tmpArray.match(/[(]/g) || []).length  >  (tmpArray.match(/[)]/g) || []).length) {
    return false;
  }
  return true;
}
// Extract Real component from 'soul' of argument
function extractReal(tmpArray) {

  var tmpReal = '';

  //if (!/^\d+[.]\d*[.]\d*/g.test(tmpArray) && !/^\d+[,:/-]\d*/g.test(tmpArray)) {
  //if (!/^\d+[.]\d*[.]\d*/g.test(tmpArray) && !/^\d+[.]*\d*\s*[×,:/*-]\s*\d*[.]*\d*/g.test(tmpArray)) {
  //if (!/^\d+[.]\d*[.]\d*/g.test(tmpArray) && !/^\d+[.]*\d*\s*[×,;/<>?:`~!@#$%^&*(){}\[\]|\\_=]\s*\d*[.]*\d*/g.test(tmpArray)) {
  //if (!/^\d+[.]\d*[.]\d*/g.test(tmpArray) && !/^\d+[.]*\d*\s*[×,;/<>?:`~!@#$%^&*(){}\[\]|\\_=]\s*\d*[.]*\d*/g.test(tmpArray) && !/^[-+]?\d+[.]?\d*[eE]?[-+]?\d*j/g.test(tmpArray)) {
  //if (!/^\d+[-+]\d*[-+]?\d*/g.test(tmpArray) && !/^\d+[.]\d*[.]\d*/g.test(tmpArray) && !/^\d+[.]*\d*\s*[×,;/<>?:`~!@#$%^&*(){}\[\]|\\_=]\s*\d*[.]*\d*/g.test(tmpArray) && !/^[-+]?\d+[.]?\d*[eE]?[-+]?\d*j/g.test(tmpArray)) {
  if (!/^\d+[-+]\d*[-+]?\d*/g.test(tmpArray) && !/^\d+[.]\d*[.]\d*/g.test(tmpArray) && !/^\d+[.]*\d*\s*[×,;/<>?:`~!@#$%^&*(){}\[\]|\\_=]\s*\d*[.]*\d*/g.test(tmpArray) && !/^[-+]?\d+[.]?\d*[eE]?[-+]?\d*j/g.test(tmpArray)) {
    tmpReal = parseFloat(tmpArray);
    //tmpReal += parseFloat(tmpArray.match(!/^[-+]?[ ]*\d+[.]?\d*[eE]?[-+]?\d*/g));
  } else {
    tmpReal = 'NaN';
  }
  return tmpReal;
}
// Extract Imaginary component from complex number
function extractImaginary(tmpArray) {

  var tmpImaginary = '';

  //tmpImaginary += tmpArray.match(/(?![!Ω♥!@#$%^&*()_=<>?/|~`'"])+[-+][ ]*[0-9]+\.?[0-9]*[eE]?[-+]?[0-9]*j/);
  //tmpImaginary += tmpArray.match(/(?![!Ω♥!@#$%^&*()_=<>?/|~`'"])+[-+][ ]*[0-9]+[.]?[0-9]*[eE]?[-+]?[0-9]*j/);
  //tmpImaginary += tmpArray.match(/[-+][ ]*[0-9]+[.]?[0-9]*[eE]?[-+]?[0-9]*j/);
  //tmpImaginary += tmpArray.match(/[-+]?[ ]*[0-9]+[.]?[0-9]*[eE]?[-+]?[0-9]*j/);
  tmpImaginary += tmpArray.match(/[-+]?[ ]*[0-9]+[.]?[0-9]*[eE]?[-+]?[0-9]*j/);

  if (tmpImaginary.charAt(1) === ' ') {
    tmpImaginary = tmpImaginary.replace(/ /g, '');
  }
  tmpImaginary = tmpImaginary.substring(0, tmpImaginary.length - 1);
  tmpImaginary = parseFloat(tmpImaginary);

  return tmpImaginary;
}
// Extract units from a number
function extractUnits(tmpArray) {

  var tmpUnits = '';

  if (tmpArray.indexOf('Infinity') != -1) {
    tmpArray = tmpArray.replace(/Infinity/g, '');
  }
  //tmpUnits += tmpArray.match(/(?!^[0-9])(?![eE][-+]?[0-9]+)(?![j]\b)(?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z0-9/]*/);
  //tmpUnits += tmpArray.match(/(?!^[0-9])(?![eE][-+]?[0-9]+)(?![j]\b)(?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*/);
  //tmpUnits += tmpArray.match(/(?![eE][-+]?[0-9]+)(?![j]\b)(?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*/);
  tmpUnits += tmpArray.match(/(?![eE][-+]?[0-9]+)(?![j]\b)(?:[1][/])?[Ω♥a-zA-Z]+[-*^Ω♥a-zA-Z.0-9/]*/);

  return tmpUnits;
}

function setFixDecimal(value) {

  if (value != '' && !isNaN(value) && parseInt(value) > -2 && parseInt(value) < 18) {
    fixDecimal = value;
  }
  else {
    rpnAlert('Enter an integer from -1 to 17 first.');
  }
}
function rounding(possibleNumber) {

  if (!isNaN(possibleNumber) && (possibleNumber != '') && (possibleNumber.indexOf('e') === -1 && possibleNumber.indexOf('E') === -1)) {
    if (fixDecimal != -1) {
      //possibleNumber = possibleNumber.toExponential();
      possibleNumber = toFixed(possibleNumber, fixDecimal);
    }
  }
  return possibleNumber;
}
function toFixed(value, precision) {

  var precision = precision || 0,
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

function addNotNullUnits() {

  var newUnits = addUnits();    
  if(newUnits === ' null') {
    newUnits = '';
  }
  return newUnits;
}
function multiplyNotNullUnits(exponent) {

  var newUnits = multiplyUnits(exponent);    
  if(newUnits === ' ') {
    newUnits = '';
  }
  return newUnits;
}
function divideNotNullUnits(exponent) {

  var newUnits = divideUnits(exponent);    
  if(newUnits === ' ') {
    newUnits = '';
  }
  return newUnits;
}
function addUnits() {

  var newUnits = '';

  // If x and y have the same units or y has no units
  if (extractUnits($('txtInput').value) === decodeSpecialChar(stack[stack.length - 1].getUnits()) || (extractUnits($('txtInput').value) != 'null' && stack[stack.length - 1].getUnits()) === '') {
    newUnits = ' ' + extractUnits($('txtInput').value);
  }
  // If y has units but x does not
  if (extractUnits($('txtInput').value) === 'null' && stack[stack.length - 1].getUnits() != '') {
    newUnits = ' ' + stack[stack.length - 1].getUnits();
  }
  return newUnits;
}
function multiplyUnits(multiplier) {

  var unitsMultiplied = '';
  var unitsY = decodeSpecialChar(stack[stack.length - 1].getUnits());
  var unitsX = extractUnits($('txtInput').value);

  if (unitsY != '' || unitsX != 'null') {
    unitsMultiplied = ' ' + processUnits(unitsY, unitsX, multiplier, true);
  }
  return unitsMultiplied;
}
function divideUnits(multiplier) {

  var unitsDivided = '';
  var unitsY = decodeSpecialChar(stack[stack.length - 1].getUnits());
  var unitsX = extractUnits($('txtInput').value);

  if ((unitsY != '' || unitsX != 'null') && unitsY != unitsX) {
    unitsDivided = ' ' + processUnits(unitsY, unitsX, multiplier, false);
  }
  return unitsDivided;
}
function inverseUnits() {

  var tmpArray = [];
  var invertedUnits = '';
  var unitsX = extractUnits($('txtInput').value);

  if (unitsX != 'null') {
    unitsX = rewriteNegUnitExp(unitsX);

    if (unitsX.indexOf('/') != -1) {
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
  var unitsCombined = '';

  if (tmpUnits.indexOf('/') != -1) {
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

    if (denominatorY != '') {
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
  if (unitsCombined.indexOf('-') != -1) {
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
    if (unitsA[a].indexOf('^') != -1) {
      expA = unitsA[a].match(/[-]?[.0-9]+/);
    }
    // Check for matches between tmpUnitsA and unitsB
    for (var b in unitsB) {
      var tmpUnitsB = '';
      var expB = 1;

      tmpUnitsB += unitsB[b].match(/!?[Ω♥a-zA-Z]+/);
      if (unitsB[b].indexOf('^') != -1) {
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
  for (var b in unitsB) {
    var tmpUnitsB = '';
    var expB = 1;

    unitsDoNotMatch = true;
    tmpUnitsB += unitsB[b].match(/[Ω♥a-zA-Z]+/);
    if (unitsB[b].indexOf('^') != -1) {
      expB = unitsB[b].match(/[-]?[.0-9]+/);
    }
    for (var a in unitsA) {
      var tmpUnitsA = '';

      tmpUnitsA += unitsA[a].match(/[Ω♥a-zA-Z]+/);

      if (tmpUnitsB === tmpUnitsA) {
        unitsDoNotMatch = false;
      }
    }
    if (unitsDoNotMatch) {
      if (!add) {
        expB = expB * -1;
      }
      unitsCombined = appendUnits(unitsCombined, tmpUnitsB, expB);
    }
  }
  return unitsCombined;
}
function appendUnits(unitString, tmpUnits, exponent) {

  if (tmpUnits != 'null') {
    if (exponent == 1) {
      if (unitString.length > 0) {
        unitString += '*';
      }
      unitString += tmpUnits;
    }
    else if (exponent != 0) {
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

  if (tmpUnits.indexOf('-') != -1) {
    var unitsSplit = [];
    var numerator = [];
    var denominator = [];
    var changedUnits = [];

    unitsSplit = splitUnits(tmpUnits);
    numerator = unitsSplit[0];
    denominator = unitsSplit[1];

    changedUnits = cutOutNegExponent(changedUnits, numerator);

    denominator = unitAddition(denominator, changedUnits, 1, true);
    denominator = denominator.split('*');

    changedUnits = [];
    changedUnits = cutOutNegExponent(changedUnits, denominator);

    numerator = unitAddition(numerator, changedUnits, 1, true);
    changedUnits = [];
    denominator = unitAddition(denominator, changedUnits, 1, true);

    if (numerator === '' && denominator != '') {
      numerator += '1';
    }
    newUnits += numerator;

    if (denominator != '') {
      newUnits += '/' + denominator;
    }
  }
  else {
    newUnits = tmpUnits;
  }
  return newUnits;
}
function cutOutNegExponent(tmpArray, expression) {

  var e = 0;

  while (e < expression.length) {
    if (expression[e].indexOf('-') != -1) {
      var tmpString = '';
      tmpString += expression.splice(e, 1).toString();
      tmpString = tmpString.replace(/-/g, '');
      tmpArray.push(tmpString);
      e--;
    }
    e++;
  }
  return tmpArray;
}

//////// ♥ ♥ ♥ ///////////////////////////////////////////////////////////////////////

/**    
                 RPNapes

    Finish implementation of expressions evaluation wiring (root, exponential, parentheses buttons/function (equals button?))

        Add function to replace pow, sqrt with Math.pow and Math.sqrt
    
    Reorder NumberObject parameters ??? (soul, realPart, imaginary, units, timeStamp).

    Refactor prevent default, getSelectedText(id) re. selectedText.trim(), selectText(id, name) and 'units' methods.

    More verbose help - in context - and more error handling in general - more titles help.

    Rework +/-.

    Implement imaginary numbers.

    Display scientific/engineering? notation - rework rounding method...

    Different view / save as options eg. see numbers only, see original input only, etc..

    Option for save as fileName.    

    totalStack(), averageStack(), sortStack(maxMin), searchStack()..?

    Compute e..?    

    Logarhythms. 

    Add Riemann Zeta function.    

    Spell-check?

    Parse discriptor field for NumberObject ie. 15e3V -5i Is my Weird Voltage?

                 Twig
     
    Mobile arrow-key functions..?

                 Tricorder
                 
    Level, compass, accelerometer???

                 Notes
        
**/

//////////////////// idName, xPos, yPos, objSize, health, speed, ammo ////////////////

var twig = new Mathmon('twig', 135, -310, 3, 100, 5, 6);
var tv = new Mathmon('tv', -45, -330, 30, 100, 7, 0);
var don = new Mathmon('don', -45, -420, 3, 100, 6, 0);

var theObjects = [3];

//////// Mathmon Class ///////////////////////////////////////////////////////////////

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
    rpnAlert(theObjects[i].toString());
    btn_enter();
  }
}
function gameOn() {

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
  worldBoundary();
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

  for (var i = 0; i < theObjects.length; i++) {
    $(theObjects[i].idName).style.left = theObjects[i].xPos + 'px';
    $(theObjects[i].idName).style.top = theObjects[i].yPos + 'px';
  }
  worldBoundary();
}

function loadTheObjects(tmpStack) {

  if ((/*@cc_on!@*/false || !!document.documentMode) || isChrome) {
    // IE || Chrome - remove underscore from begining of string
    tmpStack = tmpStack.substr(1);
  }
  tmpStack = splitArrayByBrowser(tmpStack);
  var o = 0;
  while (tmpStack.length > 0) {

    var tmpArray = [];

    tmpArray = tmpStack.shift();
    tmpArray = tmpArray.split(',');

    theObjects[o].setXPos(parseInt(tmpArray[1]));
    theObjects[o].setYPos(parseInt(tmpArray[2]));
    theObjects[o].setObjSize(parseInt(tmpArray[3]));
    theObjects[o].setHealth(parseInt(tmpArray[4]));
    theObjects[o].setSpeed(parseInt(tmpArray[5]));
    theObjects[o].setAmmo(parseInt(tmpArray[6]));
    $(theObjects[o].idName).style.left = theObjects[o].xPos + 'px';
    $(theObjects[o].idName).style.top = theObjects[o].yPos + 'px';
    o++;
  }
}

function moveObj(obj, speed, xMov, yMov) {

  var index = 0;
  // Move obj
  obj.movXPos(speed * xMov);
  obj.movYPos(speed * yMov);
  // Find obj's index in theObjects
  for (var i = 0; i < theObjects.length; i++) {
    if (obj.idName === theObjects[i].idName) { index = i; }
  }    
  // Check for collision with other objects
  for (var i = 0; i < theObjects.length; i++) {
    if (obj.idName != theObjects[i].idName) {
      // Compute space between two objects
      var spaceX = Math.abs(obj.xPos - (theObjects[i].xPos + ((i - index) * (65 + theObjects.length))));
      var spaceY = Math.abs(obj.yPos - theObjects[i].yPos);
      // If spaceX and spaceY are smaller than the total size of the two objects: COLLISION!
      if (spaceX < (obj.objSize + theObjects[i].objSize) && spaceY < (obj.objSize + theObjects[i].objSize)) {
        // Move object which was hit
        moveObj(theObjects[i], speed + 1, xMov, yMov);                
        if (theObjects[i].idName === 'twig') {
          twig.movHealth(-1);
          rpnAlert(twig.health);
          if (twig.health <= 0) {
            $('twig').src = 'images/twig/pop.gif';
            rpnAlert('Game Over');
            setTimeout(resetMathmon, 3000);
          }
        }
        if (theObjects[i].idName === 'tv') {
          // If not already animated
          if ($('tv').src.indexOf('tv-off') != -1) {
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
  // Check for collision with display area boundry
  //if ($("btnGo").value === "Go") {
  //    screenEdgeCollision(obj, index);
  //}
  //rpnAlert("twig:" + theObjects[0].xPos.toString() + " " + theObjects[0].yPos.toString() + " tv:" + theObjects[1].xPos.toString() + " " + theObjects[1].yPos.toString() + " don:" + theObjects[2].xPos.toString() + " " + theObjects[2].yPos.toString());
  displayGIF(obj);
}
//function screenEdgeCollision(obj, index) {
//    // index * 64 is the x coordinate offset of the .gif as rendered by the HTML
//    // Pass through to other side
//    if (obj.yPos < -440 + (obj.objSize / 2)) { obj.setYPos(-290 - obj.objSize); }// Top border
//    if (obj.yPos > -290 - (obj.objSize / 2)) { obj.setYPos(-440 + obj.objSize); }// Bottom border
//    if (obj.xPos < -49 - (index * 64) + (obj.objSize / 2)) { obj.setXPos(170 - (index * 64) - obj.objSize); }// Left border
//    if (obj.xPos > 170 - (index * 64) - (obj.objSize / 2)) { obj.setXPos(-49 - (index * 64) + obj.objSize); }// Right border

//    // Collide with border
//    //if (obj.yPos < -440 + (obj.objSize / 2)) { obj.setYPos(-440 + obj.objSize); }// Top border
//    //if (obj.yPos > -290 - (obj.objSize / 2)) { obj.setYPos(-290 - obj.objSize); }// Bottom border
//    //if (obj.xPos < -49 - (index * 64) + (obj.objSize / 2)) { obj.setXPos(-49 - (index * 64) + obj.objSize); }// Left border
//    //if (obj.xPos > 170 - (index * 64) - (obj.objSize / 2)) { obj.setXPos(170 - (index * 64) - obj.objSize); }// Right border   
//}
function worldBoundary() {

  if (gameOn()) {
    if ($('btnGo').value === 'Go') {
      for (var i = 0; i < theObjects.length; i++) {
        // i * 64 is the x coordinate offset of the .gif as rendered by the HTML
        // Pass through to other side
        if (theObjects[i].yPos < -440 + (theObjects[i].objSize / 2)) { theObjects[i].setYPos(-290 - theObjects[i].objSize); }// Top border
        if (theObjects[i].yPos > -290 - (theObjects[i].objSize / 2)) { theObjects[i].setYPos(-440 + theObjects[i].objSize); }// Bottom border
        if (theObjects[i].xPos < -49 - (i * 64) + (theObjects[i].objSize / 2)) { theObjects[i].setXPos(170 - (i * 64) - theObjects[i].objSize); }// Left border
        if (theObjects[i].xPos > 170 - (i * 64) - (theObjects[i].objSize / 2)) { theObjects[i].setXPos(-49 - (i * 64) + theObjects[i].objSize); }// Right border
                
        // Collide with border
        //if (theObjects[i].yPos < -440 + (theObjects[i].objSize / 2)) { theObjects[i].setYPos(-440 + theObjects[i].objSize); }// Top border
        //if (theObjects[i].yPos > -290 - (theObjects[i].objSize / 2)) { theObjects[i].setYPos(-290 - theObjects[i].objSize); }// Bottom border
        //if (theObjects[i].xPos < -49 - (i * 64) + (theObjects[i].objSize / 2)) { theObjects[i].setXPos(-49 - (i * 64) + theObjects[i].objSize); }// Left border
        //if (theObjects[i].xPos > 170 - (i * 64) - (theObjects[i].objSize / 2)) { theObjects[i].setXPos(170 - (i * 64) - theObjects[i].objSize); }// Right border   

        displayGIF(theObjects[i]);
      }            
    }
    setTimeout(worldBoundary, 90);
  }        
} 
function brownianMovement(obj) {

  var x = Math.floor(Math.random() * 2);
  var y = Math.floor(Math.random() * 2);

  if (Math.floor(Math.random() * 2) == 0) {
    x = x * -1;
  }
  if (Math.floor(Math.random() * 2) == 0) {
    y = y * -1;
  }
  moveObj(obj, obj.speed, x, y);
}
function pongTV() {

  if (gameOn()) {
    $('tv').src = 'images/twig/tv-pong.gif';
    setTimeout(staticTV, 600);
    brownianMovement(tv);
  }
  else {
    $('tv').src = 'images/twig/tv-off.gif';
  }
}
function staticTV() {

  if (gameOn()) {
    $('tv').src = 'images/twig/tv-static.gif';
    setTimeout(pongTV, 900);
    brownianMovement(tv);
  }
  else {
    $('tv').src = 'images/twig/tv-off.gif';
  }
}
function donMove() {

  if (gameOn()) {
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
function gravity() {
  if (gameOn()) {
    for(var i = 0; i < theObjects.length; i++)
    {
      moveObj(theObjects[i], 1, 0, 1);
    }
    setTimeout(gravity, 1);
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
  for (var s in widgetSrc) {
    widgetSrc[s] = decodeSpecialChar(widgetSrc[s]);
    if (widgetSrc[s] === '') {
      widgetSrc.splice(s, 1);
    }
  }
}

function power() {

  navigator.vibrate([21]);

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
    for (var i = 0; i < $('tricorder').getElementsByTagName('audio').length; i++) {
      $('tricorder').getElementsByTagName('audio')[i].muted = false;
    }
  }
}
function playAudio(obj) {

  if (!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    obj.play();
  }
}

// Power On/Off.
function button1() {

  navigator.vibrate([21]);

  if (power()) {
    muteAudio(true);
    $('widget').src = '';
    $('widget').className = 'hidden';
    $('viewport').src = '';
    $('viewport').className = 'hidden';
    $('tricorderskin').src = 'images/tricorder.png';
  }
  else {
    muteAudio(false);
    $('tricorderskin').src = 'images/tricorderon.png';
    $('viewport').src = 'https://www.youtube.com/embed/RGDEKqU0T2k?autoplay=1';
    
    $('viewport').className = 'visible';
    playAudio($('working'));
    playAudio($('hailing_frequencies'));
    getLocation();
  }
}
function button2() {

  if (power()) {
    navigator.vibrate([21]);

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
    navigator.vibrate([21]);

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
    navigator.vibrate([21]);

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
    navigator.vibrate([21]);

    if ($('widget').className === 'hidden') {
      var srcString = '';
      var myString = 'forecast';

      if ($('widget').src.indexOf(myString) === -1) {
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
    navigator.vibrate([21]);

    if ($('widget').className === 'hidden') {
      var srcString = '';

      // IP Mapper
      srcString += 'https://napesweaver.github.io/ip-mapper/';
      $('widget').src = srcString;
      $('widget').className = 'visible';
      playAudio($('keypress6'));
      playAudio($('scanner'));
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
    navigator.vibrate([21]);
    $('viewport').src = '';
    $('viewport').src = 'sounds/beatles.m3u';
    playAudio($('communications_static'));
  }
}
function sensor2() {

  $('viewport').src = '';
  $('viewport').src = 'sounds/the20s.m3u';
  if (power()) {
    navigator.vibrate([21]);
    playAudio($('spocksviewer'));
  }
}

function saveTricorder() {

  for (var s in widgetSrc) {
    widgetSrc[s] = encodeSpecialChar(widgetSrc[s]);
  }  
  storeCookie('TRICORDER', nestArray(widgetSrc));
}

//////// Notes ///////////////////////////////////////////////////////////////////////

var notes = [];
var backUpsNotes = [33];
var restoresNotes = [33];

function btn_copy_notes() {

  navigator.vibrate([21]);

  var tmpTxt = '';
  tmpTxt = $('txtInput').value.trim();
  $('lstNotes').focus();
  getSelectedText('lstNotes');
  $('txtInput').value = tmpTxt;
}
function btn_paste_notes() {

  navigator.vibrate([21]);
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
  $('lstNotes').focus();
}
function btn_undo_notes() {

  navigator.vibrate([21]);

  if (backUpsNotes.length > 2) {
    restoresNotes.push(nestArray(notes));
    notes = splitArrayByBrowser(backUpsNotes.pop());
    updateDisplayNotes();
  }
  colorNotesUndoButton();
  $('lstNotes').focus();
}
function btn_redo_notes() {

  navigator.vibrate([21]);

  if (restoresNotes.length > 0) {
    backUpsNotes.push(nestArray(notes));
    notes = splitArrayByBrowser(restoresNotes.pop());
    updateDisplayNotes();
  }
  colorNotesUndoButton();
  $('lstNotes').focus();
}
function backupUndoNotes() {

  navigator.vibrate([21]);

  backUpsNotes.push(nestArray(notes));
  notes = $('lstNotes').value.split('\n');
  restoresNotes.length = 0;
  colorNotesUndoButton();
}
function colorNotesUndoButton() {

  if (backUpsNotes.length > 2) {
    $('btnUndoNotes').style.color = '#01c401';
  }
  else {
    $('btnUndoNotes').style.color = '#919191';
  }
  if (restoresNotes.length > 0) {
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

  $('btnSaveNotes').style.color = '#919191';

  tmpY = encodeSpecialChar($('lstNotes').value);
  notes = tmpY.split('\n');

  storeCookie('NOTES', nestArray(notes));
  $('lstNotes').focus();
}
function btn_load_notes() {

  var index = 0;

  backupUndoNotes();
  index = getCookie('NOTES').indexOf('=') + 1;
  try{
    notes = splitArrayByBrowser(getCookie('NOTES').substr(index));
  }
  catch (e) {
    notes.push('Load error.');
  }
  updateDisplayNotes();
  $('btnSaveNotes').style.color = '#919191';
  $('lstNotes').scrollTop = $('lstNotes').scrollHeight;
  $('lstNotes').focus();
}
function btn_clear_notes() {

  backupUndoNotes();
  $('lstNotes').value = '';
  notes = $('lstNotes').value.split('\n');
  $('lstNotes').focus();
}
function updateDisplayNotes() {

  $('lstNotes').value = '';
  for (var n in notes) {
    $('lstNotes').value += decodeSpecialChar(notes[n]);
    $('lstNotes').value += '\n';
  }
  $('lstNotes').value = $('lstNotes').value.trim();
  $('lstNotes').value += '\n';
  if (notes.length === 1 && notes[0] === '') {
    $('lstNotes').value = '';
  }
}
