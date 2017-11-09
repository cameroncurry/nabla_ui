import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'


export default class NBHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }
  }
  render() {
    return (
      <AppBar
        title='Nabla'
        iconElementRight={<IconButton><MoreVertIcon /></IconButton>}
      />
    )
  }
}