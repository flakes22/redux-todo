
import { useState } from 'react';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { addtodos } from './slices/todoSlice';
import { v4 as uuid } from 'uuid';

function App() {

  const [inputText, setInputText] = useState();

  const dispatch = useDispatch();
  const state = useSelector(state=> state)
  console.log (state);
  const onAddClick=()=>{
    dispatch(addtodos({
      id: uuid(),
      todo: inputText
    }))
    setInputText('');
  }

  return (
    <div className="App bg-pink-300 w-screen h-screen">
      <h1 className='text-black-600 pt-4 '>Todo App</h1>
      <div>
        <input onChange={(e)=> setInputText(e.target.value)} placeholder='Enter Task '></input>
        <button onClick={onAddClick }>Add</button>
      </div>
    </div>
  );
}

export default App;
