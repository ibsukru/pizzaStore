const selectSize = (pizza = {}) => {
  return {
    payload: pizza,
    type: 'SIZE_SELECT'
  }
}

export default selectSize
