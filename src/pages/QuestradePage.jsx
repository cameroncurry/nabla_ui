import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import QTAccessTable from '../components/QTAccessTable'
import {fetchQTAccess} from '../actions'


class QuestradePage extends Component {

  componentDidMount() {
    this.props.dispatch(fetchQTAccess())
  }

  render() {
    return (
      <div>
        <QTAccessTable qtaccess={this.props.qtaccess}
                       dispatch={this.props.dispatch}
                       qtAccessDialogOpen={this.props.qtAccessDialogOpen} />
      </div>
    )
  }
}

QuestradePage.propTypes = {
  qtaccess: PropTypes.object.isRequired,
  qtAccessDialogOpen: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  const {qtaccess, view} = state
  return {
    qtaccess,
    qtAccessDialogOpen: view.qtAccessDialogOpen
  }
}

export default connect(mapStateToProps)(QuestradePage)
