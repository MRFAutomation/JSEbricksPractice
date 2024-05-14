/*
Task #1 (a)
Use let to declare a count variable. Assign it the number 8. When using a number value, you do not use quotes. For example:
let money = 100;
Use console.log to print the variable
*/
/* Solution */

let varNumber = 26;
console.log("Value of varNumber is: " + varNumber);


/*
Task#1 (b)
With the number data type, you can perform mathematical operations, like addition. Try printing 
count + 1 to the console.
*/
/* Solution */

let varCount = 10;
varCount++;
varCount++;
console.log("Value of varCount is: " + varCount);

/*
Task#1 (c )
You can also perform subtraction (-), multiplication (*), and division (/). 
Feel free to experiment with the operators and numbers in your console.log and add each operators separately as console.log in your assignment. Here, I want to see console.log for all operations (i-e + , - , * , / )
*/
/* Solution */

let number1 = 20;
let number2 = 5;

let addition = number1 + number2;
let subtraction = number1 - number2;
let multiplication = number1 * number2;
let division = number1 / number2;

console.log(`Addition of ${number1} + ${number2} = ${addition}`);
console.log(`Subtraction of ${number1} - ${number2} = ${subtraction}`);
console.log(`Multiplication of ${number1} * ${number2} = ${multiplication}`);
console.log(`Division of ${number1} / ${number2} = ${division}`);
