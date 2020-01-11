import React from 'react'

class Square extends React.Component {
  handleClick () {
    this.props.onSquareClick()
  }

  render () {
    return (
      <div className='square' onClick={() => this.handleClick()}>
        {this.props.val}
      </div>
    )
  }
}

export default Square
