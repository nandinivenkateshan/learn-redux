import React from 'react'
import Square from './Square'
import '../sass/style.scss'

function Board ({ state, onDispatch }) {
  const handleClick = (index) => {
    if (calculateWinner(state.arr)) {
      return
    }
    const value = state.isNext ? 'O' : 'X'
    const arr = state.arr
    arr[index] = value
    const obj = {
      arr,
      isNext: !state.isNext
    }
    onDispatch(obj)
  }

  const calculateWinner = (arr) => {
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
      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
        return arr[a]
      }
    }
  }

  function winner (val) {
    let status
    const winner = calculateWinner(val)
    if (winner) {
      status = <h2 className='winner'>The Winner is {winner} </h2>
    } else {
      status = <h3 className='status'>Next player : {state.isNext ? 'O' : 'X'}</h3>
    }
    return status
  }

  return (
    <>
      {winner(state.arr)}
      <section className='board'>
        {state.arr.map((item, index) => {
          return <Square key={index} onSquareClick={() => handleClick(index)} val={state.arr[index]} />
        })}

      </section>
    </>
  )
}

export default Board
