import React, {Component} from 'react'
import {Card, CardHeader} from 'material-ui/Card'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

const style = {
  margin: 16
}

const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
];


export default class NBTable extends Component {
  render() {
    return (
      <Card style={style}>
        <CardHeader title='Activities'/>
          <Table>
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
            >
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Status</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={false}
              showRowHover={true}
              stripedRows={true}
            >
              {tableData.map( (row, index) => (
                <TableRow key={index}>
                  <TableRowColumn>{index}</TableRowColumn>
                  <TableRowColumn>{row.name}</TableRowColumn>
                  <TableRowColumn>{row.status}</TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </Card>
    )
  }
}
