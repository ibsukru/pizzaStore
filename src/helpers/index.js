const getPrice = pizza => {
  const { basePrice, toppings } = pizza

  if (!toppings || !Array.isArray(toppings)) {
    return basePrice
  }

  return (
    basePrice +
    toppings.reduce(
      (result, wrapper) =>
        (wrapper.defaultSelected ? result + wrapper.topping.price : result),
      0
    )
  )
}

const getTotalPrice = orders =>
  orders.reduce((result, pizza) => result + getPrice(pizza), 0)

export { getPrice, getTotalPrice }
