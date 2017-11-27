import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import NBHeader from './components/NBHeader'
import QuestradePage from './pages/QuestradePage'
import NBFooter from './components/NBFooter'

const muiTheme = getMuiTheme()

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <NBHeader />
          <QuestradePage />
          <NBFooter />
        </div>
      </MuiThemeProvider>
    )
  }
}
