import React from 'react';
import styles from './photo-item.module.scss';

const PhotoItem = ({ title, src, user, onClick }) => {
  return (
    <div className={ styles.container }>
      <div className={ styles.wrapper } onClick={ onClick }>
        <img alt={ title } src={ src } />
      </div>
      {
        user &&
          <div className={ styles.user }>
            <span className={ styles.avatar }>
              <img alt={ `${user.username}'s avatar` } src={ user.avatar_url } />
            </span>
            { user.display_name }
          </div>
      }
    </div>
  );
};

export default PhotoItem;