/**
 * @author Dennis de Best
 * @name Calcoulette
 * @description A simple Vanilla JavaScript calculator.
 * Designed to work as an old school calculator where the screen get erased after each operator.
 * Operations can be chained, errors are handled, invalid inputs are prevented
 */

//Set some variables to be stored for the whole script
var previous;
var operator;

/**
 * Handle all button presses
 * @returns {boolean}
 */
var buttonPressed = function () {
  //set variables for the current button being presses and whatever is currently displayed on screen
  var val = this.innerHTML;
  var current = '';

  //One of the number buttons
  if (isNumeric(val)) {
    //Reset value after an operation
    if (currentIsOperator()) {
      document.getElementById("screenOutput").value = '';
    }
    document.getElementById("screenOutput").value += val;
    //The decimal separator button
  } else if (val === '.') {
    current = document.getElementById("screenOutput").value;
    //if the current value is not an int it can't have a decimal separator
    if (isInt(current)) {
      document.getElementById("screenOutput").value += val;
    }
    //The equal button
  } else if (val === '=') {
    current = parseFloat(document.getElementById("screenOutput").value);

    if (currentIsOperator()) {
      return false;
    }
    calc(operator, current, previous);
    //The delete button
  } else if (val === "DEL") {
    reset();
  }
  else if (val === "C") {
    value = document.getElementById("screenOutput").value;
    newValue = value.slice(0, -1);
    document.getElementById("screenOutput").value = newValue;
  }
  // the button is an operator therefore we must store it and the previous value
  else {
    previous = document.getElementById("screenOutput").value;
    document.getElementById("screenOutput").value = val;
    operator = val;
  }
};

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function isInt(value) {
  var x = parseFloat(value);
  return !isNaN(value) && (x | 0) === x;
}

/**
 * Returns true if what is currently displayed on screen is an operator or an error
 * @returns {boolean}
 */
function currentIsOperator() {
  current = document.getElementById("screenOutput").value;
  if (current === '=' || current === '+' || current === 'X' || current === '/' || current === 'error' || current === '-'/*
    ( current === '-' && document.getElementById("previous").value !== '')*/) {
    return true
  }
}


/**
 * Reset the screen and the hidden inputs
 */
function reset() {
  previous = '';
  document.getElementById("screenOutput").value = '';
  operator = '';
}

/**
 * Get the operator, current value on the screen and the previous value and perform the operation
 * display an error if the result in non numeric
 * @param operator
 * @param current
 * @param previous
 */
function calc(operator, current, previous) {
  var error = false;
  previous = parseFloat(previous);
  if (operator === '+') {
    result = current + previous;
  } else if (operator === "X") {
    result = current * previous;
  } else if (operator === "/") {
    result = parseFloat(previous / current).toFixed(4);
  } else if (operator === "-") {
    result = previous - current;
  }

  if (!isNumeric(result)) {
    result = "error";
  }
  operator = '=';
  document.getElementById("screenOutput").value = result;
  if (!error) {
    previous = result;
  }
}

//Bind listeners
var btn = document.getElementsByClassName("btn");
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', buttonPressed, false);
}


////////PALINDROME///////
var isPalindrome = function () {
  var val = document.getElementById('palin').value;

  var firsthalf = val.slice(0, val.length / 2);
  if (val.length % 2 === 0) {
    var lasthalf = val.slice(val.length / 2);
  } else {
    var lasthalf = val.slice(val.length / 2 + 1);
  }
  var reversed = lasthalf.split("").reverse().join("");

  console.log(firsthalf + "   " + reversed);

  if (reversed === firsthalf) {
    alert("YUP")
  } else {
    alert("NOPE")
  }

};

console.log(document.getElementById("palinButton"))//.addEventListener('click', isPalindrome, false);


//////FACTO//////


var facto = function () {
  var input = document.getElementById('facto').value;

  result = calcFacto(1, input);
  console.log(result);
}

function calcFacto(val, i) {
  if(i==='0'){
    console.log("done : " + 1);
  } else if (i===1){
    console.log("done : " + val);
    return val;
  } else {
    console.log(val + " * " + i + " = " + val*i);
    val = i * val;
    --i;
    calcFacto(val, i)
  }
}