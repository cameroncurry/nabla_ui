import { combineReducers } from 'redux'
import * as actions from '../src/actions'
import {viewReducer as view} from '../src/reducers/view-reducers'

const viewReducer = combineReducers({view})

describe('view reducers', () => {

  it('should show QT Access Dialog', () => {
    expect(viewReducer(undefined, actions.qtAccessDialogShow())).toEqual({
      view: {
        qtAccessDialogOpen: true
      }
    })
  })

  it('should hide QT Access Dialog', () => {
    expect(viewReducer(undefined, actions.qtAccessDialogHide())).toEqual({
      view: {
        qtAccessDialogOpen: false
      }
    })
  })
})
