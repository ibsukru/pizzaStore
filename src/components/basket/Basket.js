import React from 'react'
import { getPrice, getTotalPrice } from '../../helpers'

const Basket = ({ basket, onPay, onToggleBasket, onRemovingOrder }) => {
  if (basket.completed) {
    return (
      <div>
        <h2>Well done, order is on your way!</h2>
        <div className='basket-actions'>
          <a className='basket-actions__toggle' onClick={onToggleBasket}>
            I want more pizza!
          </a>
        </div>
      </div>
    )
  }

  const { orders } = basket

  if (orders && !orders.length) {
    return (
      <div>
        <h1>
          Your basket is empty, <a onClick={onToggleBasket}>Here</a> you can add items.
        </h1>
      </div>
    )
  }

  return (
    <div>
      <h1>Hey here is your basket, these things are yummy!</h1>
      <ul className='orders'>
        {orders.map((order, index) => {
          return (
            <li className='orders__order' key={order.name + index}>
              {order.name} pizza with
              {order.toppings &&
                order.toppings
                  .filter(t => t.defaultSelected)
                  .map(({ topping }) => {
                    return <span key={topping.name}> {topping.name}, </span>
                  })} costs {getPrice(order).toFixed(2)}$,
              <div><a onClick={() => onRemovingOrder(index)}>Remove</a></div>
            </li>
          )
        })}
      </ul>
      <div className='basket-actions'>
        <a className='basket-actions__pay' onClick={() => onPay(basket)}>
          Finish and pay {getTotalPrice(orders).toFixed(2)}$
        </a>
        <a className='basket-actions__toggle' onClick={onToggleBasket}>
          Add more...
        </a>
      </div>
    </div>
  )
}

export default Basket
