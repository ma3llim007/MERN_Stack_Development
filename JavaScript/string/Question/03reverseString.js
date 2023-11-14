// Reverse String
function Reverse(One) {
    let FinalStirng = "";
    for (let i = One.length - 1; i >= 0; i--){
        FinalStirng += One[i];
    }
    console.log(FinalStirng);
}
One = "One";
Reverse(One);