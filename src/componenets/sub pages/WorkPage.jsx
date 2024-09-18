import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../../Assets/css/subpageCSS/work_page.css';

const WorkPage = () => {
  const { title } = useParams(); // Destructure title from useParams
  const [workData, setWorkData] = useState(null); // Start with null to avoid undefined issues

  useEffect(() => {
    // Define getData inside useEffect
    const getData = async () => {
      try {
        const response = await fetch('https://node-app.sehejkaur.com/getworks');
        const data = await response.json();
        const filterwork = data.find((item) => item.title === title); // Use find since you're getting one work item
        setWorkData(filterwork); // Set the fetched project data
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    getData();
  }, [title]); // Add title as dependency so it updates when route changes

  if (!workData) {
    return <div>Loading...</div>; // Render a loading message while data is being fetched
  }

  return (
    <>
      <div className="work-page-container">
        <div className="work-page-title-container">
          <p className="work-page-title">{workData.title}</p>
          <p className="work-page-desc">{workData.desc1}</p>
        </div>
      </div>
      <div className="work-page-main-img-container">
        <img src={workData.mainimg} alt={workData.title} className="work-page-main-img" />
      </div>
      <div className="work-desc-container">
        <p className="work-desc">{workData.desc2}</p>
      </div>
      <div className="more-img-container">
        {workData.img1?(<img src={workData.img1} alt={workData.type} className="more-img"/>):(<></>)}
        {workData.img2?(<img src={workData.img2} alt={workData.type} className="more-img"/>):(<></>)}
      </div>
    </>
  );
};

export default WorkPage;
