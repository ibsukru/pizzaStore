import React from 'react'
import { selectSize } from '../../actions'
import { connect } from 'react-redux'
const Pizza = ({ sizes, onSelectingSize }) => {
  return (
    <section>
      <h2>Which size do you like?</h2>
      <div className='sizes'>
        {sizes.map(size => {
          return (
            <a className='sizes__size' onClick={() => onSelectingSize(size)} key={size.name}>
              {size.name}
            </a>
          )
        })}
      </div>
    </section>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    onSelectingSize: size => {
      dispatch(selectSize(size))
    }
  }
}

export default connect(null, mapDispatchToProps)(Pizza)
