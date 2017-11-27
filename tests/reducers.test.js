import * as actionTypes from '../src/action-types'
import * as actions from '../src/actions'
import nbReducer from '../src/reducers'

const initialState = {
  qtaccess: {
    isFetching: false,
    items: [],
    entities: {}
  }
}

describe('reducers', () => {

  it('should return inital state', () => {
    expect(nbReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle FETCH_QT_ACCESS_REQUEST', () => {
    expect(nbReducer(initialState, actions.fetchQTAccessRequest())).toEqual({
      qtaccess: {
        isFetching: true,
        items: [],
        entities: {}
      }
    })
  })

  it('should handle FETCH_QT_ACCESS_FAILURE', () => {
    expect(nbReducer(initialState, actions.fetchQTAccessFailure())).toEqual({
      qtaccess: {
        isFetching: false,
        items: [],
        entities: {}
      }
    })
  })

  it('should handle FETCH_QT_ACCESS_SUCCESS', () => {
    const state = {
      qtaccess: {
        isFetching: true,
        items: [],
        entities: {}
      }
    }
    const data = [{
      'id': '579d6115-b0f6-4c6c-b9ff-cfc28692d532',
      'modified': '2000-01-29T12:00:00.000000Z',
      'scope': 'ACC',
      'access_token': 'C3lTUKuNQrAAmSD/TPjuV/HI7aNrAwDp',
      'refresh_token': 'aSBe7wAAdx88QTbwut0tiu3SYic3ox8F',
      'api_server': 'https://api01.iq.questrade.com/'
    }]
    const successAction = actions.fetchQTAccessSuccess(data)
    expect(nbReducer(undefined, successAction)).toEqual({
      qtaccess: {
        isFetching: false,
        items: ['579d6115-b0f6-4c6c-b9ff-cfc28692d532'],
        entities: {
          [data[0].id]: {
            'id': '579d6115-b0f6-4c6c-b9ff-cfc28692d532',
            'modified': '2000-01-29T12:00:00.000000Z',
            'scope': 'ACC',
            'access_token': 'C3lTUKuNQrAAmSD/TPjuV/HI7aNrAwDp',
            'refresh_token': 'aSBe7wAAdx88QTbwut0tiu3SYic3ox8F',
            'api_server': 'https://api01.iq.questrade.com/'
          }
        }
      }
    })
  })

  it('should handle REFRESH_QT_ACCESS_SUCCESS', () => {
    const key = '579d6115-b0f6-4c6c-b9ff-cfc28692d532'
    const state = {
      qtaccess: {
        isFetching: false,
        items: ['579d6115-b0f6-4c6c-b9ff-cfc28692d532'],
        entities: {
          [key]: {
            'id': '579d6115-b0f6-4c6c-b9ff-cfc28692d532',
            'modified': '2000-01-29T12:00:00.000000Z',
            'scope': 'ACC',
            'access_token': 'C3lTUKuNQrAAmSD/TPjuV/HI7aNrAwDp',
            'refresh_token': 'aSBe7wAAdx88QTbwut0tiu3SYic3ox8F',
            'api_server': 'https://api01.iq.questrade.com/'
          }
        }
      }
    }
    const data = {
      'id': '579d6115-b0f6-4c6c-b9ff-cfc28692d532',
      'modified': '2000-01-29T12:00:00.000000Z',
      'scope': 'ACC',
      'access_token': 'pDwArNa7IH/VujPT/DSmAArQNuKUTl3C',
      'refresh_token': 'F8xo3ciYS3uit0tuwbTQ88xdAAw7eBSa',
      'api_server': 'https://api01.iq.questrade.com/'
    }
    const successAction = actions.refershQTAccessSuccess(data)
    expect(nbReducer(state, successAction)).toEqual({
      qtaccess: {
        isFetching: false,
        items: ['579d6115-b0f6-4c6c-b9ff-cfc28692d532'],
        entities: {
          [key]: {
            'id': '579d6115-b0f6-4c6c-b9ff-cfc28692d532',
            'modified': '2000-01-29T12:00:00.000000Z',
            'scope': 'ACC',
            'access_token': 'pDwArNa7IH/VujPT/DSmAArQNuKUTl3C',
            'refresh_token': 'F8xo3ciYS3uit0tuwbTQ88xdAAw7eBSa',
            'api_server': 'https://api01.iq.questrade.com/'
          }
        }
      }
    })
  })
})
