// 1.Merge With Two Array Into Single Array
const names = ["John", "Jane", "Deo", "Smith"];
const lastNames = ["Deo", "Johnson", "willaims"];
const fullNames = [...names, ...lastNames];

// 2. Filtering an array of objects to display items on a search query (e.g Filtering products by type).
const products = [
    { name: "Laptop", type: "Electronics" },
    { name: "Phone", type: "Electronics" },
    { name: "Tablet", type: "Electronics" },
    { name: "Monitor", type: "Electronics" },
    { name: "Shirt", type: "Clothing" },
    { name: "Pants", type: "Clothing" },
    { name: "Shoes", type: "Footwear" },
];
const filterProducts = products.filter((product) => product.type === "Electronics");

// 3. Grouping an array of objects by a specific property (e.g Grouping user by role)
const users = [
    { name: "John", age: 20, role: "admin" },
    { name: "Johe", age: 21, role: "user" },
    { name: "Doe", age: 22, role: "admin" },
];
// With Reduce
const groupedUsersWithReduce = users.reduce((acc, user) => {
    if (!acc[user.role]) {
        acc[user.role] = [];
    }

    acc[user.role].push(user);
    return acc;
}, {});
// With ForEach
const groupedUsersWithForEach = {};
users.forEach((user) => {
    if (!groupedUsersWithForEach[user.role]) {
        groupedUsersWithForEach[user.role] = [];
    }

    groupedUsersWithForEach[user.role].push(user);
});

// 4. Removing or updating a specific objects in array of data based on a unique ID
const users2 = [
    { id: 1, name: "Alice", age: 28 },
    { id: 2, name: "Bob", age: 35 },
    { id: 3, name: "Charlie", age: 42 },
    { id: 4, name: "Diana", age: 31 },
    { id: 5, name: "Ethan", age: 39 },
];

let newUsers = users2.filter((user) => {
    return user.id !== 1;
});
console.log(newUsers);
