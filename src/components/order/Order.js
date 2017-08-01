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

  if (pizza) {
    return <Toppings pizza={pizza} />
  }

  const orders = basket && basket.orders

  return (
    <div>
      <h1>Welcome to your pizza store.</h1>
      <Pizza sizes={pizzaSizes} />
      {
        orders &&
        orders.length > 0 &&
        <div className='basket-actions'>
          <a className='basket-actions__toggle' onClick={onToggleBasket}>
            Go to basket ({orders.length})
          </a>
        </div>
      }
    </div>
  )
}

export default Order
