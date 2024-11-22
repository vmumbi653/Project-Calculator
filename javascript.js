const display = document.getElementById('display');

//variables for operands and operator
let operand1;
let operator ;
let operand2;
let step = 0;

let result = 0;

//number array for calculations
let numArray = [];
let numArray2 = [];

// function for  buttons
function getNumber(num) {
    if(step === 0 || step === 1){
        numArray.push(num); //push the number
        step = 1;
        operand1 = Number(numArray.join('')) //merge more than two numbers
        display.value = operand1;
    } else if(step === 2) {
        numArray2.push(num);
        operand2 = Number(numArray2.join(''));
        display.value = `${operand1 + operator + operand2}`;

    }
}

// function to get operator
function getOperator(opr) {
    step = 2;
    operator = opr;
    // display.value = operand1.join(operator);
}

//addition function
function addition() {
    // operator = '+';
    return operand1 + operand2;
}

//subtraction function
function subtraction() {
    // operator = '-';
    return operand1 - operand2;
}

//multiplication function
function multiply() {
    // operator = '*'
    return operand1 * operand2;
}

//divide function
function divide() {
    // operator = '/';
    return  operand1/operand2;
}



//function operate
function operate() {
    result = 0;

    switch(operator) {
        case '+':
            // result = operand1 + operand2;
            result = addition();
            display.value = result
            break;
        case '-':
            // result = operand1 - operand2;
            result = subtraction();
            display.value = result;
            break;
        case '*':
            // result = operand1 * operand2;
            result = multiply();
            display.value = result;
            break;
        case '/':
            // result = operand1 / operand2;
            result = divide();
            display.value = result;
            break;
        default:
            display.value = 'Error! Division by Zero Not Allowed!';
    }

    // if(operator === '+') {
    //     operator = addition();
    //     result = operand1 + operand2;
            // display.value = result;
    // } else if(operator == '-') {
    //     operator = subtraction();
    //     result = operand1 - operand2;
    //      display.value = result;
    // } else if(operator == '*') {
    //     operator = multiply();
    //     result = operand1 * operand2;
    //      display.value = result;
    // } else (operator == '/') 
    //     operator = divide();
    //     if(operand2 === 0) {
    //         display.value = 'Error! Division by Zero is not allowed';
    //     }
    //      
    //         result =  operand1 / operand2;
    //          display.value = result;
   
}

// clear Display function

function clearDisplay() {
    display.value = 0;
    operand1 = null;
    operand2 = null;
    step = 0;
    numArray = [];
    numArray2 = [];
    result = 0;
}

