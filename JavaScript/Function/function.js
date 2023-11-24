// function AddTwoNumber(x,y) {
//     console.log(x+y);
// }

function AddTwoNumber(x,y) {
    return x + y
}
const Result = AddTwoNumber(1, 1);
// console.log(Result);


function LoginUserMessage(username) {
    if (username === undefined) {
        console.log("Please Enter The Username");
    } else {
        return `${username} Just Loggin In`;    
    }
    
}

// console.log(LoginUserMessage("Mohd Sameer"));

// Passing Multi Value In Parameter
function calculateCartPrice(...Price) {
    return Price;
}
// console.log(calculateCartPrice(200,300,400));

// Passing Object To function
const User = {
    username: "Mohd Sameer",
    price: 999
}
function handleObject(anyObject) {
    console.log(`Username Is ${anyObject.username} And Price Is ${anyObject.price}`);
}
handleObject(User);