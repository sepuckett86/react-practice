import React, { Component } from 'react';

export default class Incrementer extends Component {
  state = {
    count: 0
  }

  clickHandler = () => {
    this.setState(state => {
      return {
        count: state.count + 1
      };
    });
  }

  render() {
    return (
      <>
        <button onClick={this.clickHandler}>Click to Increment</button>
        <p>{this.state.count}</p>
      </>
    );
  }
}
