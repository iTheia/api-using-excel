import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, setUser } from '../actions'

export default function Login() {

    const [user, setuser] = useState({
        user:'',
        password:''
    })

    const history = useHistory()
    const URI = useSelector(state => state.URI)
    const dispatch = useDispatch()
    const token = useSelector(state => state.isLogged)

    if(token){
        history.push('/applications')
    }

    useEffect(()=>{
        const inputs = document.querySelectorAll(".input")
        inputs.forEach(input => {
            input.addEventListener("focus", function (){
                this.parentNode.parentNode.classList.add("focus");
            })
            input.addEventListener("blur", function (){
                if(this.value === "") this.parentNode.parentNode.classList.remove("focus")
            })
        })
    },[])
    
    const handleChange = e =>{
        let copy = user
        copy[e.target.name] = e.target.value
        setuser(copy)
    }
    async function handleSubmit (e){
        e.preventDefault()
        try {
            const response = await axios.post(`${URI}/signin`,user)
            dispatch(login(response.data))
            history.push('/applications')
        } catch (error) {
            alert(error)
        }
    }
    return (
        <div className="login-component">
            <div className="content">
                <div></div>
                <div className="login-content">
                    <form autoComplete="off">
                        <h2 className="title">TITULO</h2>
                        <div className="input-div one">
                        <div className="i">
                            <i className="fa fa-user"></i>
                        </div>
                        <div className="div">
                            <h5>user</h5>
                            <input onChange={handleChange} name="email" type="text" className="input"/>
                        </div>
                        </div>
                        <div className="input-div pass">
                        <div className="i"> 
                            <i className="fa fa-lock"></i>
                        </div>
                        <div className="div">
                            <h5>pass</h5>
                            <input onChange={handleChange} name="password" type="password" className="input"/>
                        </div>
                        </div>
                        <input onClick={handleSubmit} type="submit" className="btn" value="Iniciar"/>
                    </form>
                </div>
            </div>
        </div>
    )
}
