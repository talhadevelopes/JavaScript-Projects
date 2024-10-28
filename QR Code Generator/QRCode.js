let imgBox = document.getElementById('img-Box');
let qrImage = document.getElementById('qr-Image');
let qrText = document.getElementById('qr-Text');
let generateQrCodeButton = document.getElementById('generate-qr-code-button');

generateQrCodeButton.addEventListener('click', generateQR);



function generateQR() {
    if (qrText.value.length > 0) {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" 
    + qrText.value;
    imgBox.classList.add('show-image');
    } else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}