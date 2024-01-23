let MyDate = new Date();
// console.log(MyDate.toLocaleString());

let TimeStamp = Date.now();

// console.log(TimeStamp);
// console.log(MyDate.getTime());

// Get the Second 
// console.log(Math.floor(Date.now() / 1000));

// More Methods Of Date
let NewDate = new Date();

// console.log(NewDate.getDate());
// console.log(NewDate.getDay());
// console.log(NewDate.getMonth() + 1);
// console.log(NewDate.getFullYear());

// Customizing the Date With To toLocaleString Methods
console.log(NewDate.toLocaleString('default', {
    weekday: "long"
}));