const basketReducer = (state = { show: false, orders: [] }, action) => {
  switch (action.type) {
    case 'BASKET_ADD':
      const size = action.payload
      return size ? Object.assign({ ...state }, {
        completed: false,
        orders: [...state.orders, size]
      }) : state
    case 'BASKET_TOGGLE':
      return Object.assign({ ...state }, { show: !state.show })
    case 'PAY':
      return { show: true, completed: true, orders: [] }
    default:
      return state
  }
}

export default basketReducer
