/*
Tasks Day#8:

JavaScript Task:
You need to wright a program in which you have to print the 2nd last and last element of an array using "length" function.
Use console.log() function to print the element.
 
Example array:
let arr = ["Farrukh", "Asad", "Naveed", "Farhan"]
 
In above case, you program should print "Naveed" and "Farhan"
*/

/* Solution */
let arr = ["Farrukh", "Asad", "Naveed", "Farhan"];
let arrLength = arr.length;
console.log(arr[arrLength - 2], arr[arrLength - 1]);