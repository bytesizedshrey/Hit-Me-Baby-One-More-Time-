import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setcounter] = useState(0); //read , write

  const addValue = () => {
    // counter = counter + 1
    setcounter(counter + 1);
  };

  const decreaseValue = () => {
    if (counter > 0) {
      setcounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter Value : ${counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  );
}

export default App;
