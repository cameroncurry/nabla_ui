import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

import {qtAccessDialogShow,
        qtAccessDialogHide,
        addQTAccess} from '../actions'

const styles = {
  dialog: {
    display: 'flex',
    flexDirection: 'column'
  },
  textField: {
    paddingLeft: 24
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

  handleScopeChange = (event, index, value) => {
    this.setState({
      value
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
    const actions = [
      <FlatButton
        label='Cancel'
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label='Submit'
        primary={true}
        onClick={this.handleSubmit}
      />,
    ]
    return (
      <Dialog
        title='Add Access token'
        actions={actions}
        modal={false}
        open={this.props.open}
        onRequestClose={this.handleClose}
      >
        <div style={styles.dialog}>
          <div>
            <DropDownMenu value={this.state.scope} onChange={this.handleScopeChange}>
              <MenuItem value={'ACC'} primaryText='Account Data' />
              <MenuItem value={'MKT'} primaryText='Market Data' />
              <MenuItem value={'ODR'} primaryText='Order Placement' />
            </DropDownMenu>
          </div>
          <TextField 
            style={styles.textField}
            value={this.state.token}
            onChange={this.handleTokenChange}
            hintText="Refresh Token"
          />
        </div>
      </Dialog>
    )
  }
}

QTAccessDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}
