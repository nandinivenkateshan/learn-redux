import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { createStore } from 'redux'

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD' :
//       state = state + action.payload
//       break
//     case 'SUB' :
//       state = state - action.payload
//       break
//     default: console.log('Nothing')
//   }
//   return state
// }

// const store = createStore(reducer, 100)

// store.subscribe(() => {
//   console.log('Store updated', store.getState())
// })

// store.dispatch({
//   type: 'ADD',
//   payload: 11
// })

// store.dispatch({
//   type: 'SUB',
//   payload: 11
// })

// state as an object

const initialState = {
  val: 100,
  array: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD' :
    //   state.val += action.payload
    //   break
      return { ...state, val: state.val + action.payload }
    case 'SUB' :
      return { ...state, array: [...state.array, action.payload] }
      //   break
    default: console.log('Nothing')
  }
//   return state
}

const store = createStore(reducer)

store.subscribe(() => {
  console.log('Store updated', store.getState())
})

store.dispatch({
  type: 'ADD',
  payload: 11
})

store.dispatch({
  type: 'ADD',
  payload: 1
})

store.dispatch({
  type: 'SUB',
  payload: 11
})
store.dispatch({
  type: 'SUB',
  payload: 1
})

// ReactDOM.render(<App />, document.getElementById('root'))
