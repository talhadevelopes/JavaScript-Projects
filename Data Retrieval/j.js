const saveButton = document.getElementById('js-save-button');
const retrieveData = document.getElementById('js-retrieve-button');
const output = document.getElementById('output');

saveButton.addEventListener('click', saveText);
retrieveData.addEventListener('click', showText);

function saveText() {
    const textInput = document.getElementById('js-text-input').value;

    if (textInput) {
        try {
            localStorage.setItem('savedText', textInput);  // Attempt to save to local storage
            document.getElementById('js-text-input').value = '';  // Clear input field
            alert('Text saved successfully!');
        } catch (error) {
            alert('Failed to save text. Please check your browser settings.');
            console.error('Error saving to localStorage:', error);  // Log error for debugging
        }
    } else {
        alert('Please enter text to save');
    }
}

function showText() {
    try {
        const savedText = localStorage.getItem('savedText');  // Attempt to retrieve from local storage

        if (savedText) {
            output.textContent = savedText;  // Display saved text
            output.style.display = 'block';  // Make output visible
        } else {
            output.textContent = 'No Saved Text';
            output.style.display = 'block';
        }
    } catch (error) {
        alert('Failed to retrieve saved text. Please check your browser settings.');
        console.error('Error retrieving from localStorage:', error);  // Log error for debugging
    }
}
