

import './App.css'
import { useState } from 'react'
import { AddTodoAction, RemoveTodoAction } from './Actions/TodoActions';
import { useDispatch, useSelector } from 'react-redux';
import initialState from "./Redux/Store"

function App() {
  
  const [todo, setTodo] = useState(initialState);
  const dispatch = useDispatch();

  const Todo = useSelector((state) => state.Todo);
  const {todos} = Todo;

  const addTodo = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo))
  }

  const deleteTodo = (t) => {
    dispatch(RemoveTodoAction(t));
  }

  return (
    <div className="App">

      <header>
        <h1 className='heading'>Todo List Application</h1>
        <p className='desc'>This is a Todo list application built with React with state being managed by Redux using concepts like store, reducers, actions, dispatch and so on...</p>
      </header>

      <form className='todolist' onSubmit={addTodo}>
        <input className='input' type="text" placeholder='Enter a todo' onChange={(e) => setTodo(e.target.value)}/>
        <button type='submit'>Submit</button>
      </form>

      <ul className='allTodos'>

        {
          todos && todos.map((t) => (
            <li className='todos' key={t.id}>
              <span className='todotext'>{t.todo}</span>
              <button className='delete' onClick={() => deleteTodo(t)}>Delete</button>
            </li>
          ))
        }

      </ul>
    </div>
  )
}

export default App


