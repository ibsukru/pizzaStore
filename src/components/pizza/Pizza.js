import React from 'react'
import PropTypes from 'prop-types'
const Pizza = ({ sizes, onSelectingSize }) => (
  <section>
    <h2>Which size do you like?</h2>
    <div className='sizes'>
      {sizes.map(size => {
        return (
          <a
            className='sizes__size'
            onClick={() => onSelectingSize(size)}
            key={size.name}
          >
            {size.name}
          </a>
        )
      })}
    </div>
  </section>
)

Pizza.propTypes = {
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ),
  onSelectingSize: PropTypes.func.isRequired
}

export default Pizza
