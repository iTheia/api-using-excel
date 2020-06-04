import React,{useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import { useHistory} from 'react-router-dom'


export default function Application(props) {

    const URI = useSelector(state => state.URI)
    const history = useHistory()
    const [state, setState] = useState({})
    const [keys, setKeys] = useState([])

    const base = `${URI}/${props.match.path.substring(1, props.match.path.length-4)}`

    useEffect(() => {
        /* 
            axios.get(base)
                .then(response =>{
                    setState(response)
                    delete response.id
                    setKeys(Object.keys(response))
                })
                .catch(error => console.log(error))
        */
        let response = {id:0,name:'nombre',data:'data',data2:'data'}
        setState(response)
        delete response.id
        setKeys(Object.keys(response))
    }, [])
    
    const handleSubmit = async e =>{
        try {        
            await axios.post(base,state)
            history.push('/')
        } catch (error) {
            alert(error)
        }
    }
    const handleChange = e =>{
        let copy = state
        copy[e.target.name] = e.target.value
        setState(copy)
    }
    return (
        <div className="container">
            <div className="form">
                {keys.map(key =>(
                    <div className="form__input" key={key}>
                        <label htmlFor={key}>{key.replace(/^./, key[0].toUpperCase())}</label>
                        <input 
                            onChange={handleChange} 
                            name={key} id={key} 
                            type="text" 
                            defaultValue={state[key]}/>
                    </div>
                ))}

                <div className="bottom">
                    <button className="button__update" onClick={handleSubmit}>Actualizar</button>
                </div>
            </div>
        </div>
    )
}
