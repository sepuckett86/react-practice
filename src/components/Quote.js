import React from 'react';
import PropTypes from 'prop-types';
import './Quote.css';

function Quote({ character, quote, image }) {
  return (
    <section>
      <img src={image} alt="character_image" />
      <p>{character}</p>
      <p>{quote}</p>
    </section>
  );
}

Quote.propTypes = {
  character: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Quote;
