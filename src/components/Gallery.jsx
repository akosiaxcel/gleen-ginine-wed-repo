import React, { useState } from "react";
import { storage } from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Gallery = () => {
  const [image, setImage] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = () => {
    const storageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Handle progress if needed
      },
      (error) => {
        console.error("Error uploading image: ", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrls((prev) => [...prev, downloadURL]);
        });
      }
    );
  };

  return (
    <div>
      <h2>Gallery</h2>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>

      <div>
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt="uploaded" style={{ width: "100px" }} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;