function App() {
  const number = 1;

  const double = (number) => {
    return number *5;
  };

  return(
    <>
      <div>{double(number)}</div>
      <button>Sumbit</button>
    </>
  );
}

export default App;