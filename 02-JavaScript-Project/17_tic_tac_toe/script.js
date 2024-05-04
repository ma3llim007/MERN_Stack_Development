let cells = document.querySelectorAll(".cells");
let newGame = document.querySelector("#newGame");
let resetGame = document.querySelector(".reset-game");
let turnO = true;
let count = 0;
let Message = document.querySelector(".Message");
let h4 = document.querySelector(".h4");

// Winning Patterns
const WinningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        if (turnO) {
            cell.textContent = "O";
            turnO = false;
        } else {
            cell.textContent = "X";
            turnO = true;
        }
        cell.disabled = true;
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});

// Function For Check Winner
const checkWinner = () => {
    for (let condition of WinningPatterns) {
        let post1Val = cells[condition[0]].innerText;
        let post2Val = cells[condition[1]].innerText;
        let post3Val = cells[condition[2]].innerText;
        if (post1Val != '' && post2Val != '' && post3Val != '') {
            if (post1Val === post2Val && post1Val === post3Val) {
                showWinner(post1Val);
                return true;
            }
        }

    }
};


// Function For Show Winner
const showWinner = (user) => {
    Message.classList.remove("hide");
    h4.innerText = `Congratulations, Winner is ${user}`;
}


// Function For Rest Game
const gameDraw = () => {
    Message.classList.remove("hide");
    h4.innerText = `Game was a Draw.`;
}

// Function For Reset Game
const ResetGame = () => {
    turnO = true;
    count = 0;
    Message.classList.add("hide");
    clearCless();
}

// Function For Clear Cless
const clearCless = () => {
    cells.forEach((cell) => {
        cell.disabled = false;
        cell.textContent = '';
    });
};

newGame.addEventListener("click", ResetGame);
resetGame.addEventListener("click", ResetGame);