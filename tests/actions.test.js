import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import AxiosMockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'

import * as actions from '../src/actions'
import * as actionTypes from '../src/action-types'


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
    mock.onGet('/api/qtaccess').reply(200, [
      {
        'id': '579d6115-b0f6-4c6c-b9ff-cfc28692d532',
        'modified': '2000-01-29T12:00:00.000000Z',
        'scope': 'ACC',
        'access_token': 'C3lTUKuNQrAAmSD/TPjuV/HI7aNrAwDp',
        'refresh_token': 'aSBe7wAAdx88QTbwut0tiu3SYic3ox8F',
        'api_server': 'https://api01.iq.questrade.com/'
      }
    ])

    const expectedAction = {
      type: actionTypes.FETCH_QT_ACCESS,
      payload: {
        request: {
          url: '/api/qtaccess'
        }
      }
    }

    const expectedType = actionTypes.FETCH_QT_ACCESS_SUCCESS
    const expectedData = [
      {
        'id': '579d6115-b0f6-4c6c-b9ff-cfc28692d532',
        'modified': '2000-01-29T12:00:00.000000Z',
        'scope': 'ACC',
        'access_token': 'C3lTUKuNQrAAmSD/TPjuV/HI7aNrAwDp',
        'refresh_token': 'aSBe7wAAdx88QTbwut0tiu3SYic3ox8F',
        'api_server': 'https://api01.iq.questrade.com/'
      }
    ]

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
