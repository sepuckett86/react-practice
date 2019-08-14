import React from 'react';
import Color from './Color';
import Header from './Header';
import ColorPicker from './ColorPicker';
import Incrementer from './Incrementer';

export default function App() {
  const color = {
    name: 'Purple',
    hex: '#7b42f5',
    rgb: {
      red: 123,
      green: 66,
      blue: 245
    }
  };

  return (
    <>
      <Header />
      <Color name={color.name} hex={color.hex} rgb={color.rgb} />
      <ColorPicker colors={['red', 'blue', 'yellow']}/>
      <Incrementer />
    </>
  );
}
