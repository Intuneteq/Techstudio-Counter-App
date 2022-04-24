import { useState } from 'react'


function App() {

  const [count, setCount] = useState(0);

  const handleMinus = () => {
    setCount(count - 1);
  }

  const handleAdd = () => {
    setCount(count + 1);
  }

  
  return (
    <div>
    <h1>Counter App</h1>

    <div>
      <button onClick={handleMinus}>minus</button>
      <p>Counter: {count}</p>
      <button onClick={handleAdd}>Add</button>
    </div>
    </div>
  );
}

export default App;
