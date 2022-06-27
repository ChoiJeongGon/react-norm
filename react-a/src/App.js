import React, {useEffect, useRef} from "react";

const App = () =>{
  const inputRef = useRef()

  useEffect(() =>{
   // console.log(inputRef);
   inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`환영합니다 ${inputRef.current.value}!`);
    inputRef.current.focus();
  }
  return(
    <div>
      <input ref={inputRef} type="text" placeholder="username"></input>
      <button onClick={login}>Login</button>
    </div>
  )

};

export default App;
