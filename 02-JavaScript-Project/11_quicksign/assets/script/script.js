"use strick"
const colorBox = document.getElementById("color");
const backgroundBox = document.getElementById("background");
const fontBox = document.getElementById("fontsize");
const CanvasContainer = document.getElementById("canvas");
const clearButton = document.getElementById("clear");
const saveButton = document.getElementById("save");
const retrieveButton = document.getElementById("retrieve");
let isDrawing = null;
// Create Canvas
const Canva = CanvasContainer.getContext('2d');

// Changing the color Of Text
colorBox.addEventListener("change", (e) => {
    Canva.strokeStyle = e.target.value;
    Canva.fillStyle = e.target.value;
});

// Check and Getting Previous Value of the x and y 
CanvasContainer.addEventListener("mousedown", (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});

// Creating New Drawing 
CanvasContainer.addEventListener("mousemove", (e) => {
    if (isDrawing) {
        Canva.beginPath();
        Canva.moveTo(lastX, lastY);
        Canva.lineTo(e.offsetX, e.offsetY)
        Canva.stroke();

        lastX = e.offsetX;
        lastY = e.offsetY;
    }
});

// Stoping The Drawing To Draw On Mouse Up
CanvasContainer.addEventListener("mouseup", (e) => {
    isDrawing = false;
});

// Changing background Color
backgroundBox.addEventListener("change", (e) => {
    CanvasContainer.style.backgroundColor = e.target.value;
});

// Changing font Size
fontBox.addEventListener("change", (e) => {
    Canva.lineWidth = e.target.value;
});

// Clear Canvas
clearButton.addEventListener(("click"), () => {
    Canva.clearRect(0, 0, CanvasContainer.width, CanvasContainer.height)
});

// Save And Download
saveButton.addEventListener(("click"), () => {
    // Saving Canva in localStorage
    localStorage.setItem("canvasContain", CanvasContainer.toDataURL())

    let link = document.createElement("a");
    link.download = "my-sign.png";
    link.href = CanvasContainer.toDataURL();
    link.click();

    Canva.clearRect(0, 0, CanvasContainer.width, CanvasContainer.height);
});

// Retrieve Old Sign 
retrieveButton.addEventListener(("click"), () => {
    let localStorageCanvas = localStorage.getItem("canvasContain");
    Canva.clearRect(0, 0, CanvasContainer.width, CanvasContainer.height);

    if (localStorageCanvas) {
        let image = new Image();
        image.src = localStorageCanvas;
        Canva.drawImage(image, 0, 0);
    }

});