/* Take first name as input and print last name */
function printLastName(firstName) {

    if (firstName === "farhan") {
        console.log(`Last name of ${firstName} is: Saleem`);
    } else if (firstName === "osama") {
        console.log(`Last name of ${firstName} is: Altaf`);
    } else if (firstName === "farrukh") {
        console.log(`Last name of ${firstName} is: Hussain`);
    } else if (firstName === "zubair") {
        console.log(`Last name of ${firstName} is: Shahid`);
    } else if (firstName === "khalid") {
        console.log(`Last name of ${firstName} is: Siddiqi`);
    } else if (firstName === "asad") {
        console.log(`Last name of ${firstName} is: Mehmood`);
    } else if (firstName === "abdul") {
        console.log(`Last name of ${firstName} is: Salam`);
    } else {
        console.log(`${firstName} is not a valid name`);
    }

}

printLastName("farhan");
printLastName("osama");
printLastName("zubair");
printLastName("farrukh");
printLastName("khalid");
printLastName("abdul");
printLastName("asad");
printLastName("abc");
