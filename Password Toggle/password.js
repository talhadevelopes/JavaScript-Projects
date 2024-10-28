const eyeIcon = document.getElementById('js-icon');
const password = document.getElementById('js-password'); //
var passwordMessage = document.getElementById('password-message');
var passwordMessageStrength = document.getElementById('password-message-strength');

password.addEventListener('input', displayPasswordMessage);
eyeIcon.addEventListener('click', changeEyeIcon);

function changeEyeIcon() {
    if (password.type === 'password') {
        password.type = "text";
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    } else {
        password.type = "password";
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    }
}

function displayPasswordMessage() {
    if (password.value.length > 0) {
        passwordMessage.style.display = 'block';
    } else {
        passwordMessage.style.display = 'none';
    }

    if (password.value.length < 4) {
        passwordMessageStrength.innerHTML = 'weak';
        password.style.borderColor = '#ff5925';
        passwordMessageStrength.style.color = '#ff5925';
    } else if (password.value.length >= 4 && password.value.length < 8) {
        passwordMessageStrength.innerHTML = 'medium';
        password.style.borderColor = 'yellow';
        passwordMessageStrength.style.color = 'yellow';
    } else {
        passwordMessageStrength.innerHTML = 'strong';
        password.style.borderColor = '#26d730';
        passwordMessageStrength.style.color = '#26d730';
    }
};

