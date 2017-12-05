import React, {Component} from 'react'
import PropTypes from 'prop-types'
import AddIcon from 'material-ui-icons/Add'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import RefreshIcon from 'material-ui-icons/Refresh'
import { CircularProgress } from 'material-ui/Progress'
import Card, {CardContent} from 'material-ui/Card'
import Table,
       {TableBody,
        TableHead,
        TableRow,
        TableCell} from 'material-ui/Table'

import * as actions from '../actions'
import QTAccessDialog from './QTAccessDialog'

const styles = {
  cardStyle: {
    margin: 16
  },
  ToolbarStyle: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}

export default class QTAccessTable extends Component {

  refreshQtAccess(id) {
    this.props.dispatch(actions.refershQTAccess(id))
  }

  showQtAccessDialog = () => {
    this.props.dispatch(actions.qtAccessDialogShow())
  }

  tableRows = () => {
    const refreshIcon = !this.props.qtaccess.isFetching ? <RefreshIcon /> : <CircularProgress />
    return this.props.qtaccess.items.map(itemId => (
      <TableRow key={itemId}>
        <TableCell>{this.props.qtaccess.entities[itemId].scope}</TableCell>
        <TableCell numeric>{this.props.qtaccess.entities[itemId].access_token}</TableCell>
        <TableCell numeric>{this.props.qtaccess.entities[itemId].api_server}</TableCell>
        <TableCell numeric>{this.props.qtaccess.entities[itemId].modified}</TableCell>
        <TableCell numeric>
          <IconButton onClick={() => this.refreshQtAccess(itemId)}>
            {refreshIcon}
          </IconButton>
        </TableCell>
      </TableRow>
    ))
  }

  render() {
    return (
      <Card style={styles.cardStyle}>
        <CardContent>
          <Toolbar style={styles.ToolbarStyle}>
            <Typography type="title" color="inherit">
              Access Tokens
            </Typography>
            <IconButton onClick={this.showQtAccessDialog}>
              <AddIcon />
            </IconButton>
          </Toolbar>
          <QTAccessDialog open={this.props.qtAccessDialogOpen} dispatch={this.props.dispatch} />
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Scope</TableCell>
                <TableCell numeric>Access Token</TableCell>
                <TableCell numeric>Api Server</TableCell>
                <TableCell numeric>Modified</TableCell>
                <TableCell numeric>Refresh</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.tableRows()}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    )
  }
}

QTAccessTable.propTypes = {
  qtaccess: PropTypes.object.isRequired,
  qtAccessDialogOpen: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}
