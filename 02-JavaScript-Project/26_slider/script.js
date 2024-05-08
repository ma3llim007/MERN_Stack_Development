const faBar = document.querySelector(".fa-bars");
const Xmar = document.querySelector(".fa-xmark")
const navRow = document.querySelector("#navRow")


// Onclick On Fabar
faBar.addEventListener("click", (e) => {
    faBar.classList.toggle("hide");
    Xmar.classList.toggle("show");
    navRow.classList.toggle("show")
});

// Onclick On Xmar
Xmar.addEventListener("click", (e) => {
    faBar.classList.toggle("hide");
    Xmar.classList.toggle("show");
    navRow.classList.toggle("show")
});

// This Execute On Page Load
document.addEventListener("DOMContentLoaded", (e) => {
    Xmar.classList.add("hide");
    navRow.classList.add("hide");
});