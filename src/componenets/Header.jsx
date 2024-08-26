import React from 'react'
import { Link } from 'react-router-dom'
import '../Assets/css/Header.css'

const Header = () => {
  return (
    <>
      <nav>
        <div className="logo-container">
          <h1 className='logo-txt'>Sehej</h1>
        </div>
        <div className="menu-container">
          <ul className="menu-list">
            <li><Link className="menu-list-item" to= '/'>Home</Link></li>
            <li><Link className="menu-list-item" to='/work'>Work</Link></li>
            <li><Link className="menu-list-item" to='/photography'>Photography</Link></li>
            <li><Link className="menu-list-item" to='/about'>About</Link></li>
          </ul>
        </div> 
      </nav>      
    </>
  )
}

export default Header
