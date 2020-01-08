import React from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './app/container/App'
import { Provider } from 'react-redux'
import store from './app/container/store'

render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root'))
