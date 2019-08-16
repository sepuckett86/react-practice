import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';
import './Quotes.css';

function Quotes({ quotes }) {
  const quotesList = quotes.map(quote => (
    <li key={quote.quote}>
      <Quote 
        quote={quote.quote}
        character={quote.character}
        image={quote.image} />
    </li>
  ));

  return (
    <ul>{quotesList}</ul>
  );
}

Quotes.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.object)
};

export default Quotes;
