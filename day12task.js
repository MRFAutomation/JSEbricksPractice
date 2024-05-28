/*
You need to write a function checkOdd which returns the true if the input array is odd and false otherwise.
 
Example array:
let arr = ["Farrukh", "Asad", "Naveed", "Farhan", "Osama"]
 
function checkOdd(<pass array here>){
 
}
*/
/* Solution */
let arr1 = ["Farrukh", "Asad", "Naveed", "Farhan", "Osama"]

function checkOdd(arr) {
    if (arr.length % 2 == 1) {
        return true;
    }
}
if (checkOdd(arr1)) {
    console.log("Array is Odd");
}

/*
Write a function to print an array in reverse order. For example if I provide following as an input
let arr = ["Farrukh", "Asad", "Naveed", "Farhan", "Osama"]
 
Your program should return
[ "Osama", "Farhan", "Naveed", "Asad", "Farrukh"]
*/
/* Solution */
let arr2 = ["Farrukh", "Asad", "Naveed", "Farhan", "Osama"]

function checkEven(arr) {
    if (arr.length % 2 == 0) {
        return true;
    }
}
if (checkOdd(arr2)) {
    console.log("Array is Even");
}

/* Array reverse using function*/
let arr3 = ["Farrukh", "Asad", "Naveed", "Farhan", "Osama"]
console.log("Origional array ", arr3);
console.log("Reversed array ", arr3.reverse());


/* Array reverse with loop */
let arr4 = ["Farrukh", "Asad", "Naveed", "Farhan", "Osama"]
for (let i = arr4.length - 1; i >= 0; i--) {
    console.log(arr4[i]);
}

