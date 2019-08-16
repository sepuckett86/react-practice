import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Quotes from '../components/Quotes';
import { getQuotes } from '../services/futuramaApi';

export default class TopQuotes extends Component {
  static propTypes = {
    count: PropTypes.number
  }

  static defaultProps = {
    count: 5
  }

  state = {
    quotes: [],
  }
  
  componentDidMount() {
    getQuotes(this.props.count)
      .then(quotes => {
        this.setState({ quotes });
      });
  }

  render() {
    return (
      <>
        <Quotes quotes={this.state.quotes} />
      </>
    );
  }
}
