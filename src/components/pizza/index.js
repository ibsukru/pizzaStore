import Pizza from './Pizza'
import { connect } from 'react-redux'
import { selectSize } from '../../actions'

const mapDispatchToProps = dispatch => {
  return {
    onSelectingSize: size => {
      dispatch(selectSize(size))
    }
  }
}

export default connect(null, mapDispatchToProps)(Pizza)
