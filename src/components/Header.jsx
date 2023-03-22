import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <h1>React<span>Js</span></h1>
        <ul>
            <li><a href='#'>SearchBar</a></li>
        </ul>
    </div>
  )
}

export default Header