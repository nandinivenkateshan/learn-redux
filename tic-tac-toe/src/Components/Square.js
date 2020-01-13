import React from 'react'

function Square (props) {
  function handleClick () {
    props.onSquareClick()
  }
  return (
    <div className='square' onClick={() => handleClick()}>
      {this.props.val}
    </div>
  )
}

export default Square
