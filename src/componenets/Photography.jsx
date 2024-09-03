import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../Assets/css/Photography.css'
import { albumList } from '../data/photographyData'

const Photography = () => {

  const [album_list ,setalbum_list] = useState(albumList);
  const navigate = useNavigate();

  return (
    <>
      <div className="albums-container">
        {
          album_list.map((i)=>{
            if(i.video===null){
              return(
                  <div className="album-card" onClick={()=>{navigate('/title');}}>
                    <div className="album-card-img-container">
                      <img src={i.img} alt={i.title} className="album-card-img"/>
                    </div>
                    <div className="album-title-container">
                      <h1 className="album-title">{i.title}</h1>
                    </div>
                  </div>
              )
            }
            else if(i.img===null){
              return(
                <div className="album-card" onClick={()=>{navigate('/title');}}>
                  <div className="album-card-img-container">
                    <video src={i.video} className="album-card-video" autoPlay muted loop></video>
                  </div>
                  <div className="album-title-container">
                    <h1 className="album-title">{i.title}</h1>
                  </div>
                </div>
              )
            }
            else{
              return(
                <div className="album-card"onClick={()=>{navigate('/title');}}>
                  <div className="album-card-img-container">
                    <img src={i.img} alt={i.title} className="album-card-img"/>
                  </div>
                  <div className="album-title-container">
                    <h1 className="album-title">{i.title}</h1>
                  </div>
                </div>
              )
            }
          })
        }
      </div>
    </>
  )
}

export default Photography
