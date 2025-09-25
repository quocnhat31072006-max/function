// Function to get the total amount from the user
function getTotalAmount(amount: number): number {
  return amount;
}

// Function to calculate the remaining balance after paying expenses

// total is the total amount just entered, expenses is the array containing the expenses
function calculateBalance(total: number, expenses: number[]): number {
  // Sum up all expenses
  const totalExpenses = expenses.reduce((sum, e) => sum + e, 0);
  // Subtract expenses from total
  return total - totalExpenses;
}
