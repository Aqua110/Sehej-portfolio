import React from 'react'
import '../Assets/css/Work.css'
import work_img1 from '../Assets/img/Ashwin&Khushbu_WeddingInvitationDesign.webp'
import work_img2 from '../Assets/img/HKRNcover.webp'
import work_img3 from '../Assets/img/Kunal&Shreya_WeddingInvitationDesign.webp'
import work_img4 from '../Assets/img/Ted&Karna_WeddingInvitationDesign.webp'
import work_img5 from '../Assets/img/YagaLiving.webp'
import work_img6 from '../Assets/img/AsterionStarPetCBD_PackagingDesign.webp'

const Work = () => {
  const work_data = [
    {title : 'Ashwin & Khushbu',  type : 'Wedding invitation',  img : work_img1},
    {title : 'HKRN',              type : 'Logo Designing',      img : work_img2},
    {title : 'Kunal & Shreya',    type : 'Wedding invitation',  img : work_img3},
    {title : 'Ted & Karna',       type : 'Wedding invitation',  img : work_img4},
    {title : 'Yaga',              type : 'Poster Design',       img : work_img5},
    {title : 'Asterion Star',     type : 'Branding',            img : work_img6},
  ]

  return (
    <>
      <div className="work-body">
        <div className="hero-para-container">
          <p className="hero-para">
           Hi! I’m <span className="highlight">Sehej Kaur</span>, a Digital Designer based in New Delhi.<br />I create brand identities, event branding, packaging designs, and boutique invitations.
          </p>
        </div>
        <div className="work-card-container">
          {
            work_data.map((i)=>{
              return(
                <div className="work-card">
                  <div className="work-img-container">
                    <img src={i.img} alt={i.title} className="work-img" />
                  </div>
                  <div className="work-title-container">
                    <p className="work-title">{i.title}</p>
                    <h1 className="work-type">{i.type}</h1>
                  </div>
                </div> 
              )
            })
          }
        </div>
      </div>
      
    </>
  )
}

export default Work
