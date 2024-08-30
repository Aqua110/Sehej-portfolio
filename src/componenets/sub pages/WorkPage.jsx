import React from 'react'
import '../../Assets/css/subpageCSS/work_page.css'
import main_img from '../../Assets/img/Ashwin&Khushbu_WeddingInvitationDesign.webp'

const WorkPage = () => {
  return (
    <>
        <div className="work-page-container">
          <div className="work-page-title-container">
            <p className="work-page-title">
              Ashwin & Khushbu
            </p>
            <p className="work-page-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia fugiat, dolores laborum quas voluptatibus harum nisi facere placeat vero excepturi.  
            </p> 
          </div>          
        </div>
        <div className="work-page-main-img-container">
          <img src={main_img} alt="" className="work-page-main-img" />
        </div>
    </>
  )
}

export default WorkPage;
