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
        <>
          <Navbar list={link}/>
          {link.map(link => (
            <ProtectedRoute key={link} path={`/${link}`}/>
          ))}   
        </>
      </Switch>
    </Router>
  )
}

export default App;
