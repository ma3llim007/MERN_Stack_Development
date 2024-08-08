const fs = require("fs");
const os = require("os");
// fs.writeFileSync('./text.txt', "Hey There");

// fs.writeFile("./text.txt", "Hello World Async", (err) => {});

// fs.readFile("./contact.txt", "utf-8", (error, result) => {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log(result);
//     }
// })

const resutl = fs.appendFileSync("./contact.txt", " Mohd Samee 2");

console.log(os.cpus().length);