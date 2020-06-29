import React, { useState, useEffect } from 'react';
import './Carousel.scss';
import Image from '../Image';
import CarouselControls from './CarouselControls';

const ImageCarousel = ({ imageUrls }) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [activeArrow, setActiveArrow] = useState('');

  useEffect(() => {
    setCurrentPosition(0);
    const interval = setInterval(changeSlide, 3000);
    return () => clearInterval(interval);
  }, [imageUrls]);

  const changeSlide = () => {
    const lastIndex = imageUrls.length - 1;
    setCurrentPosition(currentPosition => {
      return currentPosition === lastIndex ? 0 : currentPosition + 1;
    });
  };

  const goToPreviousSlide = () => {
    setActiveArrow('left');
    const newPosition =
      currentPosition === 0 ? imageUrls.length - 1 : currentPosition - 1;
    setCurrentPosition(newPosition);
  };

  const goToNextSlide = () => {
    setActiveArrow('right');
    const newPosition =
      currentPosition === imageUrls.length - 1 ? 0 : currentPosition + 1;
    setCurrentPosition(newPosition);
  };

  const goToParticularSlide = position => {
    setCurrentPosition(position);
  };

  return (
    <div className="image-carousel">
      <header className="carousel-header"> Image Carousel Component</header>
      {imageUrls && imageUrls.length > 0 && (
        <div className="carousel-container">
          <Image imageSrc={imageUrls[currentPosition]} />
          <CarouselControls
            imageUrls={imageUrls}
            activeArrow={activeArrow}
            currentPosition={currentPosition}
            goToNextSlide={goToNextSlide}
            goToParticularSlide={goToParticularSlide}
            goToPreviousSlide={goToPreviousSlide}
          />
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
