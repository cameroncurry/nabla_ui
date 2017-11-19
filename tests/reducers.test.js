import * as actionTypes from '../src/action-types'
import * as actions from '../src/actions'
import NBReducer from '../src/reducers'

import * as endpoints from './nabla-api-mocks'

const initialState = {
  qtaccess: {
    isFetching: false,
    items: []
  }
}

describe('reducers', () => {

  it('should return inital state', () => {
    expect(NBReducer(undefined, {})).toEqual(initialState)
  })

  it('should start fetching qt access', () => {
    const expectedState = {
      qtaccess: {
        isFetching: true,
        items: []
      }
    }
    expect(NBReducer(initialState, actions.fetchQTAccess())).toEqual(expectedState)
  })
})