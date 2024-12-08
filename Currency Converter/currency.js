import { countryList } from './codes.js';

const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";

const dropdowns = document.querySelectorAll('.dropdown select');
const button = document.querySelector('form button');
const fromCurrency = document.querySelector('.from select');
const toCurrency = document.querySelector('.to select');
const message = document.querySelector('.msg');

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

button.addEventListener('click', async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector('.amount input');
    let amountValue = parseFloat(amount.value) || 1; // Convert input to number, default to 1 if invalid
    if (amountValue < 1) {
        amountValue = 1;
    }

    const URL = `${BASE_URL}${fromCurrency.value.toLowerCase()}/${toCurrency.value.toLowerCase()}.json`;
    try {
        let response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        let data = await response.json();
        let rate = data[toCurrency.value.toLowerCase()];
        let finalAmount = amountValue * rate;
        message.innerText = `${amountValue} ${fromCurrency.value} = ${finalAmount} ${toCurrency.value}`;
    } catch (error) {
        message.innerText = `Error: ${error.message}`;
    }
});
