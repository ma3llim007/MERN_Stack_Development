







// Carousel BlockQuotes Start
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const carousel_inner = document.querySelector(".carousel-inner");
    const blockquote = document.querySelectorAll("blockquote");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    let currentIndex = 0;

    // Function Showing Currnet Blockquotes
    function ShowQuotes(index) {
        blockquote.forEach((quote, i) => {
            if (i === index) {
                quote.style.display = 'block';
                quote.style.transition = 'all 2s ease-in-out 2s';
            } else {
                quote.style.display = 'none';
            }
        })
    }

    // Function For Prev Blockquotes
    function prevQuote() {
        currentIndex = (currentIndex === 0) ? blockquote.length - 1 : currentIndex - 1;
        ShowQuotes(currentIndex);
    }

    // Function For Next Blockquotes
    function nextQuote() {
        currentIndex = (currentIndex == blockquote.length - 1) ? currentIndex = 0 : currentIndex + 1;
        ShowQuotes(currentIndex);
    }

    // Function For Change BlockQuotes
    function changeQuote() {
        currentIndex = (currentIndex == blockquote.length - 1) ? currentIndex = 0 : currentIndex + 1;
        ShowQuotes(currentIndex);
    }

    prev.addEventListener("click", prevQuote);
    next.addEventListener("click", nextQuote);

    setInterval(() => {
        changeQuote();
    }, 6000);

    ShowQuotes(currentIndex)
})
// Carousel BlockQuotes End