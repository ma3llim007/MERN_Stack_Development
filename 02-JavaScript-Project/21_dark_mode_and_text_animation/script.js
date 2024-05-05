const body = document.querySelector("body");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

const ToggleSunMode = () => {
    body.classList.add("light");
    sun.style.display = 'none';
    moon.style.display = 'block';
}
const ToggleMoonMode = () => {
    body.classList.remove("light");
    body.classList.add("dark");
    moon.style.display = 'none';
    sun.style.display = 'block';
}

sun.addEventListener("click", ToggleSunMode)
moon.addEventListener("click", ToggleMoonMode)

ToggleSunMode();

let typingEffect = new Typed("#Text", {
    strings: ["Mohd Sameer", "Web Developer","Learn Mern Stack Development","BCA Student"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
})