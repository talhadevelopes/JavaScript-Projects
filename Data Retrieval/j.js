const saveButton = document.getElementById('js-save-button');
const retrieveData = document.getElementById('js-retrieve-button');
const output = document.getElementById('output');

saveButton.addEventListener('click', saveText);
retrieveData.addEventListener('click', showText);

function saveText() {
    // Get the current input value
    const textInput = document.getElementById('js-text-input').value;
    
    // Check if there's input to save
    if (textInput) {
        localStorage.setItem('savedText', textInput);  // Save to local storage
        document.getElementById('js-text-input').value = '';  // Clear input field
        alert('Text saved successfully!');
    } else {
        alert('Please enter text to save');
    }
}

function showText() {
    // Retrieve saved text from local storage
    const savedText = localStorage.getItem('savedText');
    
    if (savedText) {
        output.textContent = savedText;  // Display saved text
        output.style.display = 'block';  // Make sure output is visible
    } else {
        output.textContent = 'No Saved Text';
        output.style.display = 'block';
    }
}
