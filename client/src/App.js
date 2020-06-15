import React from 'react'
import {BrowserRouter as Router,Switch,Route } from "react-router-dom"
import Login from './containers/Login'
import ProtectedRoute from './containers/ProtectedRoute'
import Navbar from './components/Navbar'

const link = ["applications","technologys"]

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <React.Fragment>
          <Navbar list={link}/>
          {link.map(link => (
            <ProtectedRoute key={link} path={`/${link}`}/>
          ))}   
        </React.Fragment>
      </Switch>
    </Router>
  )
}

export default App;
