import Basket from './Basket'
import { connect } from 'react-redux'
import { clearOrder, pay, removeOrder, toggleBasket } from '../../actions'

const mapDispatchToProps = dispatch => {
  return {
    onPay: (basket) => {
      dispatch(pay(basket))
    },
    onRemovingOrder: (index) => {
      dispatch(removeOrder(index))
    },
    onToggleBasket: () => {
      dispatch(clearOrder())
      dispatch(toggleBasket())
    }
  }
}

export default connect(null, mapDispatchToProps)(Basket)
