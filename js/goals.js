const goalForm = document.getElementById('goalForm');
const goalList = document.getElementById('goalList');

function renderGoals() {
  const goals = JSON.parse(localStorage.getItem('goals')) || [];
  goalList.innerHTML = '';

  goals.forEach((goal, index) => {
    const goalItem = document.createElement('div');
    goalItem.classList.add('transaction-item');
    goalItem.innerHTML = `
      <p>${goal.name}</p>
      <p class="amount">$${goal.amount}</p>
    `;
    goalList.appendChild(goalItem);
  });
}

goalForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('goalName').value;
  const amount = parseFloat(document.getElementById('goalAmount').value);

  const newGoal = { name, amount };
  const goals = JSON.parse(localStorage.getItem('goals')) || [];
  goals.push(newGoal);
  localStorage.setItem('goals', JSON.stringify(goals));
  goalForm.reset();
  renderGoals();
});

window.onload = renderGoals;
