import axios from 'axios'
import thunk from 'redux-thunk'
import AxiosMockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'

import * as actions from '../src/actions'
import * as actionTypes from '../src/action-types'
import api from '../src/middleware'

const middleware = [thunk, api]
const mockStore = configureMockStore(middleware)


describe('qt actions', () => {

  it('should add qt access', () => {
    let axiosMock = new AxiosMockAdapter(axios)
    axiosMock.onPost('/api/qt-access')
      .reply(201, {
        'id': '579d6115-b0f6-4c6c-b9ff-cfc28692d532',
        'modified': '2000-01-29T12:00:00.000000Z',
        'scope': 'ACC',
        'refresh_token': 'aSBe7wAAdx88QTbwut0tiu3SYic3ox8F'
      })
    
    const expectedActions = [
      {
        type: actionTypes.ADD_QT_ACCESS_REQUEST
      },
      {
        type: actionTypes.ADD_QT_ACCESS_SUCCESS,
        data: {
          'id': '579d6115-b0f6-4c6c-b9ff-cfc28692d532',
          'modified': '2000-01-29T12:00:00.000000Z',
          'scope': 'ACC',
          'refresh_token': 'aSBe7wAAdx88QTbwut0tiu3SYic3ox8F'
        }
      }
    ]

    const store = mockStore()
    return store.dispatch(
      actions.addQTAccess('579d6115-b0f6-4c6c-b9ff-cfc28692d532','aSBe7wAAdx88QTbwut0tiu3SYic3ox8F')
    ).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should fetch qt access', () => {
    let axiosMock = new AxiosMockAdapter(axios)
    axiosMock.onGet('/api/qt-access')
      .reply(200, [{
        'id': '579d6115-b0f6-4c6c-b9ff-cfc28692d532',
        'modified': '2000-01-29T12:00:00.000000Z',
        'scope': 'ACC',
        'access_token': 'C3lTUKuNQrAAmSD/TPjuV/HI7aNrAwDp',
        'refresh_token': 'aSBe7wAAdx88QTbwut0tiu3SYic3ox8F',
        'api_server': 'https://api01.iq.questrade.com/'
      }])

    const expectedActions = [
      {
        type: actionTypes.FETCH_QT_ACCESS_REQUEST
      },
      {
        type: actionTypes.FETCH_QT_ACCESS_SUCCESS,
        data: [{
          'id': '579d6115-b0f6-4c6c-b9ff-cfc28692d532',
          'modified': '2000-01-29T12:00:00.000000Z',
          'scope': 'ACC',
          'access_token': 'C3lTUKuNQrAAmSD/TPjuV/HI7aNrAwDp',
          'refresh_token': 'aSBe7wAAdx88QTbwut0tiu3SYic3ox8F',
          'api_server': 'https://api01.iq.questrade.com/'
        }]
      }
    ]
    const store = mockStore()
    return store.dispatch(actions.fetchQTAccess()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should refresh qt access', () => {
    let axiosMock = new AxiosMockAdapter(axios)
    axiosMock.onPut('/api/qt-access/579d6115-b0f6-4c6c-b9ff-cfc28692d532')
      .reply(200, {
        'id': '579d6115-b0f6-4c6c-b9ff-cfc28692d532',
        'modified': '2000-01-29T12:00:00.000000Z',
        'scope': 'ACC',
        'access_token': 'C3lTUKuNQrAAmSD/TPjuV/HI7aNrAwDp',
        'refresh_token': 'aSBe7wAAdx88QTbwut0tiu3SYic3ox8F',
        'api_server': 'https://api01.iq.questrade.com/'
      })
    
    const expectedActions = [
      {
        type: actionTypes.REFRESH_QT_ACCESS_REQUEST
      },
      {
        type: actionTypes.REFRESH_QT_ACCESS_SUCCESS,
        data: {
          'id': '579d6115-b0f6-4c6c-b9ff-cfc28692d532',
          'modified': '2000-01-29T12:00:00.000000Z',
          'scope': 'ACC',
          'access_token': 'C3lTUKuNQrAAmSD/TPjuV/HI7aNrAwDp',
          'refresh_token': 'aSBe7wAAdx88QTbwut0tiu3SYic3ox8F',
          'api_server': 'https://api01.iq.questrade.com/'
        }
      }
    ]
    const store = mockStore()
    return store.dispatch(actions.refershQTAccess('579d6115-b0f6-4c6c-b9ff-cfc28692d532')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should fetch qt balance', () => {
    let axiosMock = new AxiosMockAdapter(axios)
    axiosMock.onGet('/api/qt-balance')
      .reply(200, {
        CAD: 12345.60,
        USD: 12345.60
      })
    const expectedActions = [
      {
        type: actions.FETCH_QT_BALANCE_REQUEST
      },
      {
        type: actions.FETCH_QT_BALANCE_SUCCESS,
        data: {
          CAD: 12345.60,
          USD: 12345.60
        }
      }
    ]
    const store = mockStore()
    return store.dispatch(actions.fetchQTBalance()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
