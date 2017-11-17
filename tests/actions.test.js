import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import AxiosMockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'

import * as actions from '../src/actions'
import * as actionTypes from '../src/action-types'

import * as endpoints from './nabla-api-mocks'

let axiosClient = axios.create()
let middleware = [axiosMiddleware(axiosClient)]
let mockStore = configureMockStore(middleware)


describe('actions', () => {

  it('should create fetch qt access action', () => {
    const expectedAction = {
      type: actionTypes.FETCH_QT_ACCESS,
      payload: {
        request: {
          url: '/api/qtaccess'
        }
      }
    }
    expect(actions.fetchQTAccess()).toEqual(expectedAction)
  })

  it('should fetch qt access', () => {
    let mock = new AxiosMockAdapter(axiosClient)
    mock.onGet(endpoints.API_QT_ACCESS.endpoint).reply(200, endpoints.API_QT_ACCESS.data)

    const expectedAction = {
      type: actionTypes.FETCH_QT_ACCESS,
      payload: {
        request: {
          url: '/api/qtaccess'
        }
      }
    }

    const expectedType = actionTypes.FETCH_QT_ACCESS_SUCCESS
    const expectedData = endpoints.API_QT_ACCESS.data

    const store = mockStore()
    return store.dispatch(actions.fetchQTAccess())
      .then(() => {
        const dispatchedActions = store.getActions()
        expect(dispatchedActions.length).toEqual(2)
        expect(dispatchedActions[0]).toEqual(expectedAction)
        expect(dispatchedActions[1].type).toEqual(expectedType)
        expect(dispatchedActions[1].payload.status).toEqual(200)
        expect(dispatchedActions[1].payload.data).toEqual(expectedData)
      })
  })
})
