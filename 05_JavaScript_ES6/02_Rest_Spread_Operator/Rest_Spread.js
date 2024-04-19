// REST
// Rest With Array
function RestSum(...number){
    let sum = 0;
    number.forEach((num) => {
        sum += num;
    })
    console.log(`Rest Function:- ${sum}`);
}
// RestSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);

// SPREAD
// Spread With Array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function SpreadFun(num) {
    console.log(...num);
}
// SpreadFun(numbers);

// Rest Object
var student = {
    name: "Mohd Sameer",
    age: 19,
    hoddies: ['coding', 'reading']
}
const { hoddies,...rest } = student;
console.log(rest)


// Spread
var newstudent = {
    ...student,
    age:18,
}
console.log(`Output From:-`);
console.log(newstudent);