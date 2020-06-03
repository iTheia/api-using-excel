import React, { useEffect, useState} from 'react'
import axios from 'axios'

/* const URI = 'http://localhost:5000' */
/* const URI = 'https://limitless-mesa-69042.herokuapp.com' */

export default function Login() {

    const [user, setuser] = useState({
        user:'',
        password:''
    })
    
    useEffect(()=>{
        const inputs = document.querySelectorAll(".input")
        inputs.forEach(input => {
            input.addEventListener("focus", function (){
                let parent = this.parentNode.parentNode
                parent.classList.add("focus");
            })
            input.addEventListener("blur", function (){
                let parent = this.parentNode.parentNode
                if(this.value === ""){
                    parent.classList.remove("focus")
                }
            })
        })
    },[])
    
    const handleChange = e =>{
        let copy = user
        copy[e.target.name] = e.target.value
        setuser(copy)
        console.log(user)
    }
    async function handleSubmit (e){
        
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
                            <input onChange={handleChange} name="user" type="text" className="input"/>
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
