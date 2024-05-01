const section = document.getElementsByTagName("section")[0];
section.addEventListener("click", (e) => {
    if (e.target.tagName == 'BUTTON') {
        console.log("Click On Button");
    }
    else if (e.target.tagName == 'SPAN') {
        console.log("Click On Span");
    }
    else if (e.target.tagName == 'DIV') {
        console.log("Click On Div");
    }
    else if (e.target.tagName == 'SECTION') {
        console.log("Click On Section");
    }
});