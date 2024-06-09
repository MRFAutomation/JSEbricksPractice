let arr = [55, 1, 25, 100, 60, 40];

function minimumNumber(ar) {
    let min = ar[0];
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] < min) {
            min = ar[i];
        }
    }
    return min;
}

function maximumNumber(ar) {
    let max = ar[0];
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] > max) {
            max = ar[i];
        }
    }
    return max;
}

function arrayLength(ar) {
    return ar.length;
}

function checkEmpty(ar) {
    if (ar.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(`Array [${arr}] length is: ${arrayLength(arr)}`);
console.log(`Maximum number in array [${arr}] is: ${(maximumNumber(arr))}`);
console.log(`Minimum number in array [${arr}] is: ${minimumNumber(arr)}`);
console.log(`Is array [${arr}] empty: ${checkEmpty(arr)}`);