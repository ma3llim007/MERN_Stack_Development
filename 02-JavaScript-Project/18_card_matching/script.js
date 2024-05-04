let Board = document.querySelector(".gird");
let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20];

let flippedCards = [];
let matchedCards = [];
let canFlip = true;

// Function For Randomize Or Shuffle The Array
const shuffle = (array) => {
    for (let index = 0; index < array.length; index++) {
        let i = Math.floor(Math.random() * index);
        let temp = array[i];
        array[i] = array[index];
        array[index] = temp;
    };
    return array;
}

// Function For Create Card
const createCard = (number) => {
    const card = document.createElement("div");
    card.classList.add("gird-item");
    card.textContent = '?';
    card.dataset.number = number;
    card.addEventListener("click", flipCardFun);
    return card;
}

// Function For Flipping Card
function flipCardFun() {
    if (!canFlip || flippedCards >= 2 || this.classList.contains("flip") || matchedCards.includes(this)) {
        return;
    } else {
        this.classList.add("flip");
        this.textContent = this.dataset.number;
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

// Function For check The Same Match
function checkMatch() {
    canFlip = false;
    setTimeout(() => {
        const [item1, item2] = flippedCards;
        if (item1.dataset.number === item2.dataset.number) {
            matchedCards.push(item1, item2);
            if (matchedCards.length === numbers.length) {
                alert('Congratulations! You won!');
                resetSetGame();
            }
        } else {
            item1.classList.remove("flip");
            item2.classList.remove("flip");
            item1.textContent = '?'
            item2.textContent = '?'
        }
        flippedCards = [];
        canFlip = true;
    }, 1000);
}


// Iniitilization Of Function
const InitGame = () => {
    // Randomizing The Numbers
    let reShuffleOfNumber = shuffle(numbers);
    reShuffleOfNumber.forEach((number) => {
        let card = createCard(number);
        Board.append(card);
    });
}
InitGame();

function resetSetGame() {
    flippedCards = [];
    matchedCards = [];
    canFlip = true;
    Board.innerHTML = '';
    InitGame();
}