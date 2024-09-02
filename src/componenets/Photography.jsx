import React from 'react'
import '../Assets/css/Photography.css'
import album_img1 from '../Assets/img/people cover.webp'
import album_img2 from '../Assets/img/nature cover.webp'
import album_img3 from '../Assets/img/dubai cover.webp'
import album_img4 from '../Assets/img/london cover.webp'
import album_img5 from '../Assets/img/kashmir cover.webp'
import album_img6 from '../Assets/img/thailand cover.webp'
import album_img7 from '../Assets/img/turkey cover.webp'

const photography = () => {
   const album_data = [
    {title : 'People',          img : album_img1},
    {title : 'Nature',          img : album_img2},
    {title : 'Dubai',           img : album_img3},
    {title : 'London',          img : album_img4},
    {title : 'Kashmir',         img : album_img5},
    {title : 'Thailand',        img : album_img6},
    {title : 'Turkey',          img : album_img7},
   ];
  return (
    <>
      <div className="album-container">
        {
          album_data.map((i)=>{
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
          })
        }
      </div>
    </>
  )
}

export default photography
