const pizzaReducer = (state = null, action) => {
  switch (action.type) {
    case 'SIZE_SELECT':
      return action.payload
    case 'TOPPING_SELECT':
      const { pizza, topping } = action.payload
      return Object.assign({ ...pizza }, {
        toppings: pizza.toppings.map(current => {
          if (current.topping.name === topping.name) {
            return Object.assign({ ...current }, { defaultSelected: !current.defaultSelected })
          }

          return current
        })
      })
    case 'CLEAR_CLEAR':
      return null
    default:
      return state
  }
}

export default pizzaReducer
