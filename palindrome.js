function is_palindrome(str) {
    str = str.toLowerCase();
    let reversedStr = str.split('').reverse().join(''); 
    if (str === reversedStr) {
        console.log("Palindrome");
    } else {
        console.log("Not a palindrome");
    }
    return str === reversedStr; 
}

console.log(is_palindrome("madam")); 
console.log(is_palindrome("hello")); 
