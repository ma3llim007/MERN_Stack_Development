function Move() {
    const inside = document.getElementById("class");
    let pos = 0;
    const id = setInterval(frame, 10);
    function frame() {
        pos++;
        if (pos === 345) {
            clearInterval(id);
        } else {
            inside.style.top = pos + 'px';
            inside.style.left = pos + 'px';
        }
    }
}