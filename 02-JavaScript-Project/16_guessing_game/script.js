const inputElement = document.getElementById("input");
const GuessBtn = document.getElementById("GuessBtn");
const errorMessage = document.getElementById("ErrorMessage");
const guessMessage = document.getElementById("GuessMessage");
const SuccessMessage = document.getElementById("SuccessMessage");
const ParaMessage = document.getElementById("ParaMessage");

let answer = Math.floor(Math.random() * 100)+1;
let guessCount = 0;

// Handle OnCLick Of Button
GuessBtn.addEventListener("click", () => {
    guesseAnswer();
});

// Handle keydown Of Input
inputElement.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        guesseAnswer();
    }
})


// Guess Corrent Answer Function
function guesseAnswer() {
    if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
        errorMessage.innerText = "Enter The Number Between 1 To 100 Are Accept!";
        inputElement.value = '';
    } else {
        errorMessage.innerText = '';
        guessCount++;
        guessMessage.innerText = `No. of Guess : ${guessCount}`
        if (input.value < answer) {
            errorMessage.innerText = "You Guessed Is Too Low!"
            inputElement.value = '';
        }
        else if (input.value > answer) {
            errorMessage.innerText = "You Guessed Is Too High";
            inputElement.value = '';
        }
        else {
            errorMessage.innerText = "";
            SuccessMessage.innerHTML = `Congratulations! You Guessed The Correct Number In <strong>${guessCount}</strong> Guesses!`
            ParaMessage.innerText = "Game Will Reset After 10 Second 😀"
            inputElement.value = '';
            inputElement.disabled = true;
            GuessBtn.disabled = true;
            setTimeout(() => {
                resetGame();
            }, 10000)


        }
    }
}

// Function For ResetGame
function resetGame() {
    inputElement.disabled = false;
    GuessBtn.disabled = false;
    let answer = Math.floor(Math.random() * 100)+1;
    let guessCount = 0;
    inputElement.innerText = "";
    SuccessMessage.innerHTML = "";
    ParaMessage.innerText = "";
    guessMessage.innerText = `No. of Guess : 0`
}