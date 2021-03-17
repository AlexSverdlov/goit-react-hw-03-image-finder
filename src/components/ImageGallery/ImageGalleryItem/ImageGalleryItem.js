import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ url, lrgUrl, onClick }) => (
  <li className={styles.ImageGalleryItem}>
    <img
      src={url}
      alt=""
      className={styles.ImageGalleryItemimage}
      onClick={() => onClick(lrgUrl)}
    />
  </li>
);

export default ImageGalleryItem;
