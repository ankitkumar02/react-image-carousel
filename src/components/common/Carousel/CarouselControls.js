import React from 'react';
import Dot from '../Dot';

const PreviousButton = ({ activeArrow, goToPreviousSlide }) => (
  <div
    className={`previous-button ${activeArrow === 'left' ? 'active' : ''}`}
    onClick={() => goToPreviousSlide()}
  >
    &#9664;
  </div>
);

const NextButton = ({ activeArrow, goToNextSlide }) => (
  <div
    className={`next-button ${activeArrow === 'right' ? 'active' : ''}`}
    onClick={() => goToNextSlide()}
  >
    &#9654;
  </div>
);

const CarouselIndicators = ({
  imageUrls,
  currentPosition,
  goToParticularSlide
}) => (
  <div className="dot-controls">
    {imageUrls.map((value, index) => {
      return (
        <Dot
          key={index}
          fillColor={index === currentPosition ? '#fff' : 'transparent'}
          handleDotClick={() => goToParticularSlide(index)}
        />
      );
    })}
  </div>
);

const CarouselControls = ({
  imageUrls,
  activeArrow,
  currentPosition,
  goToNextSlide,
  goToPreviousSlide,
  goToParticularSlide
}) => {
  return (
    <div className="navigation-controls">
      <PreviousButton
        activeArrow={activeArrow}
        goToPreviousSlide={goToPreviousSlide}
      />

      <NextButton activeArrow={activeArrow} goToNextSlide={goToNextSlide} />

      <CarouselIndicators
        imageUrls={imageUrls}
        currentPosition={currentPosition}
        goToParticularSlide={goToParticularSlide}
      />
    </div>
  );
};

export default CarouselControls;
