/*
Task#1:
Yesterday, we create an array and assign some values to it.
Today, we will learn that array is a special data type which is considered to be mutable. This means that you can change the value at any index directly.
 
For example, this code would assign the "Naveed" to the second element in the array:
 
let names = ["Asad", "Farhan", "Khalid"];
 names[1] = "Naveed";
 console.log(names); // prints ["Asad", "Naveed", "Khalid"]
Update the third element of your names array to be the "Salman". Then print the names array to your console.
*/

/* Solution */

let namesArray = ["Khalid", "Adeel", "Farhan"];
namesArray[2] = "Salman";
console.log(namesArray);

/*
Task#2:
Arrays in JavaScript have several properties that allow you to interact with and manipulate them effectively. ".length" property is one of the property to find out the length of an array.
 
array.length returns the number of elements in the array.
Add a console.log to your previous task to print the length of the names array.
*/
let arrayLength = namesArray.length;
console.log("Array length is: " + arrayLength);