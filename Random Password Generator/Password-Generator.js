const passwordBox = document.getElementById('password');
const length = 20;
const generatePasswordButton = document.getElementById('generate-password-button');
const copyButton = document.getElementById('copy-button');

generatePasswordButton.addEventListener('click', createPassword);
copyButton.addEventListener('click', copyPassword);

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '@#$%^&*()_+~|[{><-=';
const allChars = upperCase + lowerCase + number + symbol;



function createPassword() {
    let password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    password += number[Math.floor(Math.random() * number.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
    // Select the password text
    passwordBox.select();
    passwordBox.setSelectionRange(0, 99999); // For mobile devices

    // Copy to clipboard
    navigator.clipboard.writeText(passwordBox.value)
        .then(() => {
            alert("Password copied to clipboard!");
        })
        .catch((err) => {
            console.error("Could not copy password: ", err);
        });
}