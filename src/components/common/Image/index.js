import React, { useState, Fragment } from 'react';
import Overlay from '../Overlay';
import './Image.scss';

const Image = ({ imageSrc }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowDialog = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Fragment>
      <img
        className="original-image"
        src={imageSrc}
        onClick={handleShowDialog}
        alt="carousel"
      />
      {isModalOpen && (
        <Overlay closeOverlay={handleShowDialog}>
          <img className="modal-image" src={imageSrc} alt="carousel" />
        </Overlay>
      )}
    </Fragment>
  );
};

export default Image;
