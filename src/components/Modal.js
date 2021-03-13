import React from 'react';
import styles from './Modal.module.css';

export default class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose('');
    }
  };

  handlebackDropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose('');
    }
  };

  render() {
    return (
      <div className={styles.Overlay} onClick={this.handlebackDropClick}>
        <div className={styles.Modal}>
          <img src={this.props.largeImg} alt="" />
        </div>
      </div>
    );
  }
}
