import { countryList } from './codes.js';

const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json";

const dropdowns = document.querySelectorAll('.dropdown select');

dropdowns.forEach(select => {
    for (let currencyCode in countryList) {
        let newOption = document.createElement('option');
        newOption.innerText = currencyCode;
        newOption.value = currencyCode;

        if (select.name === 'from' && currencyCode === 'USD') {
            newOption.selected = 'selected';
        } else if (select.name === 'to' && currencyCode === 'INR') {
            newOption.selected = 'selected';
        }

        select.appendChild(newOption);
    }

    select.addEventListener('change', (evt) => {
        updateFlag(evt.target);
    });
});

const updateFlag = (element) => {
    let currencyCode = element.value;
    let countryCode = countryList[currencyCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

    let img = element.closest('.select-container').querySelector('img');
    if (img) {
        img.src = newSrc;
    }
};
