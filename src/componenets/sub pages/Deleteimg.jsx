import React, { useEffect, useState } from 'react'
// import { dubaiAlbum } from '../../data/dubaiAlbum'
import deleteicon from '../../Assets/icons/delete.png'
import addicon from '../../Assets/icons/add-image.png'
import { useNavigate, useParams } from 'react-router'

const Deleteimg = () => {
    const navigate = useNavigate();
    const param = useParams();
    const [dubaiData , setdubaiData] = useState([]);


    useEffect(() => {
        getData()
    },[]);
    const getData = async() =>{
        try {
            
            const respose  = await fetch("https://node-app.sehejkaur.com/albums");
            const data = await respose.json();
            // console.log("Respose of server", data);
            const imgList = data.filter(data => data.catogary === param.path);
            setdubaiData(imgList)
        } catch (error) {
            console.log("eeror", error)
        }
    }

    const handledelete = async (id) => {
        try {
          if (
            window.confirm(
              "Do you want to delete this work? Once you delete, you can't restore it."
            ) === true
          ) {
            const response = await fetch(`https://node-app.sehejkaur.com/delimg/${id}`, {
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
    <>
    <div className='delete-form-container'>
        <div className="album-container">
            {
              dubaiData.map((i, index)=>{
                    return(
                        <div className="album-img-container" key={index}>
                            <img src={i.img} alt="" className="album-img" />
                            <div className="del-icon-container"><img src={deleteicon} alt="Delete Icon" className="delete-icon" onClick={()=>handledelete(i.id)}/></div>
                        </div>
                    )
                })
            }
            <div className="album-img-container" onClick={()=>navigate('/admin/addimg')}>
                <img src={addicon} alt="Add icon" className="add-icon" />
            </div>
        </div>      
    </div>
    </>
  )
}

export default Deleteimg;