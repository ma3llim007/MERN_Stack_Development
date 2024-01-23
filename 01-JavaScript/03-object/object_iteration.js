// Object Iteration

const Car = {
    id : 101,
    name : "Mohd Sameer"
}
for (let [key, value] of Object.entries(Car)) {
    console.log([key, value]);
}