//variables for operands and operator
let operand1;
let operator ;
let operand2;

//addition function
function addition(num1,num2) {
    return num1 + num2;
}
console.log(addition(1,2));

//subtraction function
function subtraction(num1, num2) {
    return num1 - num2;
}
console.log(subtraction(10,5));

//multiplication function
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(6,3));

//divide function
function divide(num1, num2) {
    return num1/num2;
}
console.log(divide(6,3));

//function operate
function operate(operator, operand1, operand2) {
    let result;
    if(operator == '+') {
        operator = addition();
        return operand1 + operand2;
    } else if(operator == '-') {
        operator = subtraction();
        return operand1 - operand2;
    } else if(operator == '*') {
        operator = multiply();
        return operand1 * operand2;
    } else (operator == '/') 
        operator = divide();
        if(operand2 === 0) {
            console.log('Error! Division by Zero is not allowed');
        } else {
            return operand1 / operand2;
        }
    
   
}
console.log(`${operand1} ${operator} ${operand2}`);