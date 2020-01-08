import React from 'react'
import Main from '../components/Main'
import User from '../components/User'
import { connect } from 'react-redux'

class App extends React.Component {
  render () {
    return (
      <div>
        <Main handleChange={() => this.props.setName('Anna')} />
        <User name={this.props.user.name} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.math
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: 'SET_NAME',
        payload: name
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
