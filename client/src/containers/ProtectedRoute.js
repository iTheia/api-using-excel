import React,{ useEffect } from 'react'
import { useHistory, Route, Switch} from 'react-router-dom'
import axios from 'axios'
import {useSelector} from 'react-redux'

import Single from '../components/Single'
import List from './List'

export default function ProtectedRoute(props) {
    
    const URI = useSelector(state => state.URI)
    const token = useSelector(state => state.isLogged)
    const history = useHistory()
    const path = props.path

    if(!token){
        history.push('/')
    }
    
    useEffect(() => {/* 
        axios.post(`${URI}`) */
    }, [])
    

    return (
        <Route path={path}>
            <Switch>
                <div className="content">
                    <Route exact path={`${path}`} component={List} />
                    <Route path={`${path}/:id`} component={Single} />
                </div>
            </Switch>
        </Route>
    )
}
