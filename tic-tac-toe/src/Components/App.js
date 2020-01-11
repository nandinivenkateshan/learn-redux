import React from 'react'
import '../sass/style.scss'
import Board from './Board'

function App () {
  return (
    <main className='App'>
      <h1 className='heading'>Tic Tac Toe</h1>
      <Board />
      <button className='restart-btn'>Restart</button>
    </main>
  )
}

export default App
