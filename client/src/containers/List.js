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
        axios.get(`${URI}${url}`)
            .then(response => {
                setArray(response.data)
                console.log(response)
                let data = []
                response.data.forEach(object => {
                    let temp = Object.keys(object).filter(key => key !== 'id')
                    temp = temp.filter(key => object[key] !== '')
                    temp.forEach(key => (data.indexOf(key) === -1)? data.push(key):null)
                })
                setKeys(data)
            })
            .catch(error => alert(error))
    }, [])

    return (
        <div className="content">
            <div className="flex">
                <h2>{url.substring(1,2).toUpperCase() +url.substring(2,url.length)}</h2>

                <Link to={`${url}/create`} className="crear">Crear registro</Link>
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
        </div>
    )
}
