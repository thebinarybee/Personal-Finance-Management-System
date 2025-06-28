// Function to save the transaction data to localStorage
function saveTransaction(type, description, amount) {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    const transaction = {
        id: Date.now(),
        type: type,
        description: description,
        amount: parseFloat(amount),
        date: new Date().toISOString()
    };
    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Handle form submission
document.getElementById('transactionForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const type = document.getElementById('type').value;
    const description = document.getElementById('description').value;
    const amount = document.getElementById('amount').value;

    if (description === "" || amount === "") {
        alert("Please fill out all fields.");
    } else {
        saveTransaction(type, description, amount);
        alert(`${type.charAt(0).toUpperCase() + type.slice(1)} added successfully!`);
        // Optionally, reset the form
        document.getElementById('transactionForm').reset();
    }
});
