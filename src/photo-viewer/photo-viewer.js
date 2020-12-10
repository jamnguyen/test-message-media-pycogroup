import React from 'react';
import styles from './photo-viewer.module.scss';

const PhotoViewer = ({ img, onClose }) => {

  if (!img) {
    return null;
  }

  return (
    <div className={ styles.background }>
      <button onClick={ onClose } type="button">X</button>
      <div className={ styles.container }>
        <img alt={ img.title } src={ img.images.original.url } />
        <span className={ styles.info } >{ img.title }</span>
      </div>
    </div>
  );
};

export default PhotoViewer;