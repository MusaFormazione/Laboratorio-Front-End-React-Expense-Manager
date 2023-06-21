import {format} from 'date-fns';
import EditExpense from './EditExpense';

/* ATTENZIONE: la logica per l'editing di ogni singola spesa è stata creata velocemente durante la live per rispondere a una domanda, a scopo dimostrativo! 
Si potrebbero provare implementazioni diverse, come ad esempio spostare il componente <EditExpense/> in <App/> per creare una sola modale (attualmente stiamo creando una modale per ogni <Expense/>)
*/

function Expense({expense, deleteExpense, editExpense}) {
  let date = new Date(expense.date);
  console.log(expense.date, date)
  let formattedDate = format(date, 'dd MMM yyyy');
    
  return (
    <div className='bg-violet-500 m-2 flex flex-row justify-between rounded-lg gap-6'>
      <div className='flex flex-column justify-between items-center w-full'>
        <div className='flex'>
          <h3 className='bg-violet-600 rounded-e-md p-2'>{formattedDate}</h3>
          <p className='p-2'>{expense.description}</p>
        </div>
        <h2 className='text-xl font-bold'>{expense.amount} €</h2>
      </div>
      <div className='flex'>
        <EditExpense expense={expense} editExpense={editExpense}/>
        <button className='btn btn-square btn-secondary m-2' onClick={() => deleteExpense(expense.id)}>X</button>
      </div>
    </div>
  )
}

export default Expense;