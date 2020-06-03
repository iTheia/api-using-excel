export const login = token =>{
    return {
        type: 'LOGIN',
        token:token
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