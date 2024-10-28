let result = document.getElementById('js-result');
let userInput = document.getElementById('date'); // Corrected input element
let calculateButton = document.getElementById('calculate-btn'); // Corrected button element

// Set the maximum date to today's date
userInput.max = new Date().toISOString().split("T")[0];

calculateButton.addEventListener('click', calculateAge);

function calculateAge() {
    let birthDate = new Date(userInput.value);

    let date1 = birthDate.getDate();
    let month1 = birthDate.getMonth() + 1;
    let year1 = birthDate.getFullYear();

    let today = new Date();

    let date2 = today.getDate(); // Use today's date
    let month2 = today.getMonth() + 1; // Use today's month
    let year2 = today.getFullYear(); // Use today's year

    let date3, month3, year3;
    year3 = year2 - year1;

    if (month2 >= month1) {
        month3 = month2 - month1;
    } else {
        year3--;
        month3 = 12 + month2 - month1;
    }

    if (date2 >= date1) {
        date3 = date2 - date1;
    } else {
        month3--;
        date3 = getDaysInMonth(year1, month1) + date2 - date1;
    }
    if (month3 < 0) {
        month3 = 11;
        year3--;
    }

    result.innerHTML = `You are ${year3} years, ${month3} months, and ${date3} days old`;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
