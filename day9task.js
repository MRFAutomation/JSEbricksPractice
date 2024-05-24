/*
You need to wright a program in which you have to print the middle element of an array using "length" function.
Use console.log() function to print the element.
 
Example array:
let arr = ["Farrukh", "Asad", "Naveed", "Farhan", "Osama"]
 
In above case, your program should print "Naveed"
*/


let arr = ["Farrukh", "Asad", "Naveed", "Farhan", "Osama"];

let arrLength = arr.length;
let mid = 0;

if (arrLength % 2 == 1) {
    mid = (arrLength - 1) / 2;
}

console.log(arr[mid]);
