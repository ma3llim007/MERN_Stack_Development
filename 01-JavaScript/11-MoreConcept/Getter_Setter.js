class User{
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return this._password.toUpperCase();
    }

    set password(value) {
        this._password = value.toUpperCase();
    }
}
const user1 = new User("test@test.com", "mohd");

console.log(user1.email);
console.log("");
console.log(user1.password);