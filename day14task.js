/*
You need to write a function to count the number of 1's in a string.
 
Strings are similar to arrays in some cases. For example,
If we do console.log(str.length) where str = "11100011" it gives us the same output as for array.length.
Also str[0] gives us the value "1" as "1" is available at the 0th index of the string str.
 
In following case, I must see the output "7" as the number of "1" in following string are 7.
 
countOnes("10111000111")

*/

/* Solution */

function findOnesCount() {
    let str = "10111000111";
    let oneCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i].includes('1')) {
            console.log(`${str[i]} found at index ${i}`);
            oneCount++;
        }
    }

    console.log(`Total number of One's in string [${str}] are '${oneCount}'`);
}

findOnesCount();
