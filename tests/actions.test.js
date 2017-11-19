import axios from 'axios'
import thunk from 'redux-thunk'
import AxiosMockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'

import * as actions from '../src/actions'
import * as actionTypes from '../src/action-types'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)


describe('actions', () => {

  it('should fetch qt access', () => {
    let axiosMock = new AxiosMockAdapter(axios)
    axiosMock.onGet('/api/qtaccess')
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
})
