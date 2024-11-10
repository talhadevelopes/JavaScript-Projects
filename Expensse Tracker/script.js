const expenseForm = document.getElementById('js-expense-form');
const expenseList = document.getElementById('js-expense-list');


window.addEventListener('load', loadSavedData);

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const description = document.getElementById('js-description').value;
    const category = document.getElementById('js-category').value;
    const amount = document.getElementById('js-amount').value;

    if (document && category && !isNaN(amount))  {
       const newExpense = {description, category, amount};
       addExpenseToList(newExpense);
       saveToLocalStorage(newExpense);

    document.getElementById('js-description').value = '';
    document.getElementById('js-category').value = '';
    document.getElementById('js-amount').value = '';
    } else {
        alert('Kuch to Enter karo Bhai');
    } 
});

function addExpenseToList(expense) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
    <td>${expense.description}</td>
    <td>${expense.category}</td>
    <td>${expense.amount}</td>
    `;

    expenseList.appendChild(newRow);
}

function saveToLocalStorage(expense) {
    let expenses = JSON.parse(localStorage.getItem('expenseTracker')) || [];
    expenses.push(expense);
    localStorage.setItem('expenseTracker', JSON.stringify(expenses));
}

function loadSavedData() {
    const savedExpenses = JSON.parse(localStorage.getItem('expenseTracker')) || [];
    savedExpenses.forEach(addExpenseToList);
}