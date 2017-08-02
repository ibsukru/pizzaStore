import classNames from 'classnames'
import React from 'react'

import {
  getPrice
} from '../../helpers'

export default ({
  history,
  pizza,
  onClearSizeClick,
  onToppingSelect,
  onAddToBasket
}) => {
  if (!pizza) return null

  const { name, toppings, maxToppings } = pizza

  if (!Array.isArray(toppings)) {
    return (
      <div>
        We do not have any toppings for {name} pizza :(
      </div>
    )
  }

  const price = getPrice(pizza).toFixed(2)

  const selectedToppingsSize = toppings.reduce(
    (result, wrapper) => (wrapper.defaultSelected ? result + 1 : result),
    0
  )

  return (
    <section>
      <h1>Great! Here are some additions...</h1>
      <div>
        You can add up to {maxToppings || toppings.length} toppings for your {name} pizza!
      </div>
      <div className='toppings'>
        {toppings.map(wrapper => {
          const { topping, defaultSelected } = wrapper
          const disabled = maxToppings === selectedToppingsSize
            ? !defaultSelected
            : false

          const classes = classNames('toppings__topping', {
            'toppings__topping--selected': defaultSelected,
            'toppings__topping--disabled': disabled
          })

          return (
            <label className={classes} key={topping.name}>
              <input
                className='toppings__topping-toggle'
                disabled={disabled}
                checked={defaultSelected}
                type='checkbox'
                onChange={event => onToppingSelect({ pizza, topping })}
              />
              {topping.name} {wrapper.added} {topping.price}$
            </label>
          )
        })}
      </div>
      <div className='toppings-actions'>
        <a
          className='toppings-actions__add-to-basket'
          onClick={() => onAddToBasket(pizza)}
        >
          Add {price}$ to basket
        </a>
        <a className='toppings-actions__clear' onClick={onClearSizeClick}>
          Cancel and go Back
        </a>
      </div>
    </section>
  )
}
