import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import WorkDetails from './sub pages/Work_details'
import '../Assets/css/Work.css'
// import { workData } from '../data/workData.js'
import { useEffect } from 'react'
import Spinner from './Spinner.jsx'

const Work = () => {

  const[work_data,setwork_data] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getData()
},[]);
const getData = async() =>{
  setLoader(true);
    try {
        
        const respose  = await fetch("https://node-app.sehejkaur.com/getworks");
        const data = await respose.json();
        // console.log("data", data)
        setwork_data(data);
        setLoader(false)
    } catch (error) {
        console.log("eeror", error)
    }
}

  return (
    <>

      {loader?(
        <Spinner/>
      ) :(
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
                <div className="work-card" key={i.id}>
                  <Link to={`/work/${i.title}`} className='link'>
                    <div className="work-img-container">
                      <img src={i.mainimg} alt={i.type} className="work-img"/>
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
    )}

    </>
  )
}

export default Work
