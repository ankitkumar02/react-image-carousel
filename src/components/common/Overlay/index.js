import React, { useEffect, useRef } from 'react';
import './Overlay.scss';

const Overlay = ({ children, closeOverlay }) => {
  const overlayElement = useRef();

  const handleEvent = e => {
    if (!e.target.className.includes('modal-image')) {
      closeOverlay();
      e.stopPropagation();
    }
  };

  useEffect(() => {
    const overlayRef = overlayElement.current;
    overlayRef.addEventListener('click', handleEvent);
    return () => {
      overlayRef.removeEventListener('click', handleEvent);
    };
  });

  return (
    <div ref={overlayElement} className="overlay">
      <div className="close-icon">X</div>
      <div className="overlay-main">{children}</div>
    </div>
  );
};

export default Overlay;
