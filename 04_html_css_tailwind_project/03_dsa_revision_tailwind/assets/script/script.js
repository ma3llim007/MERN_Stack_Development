document.addEventListener("DOMContentLoaded", () => {
    const blockquotes = document.querySelectorAll("blockquote");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    let currentIndex = 0;

    // Function For Showing BlockQuote
    function ShowBlock(index) {
        blockquotes.forEach((blockquote, i) => {
            if (index == i) {
                blockquote.style.display = 'block';
            } else {
                blockquote.style.display = 'none';
            }
        });
    }

    // Onclick On Prev
    function PrevFunction() {
        currentIndex = (currentIndex == 0) ? blockquotes.length - 1 : currentIndex - 1;
        ShowBlock(currentIndex);
    }

    // Onclick On Next
    function NextFunction() {
        currentIndex = (currentIndex == blockquotes.length - 1) ? currentIndex = 0 : currentIndex + 1;
        ShowBlock(currentIndex);
    }

    prev.addEventListener("click", PrevFunction);
    next.addEventListener("click", NextFunction);

    setInterval(() => {
        currentIndex = (currentIndex == blockquotes.length - 1) ? currentIndex = 0 : currentIndex + 1;
        ShowBlock(currentIndex);
    }, 10000);

    ShowBlock(currentIndex);
});