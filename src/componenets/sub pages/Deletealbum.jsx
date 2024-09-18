import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { albumList } from '../../data/photographyData'
import deleteicon from '../../Assets/icons/delete.png'
import addicon from '../../Assets/icons/add-image.png'
import editicon from '../../Assets/icons/pen.png'
import Spinner from '../Spinner'

const Deletealbum = () => {

  const [album_list,setalbum_list] = useState([]);
  // setalbum_list(albumList);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getData()
  },[]);
  const getData = async() =>{
    try {
        setLoader(true)
        const respose  = await fetch("https://node-app.sehejkaur.com/getalbums");
        const data = await respose.json();
        // console.log("Respose of server", data);
        setalbum_list(data)
        setLoader(false)
    } catch (error) {
        console.log("eeror", error)
    }
  }

  const handledelete = async (id) => {
    try {
      if (
        window.confirm(
          "Do you want to delete this album? Once you delete, you can't restore it."
        ) === true
      ) {
        const response = await fetch(`https://node-app.sehejkaur.com/delalbum/${id}`, {
          method: "DELETE",
        });
        console.log("response", response);
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
    <>{loader? (
      <Spinner/>
    ) : (
    <div className="delete-form-container">
      <div className="albums-container">
      {album_list.map((i) => (
            <div
              key={i.id}
              className="album-card"
            >
              <div className="album-card-img-container"onClick={() => {
                navigate(`/admin/photography/${i.path}`);
              }}>
                {i.mainimg !== null ? (
                  <img
                    src={i.mainimg}
                    alt={i.title}
                    className="album-card-img"
                  />
                ) : (
                  <video
                    src={i.mainvideo}
                    className="album-card-video"
                    autoPlay
                    muted
                    loop
                  ></video>
                )}
              </div>
              <div className="album-title-container">
                <h1 className="album-title">{i.title}</h1>
                <div className="icon-container">
                      <img src={deleteicon} alt="Delete Icon" className="delete-icon" onClick={()=>{handledelete(i.id)}} /> 
                      <img src={editicon} alt="Edit icon " className="delete-icon" onClick={()=>navigate(`/admin/updatealbum/${i.id}`)}/>
                      </div>
              </div>
            </div>
          ))}
             <div className="album-card" onClick={()=>{navigate(`/admin/addalbum`);}}>  
                    <div className="album-card-img-container">
                      <img src={addicon} alt='Add album' className="add-icon"/>
                    </div>
                </div>
      </div>
      </div>
    )}
    </>
  )
}


export default Deletealbum;