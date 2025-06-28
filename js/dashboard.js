// Sample data, you can replace it with actual data fetched from local storage or backend.
let income = 2000;
let expenses = 1500;

// Function to update the financial stats on the dashboard
function updateDashboard() {
    document.getElementById('income').innerText = `$${income.toFixed(2)}`;
    document.getElementById('expenses').innerText = `$${expenses.toFixed(2)}`;
    document.getElementById('balance').innerText = `$${(income - expenses).toFixed(2)}`;
}

// Event listeners for adding income and expenses
document.getElementById('addIncomeBtn').addEventListener('click', function () {
    const amount = prompt("Enter the income amount:");
    if (amount && !isNaN(amount)) {
        income += parseFloat(amount);
        updateDashboard();
    }
});

document.getElementById('addExpenseBtn').addEventListener('click', function () {
    const amount = prompt("Enter the expense amount:");
    if (amount && !isNaN(amount)) {
        expenses += parseFloat(amount);
        updateDashboard();
    }
});

// Initialize the dashboard when the page loads
document.addEventListener("DOMContentLoaded", updateDashboard);
