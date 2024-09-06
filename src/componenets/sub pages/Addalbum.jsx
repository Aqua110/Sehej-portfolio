import React, { useRef, useState } from "react";

const Addalbum = () => {
  const [albumtitle, setalbumtitle] = useState("");
  const [image, setImage] = useState(null);
  const [video, setvideo] = useState(null);
  const fileInputRef = useRef(null); // Create a ref for the file input

  const generateUniqueId = () => {
    return Math.floor(10000 + Math.random() * 90000); // Generates a 5-digit random number
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const randomId = generateUniqueId(); // Adds a 4-digit random number to Date.now()


    // Create a FormData object to send the album name, image, and ID
    const formData = new FormData();
    formData.append("title", albumtitle);  // Album name
    formData.append("path", albumtitle.toLocaleLowerCase());  // Album name
    formData.append("mainimg", image);            // Image file
    formData.append("mainvideo", video);            // Image file
    formData.append("id", randomId);          // Random ID

    try {
      const response = await fetch("http://localhost:8000/addalbum", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data, "response");

      // Reset the form after successful submission
      setalbumtitle("");
      setImage(null);
      setvideo(null);
      fileInputRef.current.value = null; // Clear the file input
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Store the selected file in state
  };
  const handlevideoChange = (e) => {
    setvideo(e.target.files[0]); // Store the selected file in state
  };

  return (
    <div className="form-container">
      <h1>Add a new Album</h1>
      <form onSubmit={handleSubmit} className="admin-form">
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
        <input type="radio" name="mainimg"/>
        <label htmlFor="mainimg">Upload the cover Image : </label> <br />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
          ref={fileInputRef}
        />
        </div>
        <div className="form-feild-file">
        <input type="radio" name="mainimg"/>
        <label htmlFor="mainimg">Upload the cover Video : </label> <br />
        <input
          type="file"
          accept="video/*"
          onChange={handlevideoChange}
          ref={fileInputRef}
        />
        </div>
        <div className="form-feild">
        <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Addalbum;