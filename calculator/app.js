let calcValueList = [];
let firstNum = 0;
let secondNum = 0;

const buttons = document.querySelectorAll('button');
const displayScreen = document.querySelector('.display-screen');

const add = function(firstNum, secondNum) {
    return firstNum + secondNum;
}

const subtract = function(firstNum, secondNum) {
    return firstNum - secondNum;
}

const multiply = function(firstNum, secondNum) {
    return firstNum * secondNum;
}

const divide = function(firstNum, secondNum) {
    let result = firstNum / secondNum;
    return result == 'Infinity' ? 'Undefined' : firstNum / secondNum;
}

// return function call based on operator used
const operate = function(operator, firstNum, secondNum) {
    switch(operator) {
        case '+':
            return add(firstNum, secondNum);
        case '-':
            return subtract(firstNum, secondNum);
        case '*':
            return multiply(firstNum, secondNum);
        case '/':
            return divide(firstNum, secondNum);
        default:
            return 'Invalid Operator';
    }
}

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        displayResult = '';
        calcValueList.push(button.textContent);
        console.log(calcValueList);
        displayResult = calcValueList.join('');
        displayScreen.textContent = displayResult;
        if (calcValueList.includes('=')) {
            displayResult = displayResult.slice(0, -1);
            console.log(displayResult);
            if (displayResult.includes('÷')) {
                let nums = displayResult.split('÷');
                firstNum = parseFloat(nums[0]);
                secondNum = parseFloat(nums[1]);
                console.log(divide(firstNum, secondNum));
            } else if (displayResult.includes('×')) {
                let nums = displayResult.split('×');
                firstNum = parseFloat(nums[0]);
                secondNum = parseFloat(nums[1]);
                console.log(multiply(firstNum, secondNum));
            } else if (displayResult.includes('+')) {
                let nums = displayResult.split('+');
                firstNum = parseFloat(nums[0]);
                secondNum = parseFloat(nums[1]);
                console.log(add(firstNum, secondNum));
            } else if (displayResult.includes('−')) {
                let nums = displayResult.split('−');
                firstNum = parseFloat(nums[0]);
                secondNum = parseFloat(nums[1]);
                console.log(subtract(firstNum, secondNum));
            } else {
                console.log('invalid operator');
            }
        }
    });
});

console.log(operate('+',2,2));
console.log(operate('-',2,2));
console.log(operate('*',2,2));
console.log(operate('/',2,2));
console.log(operate('/',2,0))