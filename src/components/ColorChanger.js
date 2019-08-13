import React from 'react';
import ColorChangerCSS from './ColorChanger.css';
import PropTypes from 'prop-types';

function ColorChanger({ color1, color2 }) {
  return (
    <>
      <div className={ColorChangerCSS.test}>{color1}</div>
      <p></p>
      <div className={ColorChangerCSS.test}>{color2}</div>
    </>
  );
}

ColorChanger.propTypes = {
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired
};

export default ColorChanger;

