import React from 'react'
import '../Assets/css/Photography.css'
import album_img1 from '../Assets/img/HKRNcover.webp'

const photography = () => {
  return (
    <>
      <div className="album-container">
        <div className="album-card">
          <div className="album-card-img-container">
            <img src={album_img1} alt="" className="album-card-img"/>
          </div>
          <div className="album-title-container">
            <h1 className="album-title">People</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default photography
