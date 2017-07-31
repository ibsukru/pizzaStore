import React from 'react'
import Pizza from '../pizza'
import Basket from '../basket'
import Toppings from '../toppings'

const Order = ({
  onToggleBasket,
  basket,
  pizza,
  data: { loading, pizzaSizes }
}) => {
  if (loading) return <h1>Loading...</h1>

  if (basket && basket.show) {
    return <Basket basket={basket} />
  }

  const orders = basket && basket.orders

  const basketMarkup =
    orders &&
    orders.length > 0 &&
    <div className='basket-actions'>
      <a className='basket-actions__toggle' onClick={onToggleBasket}>
        Go to basket ({orders.length})
      </a>
    </div>

  if (pizza) {
    return <Toppings pizza={pizza} />
  }

  return (
    <div>
      <h1>Welcome to your pizza store.</h1>
      <Pizza sizes={pizzaSizes} />
      {basketMarkup}
    </div>
  )
}

export default Order
