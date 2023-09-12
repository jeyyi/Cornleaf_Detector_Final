import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TestGetImage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch the list of image filenames from the FastAPI server
    axios.get('http://127.0.0.1:8000/images/')
      .then((response) => {
        setImages(response.data.images);
      })
      .catch((error) => {
        console.error('Error fetching the images: ', error);
      });
  }, []);

  return (
    <div>
      <h1>Images</h1>
      <div className='flex gap-3'>
        {images.map((filename, index) => (
          <img 
            key={index} 
            src={`http://127.0.0.1:8000/images/${filename}`} 
            alt={filename} 
            width={200}
          />
        ))}
      </div>
    </div>
  );
}

export default TestGetImage;
