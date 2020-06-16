export const login = user =>{
    return {
        type: 'LOGIN',
        token:user
    }
} 
export const logout = () =>{
    return {
        type: 'LOGOUT'
    }
} 
export const setUser = user =>{
    return {
        type: 'SET_USER',
        data:user
    }
}