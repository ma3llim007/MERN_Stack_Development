// The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

// Example
const cars = ["BMW", "Volvo", "Mini"];
function Example() {
    let i = 0;
    do {
        console.log(cars[i]);
        i++;
    }
    while (cars[i]);
}
Example();