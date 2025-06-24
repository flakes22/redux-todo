import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './slices/todoSlice';
import { v4 as uuid } from 'uuid';

function App() {
  const [inputText, setInputText] = useState('');

  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);

  console.log(todos);

  const onAddClick = () => {
    if (inputText.trim() === '') return;
    dispatch(addTodo({
      id: uuid(),
      todo: inputText
    }));
    setInputText('');
  };

  return (
    <div className="App bg-pink-300 w-screen h-screen">
      <h1 className='text-black-600 pt-4'>Todo App</h1>
      <div>
        <input
          onChange={(e) => setInputText(e.target.value)}
          placeholder='Enter Task'
          value={inputText}
        />
        <button onClick={onAddClick}>Add</button>
      </div>
      <ul>
        {todos && todos.map((item) => (
          <li key={item.id}>{item.todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
