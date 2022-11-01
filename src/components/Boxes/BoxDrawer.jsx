import React, { useState } from 'react'
import BoxDisplay from './BoxDisplay'
import BoxForm from './BoxForm'

const BoxDrawer = () => {
  const [box, setBox] = useState([]);
  
  const newColorForm = (newBox) => {
    setBox([...box, newBox])
  }

  return (
    <>
      <BoxForm onNewBox={newColorForm} />
      <BoxDisplay boxes={box} />
    </>
  )
}

export default BoxDrawer