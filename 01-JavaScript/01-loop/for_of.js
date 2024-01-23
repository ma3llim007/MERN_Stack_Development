// The JavaScript for of statement loops through the values of an iterable object.
// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists etc.,

// Example
const cars = ["BMW", "Volvo", "Mini"];
function Example() {
    let text = "";
    for (let x of cars) {
        text += x +' ';
    }
    console.log(text);
}
Example();