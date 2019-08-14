import React, { Component } from 'react';
import styles from './RandomColor.css';
import PropTypes from 'prop-types';

export default class RandomColor extends Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  }
  
  state = { color: 'red' }

  componentDidMount() {
    this.interval = setInterval(() => {
      const randomColor = this.props.colors[Math.floor(Math.random() * this.props.colors.length)];
      if(randomColor === this.state.color) {
        this.setState({ time: Date.now(), color: '', img: 'https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg' });
      } else {
        this.setState({ time: Date.now(), color: randomColor, img: '' });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if(this.state.img) {
      return (
        <img className={styles.shape} src={this.state.img} alt="meme"/>
      );
    } else {
      return (
        <div className={styles.shape + ' ' + styles[this.state.color]}></div>
      );
    }
  }
}
