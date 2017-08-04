/* eslint-env jest */
import React from 'react'
import { create } from 'react-test-renderer'
import Basket from './Basket'
;[
  {
    basket: {
      orders: [{ name: 'some name' }]
    },
    getPrice: jest.fn(f => 1),
    getTotalPrice: jest.fn(f => 1),
    onPay: f => f,
    onToggleBasket: f => f,
    onRemovingOrder: f => f
  }
].forEach((props) => {
  test(`With props ${JSON.stringify(props)} Should match snapshot...`, () => {
    expect(create(<Basket {...props} />).toJSON()).toMatchSnapshot()

    expect(props.getPrice).toBeCalled()
    expect(props.getTotalPrice).toBeCalled()
  })
})
