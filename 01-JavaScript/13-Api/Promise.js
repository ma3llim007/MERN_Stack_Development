const PromiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({username:"Mohd Sameer",email:"mohdsameer68257@gmail.com"});
        } else {
            reject('Error:- Something Went Wrong');
        }
    }, 1000);
});

// Approved to access the function With Another Way
// async function PromiseTwoAccessOne() {
//     try {
//         const respone = await PromiseOne;
//         console.log(respone);
//     } catch (error) {
//         console.log(error);
//     }
// }
// PromiseTwoAccessOne()


// Approved to access the function
// PromiseOne.then((user) => {
//     console.log(user);
//     return user.username;
// }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log('The Promise is either resolved or rejected');
// })

// Getting the Data
async function GetAllUsers() {
    try {
        const ApiUrl = await fetch("https://randomuser.me/api/");
        const response = await ApiUrl.json();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
    
}
GetAllUsers()