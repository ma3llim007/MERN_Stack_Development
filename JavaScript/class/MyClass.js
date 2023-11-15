// Class


// Creata a Class
class User{
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    UserNameUpperCase() {
        return `${this.username.toUpperCase()}`;
    }
}
const Person = new User('Mohd Sameer', 'mohdsameer@gmail.com')
console.log(Person);
console.log(Person.UserNameUpperCase());