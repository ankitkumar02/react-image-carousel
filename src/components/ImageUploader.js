import React from 'react';
import './ImageUploader.scss';

const ImageUploader = ({ handleFileSelect }) => {
  const handleChange = event => {
    handleFileSelect(event.target.files);
  };

  return (
    <div className="image-uploader">
      <label htmlFor="file-upload" className="custom-file-upload">
        Upload Images
      </label>
      <input id="file-upload" type="file" multiple onChange={handleChange} />
    </div>
  );
};

export default ImageUploader;
