import React from 'react'
import renderer from 'react-test-renderer'
import Pizza from './Pizza'

[
  null,
  {
    onSelectingSize: null,
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
  test(`With props=${JSON.stringify(props)}, should map snapshot`, () => {
    expect(renderer.create(<Pizza {...props} />).toJSON()).toMatchSnapshot()
  })
})
