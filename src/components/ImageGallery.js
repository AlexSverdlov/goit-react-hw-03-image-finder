import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import styles from './ImageGallery.module.css';

class ImageGallery extends React.Component {
  handleClick = e => {
    if (e.currentTarget !== e.target) {
      // Кликнули в картинку
      this.props.onOpenModal(e.target.dataset.largeurl);
    }
  };

  render() {
    return (
      <ul className={styles.ImageGallery} onClick={this.handleClick}>
        {this.props.images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            url={webformatURL}
            largeUrl={largeImageURL}
          />
        ))}
      </ul>
    );
  }
}
export default ImageGallery;
