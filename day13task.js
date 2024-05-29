/*
1.	You need to write a function to count the number of occurences of a name in an array.
For example, if I want to search the name "Farhan", your program should return me 2
Because "Farhan" is coming 2 times in following array.
Similarly, if I want to search "Shoaib", your program should return 0 because there is not "Shoaib" in the following list
If I want to search "Asad", it should return 1
 
Example array:
let arr = ["Farrukh", "Asad", "Naveed", "Farhan", "Osama", "Farhan"]
 
function searchAndCount(<pass the search string here>){
 
}
*/

/* Solution */
function searchAndCount(search) {
    let arr = ["Farrukh", "Asad", "Naveed", "Farhan", "Osama", "Farhan"];
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == search) {
            count++;
        } // end if
    } // end for
    return count;
} // end for fn

console.log(searchAndCount("Farhan"));



