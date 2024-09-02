import React from 'react'
import '../Assets/css/Photography.css'
import album_img1 from '../Assets/img/people cover.webp'
import album_img2 from '../Assets/img/nature cover.webp'
import album_img3 from '../Assets/img/dubai cover.webp'
import album_img4 from '../Assets/img/london cover.webp'
import album_img5 from '../Assets/img/kashmir cover.webp'
import album_img6 from '../Assets/img/thailand cover.webp'
import album_img7 from '../Assets/videos/turkey cover.webm'

const photography = () => {
   const album_data = [
    {title : 'People',          img : album_img1,      video: null},
    {title : 'Nature',          img : album_img2,      video: null},
    {title : 'Dubai',           img : album_img3,      video: null},
    {title : 'London',          img : album_img4,      video: null},
    {title : 'Kashmir',         img : album_img5,      video: null},
    {title : 'Thailand',        img : album_img6,      video: null},
    {title : 'Turkey',          img : null,            video: album_img7},
   ];
  return (
    <>
      <div className="album-container">
        {
          album_data.map((i)=>{
            if(i.video===null){
              return(
                <div className="album-card">
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
                <div className="album-card">
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
                <div className="album-card">
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

export default photography
