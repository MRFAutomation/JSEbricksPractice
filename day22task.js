/*
Palindrome Problem:

Write a function which takes a number x as in input, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
*/

let array1 = [1, 2, 1]
let array2 = [1, 2, 1, 1]
let array3 = [1, 2, 1, 1, 2]
let array4 = [1, 2, 3, 4, 5, 4, 3, 2, 1]

function checkPalindrome(array) {

    let lastIndex = array.length - 1;
    let itrations = Math.floor(array.length / 2)
    let flag = false;

    for (let i = 0; i < itrations; i++) {
        if (array[i] === array[lastIndex - i]) {
            flag = true;
        }
        else {
            flag = false;
            break;
        }
    }

    if (flag) {
        console.log(`Array [${array}] is a Palindrome`);
        console.log("-------------------------------------------");
    }
    else {
        console.log(`Array [${array}] is not a Palindrome`);
        console.log("-------------------------------------------");
    }
}

checkPalindrome(array1);
checkPalindrome(array2);
checkPalindrome(array3);
checkPalindrome(array4);
