import {useRef} from 'react';

function AddExpense({addExpense}) {
  const descriptionInput = useRef();
  const amountInput = useRef();
  const dateInput = useRef();

  function handleAddExpense() {
    let timestamp = new Date(dateInput.current.value).getTime();
    addExpense( {
      description: descriptionInput.current.value,
      amount:  Number(amountInput.current.value).toFixed(2),
      date: timestamp
    })

    descriptionInput.current.value = '';
    amountInput.current.value = '';
    dateInput.current.value = '';
  }

  return (
    <>
      <button className="btn btn-secondary my-5" onClick={()=>window.addExpenseModal.showModal()}>New expense</button>

      <dialog id="addExpenseModal" className="modal">
        <form method="dialog" className="modal-box">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h3 className="mb-4">New Expense:</h3>
          <div className="m-2">
            <span className="mr-4">Description</span>
            <input type="text" ref={descriptionInput} className="input input-bordered input-accent bg-slate-900"/>
          </div>
          <div className="m-2">
            <span className="mr-4">Amount</span>
            <input type="text" ref={amountInput} className="input input-bordered input-accent bg-slate-900"/>
          </div>
          <div className="m-2">
            <span className="mr-4">Date</span>
            <input type="date" ref={dateInput} className="input input-bordered input-accent bg-slate-900"/>
          </div>
          <button className="btn btn-secondary mt-4" onClick={() => handleAddExpense()}>Add expense</button>
        </form>
      </dialog>

    </>
  )
}

export default AddExpense;