import logo from './logo.svg';
import './App.css';
import Counter from './Component/Counter';
import { useState } from 'react';
function App() {
  const [counters, setCounters] = useState([]);
  const addCounter = () => {
    setCounters(prevCounters => [
      ...prevCounters,
      <Counter key={prevCounters.length} onDelete={() => deleteCounter(prevCounters.length)} />
    ]);
  };

  // Function to delete a counter
  const deleteCounter = index => {
    setCounters(prevCounters => prevCounters.filter((item, i) => i !== index));
  };
  return (
    <div className="App">
     <div >
      <button type="button" className="btn btn-primary my-3" onClick={addCounter}><h3>Add Counter</h3></button>
      <div className='add my-3 bg-danger p-2 text-dark bg-opacity-25'>
      {counters.map((counter, index) => (
        <div   key={index}>{counter}</div>
      ))}
      </div>
     
    </div>
    </div>
  );
}

export default App;
