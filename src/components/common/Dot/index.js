import React from 'react';
import './Dot.scss';

const Dot = ({ fillColor, handleDotClick }) => {
  return (
    <svg
      className="dot-container"
      height="20"
      width="20"
      onClick={handleDotClick}
    >
      <circle
        cx="10"
        cy="10"
        r="6"
        stroke="#fff"
        fill={fillColor}
        strokeWidth={2}
      />
    </svg>
  );
};

export default Dot;
