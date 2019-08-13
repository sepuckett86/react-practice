import React from 'react';
import sloth from './sloth.png';

export default function Image() {
  const style = {
    height: '200px',
    padding: '10px'
  };

  return (
    <>
      <img src={sloth} style={style}></img>
    </>
  );
}
