const companies = [
    { name: "Google", category: "Product Based", start: 1981, end: 2004 },
    { name: "Amazon", category: "Product Based", start: 1992, end: 2008 },
    { name: "Paytm", category: "Product Based", start: 1999, end: 2007 },
    { name: "Coforge", category: "Service Based", start: 1989, end: 2010 },
    { name: "Mindtree", category: "Service Based", start: 1989, end: 2010 },
];

const ages = [23, 45, 43, 78, 89, 12, 51, 23, 48, 68, 78, 66, 46, 88];

// For Each
// companies.forEach((data,index) => {
//     console.log(data);
// })

// Filter

let Age = ages.filter((ages) => {
    if (ages>88) {
        return true
    }
});
// console.log(Age);

// Filter By Category
const Company = companies.filter((companies) => {
    if (companies.category === "Service Based") {
        return true
    }
});
// console.log(Company);

// Map
const Company2 = companies.map((companies) => {
    return `${companies.name} ${companies.category}`;
});
// console.log(Company2);

// Sort
const Company3Sort = companies.sort((c1, c2) => (c1.start < c2.start ? 1 : -1));
// console.log(Company3Sort);
// Sort Age
const SortAges = ages.sort((a, b) => a - b);
// console.log(SortAges);

// Reduce
const SumofAge = ages.reduce((total, ages) => total + ages,0);
// console.log(SumofAge);


// From
let String = "Mohd Sameer";
const FromMethod = Array.from(String);
// console.log(FromMethod);

// Keys
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();
// for (let x of keys) {
//     console.log(x);
// }

// Find
const FindResult = ages.find((num) => {
    return num > 88;
});
// console.log(FindResult);

const FindIndex = ages.findIndex((ele) => {
    return ele > 88;
});
console.log(FindIndex);