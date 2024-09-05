import React, { useEffect, useState } from 'react'
import '../../Assets/css/subpageCSS/album_page.css'
import { dubaiAlbum } from '../../data/dubaiAlbum'
import { useParams } from 'react-router';

const AlbumPage = () => {
    const param = useParams();
    const [dubaiData , setdubaiData] = useState(dubaiAlbum);


    useEffect(() => {
        getData()
    },[]);
    const getData = async() =>{
        try {
            
            const respose  = await fetch("http://localhost:8000/albums");
            const data = await respose.json();
            // console.log("Respose of server", data);
            const imgList = data.filter(data => data.catogary === param.path);
            console.log(param.path);
            setdubaiData(imgList)
        } catch (error) {
            console.log("eeror", error)
        }
    }
    console.log(dubaiData);

  return (
    <div className='full-container'>
        <div className="album-container">
        {
            dubaiData.map((i, index)=>{
                return(
                    <div className="album-img-container" key={index}>
                        <img src={i.img} alt="" className="album-img" />
                    </div>
                )
            })
        }
        </div>      
    </div>
  )
}

export default AlbumPage
