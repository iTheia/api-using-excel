const userReducer = (state = {name:'', email:''}, action) =>{
    switch (action.type) {
        case 'SET_USER':
            state = action.data
            return state
        case 'LOGOUT':
            return {name:'', email:''}
        default:
            return state
    }
}

export default userReducer