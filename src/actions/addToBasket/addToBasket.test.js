/* eslint-env jest */

import addToBasket from './addToBasket'

[
  {},
  {
    pizza: {
      name: 'large'
    }
  }
].forEach(payload =>
  test(`Invokes action for payload ${JSON.stringify(payload)}`, () => {
    expect(addToBasket(payload)).toMatchSnapshot()
  })
)
