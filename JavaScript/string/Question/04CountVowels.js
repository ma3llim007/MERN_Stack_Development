// Count Vowels
const letters = "Mohd Sameer";

const Vowels = ["a","e","i","o","u"]
let count = 0;
for (let letter of letters) {
    if (Vowels.includes(letter)) {
        count++;
    }
        
}
console.log(count);