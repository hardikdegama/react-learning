import React, { useState, useEffect } from 'react';
import './CalculatorDesing.css';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(null);

  
  useEffect(() => {
    const savedResult = localStorage.getItem('result');
    if (savedResult) {
      setResult(savedResult);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (num1 && num2) {
      let res;
      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);

      switch (operation) {
        case '+':
          res = n1 + n2;
          break;
        case '-':
          res = n1 - n2;
          break;
        case '*':
          res = n1 * n2;
          break;
        case '/':
          res = n2 !== 0 ? n1 / n2 : 'Error: Division by zero';
          break;
        default:
          res = null;
      }

      setResult(res);
      localStorage.setItem('result', res);
    } else {
      setResult('Please enter valid numbers');
    }
  };

  return (
    <div className="calculator-body">
      <div className="calculator-container">
        <h1 className="calculator-title">Calculator</h1>
        <form onSubmit={handleSubmit} className="calculator-form">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter Number 1"
            className="calculator-input"
          />
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            className="calculator-select"
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter Number 2"
            className="calculator-input"
          />
          <button type="submit" className="submit-button">
            Calculate
          </button>
        </form>
        <h2 className="result">
          {result !== null ? `Result: ${result}` : 'Enter numbers to calculate'}
        </h2>
      </div>
    </div>
  );
}

export default Calculator;