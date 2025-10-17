// 1. Create an array of your top 5 favorite movies and log it.
// const movies = ["kdf", "kfd2", "animal", "robert", "tiger"];
// movies.forEach((movie) => {
//     console.log(movie);
// });

// 2. Find an log the second element of an array.
// const numberArray = [1, 2, 4, 5];
// console.log(numberArray[1]);

// 3. Add tow elements of the start of an array using .unshift().
// let numberArray = [1, 2, 4, 5];
// numberArray.unshift(0);
// numberArray.unshift(-1);
// console.log(numberArray);

// 4. remove the last element of an array and log the updated array.
// let numberArray = [1, 2, 4, 5];
// numberArray.pop();
// console.log(numberArray);

// 5. use .slice() to extract the frist three elements of an array.
// let numberArray = [1, 2, 4, 5];
// const newArray = numberArray.slice(0, 3);
// console.log(newArray);

// 6. find the index of a specific element in an array using .indexOf().
// let numberArray = [1, 2, 4, 5];
// console.log(numberArray.indexOf(2));

// 7. check if a value exists in an array using .includes().
// let numberArray = [1, 2, 4, 5];
// console.log(numberArray.includes(2));

// 8. Combine two arrays [1,2] and [3,4] using .concat().
// const arryOne = [1, 2];
// const arryTwo = [3, 4];
// const concatArray = arryOne.concat(arryTwo);
// console.log(concatArray);

// // 9. sort an array of numbers [5,2,9,1] in ascending order.
// let numberArray = [5, 2, 9, 10, 11, 25, 1, 3];
// console.log(numberArray.sort((a, b) => a - b));
// With Bubble Sort
// for (let j = 0; j < numberArray.length; j++) {
//     for (let i = 0; i < numberArray.length - j - 1; i++) {
//         if (numberArray[i] > numberArray[i + 1]) {
//             let temp = numberArray[i];
//             numberArray[i] = numberArray[i + 1];
//             numberArray[i + 1] = temp;
//         }
//     }
// }

// 10. Write a program that creates a copy of an array without mutating the original
// First Way With Spreat Operater
// let numArray = [1, 2, 3];
// let copyArray = [...numArray];
// console.log(copyArray);

// Second Way With For Each Loop
let numArray = [1, 2, 3];
let numArray2 = [];
numArray.forEach((value) => {
    numArray2.push(value);
})

console.log(numArray2);
