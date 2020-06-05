import React,{useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import { useHistory} from 'react-router-dom'


export default function Application(props) {

    const URI = useSelector(state => state.URI)
    const history = useHistory()
    const [state, setState] = useState({})
    const [keys, setKeys] = useState([])
    const id = props.match.params.id
    const base = `${URI}/${props.match.path.substring(1, props.match.path.length-4)}/${id}`

    useEffect(() => {
        axios.get(base)
            .then(response =>{
                setState(response.data)
                delete response.data.id
                setKeys(Object.keys(response.data))
            })
            .catch(error => console.log(error))
    }, [])

    const handleUpdate = async e =>{
        try {
            await axios.put(base, state)
            alert("registro actualizado")
            history.push('/')
        } catch (error) {
            alert(error)
        }
    }
    
    const handleDelete = async e =>{
        try {        
            await axios.delete(base)
            alert("registro eliminado")
            history.push('/')
        } catch (error) {
            alert(error)
        }
    }
    const handleChange = e =>{
        let copy = state
        copy[e.target.name] = e.target.value
        setState(copy)
        console.log(state)
    }
    return (
        <div className="content">
            <div className="container">
                <h2>Nombre</h2>
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
                        <button className="button__update" onClick={handleUpdate}>Actualizar</button>
                        <button className="button__delete" onClick={handleDelete}>Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
