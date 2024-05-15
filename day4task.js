let namesArray =
    [
        "Farhan", "Adeel",
        "Osama", "Khalid",
        "Farrukh", "Asad",
        "Abdul", "Zeeshan",
        "Zubair", "Salman"
    ];
/* Sorting Array */
let sortedArray = namesArray.sort();

/* Printing sorted array */
console.log("\nPrinting sorted array")
console.log(sortedArray);

/* Printing sorted array using indexed for loop*/
console.log("\nPrinting sorted array using indexed for loop")
for (let i = 0; i < sortedArray.length; i++) {
    console.log(sortedArray[i]);
}

/* Printing sorted array using for of loop*/
console.log("\nPrinting sorted array using for of loop")
for (ar of sortedArray) {
    console.log(ar);
}

/* Printing sorted array using for in loop*/
console.log("\nPrinting sorted array using for in loop")
for (ar in sortedArray) {
    console.log(sortedArray[ar]);
}