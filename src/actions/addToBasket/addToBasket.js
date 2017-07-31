const addBasket = (pizza) => {
  return {
    payload: pizza,
    type: 'BASKET_ADD'
  }
}

export default addBasket
