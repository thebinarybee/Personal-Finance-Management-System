// Sample transactions for demonstration
 const transactions = [
   { type: 'income', category: 'salary', amount: 50000, date: '2025-05-01' },
   { type: 'expense', category: 'food', amount: 2000, date: '2025-05-02' },
   { type: 'expense', category: 'transport', amount: 1500, date: '2025-05-03' },
   { type: 'income', category: 'freelance', amount: 10000, date: '2025-05-04' },
   { type: 'expense', category: 'bills', amount: 3000, date: '2025-05-05' },
   { type: 'expense', category: 'entertainment', amount: 1200, date: '2025-05-06' },
  { type: 'expense', category: 'health', amount: 1000, date: '2025-05-07' },
 ];

// Function to filter transactions based on selected filters
function applyFilters() {
  const typeFilter = document.getElementById('filter-type').value;
  const categoryFilter = document.getElementById('filter-category').value;
  const dateFilter = document.getElementById('filter-date').value;

  // Filter the transactions
  let filteredTransactions = transactions.filter((transaction) => {
    const transactionDate = transaction.date.slice(0, 7); // Format: YYYY-MM
    const filterByType = typeFilter === 'all' || transaction.type === typeFilter;
    const filterByCategory = categoryFilter === 'all' || transaction.category === categoryFilter;
    const filterByDate = !dateFilter || transactionDate === dateFilter;

    return filterByType && filterByCategory && filterByDate;
  });

  updateSummary(filteredTransactions);
  updateChart(filteredTransactions);
}

// Function to update summary statistics
function updateSummary(filteredTransactions) {
  let totalIncome = 0;
  let totalExpense = 0;

  filteredTransactions.forEach(transaction => {
    if (transaction.type === 'income') {
      totalIncome += transaction.amount;
    } else {
      totalExpense += transaction.amount;
    }
  });

  const netBalance = totalIncome - totalExpense;

  // Update the summary boxes
  document.getElementById('total-income').textContent = `₹${totalIncome}`;
  document.getElementById('total-expense').textContent = `₹${totalExpense}`;
  document.getElementById('net-balance').textContent = `₹${netBalance}`;
}

// Function to update chart
function updateChart(filteredTransactions) {
  const categories = [...new Set(filteredTransactions.map(transaction => transaction.category))];
  const incomeData = categories.map(category => {
    return filteredTransactions
      .filter(transaction => transaction.category === category && transaction.type === 'income')
      .reduce((sum, transaction) => sum + transaction.amount, 0);
  });
  const expenseData = categories.map(category => {
    return filteredTransactions
      .filter(transaction => transaction.category === category && transaction.type === 'expense')
      .reduce((sum, transaction) => sum + transaction.amount, 0);
  });

  // Create chart
  const ctx = document.getElementById('reportChart').getContext('2d');
  const reportChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: categories,
      datasets: [{
        label: 'Income',
        data: incomeData,
        backgroundColor: '#4caf50',
        borderColor: '#4caf50',
        borderWidth: 1
      }, {
        label: 'Expense',
        data: expenseData,
        backgroundColor: '#f44336',
        borderColor: '#f44336',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 5000
          }
        }
      }
    }
  });
}

// Initialize the page with all transactions
applyFilters();
