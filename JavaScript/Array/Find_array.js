const fruits = ["apple", "orange", "banana", "kiwi", "grape", "watermelon", "mango"];


// 1.Find the first fruit in the array that starts with the letter "m".
function SolveOne() {
    const result = fruits.findIndex(Display);
    function Display(value) {
        if (value.charAt(0) == 'm') {
            console.log(value);
        }
    }

    // ANOTHER METHOD
    const result2 = fruits.find(Display =>Display.startsWith('m'));
    console.log(result2);
}
// SolveOne()

// 2. Find the index of the fruit "kiwi" in the array.
function SolveTwo() {
    const result = fruits.indexOf("kiwi");
    console.log(result);
}
// SolveTwo()

// 3. Check if any fruit in the array has more than 6 characters.
function SolveThree() {
    const result = fruits.forEach(Element => {
        if (Element.length >6) {
            console.log(Element);
        }
    });
}
// SolveThree();

// 04. Find the concatenation of all the fruits in the array into a single string, separated by commas.
function SolveFour() {
    const result = fruits.join(', ');
    console.log(result);
}
// SolveFour();

// 05. Create a new array that contains only the fruits with even-length names from the original array.
function SolveFive() {
    const CopyArray = fruits.filter(fruit => fruit.length % 2 === 0);
    console.log(CopyArray);
}
// SolveFive()

// 06. Convert all the fruit names to uppercase in the new array from question
function SolveSix() {
    const result = fruits.forEach(Element => {
       console.log(Element.toLocaleUpperCase()); 
    });
}
SolveSix();