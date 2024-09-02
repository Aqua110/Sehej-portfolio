import React from 'react'
import '../Assets/css/footer.css'
import facebook_icon from '../Assets/icons/facebook.webp'
import instagram_icon from '../Assets/icons/instagram.webp'
import pintrest_icon from '../Assets/icons/pintrest.webp'
import vimeo_icon from '../Assets/icons/vimeo.webp'
import youtube_icon from '../Assets/icons/youtube.webp'
import phone_icon from '../Assets/icons/phone.webp'
import mail_icon from '../Assets/icons/mail.webp'

const Footer = () => {

  const social_data =[
    {name: 'Facebook',          img:facebook_icon},
    {name: 'Instagram',         img:instagram_icon},
    {name: 'Pintrest',          img:pintrest_icon},
    {name: 'Vimeo',             img:vimeo_icon},
    {name: 'Youtube',           img:youtube_icon}
  ]

  return (
    <>
      <div className="footer-container">
        <div className="main-footer">
          <h1 className="footer-heading">Sehej</h1>
          <ul className="social-link-list">
            {
              social_data.map((i)=>{
                return(
                  <li className="social_link"><img src={i.img} alt={i.name} className="social-link-img" /></li>
                )
              })
            }
           </ul>
          <div className="footer-contact">
            <div className="contact-item"><img src={phone_icon} alt="contact" className="contact-icon" /><p className="contact-para">8744050851</p></div>
            <div className="contact-item"><img src={mail_icon} alt="contact" className="contact-icon" /><p className="contact-para"> sehejk24@gmail.com</p></div> 
          </div>
        </div>
        <div className="copyright-container">
          <p className="copyright-para">&copy; 2024 All rights reserved</p>
        </div>
      </div>
      
    </>
  )
}

export default Footer
