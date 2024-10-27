const eyeIcon = document.getElementById('js-icon');
const password = document.getElementById('js-password');

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