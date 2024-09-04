import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import WorkDetails from './sub pages/Work_details'
import '../Assets/css/Work.css'
import { workData } from '../data/workData.js'
import Dubai from "../componenets/Demo.jsx"

const Work = () => {

  const[work_data] = useState(workData);

  return (
    <>
    <Dubai />
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
                  <Link to={`/work/${i.id}`} className='link'>
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
