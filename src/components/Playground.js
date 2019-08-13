import React from 'react';
import ColorChanger from './ColorChanger';
import HookTest from './HookTest';
import Image from './Image';

function Playground({ ...props }) {
  return (
    <>
      <ColorChanger {...props} />
      <HookTest {...props}/>
      <Image />
    </>
  );
}

export default Playground;
