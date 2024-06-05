/*
Task#1:
We need to print different information based on length of array. Array will be provided as an input.
If array of length is 0 then print "Array is empty"
If array of length is 1-10 then print "Array is greater than 1 but less than equal to 10"
If array of length is greater than 10 then print "Array is greater 10"

*/

let arr1 = [];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr3 = [1, 21, 56, 65, 8, 98, 89, 7, 87, 78, 4, 46, 64, 54, 45, 10];

let arrLength = arr3.length;

if (arrLength == 0) {
    console.log("Array is empty");
}
else if (arrLength > 0 && arrLength < 11) {
    console.log("Array length is 1 to 10");
} else {
    console.log("Array length is above 10");
}

