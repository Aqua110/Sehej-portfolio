import React, { useState } from 'react'
import { useParams } from 'react-router'
import '../../Assets/css/subpageCSS/work_page.css'
import { workData } from '../../data/workData'

const WorkPage = () => {

  const param = useParams();
  const [work_data] = useState(workData);
  const [project] = useState(work_data[param.id-1]);

  return (
    <>
        <div className="work-page-container">
          <div className="work-page-title-container">
            <p className="work-page-title">
              {project.title}
            </p>
            <p className="work-page-desc">{project.desc1}</p> 
          </div>          
        </div>
        <div className="work-page-main-img-container">
          <img src={project.img} alt="" className="work-page-main-img" />
        </div>
        <div className="work-desc-container">
          <p className="work-desc">{project.desc2}</p>
        </div>
        <div className="more-img-container">
          {
            project.img2.map((i)=>{
              return(
                <img src={i} alt={project.type} className="more-img" />
              )            
            })
          }
        </div>
        
    </>
  )
}

export default WorkPage;
