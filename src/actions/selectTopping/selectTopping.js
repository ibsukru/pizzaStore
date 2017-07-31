const selectTopping = ({ pizza, topping }) => {
  return {
    payload: { pizza, topping },
    type: 'TOPPING_SELECT'
  }
}

export default selectTopping
