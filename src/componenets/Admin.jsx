import React from 'react'
import { Outlet, useNavigate } from 'react-router'

const Admin = () => {
    const navigate = useNavigate();
  return (
    <>
        <ul className="req-list">
            <li className="req-list-item"><button className="req-btn" onClick={()=>(navigate('add'))}>Add work </button></li>
            <li className="req-list-item"><button className="req-btn" onClick={()=>(navigate('delete'))}>delete Item</button></li>
            <Outlet/>
        </ul>      
    </>
  )
}

export default Admin
