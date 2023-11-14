// Object Method

const Car = {
    id : 101,
    name: "Mohd Sameer",
    NameFunc: function () {
        return this.name.toUpperCase();
    }
}
console.log(Car.NameFunc());