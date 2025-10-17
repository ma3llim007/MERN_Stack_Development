// 1. Write a fucntion to check if a number is even or odd
const isEven = (n) => {
    if (n % 2 === 0) {
        console.log(`${n} is a even number`);
    } else {
        console.log(`${n} is not a even number`);
    }
};
// isEven(16);

// 2. create a function to calculate the area of a circle with a give radius.
const calculateCircleArea = (radius) => {
    if (radius < 0) {
        console.log("radius cannot be negative");
        return;
    }
    const area = Math.PI * radius * radius;
    console.log(`The Area of the circle with radius ${radius} is ${area.toFixed(1)}`);
};
// calculateCircleArea(5)

// 3. Write a function that accepts an array and returns the sum of its element
const sumOfArray = (arr) => {
    const sum = arr.reduce((a, b) => a + b, 0);
    console.log(`Sum Of The Array Is ${sum}`);
};

// sumOfArray([1, 2]);

// 4. create a function that check if a string starts with a specific character.
const stringChecker = (value) => {
    const string = "Mohd Sameer";
    return string.toLowerCase().startsWith(value);
};
// console.log(stringChecker("Mohd"));

// 5. Writer a fucntion to find the maxinum of two number
const twoMaxNumber = (a, b) => {
    if (a > b) return a;
    else if (a < b) return b;
    return "equal";
};
// console.log(twoMaxNumber(5,9));

// 6. Create a function that takes a number and return its factorial.
const factorial = (n) => {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
};
// console.log(factorial(5));

// 7. write a function that accepts a string and returns its reverse.
const reverseString = (inputString) => {
    let reverseString = inputString.split("").reverse().join("");
    return reverseString;
};
// console.log(reverseString("sameer"));

// 8. create a fucntion to find the largest number in an array
const findMax = (arr) => {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};
// console.log(findMax([1, 244, 3, 4, 6, 8, 9, 123]));

// 9. Write a function that convert the string to kebab-case
const kebabCase = (str) => {
    return str.replaceAll(" ", "-");
};
// console.log(kebabCase("Hi How Are You"));