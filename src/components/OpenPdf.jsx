import React, { useState, useEffect } from 'react';

// Import images directly
import page0 from '../images/page0.jpg';
import page1 from '../images/page1.jpg';
import page2 from '../images/page2.jpg';
import page3 from '../images/page3.jpg';
import page4 from '../images/page4.jpg';
import page5 from '../images/page5.jpg';
import page6 from '../images/page6.jpg';
import page7 from '../images/page7.jpg';
import page8 from '../images/page8.jpg';
import page9 from '../images/page9.jpg';
import page10 from '../images/page10.jpg';
import page11 from '../images/page11.jpg';
import page12 from '../images/page12.jpg';
import page13 from '../images/page13.jpg';
import page14 from '../images/page14.jpg';
import page15 from '../images/page15.jpg';
import page16 from '../images/page16.jpg';
import page17 from '../images/page17.jpg';
import page18 from '../images/page18.jpg';
import page19 from '../images/page19.jpg';
import page20 from '../images/page20.jpg';
import page21 from '../images/page21.jpg';
import page22 from '../images/page22.jpg';
import splash from '../images/splashscreen.jpg';

// Array of image imports
const imageUrls = [
  splash,
  page0,
  page1,
  page2,
  page3,
  page4,
  page5,
  page6,
  page7,
  page8,
  page9,
  page10,
  page11,
  page12,
  page13,
  page14,
  page15,
  page16,
  page17,
  page18,
  page19,
  page20,
  page21,
  page22
];

const OpenPdf = () => {
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    // Create a promise for each image
    const imagePromises = imageUrls.map((url) => 
      new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(url);
        img.onerror = () => resolve(null); // Resolve even on error to avoid blocking
      })
    );

    // Wait for all images to load
    Promise.all(imagePromises).then((results) => {
      setLoadedImages(results.filter(result => result !== null));
      setLoading(false);
    });
  }, []);

  return (
    <div style={{ width: '90%', height: '100vh', overflowY: 'scroll', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Noor E Quran</h1> <br />
      
      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading Content...</p>
      ) : (
        loadedImages.length > 0 ? (
          loadedImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`page-${index}`}
              style={{
                display: 'block',
                margin: '0 auto',
                width: '80%',
                height: 'auto',
                marginBottom: '10px',
                border: '6px double green', // Double border of green color
                borderRadius: '10px' // Optional: Rounded corners
              }}
            />
          ))
        ) : (
          <p style={{ textAlign: 'center' }}>No images found.</p>
        )
      )}
    </div>
  );
};

export default OpenPdf;
