import React from 'react'
import '../sass/style.scss'
import Board from './Board'
import { cickOnSquare, restart } from '../actions'
import { useSelector, useDispatch } from 'react-redux'

function App () {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  return (
    <main>
      <h1 className='heading'>Tic Tac Toe</h1>
      <Board state={state} onDispatch={(obj) => dispatch(cickOnSquare(obj))} />
      <button className='restart-btn' onClick={() => dispatch(restart())}>Restart</button>
    </main>
  )
}

export default App
