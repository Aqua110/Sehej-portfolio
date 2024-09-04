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
            <p className="about-para">Sehej Kaur is a communication designer working with brands and companies in Delhi and UK. She was born and raised in New Delhi, India and has pursued her undergraduate degree from the prestigious National Institute of Design. Her specialisation lies in brand strategy and identity design. <br /><br />
            
            Sehej has been in the industry for around four years having worked for iconic Indian brands like Mother Dairy, SBI, and Eno as a communication and digital designer. Her range of work varies from food and beverage, to medical, as well as wellness brands. Sehej has created extensive event branding for a plethora of weddings in India and overseas. Sehej is currently working with companies in India and a few foreign startups. She also has experience working with Ogilvy, a leading brand marketing agency worldwide, and a few advertising agencies in India while pursuing her undergraduate degree. <br /> <br />
            
            In her free time, you can find her travelling across continents, engrossed in photography, and trying out new restaurants.</p>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default About
