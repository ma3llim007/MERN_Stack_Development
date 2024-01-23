// 
String = new String("John")
console.log(typeof String);

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

const person1 = {};
// const person1 = new Object();
person1.firstName = "John";
person1.lastName = "Doe";
person1.age = 50;
person1.eyeColor = "blue";

// Adding the New Property Value in Object
    // person.nationality = "English";

// Delete Property in Object
    // delete person.nationality;
    // delete person.lastName;

console.log(person);

// Object In Object
function NestedArraysWithObjects() {
    const myObj = {
        name: "John",
        age: 30,
        cars: [
            { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
            { name: "BMW", models: ["320", "X3", "X5"] },
            { name: "Fiat", models: ["500", "Panda"] }
        ]
    }
    for (let x in myObj.cars) {
        console.log(`Name:- ${myObj.cars[x].name} Models:- ${myObj.cars[x].models}`);
    }
}
NestedArraysWithObjects();

