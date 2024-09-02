import React from 'react'
import '../../Assets/css/subpageCSS/work_page.css'
import main_img from '../../Assets/img/MilkyMoo_Brand Identity Design.webp'

const WorkPage = () => {
  return (
    <>
        <div className="work-page-container">
          <div className="work-page-title-container">
            <p className="work-page-title">
              Milky Moo
            </p>
            <p className="work-page-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia fugiat, dolores laborum quas voluptatibus harum nisi facere placeat vero excepturi.  
            </p> 
          </div>          
        </div>
        <div className="work-page-main-img-container">
          <img src={main_img} alt="" className="work-page-main-img" />
        </div>
        <div className="work-desc-container">
          <p className="work-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis tenetur sunt quaerat corrupti a assumenda at maxime quo quidem aliquid! Quae commodi aliquid at eligendi exercitationem pariatur sunt itaque, ipsa veritatis? Maxime consequuntur voluptas provident impedit maiores minus, sit voluptatum reprehenderit tenetur! Fugit unde earum libero nihil assumenda accusantium nostrum sapiente id temporibus impedit eveniet, excepturi reiciendis. Totam sint, dignissimos eos perspiciatis odit voluptates? Quos facilis quisquam tempora maxime beatae quia veniam totam. Ullam, provident nobis sunt est maiores numquam praesentium quisquam ducimus ut nesciunt reprehenderit sit quas quaerat corrupti non at quibusdam facere, quasi architecto delectus magni voluptas quo.</p>
        </div>
        <div className="more-img-container">
          <img src={main_img} alt="" className="more-img" />
          <img src={main_img} alt="" className="more-img" />
        </div>
    </>
  )
}

export default WorkPage;
