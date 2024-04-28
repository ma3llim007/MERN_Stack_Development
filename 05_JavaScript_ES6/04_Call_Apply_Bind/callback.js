// function For Showing Result
function Result(value) {
    console.log(value);
}

// Calculate The Result
function add(a, b, show) {
    let total = a + b;
    show(total);
}
add(5, 5, Result);