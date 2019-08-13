import React, { useState } from 'react';
import PropTypes from 'prop-types';

function HookTest({ color1, color2 }) {
  const [color, setColor] = useState(color1);

  const style = { color };

  return (
    <div>
      <p style={style}>Your color is {color}</p>
      <button onClick={() => color === color1 ? setColor(color2) : setColor(color1)}>
        Click me
      </button>
    </div>
  );
}

HookTest.propTypes = {
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired
};

export default HookTest;
