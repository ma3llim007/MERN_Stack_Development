const Notes = document.getElementById("Notes");
const Button = document.getElementById("AddBtn");

// Function For Add New Notes
Button.addEventListener("click", function (e) {
    const GetTitle = document.getElementById("title");
    const GetDescription = document.getElementById("description");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    notesInstanceValue = {
        "title": GetTitle.value,
        "description": GetDescription.value,
        "status": 0,
    };
    notesobj.push(notesInstanceValue);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    GetTitle.value = "";
    GetDescription.value = "";
    alert("Notes Insert Successfully!");
    ShowTask();
});

// Function To Show The Nodes
const ShowTask = () => {
    const NotesDiv = document.getElementById("Notes");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    let card = "";
    notesobj.forEach(function (element, index) {
        card +=
                `
                    <div class="NoteCard card m-2" style="width: 34rem;">
                        <div class="card-body">
                            <h6 class="card-subtitle mb-2">Notes ID: #${index + 1}</h6>
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">${element.description}</p>
                            <button onclick="DeleteNotes(${index})" class="btn btn-danger">Delete <i class="fa fa-trash"></i></button>
                        </div>
                    </div>
                `
    });
    if (notesobj.length != 0) {
        NotesDiv.innerHTML = card;
    } else {
        NotesDiv.innerHTML = `<h3 class="h3 text-white">Notes Is Empty 🫙</h3>`;
    }
}
ShowTask();

// Function For Delete Notes
function DeleteNotes(IndexId) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(IndexId,1)
    localStorage.setItem("notes", JSON.stringify(notesobj));
    ShowTask();
}

// Search Notes
let searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function () {
    const inputValue = searchInput.value.toLowerCase();
    let NoteCard = document.getElementsByClassName("NoteCard");
    Array.from(NoteCard).forEach(function (element) {
        let CardTitle = element.getElementsByTagName("h5")[0].innerText;
        if (CardTitle.includes(inputValue)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
});