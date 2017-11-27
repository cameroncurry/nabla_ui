import React, {Component} from 'react'
import {grey900} from 'material-ui/styles/colors'

import {ReactIcon} from '../icons/react.icon'
import {DjangoIcon} from '../icons/django.icon'

const styles = {
  footer: {
    position: 'fixed',
    bottom: 0,
    height: 100,
    width: '100%',
    backgroundColor: grey900,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  } 
}

export default class NBFooter extends Component {
  render() {
    return (
      <div>
        <div style={styles.footer}>
          <div style={styles.icons}>
            <ReactIcon style={{paddingRight: 16}}/>
            <DjangoIcon style={{paddingLeft: 16}}/>
          </div>
        </div>
      </div>
    )
  }
}
