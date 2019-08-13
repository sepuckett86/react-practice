import React from 'react';
import ColorChanger from './ColorChanger';
import HookTest from './HookTest';

function Playground({ ...props }) {
  return (
    <>
      <ColorChanger {...props} />
      <HookTest {...props}/>
    </>
  );
}

export default Playground;
