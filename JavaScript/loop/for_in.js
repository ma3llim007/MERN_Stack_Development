// The JavaScript for in statement loops through the properties of an Object:

// Example
const person = {fname:"John", lname:"Doe", age:25};
    let text = "";
    for (let x in person) {
        text += person[x];
    }
    // console.log(text);

// exercises
// 01 Display Object Properties 
function ObjectProperties() {
    let person2 = { firstName: 'John', lastName: 'Doe', age: 30, email: 'john.doe@example.com', };
    for (let Data in person2) {
        console.log(`${Data}: ${person2[Data]}`);
    }
}
// ObjectProperties()

// 02 Object Value Reversal
function ObjectReversal() {
    let colors = {
        red: '#FF0000',
        green: '#00FF00',
        blue: '#0000FF',
        yellow: '#FFFF00',
    };
    // Reversing the Object
    for (let x in colors) {
        colors[x] = colors[x].split('').reverse().join('');

    }
    // Display The Object
    for (let key in colors) {
        console.log(`${key}: ${colors[key]}`);
    }
}
// ObjectReversal()

// 03 Object Value Multiplication
function ObjectValueMultiplication() {
    let numbers = { a: 5, b: 3, c: 7, d: 2, e: 4, };
    // Display The Object
    for (let key in numbers) {
        console.log(`${key}: ${numbers[key]* 2}`);
    }
}
// ObjectValueMultiplication()

// 04 Object Key Capitalization
function ObjectKeyCapit() {
    let countries = {
        france: 'Paris',
        germany: 'Berlin',
        italy: 'Rome',
        spain: 'Madrid',
        japan: 'Tokyo',
    }

    for (let Props in countries) {
        console.log(`${Props.charAt(0).toUpperCase() + Props.slice(1)} : ${countries[Props]}`);
    }

};
ObjectKeyCapit();