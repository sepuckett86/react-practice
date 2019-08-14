import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Color extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    rgb: PropTypes.shape({
      red: PropTypes.number.isRequired,
      green: PropTypes.number.isRequired,
      blue: PropTypes.number.isRequired
    }).isRequired
  }

  state = { hex: this.props.hex }

  // this.setState(() => {}) arrow function when state change depends on existing state
  // this.setState({}) object when state change does not depend on existing state
  changeHandler = event => {
    console.log(event.target.value);
    this.setState({ hex: event.target.value });
  }
  
  render() {
    const { name, hex, rgb } = this.props;

    const colorBoxStyle = {
      backgroundColor: hex,
      height: '0.8rem',
      width: '0.8rem',
      display: 'inline-block'
    };

    const pickerStyle = {
      display: 'block'
    };

    return (
      <dl>
        <dt>Pick a Color:</dt>
        <dd><input onChange={this.changeHandler} style={pickerStyle} type="color"></input></dd>
        <dt>Name:</dt>
        <dd>{name}
          <div style={colorBoxStyle}></div>
        </dd>
        <dt>Hex:</dt>
        <dd>{this.state.hex}</dd>
  
        <dt>RGB:</dt>
        <dd>
          <p>Red: {rgb.red}</p>
          <p>Green: {rgb.green}</p>
          <p>Blue: {rgb.blue}</p>
        </dd>
      </dl>
    );
  }
}
