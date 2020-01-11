export const click = (obj) => {
  const { boxes, isNext } = obj
  return {
    type: 'CLICK',
    arr: boxes,
    isNext
  }
}

export const restart = () => {
  return {
    type: 'RESTART'
  }
}
