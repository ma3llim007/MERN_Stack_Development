function ObjectPropertiesByName() {
    const myObj = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    }
    console.table([myObj.firstName, myObj.lastName, myObj.age]);
}
// ObjectPropertiesByName();

function ObjectWithLoop() {
    const myObj = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    }
    for (let D in myObj) {
        console.log(`${D}:- ${myObj[D]}`);
    }

}
// ObjectWithLoop();
function ObjectWithvalues() {
    const myObj = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    }
    console.log(Object.values(myObj));

}
// ObjectWithvalues()
function Jsonstringify() {
    const myObj = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue",
    }

    console.log(JSON.stringify(myObj));
}
// Jsonstringify();

// Some More Accessing Method
function AccessMethod() {
    const myObj = {
        firstName: "mohd",
        lastName: "sameer",
        age: 50,
        eyeColor: "blue",
        get lang() {
            return this.firstName.toUpperCase();
        }
    }
    console.log(myObj.lang);
}
// AccessMethod();

// iterables