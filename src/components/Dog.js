import React from 'react';

export default function Dog() {
  const name = 'Rover';
  const age = 5;
  const weight = '30lbs';

  return (
    <>
      <h2>{name}</h2>
      <h2>Age: {age}</h2>
      <h2>Weight: {weight}</h2>
    </>
  );
}
