import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router";
import Spinner from "../Spinner";
const Addwork = () => {
  const param = useParams();
  const [albumtitle, setalbumtitle] = useState("");
  const [albumtype, setalbumtype] = useState("");
  const [shortdesc, setshortdesc] = useState("");
  const [maindesc, setmaindesc] = useState("");
  const [image, setImage] = useState(null);
  const [img1, setimg1] = useState(null);
  const [img2, setimg2] = useState(null);
  const [check1, setcheck1] = useState(false);
  const [check2, setcheck2] = useState(false);
  const [existingImage, setExistingImage] = useState(null); // For the cover image
  const [existingImg1, setExistingImg1] = useState(null); // For the additional image 1
  const [existingImg2, setExistingImg2] = useState(null); // For the additional image 2
  const [existingImagePatharr, setExistingImagePatharr] = useState(null);
  const [existingImg1Patharr, setExistingImg1Patharr] = useState(null);
  const [existingImg2Patharr, setExistingImg2Patharr] = useState(null);
  const fileInputRef = useRef(null);
  const [loader, setLoader] = useState(false);

  const generateUniqueId = () => {
    return Math.floor(10000 + Math.random() * 90000); // Generates a 5-digit random number
  };

  useEffect(() => {
    if (param.id) {
      // Fetch the data if param.id is present (editing mode)
      const getData = async () => {
        try {
          const response = await fetch(
            "https://node-app.sehejkaur.com/getworks"
          );
          const data = await response.json();

          // Filter the array to find the object with the matching id
          const work = data.find((item) => item.id === parseInt(param.id));

          if (work) {
            // Fill the form with the filtered work data
            setalbumtitle(work.title);
            setalbumtype(work.type);
            setshortdesc(work.desc1);
            setmaindesc(work.desc2);
            setcheck1(!!work.img1);
            setcheck2(!!work.img2);

            // Set existing image URLs to display as previews
            setExistingImage(work.mainimg);
            setExistingImg1(work.img1);
            setExistingImg2(work.img2);
            if (work.mainimg) {
              setExistingImagePatharr(work.mainimg.split("/"));
            }
            if (work.img1) {
              setExistingImg1Patharr(work.mainimg.split("/"));
            }
            if (work.img2) {
              setExistingImg2Patharr(work.mainimg.split("/"));
            }
          } else {
            console.error(`No work found with id: ${param.id}`);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      getData();
    }
  }, [param.id]);

  const handleSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();
    // const randomId = generateUniqueId();
    const formData = new FormData();
    formData.append("title", albumtitle);
    formData.append("type", albumtype);
    formData.append("mainimg", image);
    formData.append("desc1", shortdesc);
    formData.append("desc2", maindesc);
    // formData.append("id", randomId);
    if (check1) formData.append("img1", img1);
    if (check2) formData.append("img2", img2);

    try {
      const response = await fetch("https://node-app.sehejkaur.com/addwork", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setLoader(false);

      console.log(data, "response");

      // Reset the form after submission
      setalbumtitle("");
      setalbumtype("");
      setshortdesc("");
      setmaindesc("");
      setImage(null);
      setimg1(null);
      setimg2(null);
      fileInputRef.current.value = null;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", albumtitle);
    formData.append("type", albumtype);

    // Handle the main image logic (upload new or use existing)
    if (image) {
      formData.append("mainimg", image);
    } else if (existingImagePatharr && existingImagePatharr.length >= 4) {
      // Append existing image path if no new image is selected
      formData.append(
        "mainimg",
        existingImagePatharr[3].concat("/", existingImagePatharr[4])
      );
    }

    // Handle additional images
    if (check1) {
      if (img1) {
        formData.append("img1", img1); // New image1
      } else if (existingImg1Patharr && existingImg1Patharr.length >= 4) {
        formData.append(
          "img1",
          existingImg1Patharr[3].concat("/", existingImg1Patharr[4])
        ); // Existing img1
      }
    }

    if (check2) {
      if (img2) {
        formData.append("img2", img2); // New image2
      } else if (existingImg2Patharr && existingImg2Patharr.length >= 4) {
        formData.append(
          "img2",
          existingImg2Patharr[3].concat("/", existingImg2Patharr[4])
        ); // Existing img2
      }
    }

    formData.append("desc1", shortdesc);
    formData.append("desc2", maindesc);

    try {
      const response = await fetch(
        `https://node-app.sehejkaur.com/updatework/${param.id}`,
        {
          method: "PUT",
          body: formData,
        }
      );
      const data = await response.json();
      console.log(data, "response");

      // Reset the form after submission
      setalbumtitle("");
      setalbumtype("");
      setshortdesc("");
      setmaindesc("");
      setImage(null);
      setimg1(null);
      setimg2(null);
      fileInputRef.current.value = null;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleImageChange = (e) => setImage(e.target.files[0]);
  const handleimg1Change = (e) => setimg1(e.target.files[0]);
  const handleimg2Change = (e) => setimg2(e.target.files[0]);
  const handlecheck1 = (e) => setcheck1(e.target.checked);
  const handlecheck2 = (e) => setcheck2(e.target.checked);

  return (
    <>
      {loader ? (
        <Spinner />
      ) : (
        <div className="form-container">
          <h1>{param.id ? "Edit Work" : "Add a new Work"}</h1>
          <form
            onSubmit={param.id ? handleUpdate : handleSubmit}
            className="admin-form"
          >
            <div className="form-feild">
              <label htmlFor="album">Work Title : </label> <br />
              <input
                type="text"
                placeholder="eg. Dubai"
                value={albumtitle}
                onChange={(e) => setalbumtitle(e.target.value)}
                required
              />
            </div>
            <div className="form-feild">
              <label htmlFor="album">Work Type : </label> <br />
              <input
                type="text"
                placeholder="eg. Dubai"
                value={albumtype}
                onChange={(e) => setalbumtype(e.target.value)}
                required
              />
            </div>
            <div className="form-feild">
              <label htmlFor="album">Short Description : </label> <br />
              <textarea
                cols={100}
                rows={4}
                placeholder="Short description"
                value={shortdesc}
                onChange={(e) => setshortdesc(e.target.value)}
                required
              />
            </div>
            <div className="form-feild">
              <label htmlFor="album">Main Description : </label> <br />
              <textarea
                cols={100}
                rows={20}
                placeholder="Main description"
                value={maindesc}
                onChange={(e) => setmaindesc(e.target.value)}
                required
              />
            </div>
            <div className="form-feild-file">
              <label htmlFor="mainimg">Upload the cover Image : </label> <br />
              {existingImage && (
                <div>
                  <img src={existingImage} alt="Current Cover" width="150" />
                  <p>Current Image</p>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                required={!param.id} // Image is required when adding a new work
              />
            </div>
            <div>
              <label htmlFor="mainimg">Upload the additional Images : </label>{" "}
              <br />
            </div>
            <div className="form-feild-file">
              <input type="checkbox" checked={check1} onChange={handlecheck1} />
              {existingImg1 && (
                <div>
                  <img
                    src={existingImg1}
                    alt="Current Additional Pic 1"
                    width="150"
                  />
                  <p>Current Image 1</p>
                </div>
              )}
              <input
                disabled={!check1}
                type="file"
                accept="image/*"
                onChange={handleimg1Change}
                ref={fileInputRef}
              />
            </div>
            <div className="form-feild-file">
              <input type="checkbox" checked={check2} onChange={handlecheck2} />
              {existingImg2 && (
                <div>
                  <img
                    src={existingImg2}
                    alt="Current Additional Pic 2"
                    width="150"
                  />
                  <p>Current Image 2</p>
                </div>
              )}
              <input
                disabled={!check2}
                type="file"
                accept="image/*"
                onChange={handleimg2Change}
                ref={fileInputRef}
              />
            </div>
            <div className="form-feild">
              <button type="submit" className="submit-btn">
                {param.id ? "Update" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Addwork;
