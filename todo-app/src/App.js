
import { useState } from 'react';
import './App.css';

function App() {

  const [inputText, setInputText] = useState();
  return (
    <div className="App bg-pink-300 w-screen h-screen">
      <h1 className='text-black-600 pt-4 '>Todo App</h1>
      <div>
        <input onChange={(e)=> setInputText(e.target.value)} placeholder='Enter Task '></input>
        <button>Add</button>
      </div>
    </div>
  );
}

export default App;
