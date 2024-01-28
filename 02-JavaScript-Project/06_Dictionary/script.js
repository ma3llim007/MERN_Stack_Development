const SearchBtn = document.getElementById("SearchBtn");




// Function For Accepting The Word
SearchBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const word = document.getElementById("word");
    if (word.value === "") {
        alert("Please, Enter The Word First To Search");
    } else {
        GetData(word.value);
    }
});

// Function For Fetching Data From Api
const GetData = async (word) => {
    try{
        const ContnetBox = document.getElementById("ContnetBox");
        const fetchData = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const JsonData = await fetchData.json();
        const Definition = JsonData[0].meanings[0].definitions[0];
        const Meaning = JsonData[0].meanings[0];
        let card = "";
        card +=
            `
                <div class="card col-md-12" style="height: auto;">
                    <div class="card-body">
                        <h1 class="card-title h1 fw-bolder">Word:- <span class="text-uppercase">${JsonData[0].word}</span></h1>
                        <h6 class="card-subtitle h6 text-black m-1 ">Part Of Speech:- <span class="text-uppercase">${JsonData[0].meanings[0].partOfSpeech}</span></h6>
                        <p class="card-title p-0 m-0 fs-4"><span class="fw-semibold">Mearning: </span>${Definition.definition}</p>
                        <p class="card-title p-0 m-0 fs-4"><span class="fw-semibold">Example: </span>${Definition.example === undefined ? "Not Available" : Definition.example}</p>
                        <hr class="m-1">
            `
            if (Meaning.synonyms.length != 0) {
                card +=
                    `
                            <p class="fw-semibold p-0 m-0 text-decoration-underline">Synonyms</p>
                            <ul>    
                        `
                for (let i = 0; i < Meaning.synonyms.length; i++) {
                    card +=
                        `
                                    <li class="p-0 m-0"> ${Meaning.synonyms[i]} </li>
                                `
                }
                card += `</ul>`
            }
            if (Meaning.antonyms.length != 0) {
                card +=
                    `
                            <p class="fw-semibold p-0 m-0 text-decoration-underline">Antonyms</p>
                            <ul>    
                        `
                for (let i = 0; i < Meaning.antonyms.length; i++) {
                    card +=
                        `
                                    <li class="p-0 m-0"> ${Meaning.antonyms[i]} </li>
                                `
                }
                card += `</ul>`
            }
            card +=
                `
                    <a href="${JsonData[0].sourceUrls[0]}" class="btn btn-success" target="_blanks">Read More 👁️</a>
                `

        ContnetBox.innerHTML = card;
    }
    catch (e) {
        ContnetBox.innerHTML = `<h2 class="h2 text-white fw-semibold">Sorry, The Word Could Not Found</h2>`;
    }
}