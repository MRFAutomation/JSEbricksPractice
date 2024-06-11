/*
Write a JavaScript program that calculates the sum of all natural numbers from 1 to a given number n using a while loop.

If the user enters 5, the program should calculate 1 + 2 + 3 + 4 + 5 and display the result, which is 15
*/

function sumOfNaturalNumbers(number) {
    let sum = 0;
    let i = number;

    while (i > 0) {
        sum += i;
        i--;
    }

    console.log(`Sum of all nutaural number(s) from 1 to ${number} is: ${sum}`);
    console.log("--------------------------------------------------");
}

sumOfNaturalNumbers(5);
sumOfNaturalNumbers(10);
sumOfNaturalNumbers(15);