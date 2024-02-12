const obj = {



    name: "Mohd Sammer",
    getName: function () {
        return this.name;
    },
    getRoll: function () {
        return this.age;
    }
}

const obj2 = {
    age: 19,
    __proto__: obj
}

const obj3 = {
    subject: "BCA",
    __proto__: obj2
}
// console.log(obj3);


// Create Own ProtoTypes
Array.prototype.SumOFArray = function(){
    let total = 0;
    this.forEach((element) => {
        total += element;
    });
    return total;
};

const Ages = [23, 45, 43, 78, 89, 12, 51, 23, 48, 68, 78, 66, 46, 88];
// console.log(Ages.SumOFArray());


function MyProto(name,num) {
    this.name = name;
    this.num = num;
}

MyProto.prototype = obj3

const ProObj = new MyProto("Mohd Sameer",9);
console.log(ProObj.getName());
console.log(ProObj.getRoll());
console.log(ProObj);


