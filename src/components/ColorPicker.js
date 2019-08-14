import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';

export default class ColorPicker extends Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  state = {
    color: 'white'
  }

  colorHandler = color => {
    this.setState({ color });
  }

  render() {
    const { colors } = this.props;

    const colorElements = colors.map(color => {
      return (
        <button key={color} className={styles[color]} onClick={() => this.colorHandler(color)}>{color}</button>
      );
    });
    
    const divClasses = styles.shape + ' ' + styles[this.state.color];

    return (
      <>
        {colorElements}
        <div className={divClasses}></div>
      </>
    );
  }
} 
