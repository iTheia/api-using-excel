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
        <div className="wrapper">
          <Navbar list={link}/>
          {link.map(link => (
            <ProtectedRoute path={`/${link}`}/>
          ))}
        </div>  
      </Switch>
    </Router>
  )
}

export default App;
