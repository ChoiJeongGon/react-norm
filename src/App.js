import { useState } from 'react';

function App() {
  console.log('render');
  const [number, setNumber] = useState(1);
  const [number1, setNumber1] = useState(1);
  const double = () => {
    const doubleNumber = number * 2;
    setNumber(doubleNumber);
    setNumber(number1 *2);
    console.log(doubleNumber);
  };

  return (
    <>
      <div>{number}</div>
      <div>{number1}</div>
      <button onClick={double}>Sumbit</button>
    </>
  );
}

export default App;
