function calculateBalance(total: number, expenses: number[]): number {
  const totalExpenses = expenses.reduce((sum, e) => sum + e, 0);
  return total - totalExpenses;
}

// Example usage
const total = 2000000; // directly use the amount
const expenses = [300000, 150000, 50000];

const balance = calculateBalance(total, expenses);
console.log(balance); // 1500000
