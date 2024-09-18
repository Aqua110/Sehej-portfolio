import React, { useEffect, useState } from "react";
import { workData } from "../../data/workData";
import deleteicon from "../../Assets/icons/delete.png";
import addicon from "../../Assets/icons/add-image.png"
import editicon from "../../Assets/icons/pen.png"
import { Link, useNavigate } from "react-router-dom";

const Deletework = () => {
  const navigate = useNavigate()
  const [work_data, setwork_data] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const respose = await fetch("https://node-app.sehejkaur.com/getworks");
      const data = await respose.json();
      setwork_data(data);
    } catch (error) {
      console.log("eeror", error);
    }
  };

  const handledelete = async (id) => {
    try {
      if (
        window.confirm(
          "Do you want to delete this work? Once you delete, you can't restore it."
        ) === true
      ) {
        const response = await fetch(`https://node-app.sehejkaur.com/delproject/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          console.log("Item deleted successfully");
          getData();
        } else {
          console.error("Error deleting item");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
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
                  <div className='link'>
                    <div className="work-img-container">
                      <img src={i.mainimg} alt={i.type} className="work-img"/>
                    </div>
                  </div>
                  <div className="work-title-container">
                    <p className="work-title">{i.title}</p>
                    <h1 className="work-type">{i.type}</h1>
                    <div className="icon-container">
                    <img src={deleteicon} alt="delete icon" className="delete-icon" onClick={() => { handledelete(i.id);}}/>
                    <img src={editicon} alt="Edit icon " className="delete-icon" onClick={()=>navigate(`/admin/updatework/${i.id}`)}/>
                    </div>
                  </div>
                </div> 
              )
            })
          }
          <div className="work-card">
                  <Link to='/admin/addwork' className='link'>
                    <div className="work-img-container">
                      <img src={addicon} alt="Add work" className="add-icon"/>
                    </div>
                  </Link>
                </div> 
        </div>
      </div>
    </>
  );
};

export default Deletework;
