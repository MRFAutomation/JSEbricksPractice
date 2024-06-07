function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
}

let str1 = ["dog", "racecar", "car"]
let str2 = ["flower", "flow", "flight"];
console.log(`Output for string [${str1}] is: ${longestCommonPrefix(str1)}`);
console.log(`Output for string [${str2}] is: ${longestCommonPrefix(str2)}`);