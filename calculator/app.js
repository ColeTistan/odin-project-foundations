let calcValueList = [];
let firstNum = 0;
let secondNum = 0;
let operator = '';

const buttons = document.querySelectorAll('button');
const mainDisplayScreen = document.querySelector('.display-screen');
const subdisplayScreens = mainDisplayScreen.querySelectorAll('p');
const autoClearButton = document.getElementById('auto-clear');

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

const divide = function(firstNum, secondNum) {
    let result = Math.round(parseInt(firstNum) / parseFloat(secondNum) * 100) / 100;
    return result == 'Infinity' ? 'Undefined' : Math.round(parseFloat(firstNum) / parseFloat(secondNum) * 100) / 100;
}

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

const checkFirstElement = function(calcValueElement) {
    if (
        (calcValueElement == '+') ||
        (calcValueElement == '−') ||
        (calcValueElement == '×') ||
        (calcValueElement == '÷') ||
        (calcValueElement == '%') ||
        (calcValueElement == '^') ||
        (calcValueElement == '=') ||
        (calcValueElement == 0)
    ) {
        calcValueList = [];
        return;
    }
}

const calculate = function(button) {
    displayResult = '';
    calcValueList.push(button.textContent);
    checkFirstElement(calcValueList[0]);
    switch(button.textContent) {
        case '+':
            operator = '+';
            break;
        case '−':
            operator = '−';
            break;
        case '×':
            operator = '×';
            break;
        case '÷':
            operator = '÷';
            break;
        case '%':
            operator = '%';
            break;
        case '^':
            operator = '^';
            break;
    }
    displayResult = calcValueList.join('');
    subdisplayText.textContent = displayResult;
    if (calcValueList.includes('=')) {
        displayResult = displayResult.slice(0, -1);
        subdisplayResults.textContent = displayResult;
        let nums = displayResult.split(operator);
        firstNum = nums[0];
        secondNum = nums[1];
        let result = operate(operator, firstNum, secondNum);
        subdisplayResults.textContent = result;
        calcValueList = [];
        calcValueList.push(result)
    } else if (calcValueList.includes('AC')) {
        calcValueList = [];
        subdisplayText.textContent = 0;
        subdisplayResults.textContent = 0;
    }
}

buttons.forEach(function(button) {
    button.addEventListener('click', () => calculate(button));
});