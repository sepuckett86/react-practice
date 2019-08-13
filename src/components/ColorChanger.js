import React from 'react';
import ColorChangerCSS from './ColorChanger.css';
import PropTypes from 'prop-types';

function ColorChanger({ color1 }) {
  return (
    <>
      <div className={ColorChangerCSS.test}></div>
      <div>{color1}</div>
    </>
  );
}

ColorChanger.propTypes = {
  color1: PropTypes.string.isRequired
};

export default ColorChanger;

