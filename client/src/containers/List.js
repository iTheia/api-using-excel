import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
import Fila from '../components/Fila'

export default function List(props) {
    
    const URI = useSelector(state => state.URI)
    const [array, setArray] = useState([])
    const url = props.match.url

    useEffect(() => {
        /* 
            axios.get(')
        */
        setArray([{id:1,name:'asdasd'}])
    }, [])

    return (
        <div className="table">
            {array.map((element, index) => <Fila key={index} url={url} element={element}/>)}
        </div>
    )
}
