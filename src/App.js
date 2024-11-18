import React from 'react';
import Calculator from './Component/CalcuLator';
import ButtonClickChangeValue from './Component/ButtonClickGetValue';
import ToggleSwitch from './Component/ChangeThem';

function App() {
  return (
    <>
      <h1 style={{ color: 'red' }}>IN THIS A OUTPUT A BLACK THEM NOT A WORK IN A useEffect AND UseRef in this a Example.</h1>
      <Calculator />
      <ButtonClickChangeValue />
      <ToggleSwitch />
    </>
  );
}

export default App;