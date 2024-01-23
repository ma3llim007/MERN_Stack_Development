let Myheros = ["thor", "spiderman"];
let HeroPower = {
    thor: "hammer",
    spiderman: "sling",
    GetSpiderPower: function () {
        console.log(`Spiderman Power is ${this.spiderman}`);
    }
}
Object.prototype.sameer = function () {
    console.log(`Sameer is Present In The Object's`);
}
// Myheros.sameer()


let StringName = "Mohd        ";
String.prototype.TrueLenght = function () {
    console.log(this.trim(StringName).length);
}
StringName.TrueLenght()