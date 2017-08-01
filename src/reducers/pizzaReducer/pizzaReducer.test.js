/* eslint-env jest */
import pizzaReducer from './pizzaReducer'

[
  {},
  { state: null, action: null },
  {
    state: {},
    action: {
      type: 'UNKNOWN'
    }
  },
  {
    action: {
      type: 'CLEAR_ORDER'
    }
  },
  {
    state: {},
    action: {
      type: 'TOPPING_SELECT',
      payload: { name: 'large' }
    }
  },
  {
    state: null,
    action: {
      type: 'TOPPING_SELECT',
      payload: {
        pizza: null,
        topping: {
          name: 'pepperoni'
        }
      }
    }
  },
  {
    state: {},
    action: {
      type: 'TOPPING_SELECT',
      payload: {
        pizza: {
          toppings: [
            {
              defaultSelected: false,
              topping: {
                name: 'pepperoni',
                price: 0.4
              }
            }
          ]
        },
        topping: {
          name: 'pepperoni'
        }
      }
    }
  }
].forEach(({ state, action }) =>
  test(`Reduce action for state ${JSON.stringify(state)} and action ${JSON.stringify(action)}`, () => {
    expect(pizzaReducer(state, action)).toMatchSnapshot()
  })
)
