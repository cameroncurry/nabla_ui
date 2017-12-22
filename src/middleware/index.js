/* eslint-disable no-unused-vars */
import axios from 'axios'

export const API = 'API'

export default store => next => action => {
  if (action[API] == undefined) {
    return next(action)
  }

  const { types, endpoint } = action[API]
  if (endpoint == undefined) {
    throw new Error('Expected an endpoint')
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }

  const [request, success, failure] = types 
  next({
    type: request
  })

  return axios.get(endpoint).then(
    response => next({
      type: success,
      data: response.data
    }),
    error => next({
      type: failure,
      error: error.message || error
    })
  )
}
