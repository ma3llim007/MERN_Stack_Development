// Object Comparison

const Car = {
    id : 101,
    name : "Mohd Sameer"
}
const Car1 = {
    id : 101,
    name : "Mohd Sameer"
}

const Cars = JSON.stringify(Car);
const Car1s = JSON.stringify(Car1);

if (Cars == Car1s) {
    console.log("Equal");
}
console.log("Not Equal");