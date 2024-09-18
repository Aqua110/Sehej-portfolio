import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Assets/css/Photography.css";
import { albumList } from "../data/photographyData";
import Spinner from "./Spinner";

const Photography = () => {
  const [album_list, setalbum_list] = useState([]);
  const [loader, setLoader] = useState(false);
  // setalbum_list(albumList);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    setLoader(true);
    try {
      const respose = await fetch("https://node-app.sehejkaur.com/getalbums");
      const data = await respose.json();
      // console.log("Respose of server", data);
      setalbum_list(data);
      setLoader(false);
    } catch (error) {
      console.log("eeror", error);
    }
  };

  return (
    <>
      {loader ? (
        <Spinner />
      ) : (
        <div className="albums-container">
          {album_list.map((i) => (
            <div
              key={i.id}
              className="album-card"
              onClick={() => {
                navigate(`/photography/${i.path}`);
              }}
            >
              <div className="album-card-img-container">
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
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Photography;
