import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';

export default class ColorPicker extends Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    setColor: PropTypes.func.isRequired
  }
  
  render() {
    const { colors, setColor } = this.props;
    const colorList = colors.map(color => {
      return (
        <button onClick={() => setColor(color)} key={color} className={styles[color]}>{color}</button>
      );
    });
    return (
      <>
        {colorList}
      </>
    );
  }
}
