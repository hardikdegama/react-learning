import React, { useState, useEffect } from 'react';

function CalculatoruseRef() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState(0);

  useEffect(() => {
    if (operation) {
      alert(`Your Result is: ${result}`);
    }
  }, [operation, result]);

  const handleOperation = (op) => {
    let calcResult;
    switch (op) {
      case '+':
        calcResult = Number(value1) + Number(value2);
        break;
      case '-':
        calcResult = Number(value1) - Number(value2);
        break;
      case '*':
        calcResult = Number(value1) * Number(value2);
        break;
      case '/':
        calcResult =
          Number(value2) !== 0 ? Number(value1) / Number(value2) : 'Error: Division by zero';
        break;
      default:
        calcResult = 0;
    }

    setResult(calcResult);
    setOperation(op); 
  };

  const handleRemove = () => {
    setValue1(0);
    setValue2(0);
    setOperation('');
    setResult(0);
  };

  return (
    <div>
      <h1>This is a useEffect Example.</h1>
      <div>
        <input
          type="number"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
        <input
          type="number"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => handleOperation('+')}>+</button>
        <button onClick={() => handleOperation('-')}>-</button>
        <button onClick={() => handleOperation('*')}>*</button>
        <button onClick={() => handleOperation('/')}>/</button>
        <button onClick={handleRemove}>Remove</button>
      </div>
      <h2>Result: {result}</h2>
    </div>
  );
}

export default CalculatoruseRef;
