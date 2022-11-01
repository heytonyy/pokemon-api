import React from 'react'
import TodoText from './TodoText'

const TodoDisplay = ({ allTodos, deleteTodo, updateTodo }) => {

  return (
    <>
      {
        allTodos.length > 0 && allTodos.map((todo, id) => {
          return (
            <div className='d-flex justify-content-start align-items-center' key={id}>
              <TodoText todo={todo} />
              <input onChange={() => updateTodo(id)} type="checkbox" checked={todo.isComplete} />
              <button onClick={() => deleteTodo(id)} className='btn btn-danger ml-20'>Delete</button>
            </div>
          )
        })
      }
    </>
  )
}

export default TodoDisplay