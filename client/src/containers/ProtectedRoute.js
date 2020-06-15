import React,{ useEffect } from 'react'
import { useHistory, Route, Switch} from 'react-router-dom'
import axios from 'axios'
import {useSelector} from 'react-redux'

import Single from '../components/Single'
import Create from '../components/Create'
import List from './List'

export default function ProtectedRoute(props) {
    
    const token = useSelector(state => state.isLogged)
    const history = useHistory()
    const path = props.path

    if(!token){
        history.push('/')
    }

    return (
        <Route path={path}>
            <Switch>
                <Route exact path={`${path}`} component={List} />
                <Route exact path={`${path}/create`} component={Create} />
                <Route path={`${path}/:id`} component={Single} />
            </Switch>
        </Route>
    )
}
