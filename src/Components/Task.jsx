

import { RemoveTodoAction } from './Actions/TodoActions';

export const Task = ({t}) => {

    const deleteTodo = (t) => {
        dispatch(RemoveTodoAction(t));
    }

  return (
    <li className='todos' key={t.id}>
        <span className='todotext'>{t.todo}</span>
        <button className='delete' onClick={() => deleteTodo(t)}>Delete</button>
    </li>
  )
}
