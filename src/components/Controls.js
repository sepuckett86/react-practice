import React from 'react';
import PropTypes from 'prop-types';

function Controls({ handleChange }) {
  return (
    <>
    <label>
      Title: <input name="title" type="text" onChange={handleChange}></input>
    </label>
    <label>
      Subtitle: <input name="subtitle" type="text" onChange={handleChange}></input>
    </label>
    </>
  );
}

Controls.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default Controls;
