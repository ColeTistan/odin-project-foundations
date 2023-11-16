let calcValues = [];
let firstNum = 0;
let secondNum = 0;
let operator = '';

const buttons = document.querySelectorAll('button');
const operatorButtons = document.querySelectorAll('.operation');
const autoClearButton = document.getElementById('auto-clear');

const mainDisplayScreen = document.querySelector('.display-screen');
const subdisplayScreens = mainDisplayScreen.querySelectorAll('p');

let subdisplayText = subdisplayScreens[0];
let subdisplayResults = subdisplayScreens[1];

const add = function(firstNum, secondNum) {
    return parseFloat(firstNum) + parseFloat(secondNum);
}

const subtract = function(firstNum, secondNum) {
    return parseFloat(firstNum) - parseFloat(secondNum);
}

const multiply = function(firstNum, secondNum) {
    return Math.round(parseFloat(firstNum) * parseFloat(secondNum) * 100) / 100;
}

// Checks if result is Infinity due to firstNum dividing by secondNum set to 0.
const divide = function(firstNum, secondNum) {
    let result = Math.round(parseInt(firstNum) / parseFloat(secondNum) * 100) / 100;
    return result == 'Infinity' ? 'Undefined' : Math.round(parseFloat(firstNum) / parseFloat(secondNum) * 100) / 100;
}

// returns the remainder of two numbers after division
const modulus = function(firstNum, secondNum) {
    return Math.round(parseFloat(firstNum) % parseFloat(secondNum) * 100) / 100;
}

const exponential = function(firstNum, secondNum) {
    return Math.round((parseFloat(firstNum) ** parseFloat(secondNum)) * 100) / 100;
}

// return function call based on operator used
const operate = function(operator, firstNum, secondNum) {
    switch(operator) {
        case '+':
            return add(firstNum, secondNum);
        case '−':
            return subtract(firstNum, secondNum);
        case '×':
            return multiply(firstNum, secondNum);
        case '÷':
            return divide(firstNum, secondNum);
        case '%':
            return modulus(firstNum, secondNum);
        case '^':
            return exponential(firstNum, secondNum);
        default:
            return 'Invalid Operator';
    }
}

// Check if first element in CalcValues array is an operator or 0.
// if so, prevent element
const checkFirstElement = function(calcValueElement) {
    if(
        (calcValueElement[0] == '+') ||
        (calcValueElement[0] == '−') ||
        (calcValueElement[0] == '×') ||
        (calcValueElement[0] == '÷') ||
        (calcValueElement[0] == '%') ||
        (calcValueElement[0] == '^') ||
        (calcValueElement[0] == '=') ||
        (calcValueElement[0] == 0)
    ) {
        calcValues = [];
        return;
    }
}

const calculate = function(button) {
    displayResult = '';
    calcValues.push(button.textContent);
    checkFirstElement(calcValues);
    switch(button.textContent) {
        case '+':
            operator = '+';
            disableOperators();
            break;
        case '−':
            operator = '−';
            disableOperators();
            break;
        case '×':
            operator = '×';
            disableOperators();
            break;
        case '÷':
            operator = '÷';
            disableOperators();
            break;
        case '%':
            operator = '%';
            disableOperators();
            break;
        case '^':
            operator = '^';
            disableOperators();
            break;
    }
    displayResult = calcValues.join('');
    subdisplayText.textContent = displayResult;
    if(calcValues.includes('=')) {
        displayResult = displayResult.slice(0, -1);
        subdisplayResults.textContent = displayResult;
        let nums = displayResult.split(operator);
        firstNum = nums[0];
        secondNum = nums[1];
        let result = operate(operator, firstNum, secondNum);
        subdisplayResults.textContent = result;
        disableOperators();
        calcValues = [];
        calcValues.push(result)
    } else if(calcValues.includes('AC')) {
        calcValues = [];
        subdisplayText.textContent = 0;
        subdisplayResults.textContent = 0;
    }
}

const disableButton = function(button) {
    if(!button.disabled && calcValues.length > 0) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}

const disableOperators = function() {
    operatorButtons.forEach((button) => disableButton(button));
}

buttons.forEach(function(button) {
    button.addEventListener('click', () => calculate(button));
});