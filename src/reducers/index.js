import { combineReducers } from 'redux'
import * as types from '../action-types'

const qtAccessInitalState = {
  isFetching: false,
  items: []
}
const qtaccess = (state = qtAccessInitalState, action) => {
  switch(action.type) {
    case types.FETCH_QT_ACCESS:
      return Object.assign({}, state, {
        isFetching: true
      })
    default:
      return state
  }
}

const NBReducer = combineReducers({
  qtaccess
})

export default NBReducer
