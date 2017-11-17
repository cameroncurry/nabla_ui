
export const FETCH_QT_ACCESS = 'FETCH_QT_ACCESS'

export const fetchQTAccess = () => ({
  type: FETCH_QT_ACCESS,
  payload: {
    request: {
      url: '/api/qtaccess'
    }
  }
})
