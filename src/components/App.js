import React, { Component } from 'react';
import Header from './Header';
import ColorPicker from './ColorPicker';
import ColorPickerDisplay from './ColorPickerDisplay';

export default class App extends Component {
  state = {
    color: 'white'
  }

  clickHandler = color => {
    this.setState({ color });
  }

  render() {
    const colors = ['red', 'blue', 'yellow'];

    return (
      <>
        <Header />
        <ColorPicker colors={colors} setColor={this.clickHandler} />
        <ColorPickerDisplay color={this.state.color} />
      </>
    );
  }
}

