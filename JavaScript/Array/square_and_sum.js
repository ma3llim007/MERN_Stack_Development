// Square and Sum
const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let sum = 0;
for (let i = 0; i < Array.length; i++){
   sum += (Array[i] * Array[i]);
}
console.log(sum);