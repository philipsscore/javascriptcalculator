const firstNumber = parseFloat(prompt("Enter First Number"));
const secondNumber = parseFloat(prompt("Enter second Number"));
const operator = prompt("Enter the Operator: +  - / * and % for Modulus");

let Result = 0;

if (typeof(firstNumber) === 'number' && typeof(secondNumber) === 'number' ) {
    if (operator == '+') {
    Result = firstNumber + secondNumber
    }
    else if (operator == '-'){
        Result = firstNumber - secondNumber
    }
     else if (operator == '/'){
        Result = firstNumber / secondNumber
    }
    else if (operator == '*'){
        Result = firstNumber * secondNumber
    }
     else if (operator == '%'){
        Result = firstNumber % secondNumber
    }
    else{
        alert("wrong operator"+operator);
        
    }
alert(firstNumber+" "+operator+" "+secondNumber+" =:"+ Result);
   
    
}
else{
    alert(firstNumber+" or "+secondNumber+" is not a number ")
}
