import React from 'react'
import { create } from 'react-test-renderer'
import Pizza from './Pizza'

[
  {
    onSelectingSize: f => f,
    sizes: []
  },
  {
    onSelectingSize: f => f,
    sizes: [
      {
        name: 'a size'
      }
    ]
  }
].forEach(props => {
  test(`With props=${JSON.stringify(props)}, should match snapshot`, () => {
    expect(create(<Pizza {...props} />).toJSON()).toMatchSnapshot()
  })
})
