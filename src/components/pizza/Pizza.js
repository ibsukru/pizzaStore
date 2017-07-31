import React from 'react'

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

export default Pizza
