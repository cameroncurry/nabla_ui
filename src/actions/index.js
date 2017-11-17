
import * as types from '../action-types'

export const fetchQTAccess = () => ({
  type: types.FETCH_QT_ACCESS,
  payload: {
    request: {
      url: '/api/qtaccess'
    }
  }
})
