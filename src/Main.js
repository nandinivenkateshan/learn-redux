import React from 'react'

class Main extends React.Component {
  render () {
    return (
      <div>
        <h1>The Main Page</h1>
        <button onClick={() => this.props.handleChange('Anna')}>Change User Name</button>
      </div>
    )
  }
}

export default Main
