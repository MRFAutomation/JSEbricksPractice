/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
 
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]

Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/

let numsArray3 = [3, 3];
let numsArray2 = [3, 2, 4, 5, 1];
let numsArray1 = [2, 7, 11, 15, 8, 1];

function findIdices(numArray, numTarget) {

    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] + numArray[i + 1] == numTarget) {
            console.log(`In Array [${numArray}], [${i}, ${i + 1}] indices have values [${numArray[i]}, ${numArray[i + 1]}] which are equal to target value ${numTarget}`);
            console.log(`----------------------------------------------------------------------------------------------`);
        }
    }
}

findIdices(numsArray1, 9)
findIdices(numsArray2, 6)
findIdices(numsArray3, 6)
