import React from 'react'
import '../Assets/css/about.css'
import main_img from '../Assets/img/professional_headshots_tampa_011.jpg'

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-inner-container">
          <div className="about-main-img-container">
            <img src={main_img} alt="" className="about-main-img" />
          </div>
          <div className="about-content-container">
            <h1 className='about-heading'>Sehej Kaur</h1>
            <br />
            <p className="about-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cum esse, neque cumque aliquid officiis quidem nihil molestiae veniam laboriosam mollitia dolorum autem accusantium dolor fugit voluptatem aliquam numquam aspernatur molestias magni dolores ex harum repellat perspiciatis eveniet ad incidunt eius, sit similique, reiciendis maxime nihil non? <br /> <br/>Iusto quidem dolorem enim quasi labore libero magni delectus mollitia nesciunt doloremque numquam, exercitationem a magnam dignissimos commodi sunt quisquam, odit fugiat qui eligendi voluptate obcaecati recusandae.  Dolores nisi blanditiis vitae! Perspiciatis enim sapiente dolorum consectetur beatae necessitatibus accusantium consequuntur pariatur praesentium deserunt qui quaerat veritatis earum quis, illum molestias impedit. Odit quaerat praesentium nisi? <br/><br/> Officia quis iste expedita blanditiis laudantium consequatur, aliquam provident voluptatibus delectus alias saepe necessitatibus enim? Eveniet harum eius esse veritatis, aperiam optio itaque dolore incidunt iure laudantium sit adipisci quo culpa necessitatibus sequi doloremque enim ab, provident veniam labore nostrum nam.</p>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default About
