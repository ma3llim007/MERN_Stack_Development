function Sum(a,b,c,d,e) {
    return {
        SumTwo: function () {
            return a + b;
        },
        SumThree: function () {
            return a + b + c;
        },
        SumFour: function () {
            return a + b + c + d;
        },
        SumFive: function () {
            return a + b + c + d + e;
        }
    }
}
let Store = Sum(1, 2, 3, 4, 5);
console.log(`Sum of Two Number:- ` + Store.SumTwo());
console.log(`Sum of Three Number:- ` + Store.SumThree());
console.log(`Sum of Four Number:- ` + Store.SumFour());
console.log(`Sum of Five Number:- ` + Store.SumFive());