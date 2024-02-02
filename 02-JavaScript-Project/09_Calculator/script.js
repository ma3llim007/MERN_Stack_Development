let string = "";
const buttons = document.querySelectorAll(".buttons");
const InputFeild = document.getElementById("InputFeild");
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        InputData = e.originalTarget.value;
        RemoveDel = InputData.replace("Del", "");
        string += RemoveDel;
        console.log(string);
        console.log(InputData);
        if (InputData == 'AC') {
            InputFeild.value = '';
            string = '';
        } else if (InputData == 'Del') {
            string = string.slice(0, - 1);
        } else if (InputData == '=') {
            string = string.replace("=", "");
            string = eval(string);
        } else if (InputData == '^') {
            string = string.replace("^", "");
            string = Math.pow(string, 2);
        }
        // Show the result and number in input
        InputFeild.value = string;    
    });
});