function SetUsername(username) {
    this.username = username;
}
function CreateUser(username, email, password) {
    SetUsername.call(this, username);
    this.email = email;
    this.password = password;
}
const Chai = new CreateUser("chai", "chai@chai.com", "132");
console.log(Chai);