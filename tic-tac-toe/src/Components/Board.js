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
    if (this.calculateWinner(this.state.boxes)) {
      return
    }
    const value = this.state.isNext ? 'O' : 'X'
    const arr = this.state.boxes
    arr[index] = value
    this.setState({
      boxes: arr,
      isNext: !this.state.isNext
    })
  }

  calculateWinner (boxes) {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < winner.length; i++) {
      const [a, b, c] = winner[i]
      if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
        return boxes[a]
      }
    }
  }

  render () {
    const winner = this.calculateWinner(this.state.boxes)
    let status
    if (winner) {
      status = <h2 className='winner'>The Winner is {winner} </h2>
    } else {
      status = <h3 className='status'>Next player : {this.state.isNext ? 'O' : 'X'}</h3>
    }
    return (
      <>
        {status}
        <section className='board'>
          {this.state.boxes.map((item, index) => {
            return <Square key={index} onSquareClick={() => this.handleClick(index)} val={this.state.boxes[index]} />
          })}

        </section>
      </>
    )
  }
}

export default Board
