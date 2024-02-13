userObj = {
    name: "Mohd Sameer",
    age: 19,
    designation: "Software Engineer",
    salary:5000,
}

function UserInfo(obj) {
    return function (userinfo) {
        return obj[userinfo];
    }
}
// let res = UserInfo(userObj);
// console.log(res('name'));


// Infinite Currying
function Add(a) {
    return function (b) {
        if (b) return Add(a + b);
        return a;
    }
}
console.log(Add(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)());