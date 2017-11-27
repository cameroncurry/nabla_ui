import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {Card, CardHeader} from 'material-ui/Card'
import AddIcon from 'material-ui/svg-icons/content/add'

import QTAccessTable from '../components/QTAccessTable'
import QTAccessDialog from '../components/QTAccessDialog'
import {fetchQTAccess, qtAccessDialogShow} from '../actions'

const cardStyle = {
  margin: 16
}

class QuestradePage extends Component {

  componentDidMount() {
    this.props.dispatch(fetchQTAccess())
  }

  render() {
    return (
      <div>
        <Card style={cardStyle}>
          <CardHeader title='Access Tokens'
                      showExpandableButton={true}
                      openIcon={<AddIcon />}
                      closeIcon={<AddIcon />}
                      onClick={() => this.props.dispatch(qtAccessDialogShow())}
          />
          <QTAccessDialog open={this.props.qtAccessDialogOpen} dispatch={this.props.dispatch} />
          <QTAccessTable qtaccess={this.props.qtaccess} dispatch={this.props.dispatch} />
        </Card>
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
