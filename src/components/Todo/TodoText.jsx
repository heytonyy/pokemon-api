import React from 'react'

const TodoText = ({todo}) => {
  return (
    <>
    {
      (todo.isComplete) ?
      <p className='font-size-20 mr-10 text-success'><s>{todo.name}</s></p> :
      <p className='font-size-20 mr-10'>{todo.name}</p>
    }
    </>
  )
}

export default TodoText


