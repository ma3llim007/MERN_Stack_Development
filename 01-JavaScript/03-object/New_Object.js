function CreateUser(username, score) {
    this.username = username;
    this.score = score;
}

CreateUser.prototype.increment = function () {
    this.score++
}
CreateUser.prototype.printMe = function () {
    console.log(`Price Is ${this.score}`);
}

const chai = new CreateUser('chai', 50);

chai.printMe()