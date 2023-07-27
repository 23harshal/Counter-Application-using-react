
import './App.css';
import { useState } from 'react';
function App() {
  const[count , setCount] = useState(0);
  function decHandler(){
    setCount(count-1);
  }
  function incHandler(){
    setCount(count+1);
  }
  function resetHandler(){
    setCount(0);
  }
  return (
    <div className="App">
        <div className='header-section'>
          <h2>Counter Application Using React-JS</h2>
        </div>
        <div className='middle-section'>
          <div>
            <button onClick={decHandler}>-</button>
          </div>
          <div className='count-section'>
          {count}                      
          </div>
          <button onClick={incHandler}>+</button>
        </div>
        <div className='footer-section'>
            <button onClick={resetHandler}>Reset</button>
        </div>
    </div>
  );
}

export default App;
