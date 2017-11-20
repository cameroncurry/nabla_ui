import axios from 'axios'
import * as types from '../action-types'

export const fetchQTAccessRequest = () => ({
  type: types.FETCH_QT_ACCESS_REQUEST
})

export const fetchQTAccessSuccess = data => ({
  type: types.FETCH_QT_ACCESS_SUCCESS,
  data
})

export const fetchQTAccessFailure = error => ({
  type: types.FETCH_QT_ACCESS_FAILURE,
  error
})

export function fetchQTAccess() {
  return dispatch => {
    dispatch(fetchQTAccessRequest())
    return axios.get('/api/qt-access').then(response => {
      dispatch(fetchQTAccessSuccess(response.data))
    }).catch(error => {
      dispatch(fetchQTAccessFailure(error))
    })
  }
}
