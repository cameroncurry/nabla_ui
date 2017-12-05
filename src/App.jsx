import React, {Component} from 'react'

import NBHeader from './components/NBHeader'
import QuestradePage from './pages/QuestradePage'
import NBFooter from './components/NBFooter'


export default class App extends Component {
  render() {
    return (
      <div>
        <NBHeader />
        <QuestradePage />
        <NBFooter />
      </div>
    )
  }
}
