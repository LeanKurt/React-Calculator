import { useState } from 'react'
import { calculatorButtons } from './constants';
import './App.css';

function App() {
  const [value, setValue] = useState("");
  return (
    <div className='main-container'>
      <input type='text' id='text' name='text' value={value}>
      </input>
      <div className='interface'>
         <button className='btn'>AC</button>
         <button className='btn' value="/" onClick={(e) => setValue(e.target.value)}>/</button>
         <button className='btn' value="*" onClick={(e) => setValue(e.target.value)}>*</button>
         <button className='btn' value="7" onClick={(e) => setValue(e.target.value)}>7</button>
         <button className='btn' value="8" onClick={(e) => setValue(e.target.value)}>8</button>
         <button className='btn' value="9" onClick={(e) => setValue(e.target.value)}>9</button>
         <button className='btn' value="-" onClick={(e) => setValue(e.target.value)}>-</button>
         <button className='btn' value="4" onClick={(e) => setValue(e.target.value)}>4</button>
         <button className='btn' value="5" onClick={(e) => setValue(e.target.value)}>5</button>
         <button className='btn' value="6" onClick={(e) => setValue(e.target.value)}>6</button>
         <button className='btn' value="+" onClick={(e) => setValue(e.target.value)}>+</button>
         <button className='btn' value="1" onClick={(e) => setValue(e.target.value)}>1</button>
         <button className='btn' value="2" onClick={(e) => setValue(e.target.value)}>2</button>
         <button className='btn' value="3" onClick={(e) => setValue(e.target.value)}>3</button>
         <button className='btn' onClick={(e) => eval( e.value)}>=</button>
         <button className='btn' value="."onClick={(e) => setValue(e.target.value)}>.</button>
      </div>
    </div>
  );
}

 

export default App
