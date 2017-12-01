import { combineReducers } from 'redux'
import * as actions from '../src/actions'
import rootReducer, {qtAccessReducer as qtaccess} from '../src/reducers'

const initialState = {
  qtaccess: {
    isFetching: false,
    items: [],
    entities: {}
  }
}

const qtAccessReducer = combineReducers({qtaccess})

describe('reducers', () => {

  it('should return inital state', () => {
    expect(rootReducer(undefined, {})).toEqual({
      qtaccess: {
        isFetching: false,
        items: [],
        entities: {}
      },
      view: {
        qtAccessDialogOpen: false
      }
    })
  })

  it('should handle FETCH_QT_ACCESS_REQUEST', () => {
    expect(qtAccessReducer(initialState, actions.fetchQTAccessRequest())).toEqual({
      qtaccess: {
        isFetching: true,
        items: [],
        entities: {}
      }
    })
  })

  it('should handle FETCH_QT_ACCESS_FAILURE', () => {
    expect(qtAccessReducer(initialState, actions.fetchQTAccessFailure())).toEqual({
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
    expect(qtAccessReducer(undefined, successAction)).toEqual({
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
    expect(qtAccessReducer(state, successAction)).toEqual({
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

  it('should handle ADD_QT_ACCESS_SUCCESS', () => {
    const key = '579d6115-b0f6-4c6c-b9ff-cfc28692d532'
    const state = {
      qtaccess: {
        isFetching: true,
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
    const newKey = 'e7c77bb9-3a05-487a-8163-ab04be687edc'
    const data = {
      'id': 'e7c77bb9-3a05-487a-8163-ab04be687edc',
      'modified': '2000-01-29T12:00:00.000000Z',
      'scope': 'ACC',
      'refresh_token': 'aSBe7wAAdx88QTbwut0tiu3SYic3ox8F'
    }
    const successAction = actions.addQTAccessSuccess(data)
    expect(qtAccessReducer(state, successAction)).toEqual({
      qtaccess: {
        isFetching: false,
        items: ['579d6115-b0f6-4c6c-b9ff-cfc28692d532', 'e7c77bb9-3a05-487a-8163-ab04be687edc'],
        entities: {
          [key]: {
            'id': '579d6115-b0f6-4c6c-b9ff-cfc28692d532',
            'modified': '2000-01-29T12:00:00.000000Z',
            'scope': 'ACC',
            'access_token': 'C3lTUKuNQrAAmSD/TPjuV/HI7aNrAwDp',
            'refresh_token': 'aSBe7wAAdx88QTbwut0tiu3SYic3ox8F',
            'api_server': 'https://api01.iq.questrade.com/'
          },
          [newKey]: {
            'id': 'e7c77bb9-3a05-487a-8163-ab04be687edc',
            'modified': '2000-01-29T12:00:00.000000Z',
            'scope': 'ACC',
            'refresh_token': 'aSBe7wAAdx88QTbwut0tiu3SYic3ox8F'
          }
        }
      }
    })
  })
})
