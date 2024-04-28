







function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.ShowMessage = function(){
    console.log(`UserName Is ${this.name} And Age Is ${this.age}`);
}

let useone = new Person("Mohd Sameer", 36);
console.log(useone);