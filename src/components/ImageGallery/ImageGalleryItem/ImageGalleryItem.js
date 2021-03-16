import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ url, onClick }) => (
  <li className={styles.ImageGalleryItem}>
    <img
      src={url}
      alt=""
      className={styles.ImageGalleryItemimage}
      onClick={onClick}
    />
  </li>
);

export default ImageGalleryItem;
