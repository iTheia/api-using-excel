import React from 'react'
import {Link} from 'react-router-dom'
import {logout} from '../actions'
import {useDispatch} from 'react-redux'
export default function Navbar(props) {
    const dispatch = useDispatch()
    return (
        <nav className="nav">
            <ul className="nav__list">
                {props.list.map(nav_item => (
                    <li  key={nav_item} className="nav__items">
                        <Link className="nav__link"to={`/${nav_item}`} >
                            {nav_item.toUpperCase()}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="header">
                <button className="button__delete" onClick={e => dispatch(logout())}>Cerrar sesion</button>
            </div>
        </nav>
    )
}
