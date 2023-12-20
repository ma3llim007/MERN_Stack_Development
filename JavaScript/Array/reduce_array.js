const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



// 01. Find the sum of all numbers in the array.
function SolveOne() {
    const Array = numbers.reduce((total,num)=>(total+num),0);
    console.log(Array);
}
// SolveOne()

// 02. Find the product of all numbers in the array.
function SolveTwo() {
    const Array = numbers.reduce((total, num) => (total * num));
    console.log(Array);
}
// SolveTwo()

// 03. Find the maximum number in the array.
function SolveThree() {
    const Array = numbers.reduce((max,num) => (num > max ? num : max),numbers[0]);
    console.log(Array);
}
// SolveThree()

// 04. Find the average (mean) of all numbers in the array.
function SolveFour() {
    const Array = numbers.reduce((total,num) => (total+num/numbers.length),0)
    console.log(Array);
}
// SolveFour();

// 05. Concatenate all numbers in the array into a single string.
function SolveFive() {
    const Array = numbers.reduce((prev,curr)=>(prev+curr), " ");
    console.log(Array);
}
// SolveFive();