import { useState, useEffect } from 'react'
import {nanoid} from 'nanoid';
import './App.css'
import ExpensesList from './components/ExpensesList'
import AddExpense from './components/AddExpense'
import FilterExpenses from './components/FilterExpenses'

  // let expenses = [
  //   {
  //     description: 'Bolletta luce',
  //     amount: 99.59,
  //     date: '20 Jun 2023'
  //   },
  //   {
  //     description: 'Bolletta gas',
  //     amount: 199.59,
  //     date: '20 May 2023'
  //   },
  //   {
  //     description: 'Supermercato',
  //     amount: 39.59,
  //     date: '10 Jun 2023'
  //   }
  // ]

let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  
function App() {
  const [allExpenses, setAllExpenses] = useState(expenses);
  const [dateFilter, setDateFilter] = useState({
    startDate: null,
    endDate: null
  });
  console.log(allExpenses)
  let filteredExpenses = allExpenses.filter(expense => {
    if(dateFilter.startDate && dateFilter.endDate) {
      return (
        expense.date >= dateFilter.startDate &&
        expense.date <= dateFilter.endDate
      )
    } else {
      return expense
    }
  }).sort((a,b) => a.date - b.date)
  
  let total = filteredExpenses.reduce((sum, expense) => {
    return (Number(expense.amount) + sum)
  }, 0)
  
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(allExpenses))
  }, [allExpenses])
  
  function addExpense(expense) {
    const newExpense = {
      ...expense,
      id: 'expense-' + nanoid()
    }
    setAllExpenses([...allExpenses, newExpense])
  }
  
  function editExpense(editedExpense, id) {
    let updatedExpenses = allExpenses.map(
      expense => {
        if(expense.id === id) {
          return editedExpense
        } else {
          return expense
        }
      }
      )
      console.log(updatedExpenses)
    setAllExpenses(updatedExpenses)
  }
  
  function deleteExpense(id) {
    let updatedExpenses = allExpenses.filter(
      expense => expense.id !== id
    )
    setAllExpenses(updatedExpenses)
  }

  return (
    <>
      <h1>Expense manager</h1>
      <AddExpense addExpense={addExpense}/>
      <div className='card bg-slate-900'>
        <div className="card-body p-0">
          <FilterExpenses setDateFilter={setDateFilter}/>
          <ExpensesList expenses={filteredExpenses} deleteExpense={deleteExpense} editExpense={editExpense}/>
          <h2 className='bg-primary rounded-lg p-4 text-xl font-bold'>Total: {total} €</h2>
        </div>
      </div>
    </>
  )
}

export default App
