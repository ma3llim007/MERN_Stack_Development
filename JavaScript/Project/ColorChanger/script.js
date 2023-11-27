const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) =>{
        const GetColor = e.target.id;
        switch (GetColor) {
            case "grey":
                body.style.backgroundColor = GetColor;
                break;
            case "purple":
                body.style.backgroundColor = GetColor;
                break;
            case "blue":
                body.style.backgroundColor = GetColor;
                break;
            case "red":
                body.style.backgroundColor = GetColor;
                break;
        }
    })
})