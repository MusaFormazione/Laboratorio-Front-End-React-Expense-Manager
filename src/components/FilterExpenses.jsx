import {useRef} from 'react';

function FilterExpenses({setDateFilter}) {
  const startDateInput = useRef();
  const endDateInput = useRef();

  function handleFilterExpense() {
    let startDate = new Date(startDateInput.current.value).getTime();
    let endDate = new Date(endDateInput.current.value).getTime();

    setDateFilter({startDate, endDate});
  }
  
  function resetFilter() {
    startDateInput.current.value = '';
    endDateInput.current.value = '';

    setDateFilter({
      startDate: null, 
      endDate: null
    });
  }
  
  return (
    <div>
      <h3 className="my-4">Filter expenses:</h3>
      <span className="mr-4">From:</span>
      <input type="date" className="input input-bordered input-accent hover:bg-slate-600 bg-slate-800" ref={startDateInput}/>
      <span className="mx-4">To:</span>
      <input type="date" className="input input-bordered input-accent hover:bg-slate-600 bg-slate-800" ref={endDateInput}/>
      <button className='btn btn-primary ml-4' onClick={() => handleFilterExpense()}>Filter</button>
      <button className='btn btn-primary ml-4' onClick={() => resetFilter()}>Clear</button>
    </div>
  )
}

export default FilterExpenses;