

import React from 'react'

export const AddTask = () => {

    const addTodo = (e) => {
        e.preventDefault();
        dispatch(AddTodoAction(todo))
    }

  return (
    <form className='todolist' onSubmit={addTodo}>
        <input className='input' type="text" placeholder='Enter a todo' onChange={(e) => setTodo(e.target.value)}/>
        <button type='submit'>Submit</button>
    </form>
  )
}
