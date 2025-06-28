document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("budget-form");
  const categoryInput = document.getElementById("category");
  const amountInput = document.getElementById("amount");
  const list = document.getElementById("budget-list");

  let budgets = JSON.parse(localStorage.getItem("budgets")) || [];

  function renderBudgets() {
    list.innerHTML = "";
    budgets.forEach((b, index) => {
      const div = document.createElement("div");
      div.className = "transaction-item";
      div.innerHTML = `
        <span>${b.category}</span>
        <span class="amount">$${b.amount}</span>
        <button onclick="deleteBudget(${index})">❌</button>
      `;
      list.appendChild(div);
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const category = categoryInput.value.trim();
    const amount = parseFloat(amountInput.value);

    if (category && amount) {
      budgets.push({ category, amount });
      localStorage.setItem("budgets", JSON.stringify(budgets));
      renderBudgets();
      categoryInput.value = "";
      amountInput.value = "";
    }
  });

  window.deleteBudget = function (index) {
    budgets.splice(index, 1);
    localStorage.setItem("budgets", JSON.stringify(budgets));
    renderBudgets();
  };

  renderBudgets();
});
