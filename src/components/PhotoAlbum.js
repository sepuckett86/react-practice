import React from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';

function PhotoAlbum({ title, photos }) {
  return (
    <section>
      <h1>{title}</h1>
      <Photos photos={photos} />
    </section>
  );
}

PhotoAlbum.propTypes = {
  title: PropTypes.string.isRequired,
  photos: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default PhotoAlbum;
