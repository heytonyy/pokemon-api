import React from 'react'
import StyledBox from './Box'

const BoxDisplay = (props) => {
  const { boxes } = props

  return (
    <div className='w-600 mx-auto d-flex flex-wrap'>
        { 
          boxes.length > 0 && (
            boxes.map( (box, i) => <StyledBox key={i} color={box.color} height={box.height} width={box.width} />) )
        }
    </div>
  )
}

export default BoxDisplay
