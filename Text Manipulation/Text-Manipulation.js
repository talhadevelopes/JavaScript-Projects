const toUpperButton = document.getElementById('convertToUpperCase');
const toLowerButton = document.getElementById('convertToLowerCase');

toUpperButton.addEventListener('click', convertToUpper);
toLowerButton.addEventListener('click', convertToLower);

function convertToUpper() {
    var inputElement = document.getElementById('inputText');
    var inputText = inputElement.value;
    var upperText = inputText.toUpperCase();
    var outputElement = document.getElementById('outputText');
    outputElement.innerText = upperText;
}

function convertToLower() {
    var inputElement = document.getElementById('inputText');
    var inputText = inputElement.value;
    var lowerText = inputText.toLowerCase();
    var outputElement = document.getElementById('outputText');
    outputElement.innerText = lowerText;
}