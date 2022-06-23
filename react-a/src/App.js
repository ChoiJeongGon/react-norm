import React, { useState, useRef} from "react";

const App = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    console.log('렌더링');

    const increaseCountState = () => {
      setCount(count + 1);
    };
    const increaseCountRef = () => {
      countRef.current = countRef.current + 1;
      console.log("Ref :", countRef.current);
    };
    
    return(
      <div>
        <p>State: {count}</p>
        <p>Ref: {countRef.current}</p>
        <button onClick={increaseCountState}>State UP</button>
        <button onClick={increaseCountRef}>Ref UP</button>
      </div>
    );
  };

export default App;
