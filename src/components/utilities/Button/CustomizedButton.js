import React from 'react';
import ButtonLoader from './ButtonLoader';
import button from './button.module.css';

export default ({ propsTitle, buttonStyle, load, propDisplay, ...props }) => {
  const loader = <ButtonLoader />;
  return (
    <button {...props} style={{ display: propDisplay }}>
      {propsTitle === null ? 'Button' : load ? loader : propsTitle}
    </button>
  );
};
