import React from 'react'
import { Link } from 'react-router-dom'
import '../Assets/css/Home.css'
import Hero_video from '../Assets/videos/hero-video.webm'
import facebook_icon from '../Assets/icons/facebook.webp'
import instagram_icon from '../Assets/icons/instagram.webp'
import pintrest_icon from '../Assets/icons/pintrest.webp'
import vimeo_icon from '../Assets/icons/vimeo.webp'
import youtube_icon from '../Assets/icons/youtube.webp'

const Home = () => {
const social_link = [
  {name : 'facebook',img : facebook_icon,link : '#'},
  {name : 'Instagram',img : instagram_icon,link : '#'},
  {name : 'Pintrest',img : pintrest_icon,link : '#'},
  {name : 'Vimeo',img : vimeo_icon,link : '#'},
  {name : 'Youtube',img : youtube_icon,link : '#'}
]

  return (
    <>
      <div className="hero-video-container">
        <video src={Hero_video} className="hero-video" autoplay="true" muted loop></video>
        <div className="hero-video-cover-container"></div>
        <div className="hero-tagline-container">
          <p className="hero-tagline">where <span className="highlight">creativty</span> <br />meets <span className="highlight">storytelling</span> <span className="bold">&</span><br /><span className="highlight">Design</span> comes to life!</p>
        </div>
        <div className="hero-social-link-container">
            {
              social_link.map((element)=>{
                return (
                  <Link to={element.link}><img src={element.img} alt={element.name} className="hero-socail-link" /></Link>
                )                
              })
            }
          </div>
      </div>
    </>
  )
}

export default Home
