// Inheritance


class User{
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`UserName: ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, password) {
        super(username)
        this.password = password
    }
    addCourse() {
        console.log(`New Course Added By ${this.username}`);
    }
}

// const Sameer = new Teacher("Mohd Sameer", "Password")
// console.log(Sameer);
// Sameer.addCourse()


const Sameer = new User("Mohd Sameer");
console.log(Sameer);
Sameer.logMe()