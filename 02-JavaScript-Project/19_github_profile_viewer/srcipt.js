const GetProfile = document.getElementById("GetProfile");
let Username = document.getElementById("username");

// Function For Handle On Get Profile Data
const handleGetProfile = () => {
    if (Username.value) {
        let username = Username.value.toLowerCase();
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Something Went Wrong!");
                }
                return response.json();
            })
            .then(data => {
                ShowData(data);
            })
            .catch(err => alert(err));
            
    } else {
        alert("Please Enter The Username");
        Username.focus();
    }
}

const ShowData = (data) => {
    const contain = document.getElementById("contain");
    let containDiv = `
        <h2 class="h2">Username:- ${data.login}</h2>
        <h2 class="h3">Name:- ${data.name}</h2>
        <img src="${data.avatar_url}" alt="${data.name}" />
        <button id="GetProfile" class="m-2"><a href="${data.html_url}" target="_blanks">View Github Profile</a></button>
    `;
    contain.innerHTML = containDiv;
    Username.value = "";
}

GetProfile.addEventListener("click", handleGetProfile);