import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [isvisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      {isvisible && <Counter />}

      <br />

      <button onClick={() => setIsVisible(!isvisible)}>Toggle Counter</button>
    </div>
  );
}

export default App;
