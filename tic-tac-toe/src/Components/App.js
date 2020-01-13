import React from 'react'
import '../sass/style.scss'
import Board from './Board'
import { restart } from '../actions'
import { useDispatch } from 'react-redux'

function App () {
  const dispatch = useDispatch()
  return (
    <main className='main'>
      <h1 className='heading'>Tic Tac Toe</h1>
      <Board />
      <button className='restart-btn' onClick={() => dispatch(restart())}>Restart</button>
    </main>
  )
}

export default App
