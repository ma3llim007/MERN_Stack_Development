console.clear();


let student = {};
student.name = "Mohd Sameer";

console.log(Object.getOwnPropertyDescriptor(student, 'name'));

Object.defineProperty(student, 'age', {
    value: 19,
    writable: true,
    configurable: true,
    enumerable: true,
});

for (const k in student) {
    console.log(k);
}

delete student.age

console.log(Object.getOwnPropertyDescriptor(student, 'age'));