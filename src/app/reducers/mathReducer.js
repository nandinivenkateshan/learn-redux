const mathReducer = (state = {
  val: 100,
  array: []
}, action) => {
  switch (action.type) {
    case 'ADD' :
      state = { ...state, val: state.val + action.payload }
      break
    case 'SUB' :
      state = { ...state, array: [...state.array, action.payload] }
      break
    default: console.log('Failed mathReducer')
  }
  return state
}

export default mathReducer
