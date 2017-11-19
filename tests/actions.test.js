import axios from 'axios'
import thunk from 'redux-thunk'
import AxiosMockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'

import * as actions from '../src/actions'
import * as actionTypes from '../src/action-types'

import * as endpoints from './nabla-api-mocks'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)


describe('actions', () => {

  it('should fetch qt access', () => {
    let axiosMock = new AxiosMockAdapter(axios)
    axiosMock.onGet(endpoints.API_QT_ACCESS.endpoint).reply(200, endpoints.API_QT_ACCESS.data)

    const expectedActions = [
      {
        type: actionTypes.FETCH_QT_ACCESS_REQUEST
      },
      {
        type: actionTypes.FETCH_QT_ACCESS_SUCCESS,
        data: endpoints.API_QT_ACCESS.data
      }
    ]
    const store = mockStore()
    return store.dispatch(actions.fetchQTAccess()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
