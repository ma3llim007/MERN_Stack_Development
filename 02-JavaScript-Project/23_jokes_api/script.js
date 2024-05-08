const getJokeBtn = document.getElementById("getJokeBtn");

// Function For Showing Joke
const showJoke = (response) => {
    let JokePara = document.getElementById("JokePara");
    JokePara.innerText = response.value;
    console.log(response.value);
}

// Function For Getting New Jokes
const getJokes = async () => {
    let url = await fetch("https://api.chucknorris.io/jokes/random");
    if (url.status === 200) {
        let response = await url.json();
        showJoke(response);
    }
}

getJokeBtn.addEventListener("click", getJokes);