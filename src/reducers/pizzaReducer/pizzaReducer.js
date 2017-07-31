const pizzaReducer = (state = null, action) => {
  if (!action || !action.type) return state

  switch (action.type) {
    case 'SIZE_SELECT':
      return action.payload
    case 'TOPPING_SELECT':
      const { pizza, topping } = action.payload
      if (!pizza || !topping) return state

      const { toppings } = pizza
      if (!toppings) return state

      return Object.assign({ ...pizza }, {
        toppings: pizza.toppings.map(current => {
          if (current.topping.name === topping.name) {
            return Object.assign({ ...current }, { defaultSelected: !current.defaultSelected })
          }

          return current
        })
      })
    case 'CLEAR_ORDER':
      return null
    default:
      return state
  }
}

export default pizzaReducer
