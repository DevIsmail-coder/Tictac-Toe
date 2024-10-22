import React from 'react'
import '../Game.css'

const Square = ({val,chooseSquare}) => {
  return (
    <div className='Squarebox' onClick={chooseSquare}>
        {val}
    </div>
  )
}

export default Square