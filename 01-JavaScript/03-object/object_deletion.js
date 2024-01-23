// Delete Object

const Car = {
    id : 101,
    name: "Mohd Sameer",
    NameFunc: function () {
        return this.name.toUpperCase();
    }
}
delete Car.NameFunc;
console.log(Car);