// Parent Element
(document.querySelector("div").parentElement);
(document.querySelector("html").parentElement);

// Previous Sibling
(document.querySelector(".hero").previousElementSibling);

// Child
(document.querySelector("ul").children[2]);

// Append New Element
const ul = document.querySelector("ul");
const NewLi = document.createElement("li");
NewLi.innerText = "30 Day Coding";
ul.appendChild(NewLi);


// Remove The Element
// document.querySelector("li").remove();

// Replace Child The Element
const ulELement = document.querySelector("ul");
const changeToElement = ulELement.querySelector('.hero');
const NewLiReplace = document.createElement("li");
NewLiReplace.innerText = "Mohd Sameer";
ulELement.replaceChild(NewLiReplace, changeToElement);

// First And Last Element
(document.querySelector("ul").firstElementChild);
(document.querySelector("ul").lastElementChild);