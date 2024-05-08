const newQuoteBtn = document.querySelector("#newQuoteBtn");
const cardPara = document.querySelector(".cardPara");

let quote = [
    " Avoid daydreaming about the years to come.", "You are the most important person in your whole life.", "Always be true to who you are, and ignore what other people have to say about you.", "Always be true to who you are, and ignore what other people have to say about you.", "Only demonstrate your strength when it’s really required.", "Subscribe to Drop X Out"
];

// Showing New Quote
newQuoteBtn.addEventListener("click", (e) => {
    let random = Math.floor(Math.random() * quote.length);
    cardPara.innerHTML = "";
    let createPara = document.createElement("p");
    createPara.setAttribute("id", "para");
    createPara.innerText = quote[random];
    cardPara.append(createPara);
});