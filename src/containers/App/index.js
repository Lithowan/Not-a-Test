import { isNonEmptyString } from 'ramda-adjunct'
import { connect } from 'react-redux'

import App from '../../components/App'
import { userRegistered, sortingToggled } from '../../state/actions'
import { getUsers, getLatestUser, isSorted } from '../../state/selectors'

function mapStateToProps(state, props) {
  return {
    users: getUsers(state),
    latestUser: getLatestUser(state),
    sorted: isSorted(state)
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    handleOnSubmit: e => {
      e.preventDefault()
      const userInput = e.target.elements['user']
      if (isNonEmptyString(userInput.value)) {
        dispatch(userRegistered(userInput.value))
        userInput.value = ''
      }
    }
  }
}

function mapSortingToggleToProps(dispatch, props) {
  return {
    handleSortingToggle: e => {
      e.preventDefault()
      dispatch(sortingToggled(!isSorted()))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
