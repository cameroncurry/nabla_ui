import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import {qtAccessDialogShow, qtAccessDialogHide} from '../actions'


export default class QTAccessDialog extends Component {

  handleSubmit() {
    console.log('TODO submit new qt access to backend')
    this.props.dispatch(qtAccessDialogHide())
  }

  render() {
    const actions = [
      <FlatButton
        label='Cancel'
        primary={true}
        onClick={() => this.props.dispatch(qtAccessDialogHide())}
      />,
      <FlatButton
        label='Submit'
        primary={true}
        onClick={this.handleSubmit.bind(this)}
      />,
    ]
    return (
      <Dialog
        title='Add Access token'
        actions={actions}
        modal={false}
        open={this.props.open}
        onRequestClose={() => this.props.dispatch(qtAccessDialogHide())}
      >
        <TextField
          hintText="Refresh Token"
        />
      </Dialog>
    )
  }
}

QTAccessDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}
