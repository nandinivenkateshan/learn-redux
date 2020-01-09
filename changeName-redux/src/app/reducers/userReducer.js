
const userReducer = (state = {
  name: 'Nandini',
  age: 24
}, action) => {
  switch (action.type) {
    case 'SET_NAME_FULFILLED' :
      state = { ...state, name: action.payload }
      break
    case 'SET_AGE' :
      state = { ...state, age: action.payload }
      break
    default: console.log('Failed UserReducer')
  }
  return state
}
export default userReducer
