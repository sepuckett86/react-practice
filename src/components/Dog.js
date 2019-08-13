import React from 'react';
import PropTypes from 'prop-types';

function Dog({ name, age, weight }) {
  return (
    <>
      <h2>{name}</h2>
      <h2>Age: {age}</h2>
      <h2>Weight: {weight}</h2>
    </>
  );
}

Dog.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  weight: PropTypes.string.isRequired
};

export default Dog;
