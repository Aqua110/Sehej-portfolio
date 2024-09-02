import React from 'react'
import { Link } from 'react-router-dom'
// import WorkDetails from './sub pages/Work_details'
import '../Assets/css/Work.css'
import work_img1 from '../Assets/img/Ashwin&Khushbu_WeddingInvitationDesign.webp'
import work_img2 from '../Assets/img/HKRNcover.webp'
import work_img3 from '../Assets/img/Kunal&Shreya_WeddingInvitationDesign.webp'
import work_img4 from '../Assets/img/Ted&Karna_WeddingInvitationDesign.webp'
import work_img5 from '../Assets/img/YagaLiving.webp'
import work_img6 from '../Assets/img/AsterionStarPetCBD_PackagingDesign.webp'
import work_img7 from '../Assets/img/World Government Summit_ Data Visualisation Design.webp'
import work_img8 from '../Assets/img/MilkyMoo_Brand Identity Design.webp'

const Work = () => {
  const work_data = [
    {title : 'Milky Moo',                   type : 'Branding',                    img : work_img8},
    {title : 'Asterion Star',               type : 'Packaging Design',            img : work_img6},
    {title : 'Yaga',                        type : 'Brand Identity Design',       img : work_img5},
    {title : 'Ashwin & Khushbu',            type : 'Wedding Invitation Design',   img : work_img1},
    {title : 'Kunal & Shreya',              type : 'Wedding Invitation Design',   img : work_img3},
    {title : 'Ted & Karna',                 type : 'Wedding Invitation Design',   img : work_img4},
    {title : 'World Government Summit',     type : 'Data Visualisation',          img : work_img7},
    {title : 'HKRN',                        type : 'Logo Designing',              img : work_img2},
  ]

  return (
    <>
      <div className="work-body">
        <div className="hero-para-container">
          <p className="hero-para">
           Hi! I’m <span className="highlight">Sehej Kaur</span>, a Digital Designer based in New Delhi.<br />I create brand identities, event branding, packaging designs,<br /> and boutique invitations.
          </p>
        </div>
        <div className="work-card-container">
          {
            work_data.map((i)=>{
              return(
                <div className="work-card">
                  <Link to='/title'>
                    <div className="work-img-container">
                      <img src={i.img} alt={i.type} className="work-img"/>
                    </div>
                  </Link>
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
      {/* <Route path='/title' element={<WorkDetails/>}></Route> */}
    </>
  )
}

export default Work
