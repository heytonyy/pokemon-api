import React, { useState } from 'react'

const BoxForm = (props) => {
  const [color, setColor] = useState('')
  const [height, setHeight] = useState(100)
  const [width, setWidth] = useState(100)

  const formHandler = (e) => {
    e.preventDefault()
    const newBox = {
      color: color,
      height: height,
      width: width
    }
    props.onNewBox(newBox)
    setColor('')
    setHeight(100)
    setWidth(100)
  }

  return (
    <form onSubmit={ formHandler } className='mt-20 w-400 mx-auto'>
      <div className="form-group form-inline">
        <label htmlFor="Width" >Width:</label>
        <input onChange={ (e) => setWidth(e.target.value) } className="form-control quantity " min="0" name="quantity" value={width} type="number" />
        <label htmlFor="Height" >Height:</label>
        <input onChange={ (e) => setHeight(e.target.value) } className="form-control quantity " min="0" name="quantity" value={height} type="number" />
      </div>
      <div className="form-group form-inline">
        <label htmlFor="Color" >Color:</label>
        <input onChange={ (e) => setColor(e.target.value) } value={ color } className='form-control' type="text" />
        <input type="submit" value="Add" className='btn btn-primary'/>
      </div>
    </form>
  )
}

export default BoxForm