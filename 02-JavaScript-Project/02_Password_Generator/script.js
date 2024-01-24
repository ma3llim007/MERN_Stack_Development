const UpperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerSet = "abcdefghijklmnopqrstuvwxyz";
const NumberSet = "1234567890";
const SymbolSet = "!@#$%^&*()_+/*-~{}|[]\:;'<>?`";


// Selector
const pass_box = document.getElementById("pass-box");
const total_char = document.getElementById("total-char");
const upper_case = document.getElementById("upper-case");
const lower_case = document.getElementById("lower-case");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const btn = document.getElementById("btn");


const GetRandomDataSet = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const GeneratePassword = (password = "") => {
    if (upper_case.checked) {
        password += GetRandomDataSet(UpperSet);
    }
    if (lower_case.checked) {
        password += GetRandomDataSet(LowerSet);
    }
    if (numbers.checked) {
        password += GetRandomDataSet(NumberSet);
    }
    if (symbols.checked) {
        password += GetRandomDataSet(SymbolSet);
    }
    if (password.length < total_char.value) {
        return GeneratePassword(password);
    }
    pass_box.innerText = TrimString(password,total_char.value);
}
GeneratePassword();
btn.addEventListener("click", function() {
    GeneratePassword();
})

// Function For Truncate String 
function TrimString(str, num) {
    if (str.length > num) {
        let SubString = str.substring(0, num);
        return SubString;
    } else {
        return str;
    }
}