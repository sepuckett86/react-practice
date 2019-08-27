import React from 'react';
import PropTypes from 'prop-types';
import VideoImage from './VideoImage';

function VideoImages({ imageUrls }) {
  const imageElements = imageUrls.map(url => (
    <li key={url}>
      <VideoImage url={url} />
    </li>
  ));
  return (
    <ul>
      {imageElements}
    </ul>
  );
}

VideoImages.propTypes = {
  imageUrls: PropTypes.array.isRequired
};

export default VideoImages;
