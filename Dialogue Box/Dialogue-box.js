const popup = document.getElementById('js-popup');
const openPopupButton = document.getElementById('js-open-popup');
const closePopupButton = document.getElementById('js-close-popup');

openPopupButton.addEventListener('click',openPopup);
closePopupButton.addEventListener('click', closePopup);

function openPopup() {
    popup.classList.add('popup-open');
}

function closePopup() {
    popup.classList.remove('popup-open');
}
