// Two-Dimensional Array

let MathScore = [
    ["John Doe", 20, 60, "A"],
    ["Jane Doe", 10, 52, "B"],
    ["Petr Chess", 5, 24, "F"],
    ["Ling Jess", 28, 43, "A"],
    ["Ben Liard", 16, 51, "B"]
];
let arr = [];
let rows = 4;
let columns = 3;

// creating two-dimensional array
for (let i = 0; i < rows; i++) {
    arr[i] = [];
    for (let j = 0; j < columns; j++) {
        arr[i][j] = j;
    }
}
console.log(arr);