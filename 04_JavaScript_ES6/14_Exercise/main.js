// -- UseCases

// 1. Write Code to Array Of Names from given Array of users.
// 2. Get Back Only Active User.
// 3. Sort Users By Age Descending.
const users = [
    {
        id: 1,
        name: "Mohd",
        isActive: true,
        age:20
    },
    {
        id: 2,
        name: "Sameer",
        isActive: true,
        age:22
    },
    {
        id: 3,
        name: "Salman",
        isActive: true,
        age:18
    },
    {
        id: 4,
        name: "Khan",
        isActive: false,
        age:25
    },
    {
        id: 5,
        name: "Irfan",
        isActive: true,
        age:25
    },
]

let names = [];
users.forEach((data, index) => {
    if (data.isActive) {
        names.push(data.name);
    }
});
// console.log(names);

// New Level Code
const names1 = users.filter((userdata) => userdata.isActive)
    .sort((user1, user2) => user1.age < user2.age ? 1 : -1)
    .map((data) => data);
// console.log(names1);

// Check THe exist User or Not
const ExistUser = (name, users)=>{
    const User = users.some((user) => user.name === name);
    return User;
}
// console.log(ExistUser("Sameer",users));

// Added New Array Without Existing the Another Code
let arr = [1, 2];
const AppendArr = (arr, ele) => {
    // arr.push(ele);
    // return arr;
    // This is Old Code
    const newArr = [...arr,ele]
    return newArr;
}

// console.log(AppendArr(arr,3));
// console.log(AppendArr(arr,4));
// console.log(arr)


// REMOVE THE DUPLICATE ELEMENT IN ARRAY
const DuplicateArray =[1,2,3,3,4,4,4,5,5,6,7,8]
// Level 1 
// function Unique() {
//     let UniqueElement = [];
//     DuplicateArray.forEach((element) => {
//         if (!UniqueElement.includes(element)) {
//             UniqueElement.push(element)
//         }
//     });
//     return UniqueElement;
// }
// console.log(Unique(DuplicateArray));

// Level 2
// const Unique = (data) => {
//     return [...new Set(data)];
// }
// console.log(Unique(DuplicateArray));

// Level 3
const Unique = (data) => {
    return data.reduce((arr, ele) => {
        return arr.includes(ele) ? arr : [...arr, ele];
    },[]);
    return arr;
}
// console.log(Unique(DuplicateArray));


// Concatenating the Array
const ConcatArray = (arr1,arr2) => {
    return arr1.concat(...arr2);
}
console.log(ConcatArray(arr,DuplicateArray))
console.log(arr);
console.log(DuplicateArray);