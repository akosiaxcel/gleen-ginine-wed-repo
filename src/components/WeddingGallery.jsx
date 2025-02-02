import React, { useState, useEffect, useRef } from 'react';
import { storage, db } from '../firebase'; // Import the services from firebase.js
import { ref, listAll, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import '../styles/WeddingGallery.css';

const WeddingGallery = () => {
  const [imageUrl, setImageUrl] = useState([]);
  const [file, setFile] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Fetch images from Firebase Storage
    const fetchImages = async () => {
      const storageRef = ref(storage, 'images/');  // Adjust folder name if needed
      const imageUrls = [];

      try {
        const imageList = await listAll(storageRef);  // Get all files in 'images' folder
        for (let i = 0; i < imageList.items.length; i++) {
          const url = await getDownloadURL(imageList.items[i]);
          imageUrls.push(url);
        }
        setImageUrl(imageUrls);
      } catch (error) {
        console.error("Error fetching images from Firebase:", error);
      }
    };

    fetchImages();

    // Cleanup the camera stream when the component unmounts
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  const startCamera = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          videoRef.current.srcObject = stream;
          setIsCameraActive(true);
        })
        .catch(error => {
          console.error("Error accessing camera: ", error);
        });
    } else {
      alert("Camera not supported on this device.");
    }
  };

  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    const imageDataUrl = canvas.toDataURL('image/png'); // Capture the photo as a data URL
    setCapturedImage(imageDataUrl);

    // Stop the camera after capturing the photo
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());

    setIsCameraActive(false);
  };

  const handleUpload = async () => {
    if (!capturedImage) return;

    const byteString = atob(capturedImage.split(',')[1]);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uintArray = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      uintArray[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([uintArray], { type: 'image/png' });

    const storageRef = ref(storage, `images/${new Date().toISOString()}.png`); // Generate a unique file name
    const uploadTask = uploadBytesResumable(storageRef, blob);

    uploadTask.on('state_changed', 
      null, 
      (error) => { console.error("Upload error: ", error); },
      async () => {
        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref());
        saveImageMetadata('Captured Image', downloadUrl);

        // Update the image URL state
        setImageUrl(prevState => [...prevState, downloadUrl]);
      }
    );
  };

  const saveImageMetadata = (name, url) => {
    addDoc(collection(db, "images"), {
      name,
      url,
      timestamp: serverTimestamp(),
    })
      .then(() => {
        console.log("Image metadata saved!");
      })
      .catch((error) => {
        console.error("Error saving metadata:", error);
      });
  };

  return (
    <div className="wedding-gallery">
      <h1>This feature will be available on the day of the event. Stay tuned!</h1>

      <div className="gallery">
        {imageUrl.length > 0 ? (
          imageUrl.map((url, index) => (
            <img key={index} src={url} alt={`Wedding Photo ${index}`} style={{ width: '200px', margin: '10px' }} />
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>

      <div className="camera-section">
        {!isCameraActive ? (
          <button onClick={startCamera}>Start Camera</button>
        ) : (
          <>
            <video ref={videoRef} autoPlay width="320" height="240" />
            <button onClick={capturePhoto}>Capture Photo</button>
            <canvas ref={canvasRef} width="320" height="240" style={{ display: 'none' }} />
          </>
        )}
      </div>

      {capturedImage && (
        <div>
          <h3>Captured Image:</h3>
          <img src={capturedImage} alt="Captured" style={{ width: '200px', margin: '10px' }} />
          <button onClick={handleUpload}>Upload Photo</button>
        </div>
      )}
    </div>
  );
};

export default WeddingGallery;