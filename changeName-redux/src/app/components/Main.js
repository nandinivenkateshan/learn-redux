import React from 'react'

const Main = props => {
  return (
    <div>
      <h1>The Main Page</h1>
      <button onClick={() => props.handleChange()}>Change User Name</button>
    </div>
  )
}

export default Main
