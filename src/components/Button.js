import React, { Component } from 'react';
import styles from './ColorPicker.css';
import PropTypes from 'prop-types';

export default class ColorPicker extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired
  }
  clickHandler = () => {
    console.log(this.props.color);
  }
  render() {
    const color = this.props.color;
    return (
      <>
        <button onClick={this.clickHandler} className={styles[color]}>{color}</button>
      </>
    );
  }
} 
