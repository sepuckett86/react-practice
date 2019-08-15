import React from 'react';
import Colors from './Colors';

export default function App() {
  const colors = [{
    name: 'Red',
    hex: '#FF0000',
    rgb: {
      r: 255,
      g: 0,
      b: 0
    }
  }, {
    name: 'Blue',
    hex: '#0000FF',
    rgb: {
      r: 0,
      g: 0,
      b: 255
    }
  }, {
    name: 'Green',
    hex: '#008000',
    rgb: {
      r: 0,
      g: 128,
      b: 0
    }
  }];

  return <Colors colors={colors}/>;
}
