// 1. String
let string: string = "String";

// 2. Number
let number: number = 45;

// 3. Boolean
let bool: boolean = false;
let bool2: boolean = true;

// 4. Array
let numbers: number[] = [1, 2, 3, 4, 5];

// 5. Any
let temp: any;
temp = "temp";
temp = 45;
temp = false;

// 6. Return Type Annotations With Parameter Of Function
const sum = (a: number, b: number): number => {
    return a + b;
};

// 7. Union Types
function printId(id: string | number) {
    console.log(`Id is ${id}`);
}

// 8. InterFaces
interface IUser {
    name: string;
    age: number;
}
