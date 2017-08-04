/* eslint-env jest */
import React from 'react'
import Order from './Order'
import { create } from 'react-test-renderer'

[
  {
    onToggleBasket: f => f,
    data: { loading: true, pizzaSizes: null }
  }
].forEach(props => {
  test(`With props ${JSON.stringify(props)} Should match snapshot...`, () => {
    expect(create(<Order {...props} />).toJSON()).toMatchSnapshot()
  })
})
