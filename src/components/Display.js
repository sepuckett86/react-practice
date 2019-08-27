import React from 'react';
import PropTypes from 'prop-types';

function Display({ controls }) {
  return (
    <>
    <p>{controls.title}</p>
    <p>{controls.subtitle}</p>
    </>
  );
}

Display.propTypes = {
  controls: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
  }).isRequired
};

export default Display;
