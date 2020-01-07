import React from 'react'

class User extends React.Component {
  render () {
    return (
      <div>
        <h1>The User Page</h1>
        <p>User Name:{this.props.name} </p>
      </div>
    )
  }
}

export default User
