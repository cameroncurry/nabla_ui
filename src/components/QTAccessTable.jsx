import React, {Component} from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh'
import {Table,
        TableBody,
        TableHeader,
        TableHeaderColumn,
        TableRow,
        TableRowColumn} from 'material-ui/Table'


export default class QTAccessTable extends Component {

  render() {
    const tableRows = this.props.qtaccess.items.map(itemId => (
      <TableRow key={itemId}>
        <TableRowColumn>{this.props.qtaccess.entities[itemId].scope}</TableRowColumn>
        <TableRowColumn>{this.props.qtaccess.entities[itemId].access_token}</TableRowColumn>
        <TableRowColumn>{this.props.qtaccess.entities[itemId].api_server}</TableRowColumn>
        <TableRowColumn>{this.props.qtaccess.entities[itemId].modified}</TableRowColumn>
        <TableRowColumn><IconButton><RefreshIcon /></IconButton></TableRowColumn>
      </TableRow>
    ))

    return (
      <Table>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn>Scope</TableHeaderColumn>
            <TableHeaderColumn>Access token</TableHeaderColumn>
            <TableHeaderColumn>Api Server</TableHeaderColumn>
            <TableHeaderColumn>Modified</TableHeaderColumn>
            <TableHeaderColumn>Refresh</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}
          showRowHover={true}
          stripedRows={true}
        >
          {tableRows}
        </TableBody>
      </Table>
    )
  }
}

QTAccessTable.propTypes = {
  qtaccess: PropTypes.object.isRequired
}
