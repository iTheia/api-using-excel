import React from 'react'
import {Link } from 'react-router-dom'

export default function Fila(props) {

    const keys = Object.keys(props.element)
    
    return (
        <Link to={`${props.url}/${props.element.id}`} className="row">
            {keys.map( key =>{
                return (
                    <div key={props.element.id} >
                        {props.element[key]}
                    </div>
                )
            })}
        </Link>
    )
}
