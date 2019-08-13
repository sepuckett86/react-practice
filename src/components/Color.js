import React from 'react';

export default function Color() {
  const color = {
    name: 'Purple',
    hex: '#7b42f5',
    rgb: {
      red: 123,
      green: 66,
      blue: 245
    }
  };

  // ems for font
  // rem for padding, margin, width, etc.

  // const details = Object.keys(color)
  //   .map(detail => {
  //     return (
  //     <>
  //       <dt>{detail}</dt>
  //       <dd>{color[detail]}</dd>
  //     </>
  //     );
  //   });

  const style = {
    backgroundColor: color.hex,
    height: '0.8rem',
    width: '0.8rem',
    display: 'inline-block'
  };

  return (
    <dl>
      <dt>Name:</dt>
      <dd>{color.name}{' '}
        <div style={style}></div>
      </dd>
      <dt>Hex:</dt>
      <dd>{color.hex}</dd>

      <dt>RGB:</dt>
      <dd>
        <p>Red: {color.rgb.red}</p>
        <p>Green: {color.rgb.green}</p>
        <p>Blue: {color.rgb.blue}</p>
      </dd>
    </dl>
  );
}

