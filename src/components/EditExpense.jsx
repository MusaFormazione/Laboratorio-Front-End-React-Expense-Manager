/* 
ATTENZIONE: questo componente è stato creato in live a scopo dimostrativo, per rispondere a una domanda. Il codice può essere scritto meglio, magari evitando di scrivere codice duplicato, visto che questa è una copia del componente <AddExpense/> con la sola aggiunta della pre-compilazione dei campi di input
*/

import {useRef} from 'react';
import {format} from 'date-fns';

function EditExpense({expense, editExpense}) {
  const descriptionInput = useRef();
  const amountInput = useRef();
  const dateInput = useRef();

  let expenseDate = format(new Date(expense.date), 'yyyy-MM-dd');
  function handleEditExpense() {
    let timestamp = new Date(dateInput.current.value).getTime();
    editExpense( {
      description: descriptionInput.current.value,
      amount:  Number(amountInput.current.value).toFixed(2),
      date: timestamp,
      id: expense.id
    }, expense.id)
  }

  return (
    <>
      <button className="btn btn-square btn-primary m-2" onClick={() => window['modal-'+expense.id].showModal()}>Edit</button>
      <dialog id={"modal-"+expense.id} className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">X</button>
          <h3 className="mb-4">Edit:</h3>
          <div className="m-2">
            <span className="mr-4">Description:</span>
            <input type="text" className="input input-bordered input-accent bg-slate-900" defaultValue={expense.description} ref={descriptionInput}/>
          </div>
          <div className="m-2">
            <span className="mr-4">Amount:</span>
            <input type="text" className="input input-bordered input-accent bg-slate-900" defaultValue={expense.amount} ref={amountInput}/>
          </div>
          <div className="m-2">
            <span className="mr-4">Date:</span>
            <input type="date" className="input input-bordered input-accent bg-slate-900" ref={dateInput} defaultValue={expenseDate} />
          </div>
          <button className="btn btn-secondary mt-4" onClick={() => handleEditExpense()}>Update expense</button>
        </form>
      </dialog>

    </>
  )
}

export default EditExpense;