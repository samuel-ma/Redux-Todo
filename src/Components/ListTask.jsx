

import React from 'react'

export const ListTask = () => {
  return (
    <ul className='allTodos'>

        {
          todos && todos.map((t) => (
            <Task t={t}/>
          ))
        }

      </ul>
  )
}
