const loggedReducer = (state = '', action ) =>{
    switch (action.type) {
        case 'LOGIN':
            return action.token
        case 'LOGOUT':
            return ''
        default:
            return state
    }
}

export default loggedReducer