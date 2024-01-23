const people = [
    { name: "Alice", age: 25, gender: "female" },
    { name: "Bob", age: 30, gender: "male" },
    { name: "Charlie", age: 22, gender: "male" },
    { name: "Diana", age: 28, gender: "female" },
    { name: "Edward", age: 35, gender: "male" },
    { name: "Fiona", age: 20, gender: "female" },
];


// 01. Filter the array to include only people who are older than 25.
function SolveOne() {
    const result = people.filter(Display => Display.age > 25);
    console.log(result);
}
// SolveOne();


// 02. Filter the array to include only males.
function SolveTwo() {
    const result = people.filter(Display => Display.gender ==`male`);
    console.log(result);
}
// SolveTwo();

// 03. Filter the array to include only females who are younger than 30.
function SolveThree(){
    const result = people.filter(Display => Display.gender == `female` && Display.age > 15);
    console.log(result);
}
// SolveThree()

// 04. Filter the array to include only people whose names start with the letter "A."
function SolveFour(){
    const result = people.filter(Display => Display.name.startsWith('A'));
    console.log(result);
}
// SolveFour()

// 05. Filter the array to include only people whose names have exactly 5 characters.
function SolveFive() {
    const result = people.filter(Display => Display.name.length > 5);
    console.log(result);
}
// SolveFive();

// 06. Filter the array to include only people whose names have the letter "i."
function SolveSix() {
    const result = people.filter(Display => Display.name.toUpperCase().includes("A"))
    console.log(result);
}
SolveSix();