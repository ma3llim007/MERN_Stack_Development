// 1. Log your  name and favorite hobby to the console.
const nameAndHobbies = "mohd sameer, coding, reading";
console.log(nameAndHobbies);

// 2. perform and log the result of 45*2-10
const calculate = 45 * 2 - 10;
console.log(calculate);

// 3. use console.log() to display the current year.
const currentYear = new Date().getFullYear();
console.log(currentYear);

// 4. Create two variables for first and lastname. concatenate and log them
const firstName = "Mohd";
const lastName = "Sameer";
console.log(`${firstName} ${lastName}`);

// 5. track the value of a variable by logging it before and after updating
let number;
console.log(number);
number = 4;
console.log(number);

// 6. use console.error() to simulate an error message
console.error("Something Went Wrong");

// 7. Log the square of the number 12 to the console.
console.log(12 * 12);

// 8. Print the type of a variable holding the value true
console.log(typeof true);

// 9. Create a variable holding your age and log whether it's greater than 18
const age = 17;
if (age > 18) console.log(true);
else console.log(false);

// 10. Log the result of 100 / 0 and observe the output
console.log(100 / 0);