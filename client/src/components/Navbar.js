import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav class="nav">
            <div className="header">
                <h1>Un titulo</h1>
            </div>
            <ul class="nav__list">
                {props.list.map(nav_item => (
                    <li class="nav__items">
                        <Link className="nav__link" to={`/${nav_item}`} >

                            {nav_item.toUpperCase()}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
