import React, { useState } from 'react'
import '../../Assets/css/subpageCSS/album_page.css'
import { dubaiAlbum } from '../../data/dubaiAlbum'

const AlbumPage = () => {

    const [dubai_album] = useState(dubaiAlbum);

  return (
    <div className='full-container'>
        <div className="album-container">
        {
            dubai_album.map((i)=>{
                return(
                    <div className="album-img-container">
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
