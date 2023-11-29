import React, { useState } from "react";
import "./ImageGallery.scss";

const ImageGallery = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className="gallery">
      <div>
        <img
          className="gallery-preview"
          src={images[selectedImage]}
          alt={`${title} - Image ${selectedImage + 1}`}
        />
      </div>

      <div className="thumbnail-container">
        {(Array.isArray(images) ? images : [images]).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} - Image ${index + 1}`}
            className={`thumbnail ${index === selectedImage ? "selected" : ""}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
