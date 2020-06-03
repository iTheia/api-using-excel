import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import Login from './containers/Login'
import Main from './containers/Main'

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/main" component={Main} />
      </Switch>
    </Router>
  )
}

export default App;
