const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

let income = 0;
let expenses = 0;

transactions.forEach(tx => {
  if (tx.type === 'income') income += tx.amount;
  else expenses += tx.amount;
});

const ctx = document.getElementById('reportChart').getContext('2d');
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Income', 'Expenses'],
    datasets: [{
      data: [income, expenses],
      backgroundColor: ['#4caf50', '#e74c3c'],
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
      title: { display: true, text: 'Income vs Expenses' }
    }
  }
});
