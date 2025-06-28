// Function to display all transactions
function displayTransactions() {
  const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
  const transactionList = document.getElementById('transactionList');

  transactionList.innerHTML = '';

  if (transactions.length === 0) {
    transactionList.innerHTML = '<p>No transactions found.</p>';
  } else {
    transactions.forEach(transaction => {
      const transactionItem = document.createElement('div');
      transactionItem.classList.add('transaction-item', transaction.type);

      transactionItem.innerHTML = `
        <p><strong>${transaction.type.toUpperCase()}</strong>: ${transaction.description}</p>
        <p class="amount">$${parseFloat(transaction.amount).toFixed(2)}</p>
        <small>${new Date(transaction.date).toLocaleDateString()}</small>
      `;

      transactionList.appendChild(transactionItem);
    });
  }
}

// Call when page loads
window.onload = displayTransactions;
