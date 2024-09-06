import React from 'react'
import { Outlet, useNavigate } from 'react-router'
import '../Assets/css/Admin.css'

const Admin = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="admincontainer">
        <ul className="req-list">
            <li className="req-list-item"><button className="req-btn" onClick={()=>(navigate('addwork'))}>Add work </button></li>
            <li className="req-list-item"><button className="req-btn" onClick={()=>(navigate('deletework'))}>delete Work</button></li>
            <li className="req-list-item"><button className="req-btn" onClick={()=>(navigate('addalbum'))}>Add Album</button></li>
            <li className="req-list-item"><button className="req-btn" onClick={()=>(navigate('deletealbum'))}>delete Album</button></li>
            <li className="req-list-item"><button className="req-btn" onClick={()=>(navigate('addimg'))}>Add Album img</button></li>
            <li className="req-list-item"><button className="req-btn" onClick={()=>(navigate('deleteimg'))}>delete Album img</button></li>
        </ul> 
      <Outlet/>
      </div>     
    </>
  )
}

export default Admin
