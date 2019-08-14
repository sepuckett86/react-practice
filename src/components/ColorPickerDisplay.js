import React, { Component } from 'react';
import styles from './ColorPickerDisplay.css';
import PropTypes from 'prop-types';

export default class ColorPickerDisplay extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired
  }
  render() {
    const { color } = this.props;
    return (
      <div className={styles.shape + ' ' + styles[color]}>
      </div>
    );
  }
}
