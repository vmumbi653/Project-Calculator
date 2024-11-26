const display = document.getElementById('display');

//variables
let operand1 = "";
let operand2 = "";
let operator = null;
let result;
let resetValue = false;
let operation;
let currentDisplay = '';
let currentOperator = null;


//operators functions
function addition(num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}
 function divide (num1, num2) {
    if(num2 === 0) return "Error";

    return num1 / num2;  
 }
 
//operate function
function operate (num1, operator, num2) {
    result = 0;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch(operator) {
        case '+':
            return addition(num1, num2);
            break;
        case '-':
            return   subtract(num1,  num2);
            break;
        case '*':
            return multiply(num1,  num2);
            break;
        case '/':
            //  if(num2 !== 0) {
                return divide(num1, num2);
             
            // } else 
            //    clearDisplay();
            //     currentDisplay = "OH! OH! YOU CANT DIVIDE BY ZERO";
            //     return; 
            break;      
         default:
                return "null";
      
 }
}
 //select buttons for numbers
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.id === "clear") {
            clearDisplay();
        } else if (button.id === "equal") {
            calculate();
        } else if (button.classList.contains('operator')) {
            getOperator(button.dataset.value);
        } else if( button.id === 'delete') {
            del();
        } else {
            getNumber(button.dataset.value);
        }
    });
});

//function to display number
function getNumber(num) {
    if(currentDisplay === '0' || resetValue) {
        // console.log("Number clicked:", num);
        currentDisplay = num;
        operand1 = currentDisplay;
        resetValue = false;
    } else if (!(num === '.' && currentDisplay.includes('.'))) {
        currentDisplay += num;
        
    }
    updateDisplay();
 }

 //function getOperator
 function getOperator(operator) {
    if(currentOperator !== null) calculate();
    operand1 = currentDisplay;
    currentOperator = operator;
    display.value = currentOperator;
    currentDisplay += `${operator}`;
    resetValue = false;
    
    updateDisplay();
 }

 function calculate() {
    if(currentOperator === null || resetValue) {
        return;
    } 
    const splitDisplay = currentDisplay.split(`${currentOperator}`);
    if (splitDisplay.length < 2) return; 
    
    operand2 = splitDisplay[1];
    result = operate(operand1, currentOperator, operand2);
    if (result === "Error") {
        currentDisplay = "Oopsies! You can't divide by 0! Try again!";
    } else {
        currentDisplay = Math.round(result * 100) / 100;
    } 
    updateDisplay();
    operand1 = result;
    currentOperator = null;

}
    
function updateDisplay() {
    display.value = currentDisplay;
}

//delete function
 function del() {
    const delBtn = document.querySelector('#delete');
    delBtn.addEventListener('click', () => {
        for(let i = 0; i<currentDisplay.length; i++) {
        currentDisplay = currentDisplay.slice(0, -1);
        }
    });
    updateDisplay();
 }


 function clearDisplay() {
    operand1 = '';
    operand2 = '';
    operation = null;
    resetValue = true;
    display.value = '';
    currentOperator = null;
 }
    