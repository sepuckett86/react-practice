import React from 'react';
import PropTypes from 'prop-types';

function Photo({ url }) {
  return (
    <img src={url} alt="photo"></img>
  );
}

Photo.propTypes = {
  url: PropTypes.string.isRequired
};

export default Photo;
