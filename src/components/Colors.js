import React from 'react';
import PropTypes from 'prop-types';

function Colors({ colors }) {
  const colorList = colors.map(({ name, hex, rgb }) => {
    const styles = {
      backgroundColor: name,
      height: '1rem',
      width: '1rem',
      display: 'inline-block'
    };
    return (
      <li key={`${name}+${hex}+${rgb.r}+${rgb.g}+${rgb.b}`}>
        <p>Name: {name} <span style={styles}></span></p>
        <p>Hex: {hex}</p>
        <p>RGB: {rgb.r}, {rgb.g}, {rgb.b}</p>
      </li>
    );
  });

  return (
    <ul>
      {colorList}
    </ul>
  );
}

Colors.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    rgb: PropTypes.shape({
      r: PropTypes.number.isRequired,
      g: PropTypes.number.isRequired,
      b: PropTypes.number.isRequired
    })
  }))
};

export default Colors;
