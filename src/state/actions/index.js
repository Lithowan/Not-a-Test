import { USER_REGISTERED } from '../constants'
import { SORTING_TOGGLED } from '../constants'
import {not} from 'ramda'

export function userRegistered(user) {
  return {
    type: USER_REGISTERED,
    payload: {
      user
    }
  }
}

export function sortingToggled(sorted) {
  return {
    type: SORTING_TOGGLED,
    payload: {
      sorted: not(sorted)
    }
  }
}
