import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router";
import Spinner from "../Spinner";

const Addalbum = () => {
  const param = useParams();
  const [albumtitle, setalbumtitle] = useState("");
  const [image, setImage] = useState(null);
  const [video, setvideo] = useState(null);
  const [existingImage, setExistingImage] = useState(null);
  const [existingVideo, setExistingVideo] = useState(null);
  const fileInputRef = useRef(null); // Create a ref for the file input
  const filevideoref = useRef(null);
  const [radio, setradio] = useState();
  const [existingImagePatharr, setExistingImagePatharr] = useState(null);
  const [existingVideoPatharr, setExistingVideoPatharr] = useState(null);
  const [loader, setLoader] = useState(false);

  // const generateUniqueId = () => {
  //   return Math.floor(10000 + Math.random() * 90000); // Generates a 5-digit random number
  // };

  // Fetch album data if editing (param.id exists)
  useEffect(() => {
    if (param.id) {
      const getData = async () => {
        try {
          const response = await fetch("https://node-app.sehejkaur.com/albums");
          const data = await response.json();

          const album = data.find((item) => item.id === parseInt(param.id));

          if (album) {
            setalbumtitle(album.title);
            setExistingImage(album.mainimg);
            setExistingVideo(album.mainvideo);

            if (album.mainimg) {
              setExistingImagePatharr(album.mainimg.split("/"));
              setradio("img");
            } else if (album.mainvideo) {
              setExistingVideoPatharr(album.mainvideo.split("/"));
              setradio("video");
            }
          } else {
            console.error(`No album found with id: ${param.id}`);
          }
        } catch (error) {
          console.error("Error fetching album data:", error);
        }
      };

      getData();
    }
  }, [param.id]);

  // Handle submit for adding a new album
  const handleSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();
    // const randomId = generateUniqueId();

    const formData = new FormData();
    formData.append("title", albumtitle);
    formData.append("path", albumtitle.toLowerCase());
    // formData.append("id", randomId);

    if (radio === "img") {
      formData.append("mainimg", image);
    } else {
      formData.append("mainvideo", video);
    }

    try {
      const response = await fetch("https://node-app.sehejkaur.com/addalbum", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setLoader(false);
      console.log(data, "response");

      setalbumtitle("");
      setImage(null);
      setvideo(null);
      fileInputRef.current.value = null;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Handle update for existing albums
  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", albumtitle);
    formData.append("path", albumtitle.toLowerCase());

    // Handle image/video update
    if (radio === "img") {
      if (image) {
        formData.append("mainimg", image);
      } else if (existingImagePatharr && existingImagePatharr.length >= 4) {
        formData.append(
          "mainimg",
          existingImagePatharr[3].concat("/", existingImagePatharr[4])
        );
      }
    } else if (radio === "video") {
      if (video) {
        formData.append("mainvideo", video);
      } else if (existingVideoPatharr && existingVideoPatharr.length >= 4) {
        formData.append(
          "mainvideo",
          existingVideoPatharr[3].concat("/", existingVideoPatharr[4])
        );
      }
    }

    try {
      const response = await fetch(`https://node-app.sehejkaur.com/updatealbum/${param.id}`, {
        method: "PUT",
        body: formData,
      });

      const data = await response.json();
      console.log(data, "response");

      setalbumtitle("");
      setImage(null);
      setvideo(null);
      fileInputRef.current.value = null;
      filevideoref.current.value = null;
    } catch (error) {
      console.error("Error updating album:", error);
    }
  };

  const handleImageChange = (e) => setImage(e.target.files[0]);
  const handlevideoChange = (e) => setvideo(e.target.files[0]);

  const handleradio = (e) => {
    setradio(e.target.value);
    fileInputRef.current.value = null;
    filevideoref.current.value = null;
  };

  return (
    <>
      {loader?
      (<Spinner/>):
        (<div className="form-container">
        <h1>{param.id ? "Edit Album" : "Add a new Album"}</h1>
        <form onSubmit={param.id ? handleUpdate : handleSubmit} className="admin-form">
          <div className="form-feild">
            <label htmlFor="album">Album Name : </label> <br />
            <input
              type="text"
              placeholder="eg. Dubai"
              value={albumtitle}
              onChange={(e) => setalbumtitle(e.target.value)}
              required
            />
          </div>

          <div className="form-feild-file">
            <input type="radio" name="mediaType" value="img" onClick={handleradio} />
            <label htmlFor="mainimg">Upload the cover Image : </label> <br />
            {existingImage && (
              <div>
                <img src={existingImage} alt="Current Cover" width="150" />
                <p>Current Image</p>
              </div>
            )}
            <input
              disabled={!(radio === "img")}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              required={!param.id}
            />
          </div>

          <div className="form-feild-file">
            <input type="radio" name="mediaType" value="video" onClick={handleradio} />
            <label htmlFor="mainvideo">Upload the cover Video : </label> <br />
            {existingVideo && (
              <div>
                <video width="150" controls>
                  <source src={existingVideo} />
                </video>
                <p>Current Video</p>
              </div>
            )}
            <input
              disabled={!(radio === "video")}
              type="file"
              accept="video/*"
              onChange={handlevideoChange}
              ref={filevideoref}
            />
          </div>

          <div className="form-feild">
            <button type="submit" className="submit-btn">
              {param.id ? "Update Album" : "Submit Album"}
            </button>
          </div>
        </form>
        </div>)
      }
    </>
  );
};

export default Addalbum;

