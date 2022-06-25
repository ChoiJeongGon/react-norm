import React, {useRef} from "react";

const App = () =>{
  const inputRef = useRef()
  return(
    <div>
      <input type="text" placeholder="username"></input>
      <button>Login</button>
    </div>
  )

};

export default App;
