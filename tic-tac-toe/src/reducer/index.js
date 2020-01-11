
const initialState = {
  boxes: Array(9).fill(null),
  isNext: false
}

const reducer = (state = initialState, action) => {
  console.log('initialState', initialState)
  console.log(action)
  switch (action.type) {
    case 'CLICK' :
      return { ...state, boxes: action.arr, isNext: action.isNext }
    case 'RESTART':
      return { boxes: Array(9).fill(null), isNext: false }
    default:
      return state
  }
}

export default reducer
