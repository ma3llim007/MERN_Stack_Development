const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// 01. Create a new array where each number is squared.
function SolveOne() {
    const result = numbers.map(Dis => Dis ** 2);
    console.log(result);
}
// SolveOne();

// 02. Create a new array where each number is multiplied by 2.
function SolveTwo() {
    const result = numbers.map(Dis => Dis * 2);
    console.log(result);
}
// SolveTwo();

// 03. Create a new array where each number is incremented by 5.
function SolveThree() {
    const result = numbers.map(Dis => Dis + 5);
    console.log(result);
}
// SolveThree();

// 04. Create a new array where each number is converted to a string.
function SolveFour() {
    const result = numbers.map(Dis => Dis.toString());
    console.log(result);
}
// SolveFour();

// 05. Create a new array where each number is replaced by its negative value.
function SolveFive() {
    const result = numbers.map(Dis => -Dis);
    console.log(result);
}
// SolveFive()

// 06. Create a new array where each number is replaced by "even" if it's even and "odd" if it's odd.
function SolveSix() {
    const result = numbers.map(Dis => (Dis % 2 == 0 ? "Even" :"Old"));
    console.log(result);
}
SolveSix();