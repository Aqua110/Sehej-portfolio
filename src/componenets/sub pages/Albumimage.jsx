import React, { useEffect, useState } from 'react';
import '../../Assets/css/subpageCSS/album_page.css';
import { useParams } from 'react-router';
import Spinner from '../Spinner';

const Albumimage = () => {
  const param = useParams();
  const [dubaiData, setDubaiData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // State for the selected image
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getData();
  }, [param.path]);

  useEffect(() => {
    // Find and set the selected image based on the param.id
    if (dubaiData.length > 0) {
      const image = dubaiData.find(item => item.id === parseInt(param.id));
      setSelectedImage(image);
    }
  }, [dubaiData, param.id]); // Runs whenever dubaiData or param.id changes

  const getData = async () => {
    try {
      setLoader(true);
      const response = await fetch('https://node-app.sehejkaur.com/albums');
      const data = await response.json();
      const imgList = data.filter(item => item.catogary === param.path);
      setLoader(false)

      if (JSON.stringify(imgList) !== JSON.stringify(dubaiData)) {
        setDubaiData(imgList);
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  return (
    <>

      {loader?(
        <Spinner/>
      ) : (
        <div className="fullimg-container">
        {selectedImage && <img src={selectedImage.img} alt="" className="fullimg" />}
      </div>
    )}
    </>
  );
};

export default Albumimage;

