const MyDiv = document.getElementById("MyDiv");

// Funciton For Moving Rocket
const moveRocket = (e) => {
    let x = e.pageX;
    let y = e.pageY;
    MyDiv.style.left = x - 20 + "px";
    MyDiv.style.top = y - 20 + "px";
};

document.addEventListener("mousemove", (e) => {
    moveRocket(e)
});