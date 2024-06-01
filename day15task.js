/*
You need to write a function to count the number of 0’s and 1's in a string and return which has the greater in existence. 
 
 
In following case, I must see the output number of 1’s are greater than 0’s because total number of 1’s are 7 and 0’s are 4

countOnes("10111000111")
*/

/* Solution */

function findOnesCount() {
    let str = "10111000111";
    // let str = "10101000101";
    // let str = "00001111";

    let onesCount = 0;
    let zeroesCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i].includes('1')) {
            onesCount++;
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i].includes('0')) {
            zeroesCount++;
        }
    }

    if (onesCount > zeroesCount) {

        console.log(`Total number of One's are greater than Zero's because in string [${str}], One's are '${onesCount}' and Zero's are '${zeroesCount}'`);
    }
    else if (onesCount < zeroesCount) {

        console.log(`Total number of Zero's are greater than One's because in string [${str}], Zero's are '${zeroesCount}' and One's are '${onesCount}`);
    }
    else {
        console.log(`Both Zero's and One's are equal, in string [${str}], Zero's are '${zeroesCount}' and One's are also '${onesCount}`);
    }
}

findOnesCount();
