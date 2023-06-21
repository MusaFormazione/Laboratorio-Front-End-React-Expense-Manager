import Expense from "./Expense";

function ExpensesList({expenses, deleteExpense, editExpense}) {
  
  let expensesList = expenses.map(singleExpense => <Expense key={singleExpense.id} expense={singleExpense} deleteExpense={deleteExpense} editExpense={editExpense}/>)

  return (
    <div className="container mx-auto bg-slate-700 m-3 p-3 rounded-lg">
      Expenses:
      {expensesList}
    </div>
  )
}

export default ExpensesList;