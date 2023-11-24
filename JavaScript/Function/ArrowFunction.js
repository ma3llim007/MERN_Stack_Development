// THIS
    // this keyword defind the currnent context value
    
const User = {
    username: "Mohd Sameer",
    price: 999,
    welcome: function () {
        console.log(`${this.username}, Welcome To Website`);
    }
}

// User.welcome();
// User.username = "Mohd Younus";
// User.welcome();

const ArrowFun = () => {
    let username = "Mohd Sameer";
    console.log(this);
}
// ArrowFun();

const Arrow2 = () => ("Mohd");

console.log(Arrow2());