import React from 'react';
import useGiphy from '../hooks/useGiphy';
import PhotoViewer from '../photo-viewer/photo-viewer';
import styles from './gallery.module.scss';
import PhotoItem from './photo-item/photo-item';

const Gallery = () => {

  const [ currentImg, setCurrentImg ] = React.useState();

  const {
    trendingImgs,
    isFetching,
    page,
    nextOffset,
    total,
    setPage
  } = useGiphy();

  React.useEffect(() => {
    console.log('trendingImgs', trendingImgs)
  }, [trendingImgs]);

  const onScroll = (e) => {
    const view = e.target;
    // Reach bottom of the gallery
    if(view.scrollTop + view.clientHeight >= view.scrollHeight) {
      if (!isFetching && nextOffset < total - 1) {
        console.log('setPage', nextOffset)
        setPage({ ...page, offset: nextOffset });
      }
    }
  }

  return (
    <>
      <div
        className={ styles.container }
        onScroll={ onScroll }
      >
        {
          trendingImgs.map((img, index) => (
            <PhotoItem
              key={ `photo-${index}` }
              user={ img.user?.display_name }
              src={ img.images.fixed_width.url }
              title={ img.title }
              onClick={ () => setCurrentImg(img) }
            />
          ))
        }
        {
          isFetching &&
            <div className={ styles.loader }>Loading...</div>
        }
      </div>
      <PhotoViewer img={ currentImg } onClose={ () => setCurrentImg(null) } />
    </>
  );
};

export default Gallery;