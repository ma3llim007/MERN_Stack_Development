const checkPalindrome = (name: string) => {
    const clearnName = name.split("").reverse().join("");
    if (name !== clearnName) {
        console.log(`${name} Is Not A Palindrome`);
    }
    console.log(`${name.toUpperCase()} Is A Palindrome`);
};

checkPalindrome("madam");
