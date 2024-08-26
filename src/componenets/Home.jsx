import React from 'react'
import '../Assets/css/Home.css'
import Hero_video from '../Assets/videos/hero-video.webm'

const Home = () => {
  return (
    <>
      <div className="hero-video-container">
        <video src={Hero_video} className="hero-video" autoplay="true" muted loop></video>
        <div className="hero-video-cover-container"></div>
      </div>
    </>
  )
}

export default Home
