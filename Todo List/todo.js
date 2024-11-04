const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addTaskButton = document.getElementById('add-task-button');

addTaskButton.addEventListener('click', addTask);
listContainer.addEventListener('click', clickFunctionality);

function addTask() {
    if (inputBox.value === '') {
        alert('You Must Enter a Task');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function(e) {
    
})

function clickFunctionality(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove('LI'); 
        saveData();
    }
}

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showData();