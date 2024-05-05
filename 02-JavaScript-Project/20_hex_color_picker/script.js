const colorElemet = document.getElementById("color");
const changeColor = () => {
    let color = colorElemet.value;
    if (color) {
        const Div = document.querySelector(".card-color");
        const hexValue = document.querySelector("#color-code");
        Div.style.backgroundColor = color;
        hexValue.innerText = color;
    }
}

colorElemet.addEventListener("change", changeColor);
changeColor();