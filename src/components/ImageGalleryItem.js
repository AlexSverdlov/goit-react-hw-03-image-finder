import React from 'react';
import styles from './ImageGallery.module.css';

const ImageGalleryItem = ({ url, largeUrl }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={url}
        alt=""
        className={styles.ImageGalleryItemimage}
        data-largeurl={largeUrl}
      />
    </li>
  );
};

export default ImageGalleryItem;
