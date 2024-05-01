









const StartLoggingKeypress = document.getElementById("StartLoggingKeypress");
const StopLoggingKeypress = document.getElementById("StopLoggingKeypress");
const ContainerPressDown = document.getElementById("ContainerPressDown");
const ContainerPressUp = document.getElementById("ContainerPressUp");

// Handle OnClick Of Start Keylogging
StartLoggingKeypress.addEventListener("click", () => { 
    document.addEventListener("keydown", handlePressDown);
    document.addEventListener("keyup", handlePressUp);
    StartLoggingKeypress.disabled = true;
    StopLoggingKeypress.disabled = false;
});

// Handle OnClick Of Stop Keylogging
StopLoggingKeypress.addEventListener("click", () => {
    StartLoggingKeypress.disabled = false;
    StopLoggingKeypress.disabled = true;
    document.removeEventListener("keydown", handlePressDown);
    document.removeEventListener("keyup", handlePressUp);
    ContainerPressDown.innerHTML = "";
    ContainerPressUp.innerHTML = "";
});

// Function For Handle Press Down
function handlePressDown(e) {
    ContainerPressDown.innerHTML = `The Key Is <strong>${e.key.toUpperCase()}</strong> Press Down`
}

// Function For Handle PressUp
function handlePressUp(e) {
    ContainerPressUp.innerHTML = `The Key Is <strong>${e.key.toUpperCase()}</strong> Press Up`
}