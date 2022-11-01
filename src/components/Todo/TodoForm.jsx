import React, { useState } from 'react'

const TodoForm = ({onNewTodo}) => {
  const [todo, setTodo] = useState('')

  const handleTodo = (e) => {
    e.preventDefault()
    const newTodo = {
      name: todo,
      isComplete: false,
    }
    onNewTodo(newTodo)
    setTodo('')
  }

  return (
    <form className='w-400 mx-auto' onSubmit={ handleTodo } >
      <div className="form-group form-inline">
        <input onChange={ (e) => setTodo(e.target.value) } className="form-control" value={todo} type="text" />
        <input type="submit" className='btn btn-primary' value="Add Todo" />
      </div>
    </form>
  )
}

export default TodoForm