import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'

import api, {API} from '../src/middleware'

const middleware = [api]
const mockStore = configureMockStore(middleware)

describe('middleware', () => {

  it('should dispatch default action', () => {
    const DEFAULT_ACTION_TYPE = 'DEFAULT_ACTION_TYPE'
    const store = mockStore()
    store.dispatch({
      type: DEFAULT_ACTION_TYPE
    })
    expect(
      store.getActions()
    ).toEqual([{
      type: DEFAULT_ACTION_TYPE
    }])
  })

  it('should throw error without endpoint and types', () => {
    const store = mockStore()
    
    expect(() => {
      store.dispatch({
        [API]: {}
      })
    }).toThrow()
    
    expect(() => {
      store.dispatch({
        [API]: {
          enpoint: '/api/endpoint'
        }
      })
    }).toThrow()

    expect(() => {
      store.dispatch({
        [API]: {
          types: ['REQUEST_TYPE'],
          endpoint: '/api/endpoint'
        }
      })
    }).toThrow()
  })

  it('should dispatch axios actions', () => {
    let axiosMock = new AxiosMockAdapter(axios)
    axiosMock.onGet('/api/endpoint').reply(200)
    
    const store = mockStore()
    return store.dispatch({
      [API]: {
        types: ['REQUEST', 'SUCCESS', 'FAILURE'],
        endpoint: '/api/endpoint'
      }
    }).then(() => expect(
      store.getActions()
    ).toEqual(
      [
        { type: 'REQUEST' },
        { type: 'SUCCESS', data: undefined }
      ]
    ))
  })
})
