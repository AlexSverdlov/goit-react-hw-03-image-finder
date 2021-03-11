import React from 'react';
import styles from './ImageGallery.module.css';

const ImageGalleryItem = ({ url }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img src={url} alt="" className={styles.ImageGalleryItemimage} />
    </li>
  );
};

export default ImageGalleryItem;
