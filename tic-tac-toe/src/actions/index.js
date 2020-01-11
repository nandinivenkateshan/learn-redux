export const cickOnSquare = (obj) => {
  const { arr, isNext } = obj
  return {
    type: 'CLICK_SQUARE',
    arr,
    isNext
  }
}

export const restart = () => {
  return {
    type: 'RESTART'
  }
}
