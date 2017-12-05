import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui-icons/MoreVert'
import MenuIcon from 'material-ui-icons/Menu'
import Chip from 'material-ui/Chip'
import RefreshIcon from 'material-ui-icons/Refresh'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  chip: {
    margin: theme.spacing.unit
  }
})

class NBHeader extends Component {

  handleRefreshBalance = () => {
    // console.log('refreshing balance')
  }
  
  render() {
    const {classes} = this.props
    return (
      <AppBar position='static'>
        <Toolbar>
          <IconButton className={classes.menuButton} color='contrast' aria-label='Menu'>
            <MenuIcon />
          </IconButton>
          <Typography type='title' color='inherit' className={classes.flex}>
            Nabla
          </Typography>
          <Chip
            label='8,769.61 (CAD)'
            className={classes.chip}
            onClick={undefined}
            onRequestDelete={this.handleRefreshBalance}
            deleteIcon={<RefreshIcon />}
          />
          <IconButton color='contrast'>
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    )
  }
}

NBHeader.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NBHeader)
