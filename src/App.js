function App() {
  const number = 1;

  const printHello = () => {
    console.log('hello')
  };

  return(
    <>
      <button onClick={printHello}>Sumbit</button>
      
    </>
  );
}

export default App;