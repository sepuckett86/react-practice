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
  
  render() {
    const { name, hex, rgb } = this.props;

    const style = {
      backgroundColor: hex,
      height: '0.8rem',
      width: '0.8rem',
      display: 'inline-block'
    };

    return (
      <dl>
        <dt>Name:</dt>
        <dd>{name}
          <div style={style}></div>
        </dd>
        <dt>Hex:</dt>
        <dd>{hex}</dd>
  
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
