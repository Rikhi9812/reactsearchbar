import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <h1>React<span>Js</span></h1>
        <ul>
            <li><Link to='/'>SearchBar</Link></li>
        </ul>
    </div>
  )
}

export default Header

