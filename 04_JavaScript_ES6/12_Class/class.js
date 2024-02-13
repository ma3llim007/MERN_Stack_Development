// Creating Class

class User{
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    Display() {
        console.log(`Username:- ${this.username} And Password:- ${this.password}`);
    }
}

const obj = new User("Mohd Sameer", "132132");
console.log(obj);