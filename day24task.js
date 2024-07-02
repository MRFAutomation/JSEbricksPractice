function isValidBrackets(chStr) {
    // Create a arr to keep track of opening brackets
    const arr = [];
    // Create a map to pair opening and closing brackets
    const bracketPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Iterate over each chacter in the input chString
    for (const ch of chStr) {
        // If the chacter is an opening bracket, push it to the arr
        if (ch === '(' || ch === '{' || ch === '[') {
            arr.push(ch);
        }
        // If the chacter is a closing bracket
        else if (ch === ')' || ch === '}' || ch === ']') {
            // Check if the arr is empty or if the top of the arr does not match the corresponding opening bracket
            if (arr.length === 0 || arr.pop() !== bracketPairs[ch]) {
                return false;
            }
        }
    }

    // Check if the arr is empty (all brackets are matched)
    return arr.length === 0;
}

// Test cases
console.log(isValidBrackets(""));       // true
console.log(isValidBrackets("(]"));     // false
console.log(isValidBrackets("(){}[]")); // true
console.log(isValidBrackets("([{}])")); // true
console.log(isValidBrackets("({[)]}")); // false