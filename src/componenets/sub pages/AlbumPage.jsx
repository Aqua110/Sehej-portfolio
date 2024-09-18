import React, { useEffect, useState } from 'react'
import { dubaiAlbum } from '../../data/dubaiAlbum'
import deleteicon from '../../Assets/icons/delete.png'
import addicon from '../../Assets/icons/add-image.png'
import { useNavigate, useParams } from 'react-router'

const AlbumPage = () => {
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


  return (
    <>
        <div className="album-container">
            {
                dubaiData.map((i, index)=>{
                    return(
                        <div className="album-img-container" key={index} onClick={()=>navigate(`/photography/${param.path}/image/${i.id}`)}>
                            <img src={i.img} alt="" className="album-img" />
                        </div>
                    )
                })
            }
        </div>      
    </>
  )
}

export default AlbumPage;