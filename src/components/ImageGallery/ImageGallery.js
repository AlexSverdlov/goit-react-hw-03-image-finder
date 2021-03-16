import React from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

class ImageGallery extends React.Component {
  handleClick = data => {
    this.props.onOpenModal(data);
  };

  render() {
    return (
      <ul className={styles.ImageGallery}>
        {this.props.images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            url={webformatURL}
            onClick={() => this.handleClick(largeImageURL)}
          />
        ))}
      </ul>
    );
  }
}
export default ImageGallery;
