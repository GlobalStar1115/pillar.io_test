import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Router, Switch, Route } from 'react-router-dom'

import './app.css'
import history from './utils/history'
import MainRouter from './MainRouter'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={MainRouter} />
        </Switch>
      </Router>
    )
  }
}

export default App