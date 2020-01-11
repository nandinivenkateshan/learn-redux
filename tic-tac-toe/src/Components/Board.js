import React from 'react'
import Square from './Square'
import '../sass/style.scss'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      boxes: Array(9).fill(null),
      isNext: false
    }
  }

  handleClick (index) {
    if (!this.state.boxes[index]) {
      const value = this.state.isNext ? 'O' : 'X'
      const arr = this.state.boxes
      arr[index] = value
      this.setState({
        boxes: arr,
        isNext: !this.state.isNext
      })
    }
  }

  render () {
    return (
      <section className='board'>
        {this.state.boxes.map((item, index) => {
          return <Square key={index} onSquareClick={() => this.handleClick(index)} val={this.state.boxes[index]} />
        })}

      </section>
    )
  }
}

export default Board
