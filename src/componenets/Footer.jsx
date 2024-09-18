import React from 'react';
import '../Assets/css/footer.css';
import logo from '../Assets/img/segej logo.webp';
import facebook_icon from '../Assets/icons/facebook.webp';
import instagram_icon from '../Assets/icons/instagram.webp';
import pintrest_icon from '../Assets/icons/pintrest.webp';
import vimeo_icon from '../Assets/icons/vimeo.webp';
import youtube_icon from '../Assets/icons/youtube.webp';
import phone_icon from '../Assets/icons/phone.webp';
import mail_icon from '../Assets/icons/mail.webp';
import { useNavigate } from 'react-router-dom';

const Footer = ({ handleLogout }) => {
  const navigate = useNavigate();

  const social_data = [
    { name: 'Facebook', img: facebook_icon },
    { name: 'Instagram', img: instagram_icon },
    { name: 'Pintrest', img: pintrest_icon },
    { name: 'Vimeo', img: vimeo_icon },
    { name: 'Youtube', img: youtube_icon }
  ];

  const handleButtonClick = () => {
    if (handleLogout) {
      handleLogout();
      navigate('/'); // Navigate to home or a specific page after logout
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <div className="footer-container">
        <div className="main-footer">
          <img src={logo} alt="sehej" className="footer-logo" />
          <ul className="social-link-list">
            {
              social_data.map((i, index) => (
                <li key={index} className="social_link">
                  <img src={i.img} alt={i.name} className="social-link-img" />
                </li>
              ))
            }
          </ul>
          <div className="footer-contact">
            <div className="contact-item">
              <img src={phone_icon} alt="contact" className="contact-icon" />
              <p className="contact-para">8744050851</p>
            </div>
            <div className="contact-item">
              <img src={mail_icon} alt="contact" className="contact-icon" />
              <p className="contact-para">sehejk24@gmail.com</p>
            </div>
          </div>
          <div className="login-button-container">
            <div className="login-button" onClick={handleButtonClick}>
              <p>{handleLogout ? 'Logout' : 'Login As Admin'}</p>
            </div>
          </div>
        </div>
        <div className="copyright-container">
          <p className="copyright-para">&copy; 2024 All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

