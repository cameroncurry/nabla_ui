export * from './view-actions'

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

export const refershQTAccessRequest = () => ({
  type: types.REFRESH_QT_ACCESS_REQUEST
})

export const refershQTAccessSuccess = data => ({
  type: types.REFRESH_QT_ACCESS_SUCCESS,
  data
})

export const refershQTAccessFailure = error => ({
  type: types.REFRESH_QT_ACCESS_FAILURE,
  error
})

export function refershQTAccess(id) {
  return dispatch => {
    dispatch(refershQTAccessRequest())
    return axios.put(`/api/qt-access/${id}`).then(response => {
      dispatch(refershQTAccessSuccess(response.data))
    }).catch(error => {
      dispatch(refershQTAccessFailure(error))
    })
  }
}
