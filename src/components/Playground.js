import React from 'react';
import ColorChanger from './ColorChanger';
import PropTypes from 'prop-types';
import HookTest from './HookTest';

function Playground({ ...props }) {
  return (
    <>
      <ColorChanger {...props} />
      <HookTest {...props}/>
    </>
  );
}

Playground.propTypes = {
  color: PropTypes.string.isRequired
};

export default Playground;
