function convertToUpper() {
    // get the input from Id
    var inputElement = document.getElementById("inputText");
    // get the value (text) from input element
    var inputText = inputElement.value;
    // Convert the Text into Upper Case
    var upperText = inputText.toUpperCase();
    // get the output element by its ID
    var outputElement = document.getElementById("outputText");
    // set the text of the output element to the converted uppercase text
    outputElement.innerText = upperText;
    console.log("Text has been convertetd into UpperCase");
}

function convertToLower() {
    // get the input from Id
    var inputElement = document.getElementById("inputText");
    // get the value (text) from input element
    var inputText = inputElement.value;
    // Convert the Text into Lower Case
    var lowerText = inputText.toLowerCase();
    // get the output element by its ID
    var outputElement = document.getElementById("outputText");
    // set the text of the output element to the converted lowercase text
    outputElement.innerText = lowerText;
    console.log("Text has been convertetd into UpperCase");
}
