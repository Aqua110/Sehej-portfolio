import React from 'react'
import '../../Assets/css/subpageCSS/album_page.css'
import album_img1 from '../../Assets/img/th (1).webp'
import album_img2 from '../../Assets/img/th (2).webp'
import album_img3 from '../../Assets/img/th (3).webp'
import album_img4 from '../../Assets/img/th (4).webp'

const AlbumPage = () => {
    const album_data =[album_img1,album_img3,album_img4,album_img1,album_img2,album_img3,album_img4,album_img1,album_img2,album_img3,album_img4,album_img2,album_img3,album_img4]

  return (
    <div className='full-container'>
        <div className="album-container">
        {
            album_data.map((i)=>{
                return(
                    <div className="album-img-container">
                        <img src={i} alt="" className="album-img" />
                    </div>
                )
            })
        }
        </div>      
    </div>
  )
}

export default AlbumPage
