const display = document.getElementById('display');

let operand1 = ""
let operand2 = ""
let operator = null
let result;
let resetValue = false;
let operation;
let currentDisplay = '';
let currentOperator = null;



// //add btn
// const addBtn = document.querySelector('#add');
// //subtract btn
// const subtractBtn = document.querySelector('#subtract');
// //multiply btwn
// const multiplyBtn = document.querySelector('#multiply');
// //division btn
// const divisionBtn = document.querySelector('#divide');

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
    return num1 / num2;
 }



//operate function
function operate (num1, operator, num2) {
    result = 0;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch(operator) {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            if(num2==0) {
                clearDisplay();
                display.innerHTML = "OH! OH! YOU CANT DIVIDE BY ZERO";
                return;
            } else 
            return  num1 / num2;
            
    }
    
    
 }

 //select buttons for numbers
//number buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.id === "clear") {
            clearDisplay();
        } else if (button.id==="equal") {
            calculate();
        } else if (button.classList.contains('operator')) {
            setOperator(button.dataset.value);
        } else if( button.id === 'delete') {
            del();
        } else {
            getNumber(button.dataset.value);
        }
    });
});


function getNumber(num) {
    if(currentDisplay === '0' || resetValue) {
        // console.log("Number clicked:", num);
        currentDisplay = num;
        resetValue = false;
    } else if (!(num === '.' && currentDisplay.includes('.'))) {
        currentDisplay += num;
        
    }
    updateDisplay();
 }

 //function setOperator
 function setOperator(operator) {
    if(currentOperator !== null) calculate();
    operand1 = currentDisplay;
    currentOperator = operator;
    display.value = currentOperator;
    currentDisplay += `${operator}`;
    resetValue = false;
    updateDisplay();
 }

 function calculate() {
    if(currentOperator === null || resetValue) return;
    const parts = currentDisplay.split(` ${currentOperator} `);
    if (parts.length < 2) return; 

    secondOperand = parts[1];
    result = operate(currentOperator, operand1, operand2);
    if (result === "Error") {
        currentDisplay = "Cannot divide by 0";
    } else {
        currentDisplay = Math.round(result * 10000) / 10000 + '';
    }
    updateDisplay();
    operand1 = result;
    currentOperator = null;
}

function updateDisplay() {
    display.value = currentDisplay;
}
    //  else {
    //     if(operand1 !== null) {
    //         operand2 = parseFloat(display.innerHTML);
    //         display.innerHTML = `${operand1} ${operation} ${operand2} ${'='}`;
    //         operate();
    //         operation = null;
    //     }

    // }
// }

//  function getOperator(operator) {
//     if (operator=='-' && resetValue ===true) {
//         display.innerHTML = '-';
//         resetValue = false;
//         return;

//     }   if(!operation) {
//             operand1 = parseFloat(display.innerHTML)
//             operation = operator;
//             resetValue = true;
//         } else{
//         (resetValue) 
//         if(resetValue)return;
//         operand2 = parseFloat(display.innerHTML);
//         operation = operator;
//     }
//     display.innerHTML = `${operand1} ${operation}`;

//  }


//function for operators



 function clearDisplay() {
    operand1 = '';
    operand2 = '';
    operation = null;
    resetValue = true;
    display.value = '';
    currentOperator = null;
 }

//  //event listeners for operators
//  addBtn.addEventListener('click', () => setOperator("+"));
//  subtractBtn.addEventListener('click', () => setOperator("-"));
//  multiplyBtn.addEventListener('click', () => setOperator("*"));
//  divisionBtn.addEventListener('click', () => setOperator("/"));