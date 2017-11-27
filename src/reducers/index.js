import { combineReducers } from 'redux'
import * as types from '../action-types'

const qtaccess = (state = {
  isFetching: false,
  items: [],
  entities: {}
}, action) => {
  switch(action.type) {
    case types.FETCH_QT_ACCESS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case types.FETCH_QT_ACCESS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    case types.FETCH_QT_ACCESS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.data.map(qtaccess => qtaccess.id),
        entities: action.data.reduce( (entities, qtaccess) => {
          entities[qtaccess.id] = qtaccess
          return entities
        }, {})
      })
    case types.REFRESH_QT_ACCESS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case types.REFRESH_QT_ACCESS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    case types.REFRESH_QT_ACCESS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        entities: Object.assign({}, state.entities, {
          [action.data.id]: action.data
        })
      })
    default:
      return state
  }
}

const nbReducer = combineReducers({
  qtaccess
})

export default nbReducer
