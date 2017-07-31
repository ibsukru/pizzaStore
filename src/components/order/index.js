import Order from './Order'
import { gql, graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { toggleBasket } from '../../actions'

const shopQuery = gql`
  query {
    pizzaSizes {
      name
      maxToppings
      basePrice
      toppings {
        defaultSelected 
        topping {
          name
          price
        }
      } 
    }
  }`

const mapStateToProps = ({ basket, pizza }) => {
  return {
    pizza,
    basket
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToggleBasket: () => {
      dispatch(toggleBasket())
    }
  }
}

export default graphql(shopQuery)(connect(mapStateToProps, mapDispatchToProps)(Order))
