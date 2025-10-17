var checkPalindrome = function (name) {
    var clearnName = name.split("").reverse().join("");
    if (name !== clearnName) {
        console.log("".concat(name, " Is Not A Palindrome"));
    }
    console.log("".concat(name.toUpperCase(), " Is A Palindrome"));
};
checkPalindrome("madam");
