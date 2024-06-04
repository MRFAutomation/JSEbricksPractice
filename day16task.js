/*
you need to write a function in which the function is taking two strings as an input and check whether the two strings are exactly opposite to each other or not. For example
 
("mat", "tam") should return true
("they", "yeht") should return true
("mat", "tat") should return false as "mat" reverse string should be "tam" not "tat"
*/

/* Solution */
function checkOppositeStrings(str1, str2) {

    if (str1.length != str2.length) {
        console.log(`${str1} and ${str2} length is not equal, hence they cannot be opposite or equal to each other`);
        return false;
    }

    let strRev = "";

    for (let i = str2.length - 1; i >= 0; i--) {
        strRev += str2[i];
    }

    if (str1.includes(strRev)) {
        console.log(`${str1} and ${str2} are exactly opposite to each other`);
        return true;
    } else {
        console.log(`${str1} and ${str2} are not exactly opposite to each other`);
        return false;
    }
}
console.log(`So returns ${checkOppositeStrings("mat", "tam")}`);
console.log(`So returns ${checkOppositeStrings("they", "yeht")}`);
console.log(`So returns ${checkOppositeStrings("mat", "tat")}`);
console.log(`So returns ${checkOppositeStrings("mat", "taat")}`);