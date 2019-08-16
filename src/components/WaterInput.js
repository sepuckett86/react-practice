import React from 'react';
import './WaterInput.css';
import PropTypes from 'prop-types';

function WaterInput({ updateWater, updateInput, input }) {
  return (
    <form onSubmit={updateWater}>
      <label>
          Water to Add in Ounces: {' '}
        <input onChange={updateInput} name="input" type="text" value={input}></input>
      </label>      <button>Submit</button>
    </form>
  );
}

WaterInput.propTypes = {
  updateWater: PropTypes.func.isRequired,
  updateInput: PropTypes.func.isRequired,
  input: PropTypes.number.isRequired
};

export default WaterInput;
