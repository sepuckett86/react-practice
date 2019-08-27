import React from 'react';
import PropTypes from 'prop-types';

function VideoForm({ id, handleChange, handleSubmit }) {
  return (
    <form onSubmit={event => handleSubmit(event, id)}>
      <input type="text" value={id} onChange={handleChange}></input>
      <button>Add</button>
    </form>
  );
}

VideoForm.propTypes = {
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default VideoForm;
