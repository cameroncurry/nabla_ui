import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import {MenuItem} from 'material-ui/Menu'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog'

import {qtAccessDialogShow,
        qtAccessDialogHide,
        addQTAccess} from '../actions'

const styles = {
  dialog: {
    display: 'flex',
    flexDirection: 'column'
  }
}

export default class QTAccessDialog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      scope: 'ACC',
      token: ''
    }
  }

  handleScopeChange = event => {
    this.setState({
      scope: event.target.value
    })
  }

  handleTokenChange = event => {
    this.setState({
      token: event.target.value,
    })
  }

  handleSubmit = () => {
    this.props.dispatch(addQTAccess(this.state.scope, this.state.token))
    this.props.dispatch(qtAccessDialogHide())
    this.setState({
      scope: 'ACC',
      token: ''
    })
  }

  handleClose = () => {
    this.props.dispatch(qtAccessDialogHide())
  }

  render() {
    return (
      <Dialog open={this.props.open} onRequestClose={this.handleClose}>
        <DialogTitle>Add Access Token</DialogTitle>
        <DialogContent style={styles.dialog}>
          <TextField
            id='select-scope'
            select
            label='Scope'
            value={this.state.scope}
            onChange={this.handleScopeChange}
            style={{width:200}}
          >
            <MenuItem value={'ACC'}>Account Data</MenuItem>
            <MenuItem value={'MKT'}>Market Data</MenuItem>
            <MenuItem value={'ODR'}>Order Placement</MenuItem>
          </TextField>
          <TextField
            autoFocus
            id='token'
            margin='normal'
            label='Refresh Token'
            value={this.state.token}
            onChange={this.handleTokenChange}
            style={{width: 400}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={this.handleSubmit} color='primary'>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

QTAccessDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}
