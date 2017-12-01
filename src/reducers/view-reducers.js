import * as types from '../action-types'

export const viewReducer = (state = {
  qtAccessDialogOpen: false
}, action) => {
  switch(action.type) {
    case types.QT_ACCESS_DIALOG_SHOW:
      return Object.assign({}, state, {
        qtAccessDialogOpen: true
      })
    case types.QT_ACCESS_DIALOG_HIDE:
      return Object.assign({}, state, {
        qtAccessDialogOpen: false
      })
    default:
      return state
  }
}
