import React, { useState, useRef, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(1);
  const rederCount = useRef(1);

  useEffect(() => {
    rederCount.current = rederCount.current + 1;
    console.log("렌더링 :", rederCount.current);
  });


  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Up</button>
    </div>
  );
};

export default App;
