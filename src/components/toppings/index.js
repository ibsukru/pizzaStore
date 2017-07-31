import Toppings from './Toppings'
import { connect } from 'react-redux'
import {
  clearOrder,
  selectTopping,
  addToBasket,
  toggleBasket
} from '../../actions'

const mapDispatchToProps = dispatch => {
  return {
    onClearSizeClick: () => {
      dispatch(clearOrder())
    },
    onToppingSelect: ({ pizza, topping }) => {
      dispatch(selectTopping({ pizza, topping }))
    },
    onAddToBasket: pizza => {
      dispatch(addToBasket(pizza))
      dispatch(toggleBasket())
    }
  }
}

export default connect(null, mapDispatchToProps)(Toppings)
