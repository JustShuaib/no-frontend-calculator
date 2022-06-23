const firstNumber = parseInt(prompt("Enter the first number"));
const operator = prompt("Enter operator: (+, -, *, /)");
const secondNumber = parseInt(prompt("Enter the second number"));
const operatorList = ["+", "-", "*", "/"];
if (firstNumber && secondNumber && operatorList.includes(operator)) {
  const result = eval(firstNumber + operator + secondNumber);
  alert(firstNumber + " " + operator + " " + secondNumber + " = " + result);
} else {
  alert("Invalid operation");
}
