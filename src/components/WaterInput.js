import React from 'react';
import './WaterInput.css';
import PropTypes from 'prop-types';

function WaterInput({ handleWaterSubmit, handleInputChange, input }) {
  return (
    <form onSubmit={handleWaterSubmit}>
      <label>
          Water to Add in Ounces: {' '}
        <input onChange={handleInputChange} name="input" type="text" value={input}></input>
      </label>      <button>Submit</button>
    </form>
  );
}

WaterInput.propTypes = {
  handleWaterSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  input: PropTypes.number.isRequired
};

export default WaterInput;
