import React from 'react';
import PropTypes from 'prop-types';

function Controls({ handleChange, controls }) {
  return (
    <>
    <label>
      Title: <input name="title" type="text" onChange={handleChange} value={controls.title}></input>
    </label>
    <label>
      Subtitle: <input name="subtitle" type="text" onChange={handleChange} value={controls.subtitle}></input>
    </label>
    </>
  );
}

Controls.propTypes = {
  handleChange: PropTypes.func.isRequired,
  controls: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
  }).isRequired
};

export default Controls;
