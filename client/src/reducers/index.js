import { combineReducers } from 'redux'
import isLoggedReducer from './isLogged'
import userReducer from './user'
import URI from './URI'


const root = combineReducers({
    URI:URI,
    user: userReducer,
    isLogged: isLoggedReducer
})

export default root