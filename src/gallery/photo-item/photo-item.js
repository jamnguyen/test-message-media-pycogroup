import React from 'react';
import styles from './photo-item.module.scss';

const PhotoItem = ({ title, src, user, onClick }) => {
  return (
    <div className={ styles.container } onClick={ onClick }>
      <img alt={ title } src={ src } />
      {
        user &&
          <span className={ styles.user }>{ user }</span>
      }
    </div>
  );
};

export default PhotoItem;