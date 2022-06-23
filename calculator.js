// program for a simple calculator

function calculator(){
 // take the operator input
 let operator = prompt("Enter Operator(e.g + / - or *): ");
 // take the firstNumber input
 let firstNumber = parseFloat(prompt("Enter First Number: "));
  // take the secondNumber input
 let secondNumber = parseFloat(prompt("Enter Second Number: "));
      
 let result = null;
    
// using if...else if... else
if (isNaN(firstNumber) || isNaN(secondNumber)){
      alert("Invalid Input")
      calculator();
   }
   else{
      if (operator == '+'){
            result = firstNumber + secondNumber;
      }
      else if(operator == '/'){
            result = firstNumber / secondNumber;
      }
      else if(operator == '-'){
            result = firstNumber - secondNumber;
      }
      else if(operator == '*'){
       result = firstNumber * secondNumber;
      }
       
       // display the result
       alert('Result is ' + result);
   }
   
}

calculator();
