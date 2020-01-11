
const initialState = {
  arr: Array(9).fill(null),
  isNext: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLICK_SQUARE' :
      return { ...state, arr: action.arr, isNext: action.isNext }
    case 'RESTART':
      return { arr: Array(9).fill(null), isNext: false }
    default:
      return state
  }
}

export default reducer
