import React, { useState } from 'react'
import TodoDisplay from './TodoDisplay'
import TodoForm from './TodoForm'

const Todo = () => {
  const [allTodos, setAllTodos] = useState([])
  const todoHandler = (newTodo) => {
    setAllTodos([...allTodos, newTodo])
  }
  const deleteTodo = (id) => {
    setAllTodos(allTodos.filter( (p, idx) => idx !== id ))
  }

  const updateTodo = (id) => {
    setAllTodos( allTodos.map( p => {
      if (p === allTodos[id] && !p.isComplete) {
        p.isComplete = true
        return p
      } else if (p === allTodos[id]) {
        p.isComplete = false
        return p
      } else {
        return p
      }
    }))
  }

  return (
    <div className="mt-20 w-400 mx-auto">
      <h3 className='text-center'>TODO LIST</h3>
      <TodoForm onNewTodo={todoHandler} />
      <TodoDisplay
        allTodos={allTodos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
      <br />
      <div className="dropdown-divider"></div>
    </div>
  )
}

export default Todo