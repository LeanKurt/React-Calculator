import { useState } from 'react'
import { calculatorButtons } from './constants';
import './App.css';

function App() {
  return (
    <div className='main-container'>
      <input type='text' id='text' name='text'>
      </input>
      <div className='interface'>
      {calculatorButtons.map((btn) => (
        <div className='btn-container'>
          <button key={btn.id}>{btn.value}</button>
        </div>
      ))}
      </div>
    </div>
  );
}

 

export default App
