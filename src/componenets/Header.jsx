import React from 'react'
import { Link } from 'react-router-dom'
import '../Assets/css/Header.css'

const Header = () => {

  const nav_links =[
    {Page : 'Home',link : '/'},
    {Page : 'work',link : '/work'},
    {Page : 'Photography',link : '/photography'},
    {Page : 'About',link : '/about'}
  ]

  return (
    <>
      <nav>
        <div className="logo-container">
          <h1 className='logo-txt'>Sehej</h1>
        </div>
        <div className="menu-container">
          <ul className="menu-list">
            {
              nav_links.map((element)=>{
                return(
                  <li><Link className="menu-list-item" to={element.link}>{element.Page}</Link></li>
                )
              })
            }
          </ul>
        </div> 
      </nav>      
    </>
  )
}

export default Header
