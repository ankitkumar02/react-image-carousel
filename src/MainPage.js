import React, { Component } from 'react';
import ImageUploader from './components/ImageUploader';
import ImageCarousel from './components/common/Carousel';
import { sampleImages } from './sampleImages';
import './index.scss';

class MainPage extends Component {
  state = {
    imageUrls: [...sampleImages]
  };

  onFilesSelect = imgUrls => {
    const imgUrlsList = Array.from(imgUrls).map(imgUrl =>
      URL.createObjectURL(imgUrl)
    );
    this.setState({
      imageUrls: [...imgUrlsList]
    });
  };

  render() {
    return (
      <div className="main-page">
        <ImageCarousel imageUrls={this.state.imageUrls} />
        <ImageUploader handleFileSelect={this.onFilesSelect} />
      </div>
    );
  }
}

export default MainPage;
