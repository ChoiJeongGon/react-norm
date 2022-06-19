import { useState } from "react";

const heavyWork = () =>{

  return ['홍길동', '길길']
}
function App() {
  const [names, setNames] = useState(()=>{
    return heavyWork();
  });
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleleUpload = () => {
    setNames((preState) => {
      
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
