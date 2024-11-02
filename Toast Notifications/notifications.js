let buttons = document.querySelectorAll('.buttons button'); // Use querySelectorAll to get all buttons
let toastBox = document.getElementById('toast-box');
let successMsg = '<i class="fa-solid fa-square-check"></i> Success Message';
let errorMsg = '<i class="fa-solid fa-x"></i> Error Message';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid Message';

function showToast(message, type) {
    let toast = document.createElement('div');
    toast.classList.add('toast');

    // Apply different classes based on the type of message
    if (type === 'success') {
        toast.classList.add('success');
    } else if (type === 'error') {
        toast.classList.add('error');
    } else if (type === 'invalid') {
        toast.classList.add('invalid');
    }

    toast.innerHTML = message;
    toastBox.appendChild(toast);

    // Remove the toast after a few seconds
    setTimeout(() => {
        toast.remove();
    }, 3000); // 3 seconds
}

// Add click event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let message, type;

        if (button.textContent === 'Success') {
            message = successMsg;
            type = 'success';
        } else if (button.textContent === 'Error') {
            message = errorMsg;
            type = 'error';
        } else if (button.textContent === 'Invalid') {
            message = invalidMsg;
            type = 'invalid';
        }

        showToast(message, type);
    });
});
