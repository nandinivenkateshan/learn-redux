import React from 'react'
import Main from './Main'
import User from './User'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      toggle: 'Max'
    }
  }

  handleChange (val) {
    this.setState({
      toggle: val
    })
  }

  render () {
    return (
      <div>
        <Main handleChange={(val) => this.handleChange(val)} />
        <User name={this.state.toggle} />
      </div>
    )
  }
}

export default App
