import React,{useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

export default function Application(props) {

    const URI = useSelector(state => state.URI)

    const [state, setState] = useState({})
    const [keys, setKeys] = useState([])
    const base = props.match.path.substring(1, props.match.path.length-4)
    const id = props.match.params.id

    useEffect(() => {
        /* 
        axios.get(`${URI}/`)
        */
        console.log(base)
        let response = {id:1,name:'asdasd'}
        setState(response)
        delete response.id
        setKeys(Object.keys(response))
    }, [])

    const handleUpdate = e =>{
    }
    const show = e =>{

    }
    const handleDelete = e =>{

    }
    return (
        <div className="container">
            <div className="form">
                {keys.map(key =>(
                    <div className="form__input" key={key}>
                        <label htmlFor={key}>{key}</label>
                        <input id={key} type="text" defaultValue={state[key]}/>
                    </div>
                ))}

                <div className="bottom">
                    <button onClick={handleUpdate}>Actualizar</button>
                    <button onClick={show} >Eliminar</button>
                </div>
            </div>
        </div>
    )
}
