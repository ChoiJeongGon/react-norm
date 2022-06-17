import { useState } from "react";

function App() {
  const [names, setNames] = useState(["홍길동", "길길"]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleleUpload = () => {
    setNames((preState) => {
      console.log('이전 state', preState);
      return [input, ...preState];
    });
  };
  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleleUpload}>Upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}

export default App;
