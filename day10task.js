/**
   JavaScript Task:
You need to write a program in which you have to print whether the input array length is even or odd  using "length" function.
Use console.log() function to print the element.
 
Example array:
let arr = ["Farrukh", "Asad", "Naveed", "Farhan", "Osama"]
 
In above case, your program should print "Odd"
 
 
let arr = ["Farrukh", "Asad", "Naveed", "Farhan", "Osama", "Khalid"]
 
In above case, your program should print "Even"
 */

/* Solution */
let arr1 = ["Farrukh", "Asad", "Naveed", "Farhan", "Osama"];
let arr2 = ["Farrukh", "Asad", "Naveed", "Farhan", "Osama", "Khalid"];

if (arr2.length % 2 == 0) {
    console.log('Even');
} else {
    console.log('Odd');
}