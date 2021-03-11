import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ id, webformatURL }) => (
        <ImageGalleryItem key={id} url={webformatURL} />
      ))}
    </ul>
  );
};

export default ImageGallery;
