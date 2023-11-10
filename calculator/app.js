const buttons = document.querySelectorAll('button');
const displayScreen = document.querySelector('.display-screen');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        displayScreen.innerText = button.innerText;
    });
});

const clearDisplay = () => {
    let autoClearBtn = document.getElementById('auto-clear');
    autoClearBtn.addEventListener('click', () => {
        displayScreen.innerText = 0;
    });
}



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
    return firstNum / secondNum;
}

const operator = function(operator, firstNum, secondNum) {
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

console.log(operator('+',2,2));
console.log(operator('-',2,2));
console.log(operator('*',2,2));
console.log(operator('/',2,2));