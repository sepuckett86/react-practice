import React from 'react';
import './WaterDisplay.css';
import PropTypes from 'prop-types';

function WaterDisplay({ water }) {
  return (
    <>
      <p>Water Amount in Ounces: {water}/64</p>
      <p>
        <progress value={water} max="64"></progress>
      </p>
    </>
  );
}

WaterDisplay.propTypes = {
  water: PropTypes.number.isRequired
};

export default WaterDisplay;
