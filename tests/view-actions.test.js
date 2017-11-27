import configureMockStore from 'redux-mock-store'

import * as actionTypes from '../src/action-types'
import * as actions from '../src/actions'

const mockStore = configureMockStore()

describe('view actions', () => {

  it('should show and hide QT Access Dialog', () => {
    const expectedActions = [
      {
        type: actionTypes.QT_ACCESS_DIALOG_SHOW
      },
      {
        type: actionTypes.QT_ACCESS_DIALOG_HIDE
      }
    ]
    const store = mockStore()
    store.dispatch(actions.qtAccessDialogShow())
    store.dispatch(actions.qtAccessDialogHide())
    expect(store.getActions()).toEqual(expectedActions)
  })
})
