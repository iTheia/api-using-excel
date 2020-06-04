import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
import {Link } from 'react-router-dom'

export default function List(props) {
    
    const URI = useSelector(state => state.URI)
    const [array, setArray] = useState([])
    const [keys, setKeys] = useState([])
    const url = props.match.url

    useEffect(() => {
        /* 
            axios.get(')
        */
        let response = [{id:1,name:'asdasd',data:'asdasd'},{id:0,name:'asdasd',data:'asdasd'}]
        setArray(response)
        setKeys(Object.keys(response[0]).filter(key => key !== 'id'))
    }, [])

    return (
        <div>
            <h2>{url.substring(1,2).toUpperCase() +url.substring(2,url.length)}</h2>
            <div className="table">
                {keys.map(key=>(
                    <div key={key} className="table__cell table__title">
                        {key}
                    </div>
                ))}
                {array.map((element, index) =>(
                    <Link to={`${url}/${element.id}`} key={index} className="table__row">
                        {keys.map( key =>{
                            return (
                                <div key={element.id} key={key} className="table__cell" >
                                    {element[key]}
                                </div>
                            )
                        })}
                    </Link>
                ))}
            </div>
        </div>
    )
}
