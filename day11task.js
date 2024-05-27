/*
You need to write a function which returns the output whether the input array is even or odd. You will be passing the array to the function.
 
Example array:
let arr = ["Farrukh", "Asad", "Naveed", "Farhan", "Osama"]
 
function checkOddOrEven(<pass array here>){
 
}
 
Output of above function should be "Your input array is Odd"
*/

let arr = ["Farrukh", "Asad", "Naveed", "Farhan", "Osama"];

arrEvenOdd(arr); // function invoked

function arrEvenOdd(arrParam) {

    const arrayLength = arrParam.length;

    if (arrayLength % 2 == 0) {
        console.log(`Your input array is Even ${arrayLength}`)
    } else {
        console.log(`Your input array is Odd ${arrayLength}`)
    }
}