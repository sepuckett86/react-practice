import React, { Component } from 'react';
import Header from './Header';
import RandomColor from './RandomColor';

export default class App extends Component {
  render() {
    const colors = ['red', 'blue', 'yellow'];

    return (
      <>
        <Header />
        <RandomColor colors={colors}/>
      </>
    );
  }
}

