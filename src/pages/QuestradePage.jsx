import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {Card, CardHeader} from 'material-ui/Card'
import QTAccessTable from '../components/QTAccessTable'
import {fetchQTAccess} from '../actions'

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
          <CardHeader title='Access Tokens' />
          <QTAccessTable qtaccess={this.props.qtaccess}/>
        </Card>
      </div>
    )
  }
}

QuestradePage.propTypes = {
  qtaccess: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  const {qtaccess} = state
  return {
    qtaccess
  }
}

export default connect(mapStateToProps)(QuestradePage)
