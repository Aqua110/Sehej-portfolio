import React, { useRef, useState } from "react";
import Spinner from "../Spinner";

const Addimg = () => {
  const [imputalbum, setinputalbum] = useState("");
  const [image, setImage] = useState(null);
  const [loader, setLoader] = useState(false);
  const fileInputRef = useRef(null); // Create a ref for the file input

  // const generateUniqueId = () => {
  //   return Math.floor(10000 + Math.random() * 90000); // Generates a 5-digit random number
  // };
  const handleSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();

    // const randomId = generateUniqueId(); // Adds a 4-digit random number to Date.now()

    // Create a FormData object to send the album name, image, and ID
    const formData = new FormData();
    formData.append("catogary", imputalbum.toLocaleLowerCase()); // Album name
    formData.append("img", image); // Image file
    // formData.append("id", randomId);          // Random ID

    try {
      const response = await fetch("https://node-app.sehejkaur.com/albums", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setLoader(false);
      console.log(data, "response");

      // Reset the form after successful submission
      setinputalbum("");
      setImage(null);
      fileInputRef.current.value = null; // Clear the file input
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Store the selected file in state
  };

  return (
    <>
      {loader? (<Spinner/>):
        (<div className="form-container">
        <h1>Add Image to Any Album</h1>
        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-feild">
            <label htmlFor="album">Album Name :</label> <br />
            <input
              type="text"
              placeholder="eg. Dubai"
              value={imputalbum}
              onChange={(e) => setinputalbum(e.target.value)}
              required
            />
          </div>
          <div className="form-feild-file">
            <label htmlFor="mainimg">Select the Image :</label> <br />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
              ref={fileInputRef}
            />
          </div>
          <div className="form-feild">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>)}
    </>
  );
};

export default Addimg;
