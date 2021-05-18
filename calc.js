var inputOne = 0;
var inputTwo = 0;
var currentNum = '';
var doStuff = 0;
var answer = 0;

function setOperator(op) {
    
    if (doStuff === '+') {
        answer = (Number(inputOne) + Number(currentNum));
        inputOne = answer.toString();
        answer = 0; 
        document.getElementById('first-input').innerHTML = "";
    } else if (doStuff === 'x') {
        answer = (Number(inputOne) * Number(currentNum));
        inputOne = answer.toString();
        answer = 0; 
        document.getElementById('first-input').innerHTML = "";
    } else if (doStuff === '/') {
        answer = ( Number(inputOne) / Number(currentNum));
        inputOne = answer.toString();
        answer = 0; 
        document.getElementById('first-input').innerHTML = "";
    } else  if (doStuff === '-') {
        answer = (Number (inputOne) - Number(currentNum));
        inputOne = answer.toString();
        answer = 0; 
        document.getElementById('first-input').innerHTML = "";
    } else {
        inputOne = currentNum;
        currentNum = '';
        document.getElementById('first-input').innerHTML = "";
    }
doStuff = op; 
currentNum = '';
document.getElementById('first-input').innerHTML = "";
}

var pushNum = function(digit) {
    currentNum = document.getElementById('first-input').innerHTML;
    currentNum += digit.toString();
    document.getElementById('first-input').innerHTML = currentNum;
    
}
function emptyCalc() {
    currentNum = "";
    document.getElementById('first-input').innerHTML = currentNum;
    inputNum = 0;
    currentNum = '';
    doStuff = 0;
    answer = 0;
}
 
function calc() {
    if (doStuff === '+') {
        answer = (Number(inputOne) + Number(currentNum));
    } else if (doStuff === 'x') {
        answer = (Number(inputOne) * Number(currentNum));
    } else if (doStuff === '/') {
        answer = ( Number(inputOne) / Number(currentNum));
    } else  if (doStuff === '-') {
        answer = (Number (inputOne) - Number(currentNum));
    } else {
        answer = currentNum;
    }
document.getElementById('first-input').innerHTML = answer;
doStuff = 0;
currentNum = answer;
answer = 0;
 }
