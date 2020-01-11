import React from 'react'
// import '../sass/style.scss'

class Square extends React.Component {
//   constructor (props) {
//     super(props)
//   }

  handleClick () {
    this.props.onSquareClick()
  }

  render () {
    return (
      <div className='square' onClick={() => this.handleClick()}>
        {this.props.val}
      </div>
    )
  }
}

export default Square
