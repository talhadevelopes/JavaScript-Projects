const notesContainer = document.querySelector('.notes-container');
const createButton = document.querySelector('.create-button');
createButton.addEventListener('click', createNotes);

function showSavedStorage() {
    notesContainer.innerHTML = localStorage.getItem('notes');
}
showSavedStorage();

function updateStorage() {
    localStorage.setItem('notes', notesContainer.innerHTML);
}

function createNotes() {
    // Create a new div to hold the note and the delete icon
    let noteDiv = document.createElement('div');
    noteDiv.className = 'notes-input-box';
    
    // Create the editable paragraph
    let inputBox = document.createElement('p');
    inputBox.setAttribute('contenteditable', 'true');
    

    let i = document.createElement('i');
    i.className = 'fa-solid fa-trash';

    noteDiv.appendChild(inputBox);
    noteDiv.appendChild(i);
    notesContainer.appendChild(noteDiv);
}

notesContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'I') {
        e.target.parentElement.remove(); 
        updateStorage();
    } else if (e.target.tagName === 'P') {
        notes = document.querySelectorAll('.notes-input-box');
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }
        })
    }
});


