import { useState } from 'react'
import { calculatorButtons } from './constants';
import './App.css';

function App() {
  const handleClear = () => {
    setValue('');
  };

  const handleCalculate = () => {
    try {
      setValue(eval(input).toString());
    } catch (error) {
      setValue('Error');
    }

  }
  const handleButtonClick = (value) => {
    if (
      (value === '+' || value === '-' || value === '*' || value === '/') &&
      (input.slice(-1) === '+' ||
        input.slice(-1) === '-' ||
        input.slice(-1) === '*' ||
        input.slice(-1) === '/')
    ) {
      // If the last character is an operator, don't allow adding another operator
      return;
    }

    setValue(input + value);
  };

   
  const [value, setValue] = useState("");
  return (
    <div className='main-container'>
      <input type='text' id='text' name='text' value={value}>
      </input>
      <div className='interface'>
      <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={handleClear}>AC</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
    </div>
  );
}

 

export default App
