import axios from 'axios'
import React, {Component} from 'react'
import IconButton from 'material-ui/IconButton'
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh'
import {Card,
        CardHeader} from 'material-ui/Card'
import {Table,
        TableBody,
        TableHeader,
        TableHeaderColumn,
        TableRow,
        TableRowColumn} from 'material-ui/Table'


const style = {
  margin: 16
}

export default class QTAccessTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      qt_access: []
    }
  }

  componentDidMount(){
    axios.get('api/qt_access').then(response => {
      this.setState({qt_access: response.data})
    })
  }

  render() {
    return (
      <Card style={style}>
        <CardHeader title='Access Tokens' />
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
            {this.state.qt_access.map( (row, index) => (
              <TableRow key={row.id}>
                <TableRowColumn>{row.scope}</TableRowColumn>
                <TableRowColumn>{row.access_token}</TableRowColumn>
                <TableRowColumn>{row.api_server}</TableRowColumn>
                <TableRowColumn>{row.modified}</TableRowColumn>
                <TableRowColumn><IconButton><RefreshIcon /></IconButton></TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    )
  }
}
