// Event Bubbling & Capturing
// Stop Propagation, Immediadate Propagation & Prevent Defult

const FirstDiv = document.getElementById("first");
const Button = document.querySelector("button");
FirstDiv.addEventListener("click", (e) => {
    console.log("First Div");
})

Button.addEventListener("click", (e) => {
    // e.stopPropagation();
    console.log("Button");
})
Button.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    console.log("Button1");
})
Button.addEventListener("click", (e) => {
    console.log("Button2");
})
Button.addEventListener("click", (e) => {
    console.log("Button3");
})
Button.addEventListener("click", (e) => {
    console.log("Button4");
})
Button.addEventListener("click", (e) => {
    console.log("Button5");
})